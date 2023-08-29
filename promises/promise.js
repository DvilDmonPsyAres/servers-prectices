// Returning to another file-reading example, consider the following block of code.

readFile("manifest.txt", "utf8", (err, manifest) => {
  if (err) {
    console.error("Badness happened", err);
  } else {
    const fileList = manifest.split("\n");
    console.log("Reading", fileList.length, "files");
  }
});

// If this succeeds, then you would expect a statement like "Reading 12 files" to appear if the file contained a list of 12 files.

// Now, to rewrite that using a Promise and printing that same statement, you would get a file-reading function that returns a Promise object. Later on, you'll see how to create one for yourself. At this moment, just presume that a function named readFilePromise exists. When you call it, it would return a promise that, when fulfilled, would invoke the success handler registered for the object through the then method. Very explicitly, you could write that code like this.

/* EXPLICIT CODE: NOT FOR REAL USE */

// Declare a function that will handle the content of
// the file read by readFilePromise.
function readFileSuccessHandler(manifest) {
  const fileList = manifest.split("\n");
  console.log("Reading", fileList.length, "files");
}

// Get a promise that will return the contents of the
// file.
const filePromise = readFilePromise("manifest.txt");

// Register a success handler to process the contents
// of the file. In this case, it is the function
// defined above.
filePromise.then(readFileSuccessHandler);


// Most Promise-based code does not look like that, though. Idiomatic JavaScript instructs to not create variables that don't need to be created. You would see the above code in a real-live code base written like this, instead. Spend a moment comparing and contrasting the forms from very explicit to idiomatic.

readFilePromise("manifest.txt").then(manifest => {
  const fileList = manifest.split("\n");
  console.log("Reading", fileList.length, "files");
});


// That code block has a lot of words to describe what happens at each step of the process of using "chainable thens". In the real world, were you to find that code in a real application, it would likely look like the following.

readFilePromise("manifest.txt")
  .then(manifest => manifest.split("\n"))
  .then(fileList => fileList.length)
  .then(numberOfFiles => console.log("Reading", numberOfFiles, "files"));


  Putting it all together
You can now use all of this knowledge to use Promises to read a manifest file, read each of the files in the manifest files, and count all of the characters in those files with code that reads much better than this.

readFile("manifest.txt", "utf8", (err, manifest) => {
  const fileNames = manifest.split("\n");
  const characterCounts = {};
  let numberOfFilesRead = 0;

  // Loop over each file name
  for (let fileName of fileNames) {
    // Read that file's content
    readFile(fileName, "utf8", (err, content) => {
      // Count the characters and store it in
      // characterCounts
      countCharacters(characterCounts, content);

      // Increment the number of files read
      numberOfFilesRead += 1;

      // If the number of files read is equal to the
      // number of files to read, then print because
      // we're done!
      if (numberOfFilesRead === fileNames.length) {
        console.log(characterCounts);
      }
    });
  }
});


// Remember that you've created a countCharacters methods elsewhere that does the grunt work of counting characters. So, now, if you were to list out the steps that you'd like to have the code perform, you should be able to write a Promise-based chain of thens that does that work.

// Read manifest.txt.
// Split the content into a list of files.
// Read the contents of each file.
// If all of them succeed, then
// count the characters in each file and
// print the character counts.
// If anything fails, print the error.
// So, in code, that you would translate that to the following.

const characterCounts = {};
readFilePromise('manifest.txt')
  .then(fileContent => fileContent.split('\n'))
  .then(fileList => fileList.map(fileName => readFilePromise(fileName)))
  .then(lotsOfReadFilePromises => Promise.all(lotsOfReadFilePromises))
  .then(contentsArray => contentsArray.forEach(c => countCharacters(characterCounts, c))
  .then(() => console.log(characterCounts))
  .catch(reason => console.error(reason));
