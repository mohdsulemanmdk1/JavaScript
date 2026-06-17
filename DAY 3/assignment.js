// ------------------------------------------------------------------------
// Problem 1: Number Sign
// Write a program to check if a number is positive, negative, or zero.







// let num = prompt("enter an integer");
// if(num==0){
//     console.log("zero")
// }
// else if(num>0){
//     console.log("positive number")
// }
// else{
//     console.log("negative")
// }



// ------------------------------------------------------------------------
// Problem 2: Eligible for License
// Check if a person is eligible for a driver's license (age should be 18 or above).




// let num = prompt("enter age");
// if(num >= 18 ){

//          console.log("eligible")
// }

//  else{
//      console.log("not eligible")}




// ------------------------------------------------------------------------
// Problem 3: Grade Calculator
// Assign grades based on marks:
// 90 and above: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F



// let marks = prompt("Enter Marks :")
// if(marks>=90 && marks <=100){
//     console.log("A")
// }
// else if(marks >= 80 && marks <=89){
//     console.log("B")
// }
// else if(marks >= 70 && marks <=79){
//     console.log("C")
// }
// else if(marks >= 60 && marks <=69){
//     console.log("D")
// }
// else{
//     console.log("fail")
// }








// ------------------------------------------------------------------------
// Problem 4: Login System
// Check if username is "admin" AND password is "12345". If both are correct, print "Login successful",
// otherwise "Login failed".

// let userName = "abc"
// let password = "12345"
// let a = prompt("enter username: ")
// let b = prompt("enter password:")

// if(a=== userName && b === password){
//     console.log("Login successfull")
// }
// else{
//     console.log("login failed")
// }




// ------------------------------------------------------------------------
// Problem 5: Weekend Check
// Check if day is "Saturday" OR "Sunday". If yes, print "Weekend", otherwise "Weekday".





// let a = prompt("enter Day: ")

// if(a === "Sunday" || a === "Saturday"){
//     console.log("Weekend");
// }
// else{
//     console.log("Weekday");
// }



// ------------------------------------------------------------------------
// Problem 6: Ticket Pricing
// A movie ticket costs:
// $5 if age < 12
// $8 if age >= 12 AND age < 60
// $6 if age >= 60



// let age = prompt("Enter Your age :")
// if (age < 12 ){
//     console.log("$5")
// }
// else if(age >= 12 && age <= 60 ){
//     console.log("$8")
// }
// else{
//     console.log("$6")
// }









// ------------------------------------------------------------------------
// Problem 7: Free Shipping
// Give free shipping if order total is greater than $50 OR customer is a premium member.



// let orderTotal = 40;
// let isPremium = true;
// if(orderTotal>=100 || isPremium===true){
//     console.log("Free shipping ")
// }
// else{
//     console.log("no free shipping")
// }



// ------------------------------------------------------------------------
// Problem 8: Pass or Fail with Distinction
// Check exam results:
// If marks >= 33: Check if marks >= 80, print "Pass with distinction", else print "Pass"
// If marks < 33: Print "Fail"




// let marks = prompt( "Enter marks")
// if(marks >= 33 && marks <=80){
//     console.log("Pass with distinction")

// }
// else {
//     console.log("Pass")
// }
// if(marks<33){
//     console.log("Fail")
// }



// ------------------------------------------------------------------------
// Problem 9: Temperature and Rain
// Check weather conditions:

// If temperature > 30: Print "Hot day"
// If temperature is 20-30:
// If it's raining: Print "Pleasant but rainy"
// If not raining: Print "Perfect weather"
// If temperature < 20: Print "Cold day"



// let temperature = prompt("enter temperature : ")
// if(temperature > 30){
//     console.log("Hot day")
// }
// else if(temperature >= 20 && temperature <=30){
//     let israining =  true;

//     if(israining ){
//         console.log("pleasent but rainy")
//     }
//     else{
//         console.log("perfect day")
//     }
// }
// if(temperature< 20){
//     console.log("Cold day")
// }




// ------------------------------------------------------------------------
// Problem 10: Day of Week
// Write a switch statement that takes a number (1-7) and prints the corresponding day of the week.




// let dayNum = 3;
// switch (dayNum) {
//     case 1: console.log("monday")
//     break;
//     case 2: console.log("tuesday")
//     break;
//     case 3: console.log("wednesay")
//     break;
//     case 4: console.log("thursday")
//     break;
//     case 5: console.log("friday")
//     break;
//     case 6: console.log("saturday")
//     break;
//     case 7: console.log("Sunday")

// }




// ------------------------------------------------------------------------
// Problem 11: Traffic Light
// Write a switch statement for traffic signals:


// let signal = "red";

// switch(signal){
//     case "red":
//         console.log("stop")
//         break;
//     case "yellow":
//         console.log("slow down")
//         break;
//     case" green":
//         console.log("Go")
//         break;
// }



// ------------------------------------------------------------------------
// Problem 12: Month to Season
// Write a switch statement to determine season based on month number:

// let month = 8;
// switch (month) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("Winter")
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Spring")
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Summer")
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("fall")
//         break;
// }




// ------------------------------------------------------------------------
// Problem 13: Username Check
// Check if a username exists (is truthy). If yes, print "Welcome [username]", else print "Please enter a username".




// let username ="" ;
// if (username){
//     console.log("welcome"+username)
// }
// else{
//     console.log("please enetr username")
// }





// ------------------------------------------------------------------------
// Problem  14: Score Check
// Check if score is truthy. If yes, print the score, else print "No score yet".


// let score = "";
// if (score){
//     console.log("the score")
// }
// else{
//     console.log("No Score yet")
// }





// ------------------------------------------------------------------------
// Problem 15: Voting Eligibility
// Check if a person can vote:
// Age must be >= 18
// Must be a citizen
// Must not have already voted




// let age = 20;
// let isCitizen = true;
// let hasVoted = true;

// if(age>18 && isCitizen && hasVoted){
//     console.log("you can vote")
// }
// else{
//     console.log("you cannot vote")
// }

// ------------------------------------------------------------------------
// Problem 16: Discount Calculator
// Calculate discount based on:

// If customer is premium: 20% discount
// Else if total > 100: 15% discount
// Else if total > 50: 10% discount
// Else: No discount





// let total = 120;
// let isPremium = false;
// let discount20 = total*(1-0.20)
// let discount15 =total*(1-0.15)
// let discount10 = total*(1-0.10)
// if( isPremium){
//     console.log(discount20)
// }
// else if(total>100 ){
//     console.log(discount15)
// }
// else if(total>50 ){
//     console.log(discount10)
// }
// else{
//     console.log("No discount")
// }






// ------------------------------------------------------------------------
// Problem 17: Number Checker
// Write a program that checks if a number is:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by 3 → "Fizz"
// Divisible by 5 → "Buzz"
// Otherwise → Print the number




// let number = 60;
// if(number%5==0 && number%3==0  ){
// console.log("FizzBuzz")
// }
// else if(  number%3==0  ){
// console.log("Fizz ")
// }
// else if(number%5==0   ){
// console.log("Buzz")
// }
// else{
//     console.log("print the number")
// }







// ------------------------------------------------------------------------
// Problem 18: Age Input
// Use prompt() to get user's age and check if they can vote (age >= 18). Display the result using alert() .




// let age = prompt("enter ur age : ");

// if(age>=18){
//     alert("you can vote")
// }
// else{
//     alert("you cannot vote")
// }





// ------------------------------------------------------------------------
// Problem 19: Simple Calculator
// Use prompt() to get two numbers and an operator (+, -, *, /). Use a switch statement to perform the operation
// and show the result using alert() .





// let num1 = Number(prompt("enter 1st number :"));
// let num2 = Number(prompt("enter 2nd number :"));
// let sign = prompt(" Enter any operators +,-,/,* : ")
// let sum = num1 + num2;
// let sub = num1 - num2;
// let div = num1 / num2;
// let mul = num1 * num2;

// switch (sign) {
//     case "+":
//         alert(sum);
//         break;
//     case "-":
//         alert(sub);
//         break;
//     case "/":
//         alert(div);
//         break;
//     case "*":
//         alert(mul);
//         break;
// }





// ------------------------------------------------------------------------
// Problem 20: Number Guessing
// Create a number guessing game:
// Set a secret number (e.g., 7)
// Ask user to guess using prompt()
// If guess is correct: "Congratulations!"
// If guess is too high: "Too high!"
// If guess is too low: "Too low!"




// let num = 8;
// let guess = prompt("Enter the guess number : ")
// if(guess == num){
//     console.log("Congratulation!")
// }
// else if(guess > num){
//     console.log("high")
// }
// else if(guess < num){
//     console.log(" low")
// }




// ------------------------------------------------------------------------
// Problem 21: Golden String
// A string is "golden" if:
// It starts with 'A' or 'a'
// AND has a length greater than 5


// let string = "alexander"
// if ((string.startsWith("A") || string.startsWith("a")) && string.length > 5) {
//     console.log("Golden String");
// }
 







// ------------------------------------------------------------------------
// Problem 22: Largest of Three
// Find the largest of three numbers using if-else statements.



// let num1 = 45;
// let num2 = 67;
// let num3 = 52;

// if(num1 > num2 && num1 > num3  ){
//     console.log("num1 is greater")
// }
// else if(num2 > num1 && num2 > num3  ){
//     console.log("num2 is greater")
// }
// else if(num3 > num1 && num3 > num2  ){
//     console.log("num2 is greater")
// }

// ------------------------------------------------------------------------
// Problem 23: Quarterly Months
// Use a switch statement to print the months in a quarter:




// let month = 2;
// let firstThreeMonths = "January,Febuary,March"
// let secondThreeMonths = "April, May, June" 
// let thirdThreeMonths = "July, August, September"
// let fourthThreeMonths = "October, November, December"
// switch(month){
//     case 1:
//         console.log(firstThreeMonths);
//         break;
//     case 2:
//         console.log(secondThreeMonths );
//         break;
//     case 3:
//         console.log(thirdThreeMonths);
//         break;
//     case 4:
//         console.log(fourthThreeMonths);
//         break;
// }






// ------------------------------------------------------------------------
// Problem 24: Divisibility by 10
// Use prompt() to get a number from the user. Check if it's divisible by 10. Print "Good" if yes, "Bad" if no.


// let number = prompt("Enter number : ")
// if (number%10==0){
//     console.log("Good ")
// }
// else{
//     console.log("Bad")
// }

// ------------------------------------------------------------------------
// Problem 25: Multiple of 7
// Write a program that checks if a number is:
// A multiple of 7 AND even → "Special number"
// A multiple of 7 BUT odd → "Lucky number"
// Not a multiple of 7 → "Regular number"


// let number = prompt("Enter a number : ")
// if (number %7===0 && number%2===0){
//     console.log("Special number")
// }
// else if (number %7===0 && number%2!==0){
//     console.log("lucky number")
// }
// else  {
//     console.log("Regular Number")
// }

// ------------------------------------------------------------------------