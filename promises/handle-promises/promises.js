function stretch() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('done stretching');
      resolve();
    }, 1000); // 100o miliseconds = 1 second
  }, (reject) => { err => {
    console.log('error');
    reject();
  }});
}

function runOnTreadmill() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     console.log("done running on treadmill");
     resolve();
    }, 500);
  });
}

function liftWeights() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting wieghts");
      resolve();
    }, 2000);
  });
}

function workout() {
  // Your code here
  stretch()
    .then(() => runOnTreadmill())
    .then(() => liftWeights())
    .then(() => console.log('done working out'))
    .catch((err) => console.log(err))
}

// function workout() {
//   // refactor this code to use Promise.all
//   stretch()
//     .then(runOnTreadmill)
//     .then(liftWeights)
//     .then(() => console.log("done working out"))
//     .catch((err) => console.log(err));
// }


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
