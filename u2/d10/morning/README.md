
![](http://network.napco.com/target-marketing/wp-content/uploads/sites/3/2016/02/job_inteview_funny.jpg)
# 10 Javascript Interview Questions You Should Know!


1) What should the following code output? Explain this behavior.

```
(function(){
    var a = b = 3;
})();

console.log(a);
console.log(b);
```
a is a local variable and cannot be logged outside the function. b is a global variable and can be read outside
the function. a is local because it is declared using the var keyword and b is global because it is declared 
without it.

2) Consider the code below. Will they return the same thing? Why or why not?

```
function foo1() {
  return {
    bar: "hello"
  };
}

function foo2() {
  return
  {
    bar: "hello"
  };
}
```
the first will return the object; the second will end at return since js automatically inserts a semicolon
when return is on a line by iteself so the rest of the function will not run.

3) In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
```
(function() {
 console.log(1);
 setTimeout(function(){console.log(2)}, 1000);
 setTimeout(function(){console.log(3)}, 0);
 console.log(4);
})();
```
1, 4, 3, 2 - 1 occurs first and has no timeout, 4 is the next integer with no timeout, 3 has a timeout of 0ms but
still runs the setTimeout function, 2 has a setTimeout of 1s.

4) What will be the output when the following code is executed? Explain.
```
console.log(false == '0')
console.log(false === '0')
```
true, false 
- true == 0 is true because 0 'falsey' - a result is false if the argument is 0 or NaN; otherwise the result is true.
- false === 0 is false - the result must equal the input argument (no conversion occurs); 0 in this case is a
string and not a boolean.

5) What’s the result of executing this code and why.
```
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```
a is undefined because the value is not hoisted, just the variable
foo is 2 because is not declared as a variable and the entire function is hoisted
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

6) What is the best feature of Internet Explorer?
The logo is nice I guess.

7) Write a function to deliver the expected output
```
duplicate([1,2,3,4,5]);
  => [1,2,3,4,5,1,2,3,4,5]
  ```
var arr = [1,2,3,4,5]
function dupe (){
return arr.concat(arr);
}
console.log(dupe())

  8) Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

  for (i = 0; i < 100; i++){
  if (i%3 === 0 && i%5 === 0){
  console.log("FizzBuzz");
  }else if (i % 3 === 0){
  console.log("fizz")
  }else if (i%5===0){
  console.log("buzz")
  }
    }

  9) Explain "hoisting".

  10) What is a ternary operator? Show an example.
10 > 5 ? console.log('yep') : console.log('nope')


