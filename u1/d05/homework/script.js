// 1. Add the following code to your JS file:
// console.log("script loaded");

console.log("script loaded");

// 2. Temperature conversion

// How would you convert temperature in Fahrenheit to Celsius?
// prompt() the user for temperature in Fahrenheit and alert() the given
// degrees in Celsius (round to the nearest whole number).


// var fromF =  prompt("What is your temperature in Fahrenheit?");


// if(fromF==="")
// {
//  alert("You gotta enter something.");
// }
// else if(isNaN(Number(fromF)))
// {
//  alert("Enter a number, joker, not '" + fromF + "'!");
// }

// else
// {toC = (fromF - 32)*5/9;
// alert(fromF + " degrees Fahrenheit is " + toC + " degrees Celsius. Consider switching to SI.");
// }

// 3. Basic Conversion - Pounds to kg

// How would you convert weights in pounds to kilograms?
// prompt() the user for weights in pounds and alert() the given weight in kilograms.

//var fromP = prompt("What is the weight in pounds? Not that I understand why you're interested in converting to metric.");
//if(fromP==="")
//{
//alert("You gotta enter something.");
//}
//else if(isNaN(Number(fromP)))
//{
//alert("Enter a weight, hippie, not '" + fromP + "'!");
// }
//else if(fromP<0)
//{
// alert("Are you serious? A postive integer.");
//}
// else
//{toK = (fromP / 2.2 ) // or (fromP *  0.4536  )
// alert(fromP + " pounds is " + toK + " kilograms.");
// }

// 4. Pythagorean Theorem
// Write a JavaScript statement that can solve the pythagorean theorem.

// var a = prompt ( "Enter the length of side A:" ) ;
// var b = prompt ( "Enter the length of side B:" ) ;
 // if ((a > 0) && !(isNaN(a)) && (b > 0) && !(isNaN(b)))
 // This line is to prevent unwanted inputs, I couldn't make it work in the same way
 //as the previous exercises but found this line on stackoverflow and changed it
 // to account for negative lengths.
 // If a and b are both greater than zero and neither is a non-numerical input
 // (is not NaN) c will run.
 // http://stackoverflow.com/questions/26621698/pythagorean-theorem-code-isnan-function

//{ var c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
//alert("The length of side C is " + c);
//}
//else alert("Please enter only positive integers as what you entered has no meaning when solving for the length of a side.");

// Also, it turns out Math.hypot is a thing, which I realized after writing this.
// But it's not compatible with IE or most mobile browsers it seems.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot


//var py = alert ("The Pythagorean theorem states that the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides.");
//var a = prompt ( "Enter the length of side A:" ) ;
//var b = prompt ( "Enter the length of side B:" ) ;
//  if ((a > 0) && !(isNaN(a)) && (b > 0) && !(isNaN(b)))
//{
// var c = Math.hypot(a, b);
// alert("The length of side C is " + c);
//}
//else alert("Please enter only positive integers as what you entered has no meaning when solving for the length of a side.");


// 5. Longest Word

// Write a program that prompts the user for a statement and alerts back the longest word.

// var input = prompt ( "Enter a statement and I'll return the longest word. Unless there are words of the same length, then I will return the first word that meets the criteria of being the longest." ) ;
// var str = input.split(" "); //str is the array of strings created after the input is split on spaces between words
//var words = null;
//var regexp = /^[A-Z]+/gi;
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#character-classes

//if (input===""){
//  alert("You gotta enter something or I can't return anything.");}

//else if (input=input.match(regexp)){ //if the input contains only [A-Z]+/gi (tests for all matches, letters A-Z, regardless of case), function runs
//        str.forEach(function(str) {//forEach calls the function for each string in str
//        if (words < str.length) { //if  a word's (the strings in [str]) length is greater than the length of the other words
//            words = str.length;   //it is assigned to "words" after forEach iterates through the entire array
//            longest = str;            //"longest" returns the longest string (sans .length so it returns the text)
//        }
//    })
//    alert(longest);
//}

//else {
// alert("Text based statements with no punctuation only.")//if input contains characters outside [A-Z]+/g
//}
