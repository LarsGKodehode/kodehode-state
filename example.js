/**
 * A simple recap of how in JavaScript
 * we can pass functions around
 * the same way we pass variables
 * 
 * When we have a function that takes a function
 * as a parameter we call that function a higher-order-function
 * and the function that gets passed around
 * we call a callback
 */

/**
 * A higher order function
 */
function takesCallback(callback) {
  callback('some string')
}

/**
 * Calling the higer order function
 * with another function as an argument
 */
takesCallback(
  // Often times we use anonymous function for this
  // and since ES6 arrow functions
  (string) => console.log(string)
)