function firstStep(input) {
    // Your code here
    return input.split("&")
  }

  function secondStep(input) {
    // Your code here
    let newInput = [];
    for(let i = 0; i < input.length; i++) {
      newInput.push(input[i].split("="))
    }
    return newInput;
  }

  function thirdStep(input) {
    // Your code here
    let newInput = [];
    for(let i = 0; i < input.length; i++) {
      let subArr=[];
      for(let j = 0; j < input[i].length; j++) {
        subArr.push(input[i][j].replace(/\+/g, " "))
      }
      newInput.push(subArr);
    }
    return newInput;
  }

  function fourthStep(input) {
    // Your code here

    for(let i = 0; i < input.length; i++) {

      for(let j = 0; j < input[i].length; j++) {
        if(decodeURI(input[i][j]) === decodeURIComponent(input[i][j])) {
          input[i][j] = decodeURI(input[i][j])
        }
      }
    }
    return input;

  }

  function fifthStep(input) {
    // Your code here
    let newObj = {}
    for(keys of input) {
      newObj[keys[0]] = keys[1];
    }
    return newObj;
  }

  function parseBody(str) {
    // Your code here
    return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))))
  }

  /******************************************************************************/
  /******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

  module.exports = {
    firstStep,
    secondStep,
    thirdStep,
    fourthStep,
    fifthStep,
    parseBody
  };
