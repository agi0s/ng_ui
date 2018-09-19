/*
* Determine which method of the calculation of lucky tickets will give them more at a given interval.
*
@param {object} context with two properties {number, number} min, max
@return {object}
*/

function happyTicket(context) {
	let obj = {};
	if (simpleMethod(context) > complexMethod(context)){
		obj.winner = simpleMethod,
		obj.tickets = simpleMethod(context);
	} else {
		obj.winner = complexMethod,
		obj.tickets = complexMethod(context);
	}
	return obj;
} 

function simpleMethod(context){
let counter = 0;
   for (i = context.min; i <= context.max; i += 1) {
   	if ((i / 100000 % 10 ^ 0) + (i / 10000 % 10 ^ 0) + (i / 1000 % 10 ^ 0) ===
   	 	(i / 100 % 10 ^ 0) + (i / 10 % 10 ^ 0) + (i % 10))
   	{counter += 1;}
}
return counter;
};

function complexMethod(context) {
let counter = 0;
   for (i = context.min; i <= context.max; i += 1) {
   	if ((i / 100000 % 10 ^ 0) + (i / 1000 % 10 ^ 0) + (i / 10 % 10 ^ 0) ===
   	 	(i / 10000 % 10 ^ 0) + (i / 100 % 10 ^ 0) + (i % 10))
   	{counter += 1;}
}
return counter;
}

var context = {min: 102954, max: 657321};

//module.exports = happyTicket, simpleMethod, complexMethod;
/*
*Demo data: 
context = {min: 102954, max: 657321};
*/



