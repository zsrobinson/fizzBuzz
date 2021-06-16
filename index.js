function fizzbuzz(length) { 				//creates a function called fizzbuzz with the parameter length
	for (i=1; i<=length; i++) { 			//creates a for loop from 1 to length
		var output = ""; 					//creates an empty output variable
		if (i % 3 == 0) {output += "fizz";} //if 3 divides into i evenly, add "fizz" to the output
		if (i % 5 == 0) {output += "buzz";} //if 5 divides into i evenly, add "buzz" to the output
		if (output == "") {output = i;} 	//if output is still blank, add i
		console.log(output); 				//print the output
	}
}