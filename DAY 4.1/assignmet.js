// ------------------------------------------------------------------------------- 
// problem 1: Create an array numbers = [10, 20, 30, 40, 50, 60, 70] . Then:
// Use slice() to get elements from index 2 to 5 (not including 5)
// Use slice() to get the last 3 elements
// Store both results in separate variables and print them
// Verify that the original array is unchanged


// let numbers = [10, 20, 30, 40, 50, 60, 70]
// let part1 = numbers.slice(2, 5)
// let part2 = numbers.slice(-3)
// console.log(part1)
// console.log(part2)
// console.log(numbers)



// -------------------------------------------------------------------------------
// problem 2: You have a playlist: songs = ["Song1", "Song2", "Song3", "Song4", "Song5", "Song6"] . Then:
// Use slice() to create a "morning playlist" with the first 3 songs
// Use slice() to create an "evening playlist" with the last 2 songs
// Use slice() with negative index to get all songs except the first one
// Print all three playlists




//  let songs = ["Song1", "Song2", "Song3", "Song4", "Song5", "Song6"]
// let morning = songs.slice(0,3)
// let evening = songs.slice(4,6)
// let negative = songs.slice(-5)

// console.log(morning)
// console.log(evening)
// console.log(negative)






// -------------------------------------------------------------------------------
// problem 3: Create an array colors = ["red", "green", "blue", "yellow", "purple", "orange"] . Then:
// Use splice() to remove "blue" and "yellow" (2 elements starting at index 2)
// Store the removed elements in a variable
// Print both the removed elements and the modified array

// let colors = ["red", "green", "blue", "yellow", "purple", "orange"]

// let newcolor = colors.splice(2,2)
// console.log(colors)
// console.log(newcolor)







// -------------------------------------------------------------------------------
// problem 4: You have an array numbers = [1, 2, 3, 7, 8, 9] . Use splice() to:
// Insert 4, 5, and 6 at index 3 (without deleting anything)
// Print the corrected array
// Verify that the array now contains [1, 2, 3, 4, 5, 6, 7, 8, 9]


// let numbers = [1, 2, 3, 7, 8, 9] 
// numbers.splice(3,0,4,5,6)
// console.log(numbers)



// ------------------------------------------------------------------------------
// problem 5: Create an array fruits = ["banana", "apple", "mango", "cherry", "orange"] . Then:
// Sort the array alphabetically
// Print the sorted array
// Try creating another array with numbers nums = [5, 10, 1, 100, 25] and sort it
// Notice the result and print it (observe how numbers are sorted as strings)



// let fruits = ["banana", "apple", "mango", "cherry", "orange"]

// fruits.sort()
// let nums = [5, 10, 1, 100, 25]
// nums.sort((a,b)=>a-b)
// console.log(fruits)
// console.log(nums)




// ------------------------------------------------------------------------------
// problem 6: 2: Create an array scores = [78, 92, 85, 88, 95, 73] . Then:
// Sort the array in ascending order using sort((a, b) => a - b)
// Print the sorted scores
// Now sort the same array in descending order using sort((a, b) => b - a)
// Print the highest and lowest scores


// let  scores1 = [78, 92, 85, 88, 95, 73]
// scores1.sort((a, b) => a - b)
// let  scores2 = [78, 92, 85, 88, 95, 73]
// scores2.sort((a, b) => b-a)
// console.log(scores1)
// console.log(scores2)






// ------------------------------------------------------------------------------
// problem 7:Create an array words = ["JavaScript", "is", "awesome"] . Then:
// Use join(" ") to create a sentence with spaces
// Use join("-") to create a hyphenated string
// Use join("") to concatenate all words without spaces
// Print all three results


// let words = ["JavaScript", "is", "awesome"]
// result1 = words.join(" ")
// result1 = words.join("-")
// result1 = words.join("")
// console.log(result1)
// console.log(result2)
// console.log(result3)




// ------------------------------------------------------------------------------
// problem 8:You have a date stored as dateArray = ["2024", "12", "25"] . Then:
// Use join("/") to create a date string in format: "2024/12/25"
// Use join("-") to create a date string in format: "2024-12-25"
// Create a time array time = ["14", "30", "00"] and use join(":") to format it
// Print all formatted strings



// let dateArray = ["2024", "12", "25"] 
// let result1 = dateArray.join("/") 
// let result2 = dateArray.join("-") 
// let time = ["14", "30", "00"]
// let result3 = time.join(":") 
// console.log(result1)
// console.log(result2)
// console.log(result3)










// ------------------------------------------------------------------------------
// problem 9:Create an array numbers = [1, 2, 3, 4, 5] . Then:
// Use toString() to convert it to a string
// Print the result and check its type using typeof
// Compare the result with join() without arguments
// Explain the difference in a comment




// let numbers = [1, 2, 3, 4, 5]
// let result1 = numbers.toString()
// let result2 = numbers.join()

// console.log(typeof result1)
// console.log(typeof result2)







// ------------------------------------------------------------------------------
// problem 10 :Create a nested array grid = [[1, 2], [3, 4], [5, 6]] . Then:
// Use toString() on the nested array
// Print the result
// Notice how nested arrays are flattened
// Try the same with join() and observe the difference


// let grid = [[1, 2], [3, 4], [5, 6]] 
// let result1 = grid.toString()
// let result2 = grid.join()
// console.log(typeof result1)
// console.log(typeof result2)





// ------------------------------------------------------------------------------
// problem 11 :Create arrays using the Array constructor:
// Create an empty array using new Array()
// Create an array with length 5 using new Array(5)
// Create an array with elements [10, 20, 30] using new Array(10, 20, 30)
// Print all three arrays and their lengths



// let arr1 = new Array();
// let arr2 = new Array(5);
// let arr3 = new Array((10, 20, 30));
// console.log(arr1,arr1.length);
// console.log(arr2,arr2.length);
// console.log(arr3,arr3.length);






// ------------------------------------------------------------------------------
// problem 12 : Create an array using new Array(4) . Then:
// Fill it manually by assigning values at each index: "a", "b", "c", "d"
// Print the filled array
// Now create the same array using array literal ["a", "b", "c", "d"]
// Compare which method is easier





// let arr1 = new Array(4)
// arr1[0] = "a"
// arr1[1] = "b"
// arr1[2] = "c"
// arr1[3] = "d"
// arr2 = ["a","b","c","d"]
// console.log(arr1)
// console.log(arr2)




// ------------------------------------------------------------------------------
// problem 13 :Test Array.isArray() on different values:
// Test it on [1, 2, 3]
// Test it on "hello"
// Test it on 123
// Test it on { name: "John" }
// Print all results with appropriate labels




// let arr1 = [1, 2, 3]
// let arr2 = "hello"
// let arr3 = 123
// let arr4 = { name: "John" }
// console.log( Array.isArray(arr1))
// console.log( Array.isArray(arr2))
// console.log( Array.isArray(arr3))
// console.log( Array.isArray(arr4))








// ------------------------------------------------------------------------------
// problem 14 : Create a variable data that could be either an array or a string. Set it to [1, 2, 3] . Then:
// Use Array.isArray() to check if it's an array
// If it's an array, print "It's an array with X elements" (where X is the length)
// If it's not an array, print "Not an array"
// Now change data to "hello" and test again


// let arr1 = [1, 2, 3]
// let len = arr1.length;
// if(Array.isArray(arr1) ){
//     console.log(`"It's an array with ${len} elements" `)
// }
// else{
//     console.log("Not an array")
// }


// let arr2 = "hello"
// let len1 = arr2.length;
// if(Array.isArray(arr2) ){
//     console.log(`"It's an array with ${len1} elements" `)
// }
// else{
//     console.log("Not an array")
// }



// ------------------------------------------------------------------------------
// problem 15 :Create a 2D array representing a simple grid:
// Then:
// Print the element at row 0, column 2
// Print the element at row 2, column 0
// Print the center element (row 1, column 1)
// Change the center element to 50 and print the entire matrix


// let matrix = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ];
// console.log(matrix[0][2])
// console.log(matrix[2][0])
// console.log(matrix[1][1])
// matrix[1][1] = 50;
// console.log(matrix)





// ------------------------------------------------------------------------------
// problem 16: Create a seating chart:
// Then:
// Print who is sitting at row 0, column 1
// Print who is sitting at row 1, column 2
// Swap the positions of Alice and Frank
// Print the updated seating chart



// let seats = [
// ["Alice", "Bob", "Charlie"],
// ["David", "Eve", "Frank"]
// ];

// console.log(seats[0][1])
// console.log(seats[1][2])
// let temp = seats[0][0]
//  seats[0][0] = seats[1][2]
// seats[1][2] = temp

//  console.log(seats)




// ------------------------------------------------------------------------------
// problem 17 : Create a student grades array:
// Print John's second test score
// Print Sarah's name
// Calculate Mike's total score (sum of all three test scores)
// Print the results


// let grades = [
// ["John", 85, 90, 88],
// ["Sarah", 92, 88, 95],
// ["Mike", 78, 85, 80]
// ];


// console.log(grades[0][2])
// console.log(grades[1][0])
// console.log(grades[2][1] +grades[2][2] + grades[2][3])





// ------------------------------------------------------------------------------
// problem 18 :Create a 2D array for a tic-tac-toe game:
// Then:
// Print the top-left corner (row 0, column 0)
// Print the center position (row 1, column 1)
// Change the bottom-right corner to "O"
// Print each row on a separate line


// let game = [
// ["X", "O", "X"],
// ["O", "X", "O"],
// ["O", "X", "X"]
// ];
// console.log(game[0][0])
// console.log(game[1][1])
// game[2][2] = "O"
// console.log(game)





// ------------------------------------------------------------------------------
// problem 19 :  Create an array items = [10, 20, 30, 40, 50] . Then:
// Print its length
// Manually change the length to 3 using items.length = 3
// Print the array and observe what happened
// Try to access items[4] and print the result



// let items = [10, 20, 30, 40, 50]
// items.length = 3;
// console.log(items.length)
// console.log(items[4])      //undefined





// ------------------------------------------------------------------------------
// problem 20 : Create an array numbers = [1, 2, 3] . Then:
// Add an element at index 10: numbers[10] = 99
// Print the array and its length
// Print the element at index 5
// Explain what you observe about the empty slots



// let numbers = [1, 2, 3]
// numbers[10] = 99;
// console.log(numbers.length)
// console.log(numbers[5])  // undefined






// ------------------------------------------------------------------------------
// problem 21 :  Create an array words = [" hello ", " WORLD ", " JavaScript "] . Then:
// Trim each element manually and store in a new array
// Sort the new array alphabetically
// Join the sorted array with spaces
// Print the final result





// let words = [" hello ", " WORLD ", " JavaScript "];
// let new1 = [];
//  new1[0] = words[0].trim();
//  new1[1] = words[1].trim();
//  new1[2] = words[2].trim();
// new1.sort()
// console.log(new1)



// ------------------------------------------------------------------------------
// problem 22 : You have two arrays:
// morningTasks = ["Exercise", "Breakfast", "Study"]
// eveningTasks = ["Dinner", "Reading", "Sleep"]

// Combine them using concat() , then:
// Add "Lunch" at index 3 using splice()
// Sort the entire task list alphabetically
// Print the final organized task list




// let morningTasks = ["Exercise", "Breakfast", "Study"]
// let eveningTasks = ["Dinner", "Reading", "Sleep"]

// let result = morningTasks.concat(eveningTasks);
// result.splice(3,0,"Lunch")
// result.sort()
// console.log(result)



// ------------------------------------------------------------------------------
// problem 23 : Create an array original = [1, 2, 3, 4, 5] . Then:
// Create reference by assigning original to it
// Create copy using original.slice()
// Modify reference[0] to 99
// Modify copy[0] to 88
// Print all three arrays and explain what happened





// let original = [1, 2, 3, 4, 5]
// let reference = original;
// let copy = original.slice()
// reference[0] = 99;
// copy[0] = 88;

// console.log(original)
// console.log(reference)
// console.log(copy)


// ------------------------------------------------------------------------------
// problem 24 : Create an array colors = ["red", "green", "blue"] . Then:
// Create two variables palette1 and palette2 , both pointing to colors
// Use palette1.push("yellow")
// Print colors , palette1 , and palette2
// Explain why all three arrays have "yellow"



// let colors = ["red", "green", "blue"] 
// let palette1 = colors ;
// let palette2 = colors;
// palette1.push("yellow")
// console.log(colors)
// console.log(palette1)
// console.log(palette2)





// ------------------------------------------------------------------------------
// problem 25 :  Create an array numbers = [10, 20, 30, 40, 50] . Perform the following operations:
// Remove the first element using shift() and save it
// Add that element to the end using push()
// Print the rotated array
// Repeat the process one more time






// let numbers = [10, 20, 30, 40, 50]
// let x = numbers.shift()
// numbers.push(x)

//     console.log(numbers)







// ------------------------------------------------------------------------------
// problem 26 : You have an array items = ["apple", "banana", "cherry", "date", "banana"] . Then:
// Find the index of the first "banana"
// Remove that "banana" using splice()
// Print the modified array
// Check if "banana" still exists using includes()





// let items = ["apple", "banana", "cherry", "date", "banana"] 
// items.indexOf("banana")
// items.splice(1,1)

// console.log(items)
// console.log(items.includes("banana"))





// ------------------------------------------------------------------------------
// problem 27 : Create an array data = [5, 10, 15, 20, 25] . Then:
// Before accessing index 7, check if it exists (index < data.length)
// If it exists, print the value
// If it doesn't exist, print "Index out of bounds"
// Try the same check with index 2



// let data = [5, 10, 15, 20, 25]
// let index = prompt("enter index value : ")
// if(data.length> index){
//     console.log(data[`${index}`])
// }
// else{
//     console.log("Index out of bounds")
// }




// ------------------------------------------------------------------------------
// problem 28 : You receive data that might be an array or might be something else. Create a variable input = [1, 2,
// 3] . Then:
// Use Array.isArray() to check if it's an array
// If it is an array and has length > 0, print the first element
// Change input to "hello" and run the same checks
// Print appropriate messages for both cases





// let input = [1, 2,3]
// if(Array.isArray(input) && input.length> 0 ){
//     console.log(input[0])
// }
// else{
//     console.log("not an array")
// }




// ------------------------------------------------------------------------------
// problem 29 :Create a shopping cart system:
// Start with an empty array cart
// Add three items: "Laptop", "Mouse", "Keyboard" using push()
// Print the total number of items
// Remove the last item using pop() and print what was removed
// Print the remaining items using join(", ")


// let arr1 = [];
// arr1.push("Laptop", "Mouse", "Keyboard")
// console.log(arr1.length)
// console.log(arr1.pop())
// console.log(arr1.join(", "))



// ------------------------------------------------------------------------------
// problem 30 : Create a high score system:
// Start with an array highScores = [150, 200, 180, 220, 190]
// Sort the scores in descending order
// Print the top score (first element)
// Use slice() to get the top 3 scores
// Print "Top 3 scores: " followed by the scores joined with
//  " | "


// let highScores = [150, 200, 180, 220, 190]
// highScores.sort((a,b)=>b-a)
// console.log(highScores[0])
// let result1 = highScores.slice(0,3)
// console.log(result1.join( " | "))









// ------------------------------------------------------------------------------
// problem 31 : You have a list of test scores: allScores = [85, 92, 78, 95, 88, 73, 90] . Then:
// Create a copy of the array using slice()
// Sort the copy in ascending order
// Remove the lowest score (first element after sorting)
// Remove the highest score (last element)
// Calculate and print the average of the remaining scores


// let allScores = [85, 92, 78, 95, 88, 73, 90]
// let copy = allScores.slice()
// copy.sort((a,b)=>a-b)
// copy.shift()
// copy.pop()
// console.log((copy[0]+copy[1]+copy[2]+copy[3]+copy[4])/5);







// ------------------------------------------------------------------------------
// problem 32 : Create a task management system:
// Start with tasks = ["Task1", "Task2", "Task3", "Task4"]
// Move the first task to the end (simulate completing and re-adding)
// Insert "Task2.5" between "Task2" and "Task3" using splice()
// Remove "Task3" from the list
// Print the final task list with numbered format: "1. Task2" etc. using a counter






// let tasks = ["Task1", "Task2", "Task3", "Task4"]
// tasks[3] = "Task1" 
// tasks[0] = "Task4" 
// console.log(tasks)
//  tasks.splice(3,0,"Task2.5") 
// console.log(tasks)



// ------------------------------------------------------------------------------
// problem 33 :Create an array numbers = [1, 10, 2, 20, 3, 30] . Then:
// Sort it without a compare function and print the result
// Now sort it with sort((a, b) => a - b) and print the result
// Explain in a comment why the results are different




// let numbers = [1, 10, 2, 20, 3, 30]
// numbers.sort()
// console.log(numbers)
// numbers1 = [1, 10, 2, 20, 3, 30]
// numbers1.sort((a,b)=>a-b)
// console.log(numbers1)





// ------------------------------------------------------------------------------
// problem 34 :Create an array with sparse elements: sparse = [1, , , 4, , 6] . Then:
// Print the length of the array
// Try to access index 2 and print the result
// Use push() to add 7 to the end
// Print the entire array and its new length


// let  sparse = [1, , , 4, , 6]
// console.log(sparse.length)
// console.log(sparse[2])
// sparse.push(7)
// console.log(sparse)
