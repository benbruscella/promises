db = require('./db');

var result = `
doSomething
|-----------------|
                  doSomethingElse(undefined)
                  |------------------|
                                     finalHandler(resultOfDoSomethingElse)
                                     |------------------|
`;
console.log(result);

db.doSomething()
.then(function () {
  return db.doSomethingElse();
})
.then(db.finalHandler);


