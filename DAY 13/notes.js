// console.log("first");
// for(let i = 0;i<=100000;i++){
//     console.log("second",i);
// }
// console.log("third");

// -----------------------------------------------------------------------


// console.log("starting");
// setTimeout(()=>{
//     // for(let i = 0;i<=1000;i++){
//      console.log("first");
// }
// ,1000)
// setTimeout(()=>{
//     // for(let i = 0;i<=1000;i++){
//      console.log("second");
// }
// ,2000)  
// setTimeout(()=>{
//     // for(let i = 0;i<=1000;i++){
//      console.log("third");
// }
// ,500)
// console.log("ending");

// -----------------------------------------------------------------------


// console.log("submitting the form......");
// setTimeout(()=>{
//     console.log("form submitted successfullt!");
//     console.log("rdirecting to the dashboard");
// },1500)


// console.log("please wait...");

// -----------------------------------------------------------------------


// function greeting(name,callback){
//     console.log("Hello, "+name);
//     callback();
// }
// function bye(){
//     console.log("good bye");
// }
// greeting("suleman",bye)
// -----------------------------------------------------------------------
// function studentDetails(id,callback){
//     console.log("first");



//     setTimeout(()=>{
//         console.log("second");
//         callback(); 
//     },2000)
// }
//     function name(){
//         console.log("third");
//     }
//     console.log("fourth");
//     studentDetails( 3000,name)
// -----------------------------------------------------------------------

// function colorChange(color,delay,callback ){

// setTimeout(()=>{
//      document.querySelector("h1").style.backgroundColor = color; 
//      callback();
// },delay)

// }
// colorChange('red', 1000,()=>{

//     colorChange('yellow', 1000,()=>{
//         colorChange('green', 1000,()=>{
//             colorChange('aqua',1000,()=>{
//                 colorChange('blue',1000,()=>{
//                     colorChange('pink',1000,()=>{
//                         colorChange('purple',1000)
//                     })
//                 })
//             })
//         })
//     })
// })
// -----------------------------------------------------------------------



// console.log("virify it's you");
// document.querySelector("button").addEventListener("click",setTimeout(()=>{
//         console.log("OPT is sent,enter below ");
//         callback();
//     },delay)
//     setTimeout(1000,()=>{
//         console.log("abc");
        // document.querySelector("input").style.display = 'block'
    // })
// })


     



// -----------------------------------------------------------------------



// document.querySelector("button").addEventListener("click",function registration(delay, callback){

    

   
//     setTimeout(() => {
//         console.log("sent an OTP");
//         callback();
//     }, delay)
// }


// registration(1000, () => {
//     console.log("Enter OTP : ");
//     document.querySelector("input").style.display = "block"
// });

// );

// let myPromise = new Promise((resolve,reject)=>{
//         let score = true;
//         if(score){
//             resolve("Pass");
//         }else{
//             reject("Fail");
//         }
// });

// myPromise
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })



// -----------------------------------------------------------------------
 
   

// function colorChange(color) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.querySelector("h1").style.backgroundColor = color;
//             resolve(`Changed to ${color}`);
//         }, 1000);
//     });
// }

// colorChange("red").then((old) => {
//     console.log(old);
// });


// -----------------------------------------------------------------------



// function whatsApp(msg){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let random = Math.random() > 0.5;
//             if(random){
//                 resolve(`  ${msg} is sending...`);
//             }
//             else{
//                 reject(`something went wrong`)
//             }
//             // document.querySelector("h1").style.backgroundColor = color;
//         },1000)
         

//     }) 
// }
// whatsApp("msg1").then((old)=>{
//     console.log(old);
//     return whatsApp("msg2");
// })
// .then((old)=>{
//    console.log(old);
//    return whatsApp("msg3")
// })
//     .then((old)=>{
// console.log(old);        
// return whatsApp("msg4")
//     })
//     .then((old)=>{
// console.log(old);        
//  console.log("done"); 
//     })

//     .catch((err)=>{
//         console.log(err);
//     })
   
 // -----------------------------------------------------------------------



//  function whatsApp(msg){
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
// let random = Math.random() > 0.1;
// if(random ){
//     resolve(`${msg} is sending...`)
// }
// else{
//     reject(`something went wrong with ${msg}`)
// }
            
//         },1000) 
//     })
//  }


// async function lite(){
//     try{
//         let result1 = await whatsApp("msg1")
//         console.log(result1);
//         let result2 = await whatsApp("msg2")
//         console.log(result2);
//         let result3 = await whatsApp("msg3")
//         console.log(result3);
//         let result4 = await whatsApp("msg4")
//         console.log(result4);
//         let result5 = await whatsApp("msg5")
//         console.log(result5);
//         console.log("done");
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// lite();

 


 // -----------------------------------------------------------------------
// function tossCoin() {
//     return new Promise((resolve, reject) => {
//         Math.random() > 0.5
//             ? resolve("Heads")
//             : reject("Tails");
//     });
// }
// async function results(){

//     try{
//         let result1 = await tossCoin();
//         console.log(result1); 
//     }
//     catch(err){
//         console.log(err);
        
//     }
// }

// results()

 

function foodDelivery(number){
    
    if(number > 0 ){
        console.log("order is confirmed");
    }
    else{
        console.log("your order is out of stock");
    }
}
 
setTimeout(()=>{
    return new Promise((resolve,reject)=>{
    
       resolve(`Prepering your order`);
    },1000)
})

foodDelivery(2).then(old,(()=>{
    console.log("your order is preparing");
}))

































// async function time() {
// try{
//     let result1 = await foodDelivery(2)
//     console.log(result1);
// }
// catch(error){
// console.log(error);
// }
// } 

// time()