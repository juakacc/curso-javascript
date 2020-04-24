// var observable = Rx.Observable.create(observer => {
//   var i = 0;
//   var interval = setInterval(() => {
//     i++;
//     observer.next(parseInt(Math.random() * 10));
//     if (i > 5) {
//       clearInterval(interval);
//       observer.complete();
//     }
//   }, 1000);
//   // observer.error("error code 131");
//   // observer.complete();
// });
// Valores a partir de um array
// var observable = new Rx.Observable.range(1, 10);
// var observable = new Rx.Observable.from([1, 2, 3, 4, 5, 6]);

// observable.subscribe(
//   value => console.log("My value is " + value),
//   err => console.log(`Error message ${err}`),
//   () => console.log("Completed")
// );

// observable.subscribe(val => {
//   console.log(val);
// });
// var subject = new Rx.Subject();

// var subSource = observable.subscribe(subject);

// observable.subscribe(
//   value => console.log("1 - My value is " + value),
//   err => console.log(`1 - Error message ${err}`),
//   () => console.log("1 - Completed")
// );

// observable.subscribe(
//   value => console.log("2 - My value is " + value),
//   err => console.log(`2 - Error message ${err}`),
//   () => console.log("2 - Completed")
// );
// subject.next(5);
// subject.next(10);
// subject.next(15);
// subject.complete();

// var source = Rx.Observable.interval(1000);
// Cold Observables
// source.subscribe(value => console.log(`1 - My value is ${value}`));
// source.subscribe(value => console.log(`2 - My value is ${value}`));

// Hot observables
// var hot = source.publish();

// hot.subscribe(value => console.log(`2 - My value is ${value}`));
// hot.connect();

var input = document.querySelector("#myinput");
var div = document.querySelector("#mydiv");
var inputs = Rx.Observable.fromEvent(input, "keyup");

inputs.subscribe(event => {
  div.innerHTML = event.target.value;
});
