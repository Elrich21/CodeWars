➗ Calculating with Functions (JavaScript)

This project solves the classic Codewars JavaScript challenge where numbers and operations are represented as functions, allowing expressions like:

seven(times(five()))  // 35

four(plus(nine()))    // 13


The challenge focuses on higher-order functions, closures, and function composition.

📌 Problem Overview

You are given:

Number functions: zero() to nine()

Operation functions: plus(), minus(), times(), dividedBy()

Each calculation must be written using only functions, following this format:

number(operation(number))

🧠 Key Idea

Number functions

Return their numeric value

OR apply an operation if one is passed

Operation functions

Return a function that performs the operation

Use closures to store the second operand

This enables expressions like:

seven(times(five()))


Which evaluates as:

7 × 5 = 35

⚙️ Implementation

🔢 Number Functions

~~~
function zero(fn)  { return fn ? fn(0) : 0 }

function one(fn)   { return fn ? fn(1) : 1 }

function two(fn)   { return fn ? fn(2) : 2 }

function three(fn) { return fn ? fn(3) : 3 }

function four(fn)  { return fn ? fn(4) : 4 }

function five(fn)  { return fn ? fn(5) : 5 }

function six(fn)   { return fn ? fn(6) : 6 }

function seven(fn) { return fn ? fn(7) : 7 }

function eight(fn) { return fn ? fn(8) : 8 }

function nine(fn)  { return fn ? fn(9) : 9 }

~~~


➕➖✖️➗ Operation Functions
~~~
function plus(y) {

  return function(x) {
  
    return x + y;
    
  }
  
}

function minus(y) {

  return function(x) {
  
    return x - y;
    
  }
}

function times(y) {
  return function(x) {
    return x * y;
  }
  
}

function dividedBy(y) {

  return function(x) {
  
    return Math.floor(x / y);
    
  }
  
}
~~~

🧪 Examples
seven(times(five()))      // 35

four(plus(nine()))        // 13

eight(minus(three()))     // 5

six(dividedBy(two()))     // 3

🧩 Concepts Used

Higher-order functions

Closures

Function composition

Conditional execution

Integer division

🎯 Why This Problem Matters

This challenge tests:

Real understanding of JavaScript functions

Ability to think functionally

Interview-level JS fundamentals

If you can solve this cleanly, your JavaScript basics are strong.

✅ Takeaway

Operations return functions

Numbers execute those functions

No global variables needed

Clean, readable, and functional approach
