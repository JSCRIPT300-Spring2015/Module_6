## Module_6 assignment

For this assignment, you're going to fork this repository to your own Github account and clone that repository locally. Inside the repo you'll find an index.html test harness, a js/libs directory containing mocha.js, chai.js, and mocha.css. You'll also have enhancedDate.js and an empty enhancedDate.spec.js. 

Write unit tests for the included enhancedDate module. You will write at least two tests for each of the six interface functions. Each of these methods returns a value, so you should have one test for each that validates that return value . Unit tests should be predictable, meaning you will need to do some setup to create a predictable outcome. 

example (feel free to use this for one of your tests):

1. create a new Date object to set your date with: enhancedDate(new Date(2015, 4, 14));
2. validate that enhancedDate.getDayName() is equal to 'Thursday'

Other types of tests to consider: 
checking the type of the return value
for a function with a boolean return value, the expected return value matches for both possible conditions
for a function that takes a value and should return the same value, that the values match

Because not all of the methods you're testing will require the same setup, you will want to do the setup step inside the spec function itself (the it() method). Refer to the examples of different types of Chai assertions from the slide deck to help construct your tests.

This assignment is due by Thursday, May 21st by 7pm. Once grading has been completed, a :+1: comment will be added to the pull request and the pull request will be closed.