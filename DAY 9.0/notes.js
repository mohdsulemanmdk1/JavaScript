// ----------------------------------------------------------------------
// problem 1 : Print all numbers


// let numbers = [10, 20, 30, 40];
// let total = 0;
// numbers.forEach((num)=>{
//     total += num  ;
// })
// console.log(total);





// ----------------------------------------------------------------------
// problem 2 : Add price symbol
// let prices = [20,30,40,100]
// prices.forEach((price)=>{
// console.log(`the price is $${price}`);
// })



// ----------------------------------------------------------------------
// problem 3 : Print with index
// let numbers = [10, 20, 30, 40];
// numbers.forEach((number,index)=>{

//         console.log(`${number } of index number ${index + 1}`);
//     }
// )




// ----------------------------------------------------------------------
// problem 4 :Calculate total in forEach
// let numbers = [10, 20, 30, 40];
// let temp = 0;
// numbers.forEach((num)=>{
//     temp += num;
// })
// console.log(temp);





// ----------------------------------------------------------------------
// // problem 5 : Modify external array


// let names = ["alice", "bob", "charlie"];
// let capital = []
// names.forEach((name)=>{
//     capital.push(name.toUpperCase());
// })
// console.log(capital);




// ----------------------------------------------------------------------
// // problem 6 : Double all numbers

//  let nums = [1, 2, 3, 4];
//  let result = nums.map((num)=>{
//    return num*2;

// })
// console.log(result);




// ----------------------------------------------------------------------
// // problem 7:Convert to uppercase


// let names = ["alice", "bob", "charlie"];
// let result = names.map((name)=>{
//     return name.toLocaleUpperCase();
// }) 
// console.log(result);



// ----------------------------------------------------------------------
// // problem 8: Extract properties from objects
// let names = [
// { name: "John", age: 20 },
// { name: "Sarah", age: 22 },
// { name: "Mike", age: 21 }]
// let result = names.map((x) => {
//     return x.age;
// })
// console.log(result);




// ----------------------------------------------------------------------
// // problem 9: Add sales tax


// let prices = [20,30,40,50,60]
// let tenPercent = 1.1;
// let twentyPercent = 1.2;

// let result = prices.map((price)=>{
//     return price*tenPercent;

// })
// console.log(result );






// ----------------------------------------------------------------------
// // problem 10 :Create HTML elements


// let items = ["Home", "About", "Contact"];
// let result = items.map((item)=>{
//     return `<li>${item} </li`

// })
// console.log(result);




// ----------------------------------------------------------------------
// // problem 11 : Get even numbers



// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = numbers.filter((number)=>
// {
//     return number %2===0;
// }) 
// console.log(result);



// ----------------------------------------------------------------------
// // problem 12 : Get passing grades



// let grades = [45, 78, 89, 34, 92, 56];
// let passed = grades.filter((grade)=>
// {
//     return grade>= 70
// })
// console.log(passed);



// ----------------------------------------------------------------------
// // problem 13 :Filter by string length



// let words = ["hi", "hello", "bye", "goodbye"];
// let result = words.filter((word)=>{
//     return word.length>=4;
// })
// console.log(result);






// ----------------------------------------------------------------------
// // problem 14 : 


// let numbers = [1, 2, 3, 4, 5,6];
// let sum = numbers.reduce((total,number)=>{
//     return total + number
// })
// console.log(sum);



// ----------------------------------------------------------------------
// problem 15 : Find maximum value


// let numbers = [45, 78, 12, 89, 34];
//  let max = numbers.reduce((maximum, num) => {
// return num > maximum ? num : maximum;
// } );
// console.log(max);




// ----------------------------------------------------------------------
// // problem 16 :Count occurrences
// let fruits = ["apple", "banana", "apple", "mango", "apple"];
// let count = fruits.reduce((counter,fruit)=>{
//     counter[fruit] = (counter[fruit] || 0)+1;
//     return counter;
// },{})
// console.log(count);



// ----------------------------------------------------------------------
// // problem 17 :Calculate total price




// let cart = [
// { item: "Shirt", price: 500 },
// { item: "Shoes", price: 1200 },
// { item: "Hat", price: 300 }
// ];
// let total = 0;
// let sum = cart.reduce((accumulator,num)=>{
//     return total +=num.price;
// })
// console.log(sum);


// ----------------------------------------------------------------------
// // problem 18 : Flatten nested arrays


// let nested = [[1, 2], [3, 4], [5, 6]];
// let flat = nested.reduce((acc,elem)=>{
//    return acc.concat(elem)
// },[])
// console.log(flat);





// ----------------------------------------------------------------------
// // problem 19 : 
// function greet(name = "Guest") {
// console.log(`Hello, ${name}!`);
// }
// greet("Alice");  
// greet();  


// ----------------------------------------------------------------------
// // problem 20 :Copy an array

// let original = [1, 2, 3];
// let copy = [...original]
// copy.push(4)
// console.log(copy);
 

// ----------------------------------------------------------------------
// // // problem 21 :Merge arrays
// let a = ["a","b"]
// let A = ["A","B"]
// let c = [...a,...A]
// console.log(c);


// ----------------------------------------------------------------------
// // // problem 22 :Add elements while copying


// let numbers = [2, 3, 4];
// let x = [1,...numbers,5]
// console.log(x);



// ----------------------------------------------------------------------
// // // problem 23 :Copy and update object


// let user = {
// name: "Tony Stark",
// email: "tony@stark.com"
// };
// let USER = {
//     ...user,
//     address : "hyderabad"
    
// }
// console.log(USER);



// ----------------------------------------------------------------------
// // // problem 24 : Convert string to array

// let str = "hello"
// let arr = [...str]
// console.log(arr);


// function sum(...numbers) {
//     return numbers.reduce((total ,num)=>{
// total + num ;
//     } );
// }
// console.log(sum(1,2,3));

// ----------------------------------------------------------------------

//  let announcement = (first, ...other)=>{
//   console.log(`the first ${first}`);  
// //   console.log(`the second ${second}`);  
//         console.log( `the others  ${other  }`);
//  }
//  announcement("suleman","shawaiz","sallu") 

// ----------------------------------------------------------------------

//  let team = (captain,viceCaptain,...players)=>{
//     return {
//         captain,viceCaptain, players 
//     } ;
//  }
//  let match = team("dhoni","virat","rohit","bhumra","sachhin")
//  console.log(match);


// ----------------------------------------------------------------------

//  let mul = (...numbers )=>{
//     return   ;
//  }

//  console.log(max(1,2,3,4,5,6,7,8,9,10));

// ----------------------------------------------------------------------

// let mul = (first,...others)=>{
//    return others.map((num) => first*num);
// }
// console.log(mul(3,1,2,3,4,5,6,7,8,9,10));
    

// ----------------------------------------------------------------------

// let arr1 = [1,2,3]
// console.log(...arr1);

// ----------------------------------------------------------------------

// let total = 0;
// let rest = (...numbers)=>{
//     return numbers.reduce((total,num) => total+=num )

// }
// console.log(rest(1,2,3,4,5,));


// ----------------------------------------------------------------------

// let arr1 = [1,2,3];
// let [first,second,third] = arr1;
// console.log(first);
// console.log(second);
// console.log(third);
 
//  let details = {
//     name : "suleman",
//     age: 19 ,
//     course :{
//        main :  "CSE" ,
//        local : "aiml"
        
//     } 

//  }

//  let {name,age : umar ,course:{main,local}, language = "english"} = details;

//  console.log(name);
//  console.log(umar);
//  console.log(language);



// ----------------------------------------------------------------------


// let datails = (name,age,country)=>{
// console.log(` ${name}of age ${age} from ${country} `);

// }
// datails("suleman",19,"india");


 