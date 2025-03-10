// Initialize the cats array with default values
let cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat to the end of the cats array destructively
function destructivelyAppendCat(name) {
  cats.push(name);
}
// Function to prepend a cat to the beginning of the array destructively
function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  
  // Function to remove the last cat from the array destructively
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  // Function to remove the first cat from the array destructively
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  
  // Function to append a cat and return a new array (non-destructive)
  function appendCat(name) {
    return [...cats, name];  // Using spread operator to create a new array
  }
  
  // Function to prepend a cat and return a new array (non-destructive)
  function prependCat(name) {
    return [name, ...cats];  // Using spread operator to create a new array
  }
  
  // Function to remove the last cat and return a new array (non-destructive)
  function removeLastCat() {
    return cats.slice(0, -1);  // Using slice to return a new array without the last element
  }
  
  // Function to remove the first cat and return a new array (non-destructive)
  function removeFirstCat() {
    return cats.slice(1);  // Using slice to return a new array without the first element
  }
  
