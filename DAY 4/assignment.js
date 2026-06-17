//  -----------------------------------------------------------------------
//  Problem 1: Create a variable userInput with the value " HeLLo JaVaScRiPt " . Use string methods to:
// Remove the extra spaces
// Convert the entire string to lowercase
// Store the result in a new variable called cleanInput
// Print both userInput and cleanInput to see the difference


// let userName = " HeLLo JaVaScRiPt ";
// let cleanInput = userName.trim().toLowerCase();
// console.log(`original input :${userName}`)
// console.log(`the result :${cleanInput}`)
 



//  -----------------------------------------------------------------------
//  Problem 2: You have a variable email with the value " USER@EXAMPLE.COM " . Clean this email by:
// Removing leading and trailing spaces
// Converting it to all lowercase
// Store the result in a variable called formattedEmail
// Print the result


// let email = " USER@EXAMPLE.COM " 
// let formattedEmail= email.trim().toLowerCase()
// console.log(`the formatted email is: ${formattedEmail}`)





//  -----------------------------------------------------------------------
//  Problem 3: Create a string sentence = "JavaScript is awesome and JavaScript is fun" . Use the indexOf() method
// to:
// Find the position of the word "awesome"
// Find the position of the first occurrence of "JavaScript"
// Try to find the word "Python" and see what value you get
// Print all three results with appropriate labels



// let sentence = "JavaScript is awesome and JavaScript is fun"

//  let index1 = sentence.indexOf("awesome");
//  let index2 = sentence.indexOf("JavaScript ");
//  let index3 = sentence.indexOf("python ");
//  console.log(`the index value of awesome is ${index1}`)
//  console.log(`the index value of javaScript is ${index2}`)
//  console.log(`the index value of python is ${index3}`)







//  -----------------------------------------------------------------------
//  Problem 4: Create a variable message = "Welcome to coding class" . Write code to:
// Check if the word "coding" exists in the message using indexOf()
// If it exists (hint: check if indexOf doesn't return -1), print "Found coding!"
// If it doesn't exist, print "Coding not found"


// let message = "Welcome to coding class" 
// let check = message.indexOf("coding")
// if (check!== -1){
//     console.log("coding found")
// }
// else{
//     console.log("not found")
// }





//  -----------------------------------------------------------------------
//  Problem 5: Create a variable rawData = " MESSY iNpuT " . Use method chaining to:
// Remove the spaces
// Convert to lowercase
// Do all of this in a single line
// Store the result in a variable called processedData
// Print both the original and processed versions






// let rawData = " MESSY iNpuT " 
// let processedData = rawData.toLowerCase().trim();
// console.log(`the original string is:${rawData}`)
// console.log(`the processed string is:${processedData}`)





//  -----------------------------------------------------------------------
//  Problem 6: You have a password input: password = " MyP@ssw0rd123 " . Use method chaining to:
// Remove spaces
// Convert to uppercase
// Slice only the first 8 characters
// Store the result in securePassword
// Print the result

// let password = " MyP@ssw0rd123 "
// let securePassword = password.trim().toUpperCase().slice(0,8)
// console.log(securePassword)





//  -----------------------------------------------------------------------
//  Problem 7: Create a variable fullName = "Alexander Hamilton" . Use the slice() method to:
// Extract just the first name (characters 0 to 9)
// Extract just the last name (characters from index 10 onwards)
// Store them in variables firstName and lastName
// Print both names



// let fullName = "Alexander Hamilton" ;
// let firstName = fullName.slice(0,9)
// let lastName  = fullName.slice(9,17)
// console.log(`the first name is ${firstName} and the last name is ${lastName}`)




//  -----------------------------------------------------------------------
//  Problem 8:You have a phone number stored as phone = "9876543210" . Use slice() to:
// Extract the first 3 digits
// Extract the last 4 digits
// Store them in variables areaCode and lastFour



// let phone = "9876543210"
// let areaCode = phone.slice(0,3)
// let lastCode = phone.slice(-4)
// console.log(areaCode,lastCode)



//  -----------------------------------------------------------------------
//  Problem 9 :Create a string announcement = "The event will happen on Monday and Monday only" . Use the
// replace() method to:
// Replace the first occurrence of "Monday" with "Friday"
// Store the result in a variable called updatedAnnouncement
// Print both the original and updated announcement
// Notice that only the first "Monday" was replaced



// let announcement = "The event will happen on Monday and Monday only"
// let updatedAnnouncement = announcement.replace("Monday","friday")
// console.log(announcement)
// console.log(updatedAnnouncement)




//  -----------------------------------------------------------------------
//  Problem 10: You have a template message: template = "Hello NAME, welcome to our website" . Use the replace()
// method to:
// Replace "NAME" with "Alice"
// Store the result in a variable called personalizedMessage
// Print the personalized message



// let  template = "Hello NAME, welcome to our website";
// let personalizedMessage = template.replace("NAME","Alice")
// console.log(personalizedMessage);





 //  -----------------------------------------------------------------------
//  Problem 11: Create an array called colors with the values: "red", "green", "blue", "yellow". Then:
// Print the entire array
// Print the first color
// Print the last color using the length property
// Print the total number of colors

 
// let colors = ["red", "green", "blue", "yellow"]
// console.log(colors)
// console.log(colors[0])
// console.log(colors[colors.length-1])
// console.log(colors.length)


 //  -----------------------------------------------------------------------
// Problem 12: Create an array called scores with the values: 85, 92, 78, 90, 88. Then:
// Print the score at index 2
// Change the first score to 95
// Print the modified array
// Add up the first two scores and print the sum





// let score = [85, 92, 78, 90, 88]
// console.log(score[2])
// score[0] = 95;
// console.log(score);
// let sum = score[0] + score[1];
// console.log(sum);



 //  -----------------------------------------------------------------------
// Problem 13: Start with an empty array called playlist . Then:

// Use push() to add "Song1" to the array
// Use push() to add "Song2" to the array
// Use pop() to remove the last song and store it in a variable
// Use unshift() to add "Song0" to the beginning
// Print the final playlist and the removed song

// let playlist = [];
// playlist.push("song1")
// playlist.push("song2")
// let play = playlist.pop("song2")
// playlist.unshift("song0 ")
// console.log(playlist)




//  -----------------------------------------------------------------------
// Problem 14: Create an array queue = ["First", "Second", "Third"] . Then:
// Use shift() to remove the first person and store it in a variable served
// Use push() to add "Fourth" to the end of the queue
// Use shift() again to remove the next person


// let queue = ["First", "Second", "Third"]
// let shift = queue.shift();
// queue.push("fourth");
// queue.shift()
// console.log(queue)




//  -----------------------------------------------------------------------
// Problem 15:  Create an array fruits = ["apple", "banana", "mango", "orange", "banana"] . Then:
// Use indexOf() to find the position of "mango"
// Use indexOf() to find the position of "banana" (first occurrence)
// Use indexOf() to search for "grape" (not in array)
// Print all three results


// let fruits = ["apple", "banana", "mango", "orange", "banana"] 
// let result1 = fruits.indexOf("mango");
//  let result2 = fruits.indexOf("banana")
//  let result3 = fruits.indexOf("grapes")
 
//  console.log(result1)
//  console.log(result2)
//  console.log(result3)




//  -----------------------------------------------------------------------
// Problem 16: Create an array inventory = ["laptop", "mouse", "keyboard", "monitor"] . Then:
// Use includes() to check if "mouse" is in the inventory
// Use includes() to check if "printer" is in the inventory
// Print appropriate messages like "Mouse is available" or "Printer is not available"




// let inventory = ["laptop", "mouse", "keyboard", "monitor"]

// console.log(inventory.includes("mouse"))
// console.log(inventory.includes("printer"))
// console.log("mouse is available ")
// console.log("printer is not available ")


//  -----------------------------------------------------------------------
// Problem 17:   Create two arrays:
// morningClasses = ["Math", "English", "Science"]
// afternoonClasses = ["History", "Art", "PE"]

// Then:
// Use concat() to combine both arrays into a new array called fullSchedule
// Print the full schedule
// Print the total number of classes


// let morningClasses = ["Math", "English", "Science"]
// let afternoonClasses = ["History", "Art", "PE"]
// let fullSchedule = afternoonClasses.concat(morningClasses)
// console.log(fullSchedule)
// console.log(fullSchedule.length)





//  -----------------------------------------------------------------------
// Problem 18: Create an array numbers = [1, 2, 3, 4, 5] . Then:
// Use reverse() to reverse the array
// Print the reversed array
// Notice: check if the original array was modified or not by printing numbers again



// let numbers = [1, 2, 3, 4, 5] ;
// let rev = numbers.reverse()
// console.log(numbers)








//  -----------------------------------------------------------------------
// Problem 19: Create an array months = ["Jan", "Feb", "Mar", "May", "Jun"] . Notice "Apr" is missing. Use splice()
// to:
// Insert "Apr" at the correct position (index 3)
// Print the corrected array
// Verify that April is now between March and May


// let months = ["Jan", "Feb", "Mar", "May", "Jun"] 
// let newlist = months.splice(3,0,"april");
// console.log(months)
// console.log(months.includes("april"))



//  -----------------------------------------------------------------------
// Problem 20: Create an array students = ["Alice", "Bob", "Charlie", "David", "Eve"] . Then:
// Use splice() to remove "Charlie" (at index 2)
// Use splice() to add "Frank" and "Grace" at index 2
// Print the final array



// let students = ["Alice", "Bob", "Charlie", "David", "Eve"]
// students.splice(2,1)
// students.splice(2,0,"Frank" , "Grace")
// console.log(students)




//  -----------------------------------------------------------------------
// Problem 21: Create an array original = [1, 2, 3] . Then:
// Create a variable reference and assign original to it
// Modify reference[0] to 99
// Print both original and reference


// let original = [1, 2, 3]
// let refrence = original;
// refrence[0] = 99; 
// console.log(original)
// console.log(refrence)




//  -----------------------------------------------------------------------
// Problem 22: Create two separate arrays:

// arr1 = [1, 2, 3]
// arr2 = [1, 2, 3]

// Then:
// Compare arr1 == arr2 and print the result
// Compare arr1 === arr2 and print the result
// Explain in a comment why the com







// let arr1 = [1, 2, 3]
// let arr2 = [1, 2, 3]
// let result1 = arr1 == arr2;
// let result2 = arr1 === arr2;
// console.log(result1)
// console.log(result2)




//  -----------------------------------------------------------------------
// Problem 23: Create a nested array representing a simple tic-tac-toe board:
// Then:
// Print the value at row 0, column 1 (should be "O")
// Print the value at row 2, column 2 (should be "X")
// Change the center position (row 1, column 1) to "O"
// Print the entire board




// let board = [
// ["X", "O", "X"],
// ["O", "X", "O"],
// ["X", "O", "X"]
// ];



// console.log(board[0][1])
// console.log(board[2][2])
//  board[1][1] = "O"
// console.log(board )






//  -----------------------------------------------------------------------
// Problem 24: Create a nested array to store student test scores:
// Then:
// Print Alice's second test score (90)
// Print Charlie's name
// Calculate and print Bob's average score (all three scores added and divided by 3)
// Change Bob's first score from 78 to 82 and print the updated array

// let scores = [
// ["Alice", 85, 90, 92],
// ["Bob", 78, 85, 88],
// ["Charlie", 92, 88, 95]
// ];


// console.log(scores[0][2])
// console.log(scores[2][0])
// let avg = (scores[1][1] + scores[1][2] +  scores[1][3])/3
// console.log(avg)
// scores[1][1] = 82;
// console.log(scores)