function log(message) {
    console.log(message);
    return Promise.resolve();
};


function pause(numberOfSeconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), numberOfSeconds * 1000);
    });
}



log("Q")
  .then(() => log("W"))
  .then(() => pause(2))
  .then(() => log("E"))
  .then(() => log("R"))
  .then(() => pause(1))
  .then(() => log("T"));


  const { readFile } = require("fs"); // This is just the way to get
  // the readFile method into the
  // current file. If you don't
  // understand it, that's ok.

  function readFilePromise(path) {
    return new Promise((resolve, reject) => {
      readFile(path, "utf8", (err, content) => {
        if (err) {
          reject(err);
        } else {
          resolve(content);
        }
      });
    });
  }

//   You can create your own Promise objects from scratch by using the Promise constructor with the form
new Promise((resolve, reject) => {
  // do some async stuff
  // call resolve(value) to make the Promise succeed
  // call reject(reason) to make the Promise fail
});
