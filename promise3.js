db = require('./db');

var result = `
doSomething
|-----------------|
doSomethingElse(undefined)
|---------------------------------|
                  finalHandler(resultOfDoSomething)
                  |------------------|
`;
console.log(result);

db.doSomething()
.then(db.doSomethingElse())
.then(db.finalHandler);
