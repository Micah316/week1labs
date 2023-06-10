/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE 01 Lab  
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

console.log("Step 1:  Number of Seats on a Plane");
var numberOfSeats = 12;
console.log("The number of seats left on this flight are " + numberOfSeats)

console.log("Step 2:  Cost of Groceries");
var groceryCost = 80.00;
console.log("The total cost of the grocery bill is " + groceryCost)

console.log("Step 3:  Middle Initial");
var middleInitial = "T";
console.log("The middle initial is " + middleInitial)

console.log("Step 4:  Is it Hot Outside?");
var itIsHotOutside = true;
console.log("Is it hot outside" == itIsHotOutside)
console.log("Step 5:  First Name");
var firstName = "Steve";
console.log( "The first name is " + firstName)

console.log("Step 6:  Street Address");
var streetAddress = " 123 Mean Street Nashville, TN";
console.log("A random address is " + streetAddress)

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);
 

/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

    console.log('Remove Plane Seats:')
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
    console.log("A customer booked 2 seats...There are only "  + (numberOfSeats - 2) +  "seats left ")

    console.log('Buy a Candy Bar:')
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
    console.log("Someone snuck a candy bar into my cart! The grocery total now is: " + (groceryCost + 2.15) )

    console.log('Fix a Birth Certificate:')
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
    middleInitial = "L"
    console.log("Oops! The middle initial is now " +  middleInitial )

    console.log('Changing Seasons:')
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
    itIsHotOutside = !itIsHotOutside
    console.log("Seasons changed, it is now not cold...isHotOutside = " + itIsHotOutside)
    
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
    var fullName = firstName  +  middleInitial  + "Hartman"
    console.log("My full name is: "  +  fullName)

    console.log('Introduce a Customer:')
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓
    console.log("Here is a new customer! His name is: "  + firstName + "."  +  "He lives at " + streetAddress)


    console.log('-----------Finished------------')