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
.then(db.doSomethingElse)
.then(db.finalHandler);
