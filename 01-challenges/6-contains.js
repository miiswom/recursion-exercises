/* Question 6: Search JS object
Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

Sample:

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
*/

function contains(obj, searchValue) {

// Base case: if a condition is met : obj is not an object itself, but rather a primitive value or null  
if(typeof obj !== "object" || obj == null) {
    return obj === searchValue
} 
// Recursive case: if the object is an Object (but not null), iterate over its values
for(const value of Object.values(obj)) {
// Object.values(object) takes an object and returns a list containing object's values
// Recursively call: call contains() for each value
    if(contains(value, searchValue)) {
      return true
    }
  }
  return false
}

var nestedObject = {
  data: {
      info: {
          stuff: {
              thing: {
                  moreStuff: {
                      magicNumber: 44,
                      something: 'foo2'
                  }
              }
          }
      }
  }
}

let hasIt = contains(nestedObject, 44); // true

console.log(hasIt)