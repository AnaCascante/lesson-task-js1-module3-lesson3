//  Question 1 Convert the below functions to one-line arrow functions.

/*function greet(name) {
  return `Hello ${name}!`;
}*/

const greet = name => return `Hello ${name}`;

/*function add(a, b) {
  return a + b;
}*/

const add = (a,b) => return a+b;


// Question 2 Convert the below code to use the then/catch syntax instead.

/*async function getCatFacts() {
  try {
    const response = await fetch("https://noroff.herokuapp.com/v1/cat-facts/facts");
    const results = await response.json();
    console.log(results.length);
  } catch (error) {
    console.log(error);
  }
}*/

fetch(url)
    .then { function (response){
        console.log (response);
        return response.json ();
    }}
    .then { function (results){
        console (results.length); 
    }}
    .catch (function (error){
        console.log (error);
    })


// another way 

function getCatFacts() {
    fetch("https://noroff.herokuapp.com/v1/cat-facts/facts")
        .then(function (response) {
            return response.json();
        })
        .then(function (results) {
            console.log(results.length);
        })
        .catch(function (error) {
            console.log(error);
        });
}

getCatFacts();

// or with arrow 

function getCatFacts2() {
    fetch("https://noroff.herokuapp.com/v1/cat-facts/facts")
        .then((response) => response.json())
        .then((results) => {
            console.log(results.length);
        })
        .catch((error) => console.log(error));
}

getCatFacts2();