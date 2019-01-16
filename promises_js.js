let promiseToCleanCode = new Promise(function(resolve , reject){

    // cleaning the promiseToCleanCode
    let isClean = true;
    if(isClean){
        resolve('clean');
    }
    else{
        reject('not Clean');
    }
});

promiseToCleanCode.then(function(fromResolve){
    console.log('the code is ' + fromResolve);
}).catch(function(fromReject){
    console.log('the code is ' + fromReject)
});