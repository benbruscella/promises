db = require('./db');

var result = `
doSomething
|-----------------|
                  doSomethingElse(undefined)
                  |------------------|
                  finalHandler(undefined)
                  |------------------|
`;
console.log(result);

db.doSomething()
.then(function () {
  db.doSomethingElse();
})
.then(db.finalHandler);



