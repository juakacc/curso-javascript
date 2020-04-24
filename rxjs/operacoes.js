// var items = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];

// var source = Rx.Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// source.take(6).subscribe(x => console.log(x));

var people = [
  {name: "Rick", age: 10},
  {name: "Rose", age: 25},
  {name: "Cassandra", age: 13},
  {name: "Henry", age: 22},
];

var source = Rx.Observable.from(people);
var subscription = source.pluck("name").subscribe(x => console.log(x));
// source.filter(x => x % 2 === 0).subscribe(x => console.log(x));

// source
//   .map(item => ({value: item.a}))
//   .subscribe(value => {
//     console.log(value);
//   });
