const fetchData = (callback)=>{
    callback('function executed');
}

// const fetchData = (callback)=>{
//     setTimeout(()=>{
//         console.log("Time check");
//         callback('function executed with settime');
//     },2000)
// }

setTimeout(()=>{
    fetchData((result)=>{
        console.log(result);
    })
},4500); //->4nd half seconds 

console.log("Hi");