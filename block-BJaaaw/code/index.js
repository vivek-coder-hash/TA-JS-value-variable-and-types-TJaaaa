// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num =Number(prompt("Enter number"))
if (num % 2 ==0) {
  alert("Even")
}
else{
  alert("odd")
}


// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 =Number(prompt("Enter first number"))
let num2  =Number(prompt("Enter second number"))

if(num1>num2) {
  alert(`Maximum value is ${num1}`)
}

else if (num1==num2) {
  alert("Both numbers are equal")
}

else {
  alert(`maximum value is ${num2}`)
}

// 3. Convert the above code using`?` terniary operator

num1>num2 ? alert(`Maximum value is ${num1}`) : alert(`Maximum value is ${num2}`)

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt("Enter house name")

if (houseName == "stark") {
  console.log(" Winter is coming")
}

else if (houseName == "lannister") {
  console.log(" A lannister always pays his debt")
}

else {
  console.log(" All men must die")
}

// 5. Convert the above code using`?` terniary operator

houseName == "stark" ?   console.log(" Winter is coming") : houseName == "lannister" ? console.log(" A lannister always pays his debt") : console.log(" All men must die") ;

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month = 1 ;
switch(month) {
  case 1 : alert("31") ;
  break ;

  case 2 : alert("28") ;
  break ;

  case 3 : alert("31") ;
  break ;

  case 4 : alert("30") ;
  break ;

  case 5 : alert("31") ;
  break ;

  case 6 : alert("30") ;
  break ;

  case 7 : alert("31") ;
  break ;

  case 8 : alert("31") ;
  break ;

  case 9 : alert("30") ;
  break ;

  case 10 : alert("31") ;
  break ;

  case 11 : alert("30") ;
  break ;

  case 12 : alert("31") ;
  break ;


  default: alert("month not found")
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary  = Number(prompt("Enter your salary"))
let tax1 =0.1 * salary ;
let tax2 =0.2 * salary ;
let tax3 =0.3 * salary ;

if (salary<=20000) {
  alert("In hand salary is "+ (salary-tax1))
}

else if (salary>20000 && salary <= 40000) {
  alert("In hand salary is "+ (salary-tax2))
}

else if (salary>50000) {
  alert("In hand salary is "+ (salary-tax3))
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks  = Number(prompt("Enter your Marks"))

if (marks>100) {
  alert("Marks can't be greater than 100")
}

else if  (marks > 80 && marks < 100) {
  alert("Grade A")
}

else if  (marks > 50 && marks < 80) {
  alert("Grade B")
}

else if  (marks > 30 && marks < 50) {
  alert("Grade C")
}


else if (marks>0) {
  alert("Grade D")
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather  =prompt("What is the weather like outside?")

if (weather == "sunny") {
  alert("Wear a T-shirt")
}

else if (weather == "rainy") {
  alert("Don't forget to take your raincoat")
}

else if (weather=="hot") {
  alert("get a hanky")
}

else if (weather=="freezing") {
  alert("Get your sweeter on")
}



else {
  alert("Not a valid input")
}