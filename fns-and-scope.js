//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  function isTyler(name){
    if(name === 'Tyler'){
      return true;
    }
    else
      return false;
  }

  isTyler(name)
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  function getName(){
    var person = prompt("Please enter name")
    return person;
  }
   getName()
console.log("Hello");
//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  // Code Here
  function welcome(){
    var result = getName();
    alert("Welcome, " + result);
  }
  
  welcome()

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
//Parameter is the variable defined within the function parantheses.
//Argument is what you put into the paranhese of the function when you are invoking.

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?



  //Answer Here
// Undefined, Null, False, NaN, 0
// you can create a function that takes in a string as an argument then create an if statement that compares if the str is equal to falsey values and should return true.

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  function myName(){
    return "Taylor"
  }

  myName()

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
function newMyName(){
return myName();
}
//Now alert the result of invoking newMyName
alert(newMyName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  
  function outerFn(){
    let name = function(){
      return "Taylor"
    }
    return name
  }

//Now save the result of invoking outerFn into a variable called innerFn.


  //Code Here
var innerFn = outerFn();
//Now invoke innerFn.
innerFn()