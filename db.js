module.exports = {
  
  doSomething: () => {
    console.log('doSomething(): START!');
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        console.log('doSomething(): END');
        return resolve(10);
      }, 1000);
    });
  },

  doSomethingElse: (data) => {
    console.log('doSomethingElse(): START received: ', data || 'undefined');
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        console.log('doSomethingElse:() END');
        return resolve(data + 20);
      }, 1000);
    });
  },

  finalHandler: (data) => {
    console.log('finalHandler(): START    received: ', data);
    return new Promise(function (resolve) {
      setTimeout(function () {
        console.log('finalHandler(): END');
        resolve();
      }, 1000);
    });
  }

}
