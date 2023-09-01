/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here

fetch("/products")
  .then(function(res) {
    console.log("response: ", res);
  })
  .catch(function(error){
    console.error("Error:", error)
})


/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here

fetch("/products")
  .then(function(res) {
  console.log("response:", res);
  return res.status;
  })
  .then(function(status) {
    console.log("status:", status)
  })
.catch(function(error){
  console.error("Error:", error)
})

/* =================== 3. Print the Content-Type Header =================== */

// Your code here
fetch("/products")
  .then(function(res) {
  console.log("response:", res);
  return res.headers;
  })
  .then(function(headers) {
  console.log("Content-Type:", headers.get("Content-Type"));
  })
  .catch(function(error){
  console.error("Error:", error)
})

/* ============== 4. Print the body of the response as text =============== */

// Your code here
fetch("/products")
.then(function(res) {
  console.log("response: ", res);
  return res.text();
})
.then(function(data) {
  console.log("data:", data);
});
