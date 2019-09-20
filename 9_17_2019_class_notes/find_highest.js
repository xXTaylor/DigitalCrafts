var numbers = [3, 8 , 12, 1, 6, 15, 3];

var final = 0;

for(var i=0; i<numbers.length; i++) {

	final += numbers[i];
}

console.log(final);

//Using the For Loop and If Statements inside the For Loop
//Find the largest number in the array

var largestNumber = 0;

for(var i = 0; i<numbers.length; i++) {

	if(numbers[i] > largestNumber) {
	largestNumber = numbers[i];
	}
}


console.log(largestNumber);

//Step 1
// Create a for loop that creates an array of 100 random numbers

// From the random number array created above,find the smallest number

var myArray = [];

for(var i =0; i<100; i++) {
	randomArray.push(Math.random());

}

console.log(randomArray);

var smallest = randomArray[0];

for( var i=0; i< randomArray.length; i++) {
  if(randomArray[i] < smallest) {
    smallest = randomArray[i];
  }

}

console.log(smallest); 
