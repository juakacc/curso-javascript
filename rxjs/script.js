var input = document.querySelector('#myinput');
var div = document.querySelector('#mydiv');
var apiUrl = 'https://api.github.com/search/repositories?';

var inputs = Rx.Observable.fromEvent(input, 'keyup');
var projects = new Rx.BehaviorSubject([]);

inputs
    .debounce(() => Rx.Observable.interval(500))
    .map(event => event.target.value)
    .filter(text => text.length > 2)
    .subscribe(searchProject);

function searchProject(projectName) {
    Rx.Observable.fromPromise(fetch(`${apiUrl}q=${projectName}`))
        .subscribe(response => {
            response
                .json()
                .then(result => result.items)
                .then(itemList => { projects.next(itemList)})
        })
}

projects.subscribe(projectsList => {
    var template = '';
    projectsList.forEach(project => {
        template += `
            <li class="project-list-item">
                <img class="project-owner-avatar" src="${project.owner.avatar_url}" />
                <div class="project-info">
                    <b>${project.owner.login}</b>
                    /${project.name}
                </div>
                <div class="project-info">
                    Forks: ${project.forks}
                </div>
            </li>
        `;
    })
    div.innerHTML = `<ul class="project-list">${template}</ul>`;
})