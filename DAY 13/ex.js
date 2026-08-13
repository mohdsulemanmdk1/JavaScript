// setTimeout(()=>{
//      document.querySelector("h1").style.backgroundColor = "red";
// },2000)
// setTimeout(()=>{
//      document.querySelector("h1").style.backgroundColor = "orange";
// },2000)

// function studentsDetail(studentID,callback) {

//     setTimeout(()=>{
//         console.log(`sshashahs${studentID}`);
//          callback();
//     })
// }


// studentsDetail(110,()=>{
//      document.querySelector("h1").style.color = "blue"
// })



// let h1 = document.querySelector("h1").style.color = "red"
//  setTimeout((color,callback) => {
//     document.querySelector("h1").style.color = `${color}`;
//     callback();
//  }, 1000);
 


// setTimeout("red",()=>{
//     document.querySelector("h1").style.color = "aqua";
// })

// function name( callback){

//     setTimeout(()=>{
//         console.log( `before  `);
//         callback()
//     }, 4000)
// }
    
//     name( ()=>{
//         console.log("after");
//     })
  

function whatsapp(obj,delay,callback){
    
    let random = Math.random()
    setTimeout(()=>{
       
    if(Math.random()>0.5){ 
         console.log(`${obj} is sendind...`);}
         else{
             
            callback();
         }
     
},delay)}
    function func(){
    console.log("something went wrong");
}
whatsapp("msg1",1000,func )
whatsapp("msg2",1000 ,func)
whatsapp("msg3",1000,func )
whatsapp("msg4",1000,func )

    // console.log("all mssgs sent ");
 