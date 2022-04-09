/**
 *	averageFunction.js
 *	Author: Jessica Lemanski
 *	Date: 4/9/22
 * 	Description: This file contains a function to average numbers. 
*/

/**
 *	Function Average
 *	Description: Function to accept two or more numbers and return the average of those values.
 *	@param	Number, string - Numbers to be averaged
 *	@return Number - average of inputs
*/
module.exports = function average(){
	
	if (arguments.length < 2) {
	throw new TypeError('Error: 2 or more parameters required');
	}
 
	var sum = 0;
	for (var i=0; i < arguments.length;i++) {
		if(isNaN(arguments[i])){
		throw new TypeError('Error: Non-Number Parameter');
		}
		else{
		sum += parseFloat(arguments[i]);
		}
	}
	return sum/arguments.length;
}
