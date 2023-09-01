/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
fetch(url, {
  method,
  body,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});


fetch('/products', {
  method: "POST",
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }});


/* ============================== Phase 2 ============================== */

// Your code here
fetch('/products', {
  method: "POST",
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }})
  .then(response => {
    console.log("Status Code:", response.status); // Print the status code
    console.log("Content-Type Header:", response.headers.get("content-type")); // Print the Content-Type header
    console.log("Response URL:", response.url); // Print the URL of the response
})
.catch(error => {
    console.error("Error:", error);
});



/* ============================== Phase 3 ============================== */

// Your code here
fetch('/products', {
  method: "POST",
  body: new URLSearchParams({
    name: "Caribbean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: 11.99,
    categories: "grocery"
  }),
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }})
  .then(response => {
    console.log("Status Code:", response.status); // Print the status code
    console.log("Content-Type Header:", response.headers.get("content-type")); // Print the Content-Type header
    console.log("Response URL:", response.url); // Print the URL of the response
})
.catch(error => {
    console.error("Error:", error);
});



fetch('/products/1/reviews', {
  method: 'POST',
  body: new URLSearchParams({
    comment: "I love This Product222",
    starRating: 5
  }),
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
.then(res => {
  console.log("StatusCode:", res.status);
  console.log("Content-type:", res.headers.get("content-type"));
  console.log("Response url:", res.url);
})
.catch(error => {
  console.error("Error:", error);
})
