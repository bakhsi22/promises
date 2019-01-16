
function loadDoc() {
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
    //     document.getElementById("demo").innerHTML = this.responseText;
    //   }
    // };
    // xhttp.open("POST", "https://randomuser.me/api/", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    window.open("https://randomuser.me/api/");
  }




let cleanCode = function(){
    return new Promise(function(resolve,reject){
        resolve('\n cleaning the code');
    });
};
let uploadToGitHub = function(message){
    return new Promise(function(resolve,reject){
        resolve(message+'\n uploaded code to github');
    });
};
let canGo = function(message){
    return new Promise(function(resolve,reject){
        resolve(message+' \n Now , you can go early');
    });
};
cleanCode().then(function(result){
    {
        console.log( result);}
    return uploadToGitHub(result);
}).then(function(result){
    {
        console.log(result);}
    return canGo(result);
}).then(function(result){
    {
    console.log('finished' + result);}
})

  


// Promise.all([cleanCode(),uploadToGitHub(),canGo()]).then(function(){
//     console.log('all finished')
// });

// Promise.race([cleanCode(),uploadToGitHub(),canGo()]).then(function(){
//     console.log('one of them is finished')
// });