db = require('./db');

var result = `
doSomething
|-----------------|
                  doSomethingElse(resultOfDoSomething)
                  |------------------|
                                     finalHandler(resultOfDoSomethingElse)
                                     |------------------|
`;
console.log(result);

db.doSomething()
.then(function (resultOFDoSomething) {
  return db.doSomethingElse(resultOFDoSomething);
})
.then(function (resultOfdoSomethingElse) {
  return db.finalHandler(resultOfdoSomethingElse);
})
