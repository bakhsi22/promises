const getSome = id => new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve(`here is something ${id}`);
    },2000)
});

getSome(123)
.then(res => {
    
    document.getElementById("demo").innerHTML = res;
    console.log(res);
});

//this