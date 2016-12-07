// this returns foo, not bar!
Promise.resolve('foo').then(Promise.resolve('bar')).then(function (result) {
  console.log(result);
});

// same as above. not passing a function to then results in the promise falling through
Promise.resolve('foo').then(null).then(function (result) {
  console.log(result);
});

// Always pass a function into then()! returns bar in this case
Promise.resolve('foo').then(function () { return Promise.resolve('bar')}).then(function (result) {
  console.log(result);
});

// named function example
waitwaitwait = function () { 
  return Promise.resolve('bar');
}
Promise.resolve('foo').then(waitwaitwait).then(function (result) {
  console.log(result);
});
