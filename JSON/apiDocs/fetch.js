fetch('/artists', {
  method: "GET",
  headers: {"Content-type": "application/json"}})
  .then(response => {
    console.log("Status Code:", response.status); // Print the status code
    console.log("Content-Type Header:", response.headers.get("content-type")); // Print the Content-Type header
    console.log("Response URL:", response.url); // Print the URL of the response
})
  .catch(error => {
      console.error("Error:", error);
});

// 1 Get all the artists
fetch('/artists')
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(error => {
    console.error("Error:", error)});

// 2 Get a specific artist's details based on artistId
fetch('/artists/1')
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(error => {
    console.error("Error:", error)});

// 3 ADD AN ARTIST
fetch('/artists', {
  method: "POST",
  headers: {"Content-type": "application/json"},
  body: JSON.stringify({
    name: 'New Artist Name',
    albums: []
  })
})
  .then(response => {
    console.log("Status Code:", response.status); // Print the status code
    console.log("Content-Type Header:", response.headers.get("content-type")); // Print the Content-Type header
    console.log("Response URL:", response.url); // Print the URL of the response
})
  .catch(error => {
      console.error("Error:", error);
});

// 4 Edit a specified artist by artistId
fetch('/artists/:artistId', {
  method: "PUT",
  headers: {"Content-type": "application/json"},
  body: JSON.stringify({
    name: 'New Edited Artist Name',
    albums: []
  })
})
  .then(response => {
    console.log("Status Code:", response.status); // Print the status code
    console.log("Content-Type Header:", response.headers.get("content-type")); // Print the Content-Type header
    console.log("Response URL:", response.url); // Print the URL of the response
})
  .catch(error => {
      console.error("Error:", error);
});

// 5 Delete a specified artist by artistId
fetch('/artists/:artistId', {
  method: "DELETE",
})
  .then(response => {
    console.log("Status Code:", response.status); // Print the status code
    console.log("Content-Type Header:", response.headers.get("content-type")); // Print the Content-Type header
    console.log("Response URL:", response.url); // Print the URL of the response
})
  .catch(error => {
      console.error("Error:", error);
});

// 6 Get all albums of a specific artist based on artistId
fetch('/artists/:artistId/albums', {
  method: "GET",
})
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(error => {
    console.error("Error:", error)});

// 7 Get a specific album's details based on albumId
fetch('/albums/:albumId', {
  method:'GET',
})
  .then(res => res.json())
  .then(resBody => console.log('resBody: ', resBody))
  .catch(error => console.error('Error:', error));

// 8 Add an album to a specific artist based on artistId

fetch('/artists/:artistId/albums', {
  method:'POST',
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({
  name: "new Album name",
  songs: []
  })
})
  .then(res => res.json())
  .then(resBody => console.log('resBody: ', resBody))
  .catch(error => console.error('Error:', error));


// 9 Edit a specified album by albumId
fetch('/albums/:albumId', {
  method:'PUT',
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({
  name: "new Edited Album name",
  songs: []
  })
})
  .then(res => res.json())
  .then(resBody => console.log('resBody: ', resBody))
  .catch(error => console.error('Error:', error));

//getting statuscode
  fetch('/albums/:albumId', {
    method: "PUT",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      name: "new Edited Album name",
      songs: []
      })})
    .then(response => {
      console.log("Status Code:", response.status); // Print the status code
      console.log("Content-Type Header:", response.headers.get("content-type")); // Print the Content-Type header
      console.log("Response URL:", response.url); // Print the URL of the response
      response.json()
        .then(resBody => console.log("JSON resBody:", resBody))
  })
    .catch(error => {
        console.error("Error:", error);
  });

// 10 Delete a specified album by albumId
fetch('/albums/:albumId', {
  method: "DELETE",
  })
  .then(response => {
    console.log("Status Code:", response.status); // Print the status code
    console.log("Content-Type Header:", response.headers.get("content-type")); // Print the Content-Type header
    console.log("Response URL:", response.url); // Print the URL of the response
    response.json()
      .then(resBody => console.log("JSON resBody:", resBody))
})
  .catch(error => {
      console.error("Error:", error);
});

// 11 Get all songs of a specific artist based on artistId

fetch('/artists/:artistId/songs', {
  method: "GET",
  })
  .then(response => {
    console.log("Status Code:", response.status); // Print the status code
    console.log("Content-Type Header:", response.headers.get("content-type")); // Print the Content-Type header
    console.log("Response URL:", response.url); // Print the URL of the response
    response.json()
      .then(resBody => console.log("JSON resBody:", resBody))
})
  .catch(error => {
      console.error("Error:", error);
});

// 12 Get all songs of a specific album based on albumId

fetch('/albums/:albumId/songs', {
  method: "GET",
  })
  .then(response => {
    console.log("Status Code:", response.status); // Print the status code
    console.log("Content-Type Header:", response.headers.get("content-type")); // Print the Content-Type header
    console.log("Response URL:", response.url); // Print the URL of the response
    response.json()
      .then(resBody => console.log("JSON resBody:", resBody))
})
  .catch(error => {
      console.error("Error:", error);
});

// 13 Get all songs of a specified trackNumber

fetch('/songs/:trackNumber', {
  method: "GET",
  })
  .then(response => {
    console.log("Status Code:", response.status); // Print the status code
    console.log("Content-Type Header:", response.headers.get("content-type")); // Print the Content-Type header
    console.log("Response URL:", response.url); // Print the URL of the response
    response.json()
      .then(resBody => console.log("JSON resBody:", resBody))
})
  .catch(error => {
      console.error("Error:", error);
});


// 14 Get a specific song's details based on songId

fetch('/songs/:songId', {
  method: "GET",
  })
  .then(response => {
    console.log("Status Code:", response.status); // Print the status code
    console.log("Content-Type Header:", response.headers.get("content-type")); // Print the Content-Type header
    console.log("Response URL:", response.url); // Print the URL of the response
    response.json()
      .then(resBody => console.log("JSON resBody:", resBody))
})
  .catch(error => {
      console.error("Error:", error);
});


// 15 Add a song to a specific album based on albumId

fetch('/albums/:albumId/songs', {
  method: "POST",
  headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      name: "new Song Name",
      lyrics: "newLyrics\ncontinue the lyrics"
      }),
  })
  .then(response => {
    console.log("Status Code:", response.status); // Print the status code
    console.log("Content-Type Header:", response.headers.get("content-type")); // Print the Content-Type header
    console.log("Response URL:", response.url); // Print the URL of the response
    response.json()
      .then(resBody => console.log("JSON resBody:", resBody))
})
  .catch(error => {
      console.error("Error:", error);
});


// 16 Edit a specified song by songId

fetch('/songs/:songId', {
  method: "PUT",
  headers: {"Content-type": "application/json"},
  body: JSON.stringify({
    name: "new Edited Song Name",
    lyrics: "newLyrics\ncontinue the lyrics"
    })
  })
  .then(response => {
    console.log("Status Code:", response.status); // Print the status code
    console.log("Content-Type Header:", response.headers.get("content-type")); // Print the Content-Type header
    console.log("Response URL:", response.url); // Print the URL of the response
    response.json()
      .then(resBody => console.log("JSON resBody:", resBody))
})
  .catch(error => {
      console.error("Error:", error);
});

// 17 Delete a specified song by songId

fetch('/songs/:songId', {
  method: "DELETE",
  })
  .then(response => {
    console.log("Status Code:", response.status); // Print the status code
    console.log("Content-Type Header:", response.headers.get("content-type")); // Print the Content-Type header
    console.log("Response URL:", response.url); // Print the URL of the response
    response.json()
      .then(resBody => console.log("JSON resBody:", resBody))
})
  .catch(error => {
      console.error("Error:", error);
});
