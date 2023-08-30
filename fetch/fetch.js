// Send a GET request using fetch
// GET requests are used to retrieve information from the server.

// Here's what a GET /categories/:categoryTag/products request might look like using the fetch API:

fetch("/categories/beauty/products")
  .then(function(res) {
    console.log("response: ", res);
    return res.text();
  })
  .then(function(data) {
    console.log("data:", data);
  });


//   Send a POST request using fetch
// POST requests are used to create data on the server.

// Here's what a POST /products/:productId/reviews request might look like using the fetch API:

fetch("/products/1/reviews", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "comment=works+well&starRating=4"
})
  .then(function(res) {
    return res.text();
  })
  .then(function(data) {
    console.log(data);
  });
