//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

for (i=1 ; i <=10 ; i++) {
    console.log(i)
}

// Using `console.log` log all the evan values from 1 to 10.

for (i=1 ; i<=10 ; i++) {
    if (i%2==0) {
        console.log(i+"even")
    }
}

// Using `console.log` log all the od values from 1 to 10.

for (i=1 ; i<=10 ; i++) {
    if (i%2!=0) {
        console.log(i+"odd")
    }
}

// Calculate the sum of all numbers from 1 to 10.

  let sum  =0

  for (i=1 ; i<=10 ;i++) {
      sum=sum+i
  }

  console.log(sum+"-sum")

// Log all the values from 1 to 10 using while loop


let j=0
while(j<=10) {
    j++
    console.log(j+"-while")
    
   
}