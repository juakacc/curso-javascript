var p = new Promise((resove, reject) => {
  setTimeout(() => {
    resove(500);
  }, 1000);
});

var source = Rx.Observable.fromPromise(p);

source.subscribe(value => {
  console.log(value);
});

function* myCounter() {
  var i = 0;

  while (true) {
    yield i++;
  }
}

function* myGenerator() {
  yield* [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];
}

Rx.Observable.from(myGenerator()).subscribe(value => console.log(value));

// p.then(value => console.log(value)).catch(err => console.log(err));
