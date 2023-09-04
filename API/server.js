const http = require('http');
const fs = require('fs');

/* ============================ SERVER DATA ============================ */
let artists = JSON.parse(fs.readFileSync('./seeds/artists.json'));
let albums = JSON.parse(fs.readFileSync('./seeds/albums.json'));
let songs = JSON.parse(fs.readFileSync('./seeds/songs.json'));

let nextArtistId = 2;
let nextAlbumId = 2;
let nextSongId = 2;

// returns an artistId for a new artist
function getNewArtistId() {
  const newArtistId = nextArtistId;
  nextArtistId++;
  return newArtistId;
}

// returns an albumId for a new album
function getNewAlbumId() {
  const newAlbumId = nextAlbumId;
  nextAlbumId++;
  return newAlbumId;
}

// returns an songId for a new song
function getNewSongId() {
  const newSongId = nextSongId;
  nextSongId++;
  return newSongId;
}

/* ======================= PROCESS SERVER REQUESTS ======================= */
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // assemble the request body
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => { // finished assembling the entire request body
    // Parsing the body of the request depending on the "Content-Type" header
    if (reqBody) {
      switch (req.headers['content-type']) {
        case "application/json":
          req.body = JSON.parse(reqBody);
          break;
        case "application/x-www-form-urlencoded":
          req.body = reqBody
            .split("&")
            .map((keyValuePair) => keyValuePair.split("="))
            .map(([key, value]) => [key, value.replace(/\+/g, " ")])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;
        default:
          break;
      }
      console.log(req.body);
    }

    /* ========================== ROUTE HANDLERS ========================== */

    // Your code here
    //Get all artists
    if(req.method === 'GET' && req.url === '/artists') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(artists));
    }

    //get a specific artist's detail based on artist id
    if(req.method === 'GET' && req.url.startsWith('/artists') && req.url.split('/').length === 3) {
      try {
        const artistId = Number(req.url.split('/')[2])
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(artists[artistId]));
      }
      catch(err) {
        return console.log('Error:', err)
      }
    }
    //Add an Artist
    if(req.method === 'POST' && req.url === '/artists') {
      try {
        let newArtist = {};
        newArtist.artistId = getNewArtistId();
        newArtist.name = req.body.name;
        artists[newArtist.artistId] = newArtist;
        res.statusCode = 201 //created
        res.setHeader("Content-Type", "application/json")
        res.write(JSON.stringify(newArtist))
        return res.end();
      } catch(error) {
        console.error('Error:', error);
      }
    }

    //Edit artist by id
    if((req.method === 'PUT' || req.method === 'PATCH') && req.url.startsWith('/artists/')) {
      try {
        const artistId = req.url.split('/')[2];
        artists[artistId].name = req.body.name;
        console.log(artists)
        res.statusCode = 200
        res.setHeader("Content-type", "application/json");
        res.write(JSON.stringify(artists[artistId]))
        res.end();
        return;
      }
      catch(error) {
        console.error('Error:', error);
      }
    }

    // Delete specific artist by ArtistId
    if(req.method === 'DELETE' && req.url.startsWith('/artists/')) {
      try {
        const artistId = Number(req.url.split('/')[2]);
        // Check if the artistId exists in the artistsData object
        if (artists.hasOwnProperty(artistId)) {
        // Remove the artist from the object
          delete artists[artistId];
        }
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json")
        res.write(JSON.stringify({"message": "Successfully deleted"}))
        return res.end();
      } catch(error) {
        console.error('Error:', error);
      }
    }

    // get allbums of specific artist based on artistID
    if(req.method === 'GET' && req.url.startsWith('/artists/') && req.url.split('/')[3] === 'albums') {
      try {
        const artistIdforAlbums = Number(req.url.split('/')[2])
        const artistAlbums = []
        // Convert the albums object into an array
        const albumsArray = Object.values(albums);
        //loop over albums object to create an artist album library
        for(const album of albumsArray) {
          if(album.artistId === artistIdforAlbums) {
            artistAlbums.push(album);
          }
        }
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        res.write(JSON.stringify(artistAlbums));
        return res.end();
      } catch(error) {
        console.log('Error:', error)
      }
    }
    // Get a specific album's details based on albumId
    if(req.method === 'GET' && req.url.startsWith('/albums/') && req.url.split('/').length === 3) {
      try {
        const albumIdSearch = Number(req.url.split('/')[2])
        // Check if the albumId exists in the albumsData object
        let resBody;
        if (albums.hasOwnProperty(albumIdSearch)) {
          // Remove the artist from the object
            resBody = albums[albumIdSearch];
            res.statusCode = 200;
            res.setHeader("Content-type", "application/json")
            return res.end(JSON.stringify(resBody));
        } else {
          res.statusCode = 404;
          res.setHeader("Content-type", "application/json")
          return res.end(JSON.stringify('Album not Found 7'))
        }
      } catch(error) {
        console.error('Error:', error);
      }
    }
    // 8 Add an album to a specific artist based on artistId
    if(req.method === 'POST' && req.url.startsWith('/artists/') && req.url.split('/')[3] === 'albums') {
      try {
        const artistId = Number(req.url.split('/')[2]);

        if (artists.hasOwnProperty(artistId)) {
            const newAlbum = {}
            newAlbum.albumId = getNewAlbumId();
            newAlbum.name = req.body.name;
            newAlbum.artistId = artistId;
            albums[newAlbum.albumId] = newAlbum;

            res.statusCode = 201; //created
            res.setHeader("Content-type", "application/json")

            return res.end(JSON.stringify(newAlbum));
        } else {
          res.statusCode = 404;
          res.setHeader("Content-type", "application/json")
          return res.end(JSON.stringify('Artist do not Exists'))
        }
      } catch(error) {
        console.error('Error:', error);
      }
    }

    //Edit a specified album by albumId
    if((req.method === 'PUT' || req.method === 'PATCH') && req.url.startsWith('/albums/')) {
      try {
        const currAlbumid = Number(req.url.split('/')[2]);
        if(albums.hasOwnProperty(currAlbumid)) {
          albums[currAlbumid].name = req.body.name;
          res.statusCode = 200;
          res.setHeader('Content-type', "application/json");
          return res.end(JSON.stringify(albums[currAlbumid]));
        } else {
          res.statusCode = 404;
          res.setHeader('Content-type', "application/json");
          return res.end(JSON.stringify('Somethings Wrong 9'))
        }

      } catch(error) {
        console.error('Error:', error);
      }
    }

    //Delete a specified album by albumId
    if(req.method === 'DELETE' && req.url.startsWith('/albums/')) {
      try {
        const currAlbumid = Number(req.url.split('/')[2]);
        if(albums.hasOwnProperty(currAlbumid)) {
          delete albums[currAlbumid];
          res.statusCode = 200;
          res.setHeader('Content-type', "application/json");
          return res.end(JSON.stringify({"message": "Sucesfully deleted"}));
        } else {
          res.statusCode = 404;
          res.setHeader('Content-type', "application/json");
          return res.end(JSON.stringify('Somethings Wrong 10'))
        }

      } catch(error) {
        console.error('Error:', error);
      }
    }

    // Get all songs of a specific artist based on artistId
    if(req.method === 'GET' && req.url.split('/')[3] === 'songs') {
      try {
        const currArtistId = Number(req.url.split('/')[2]);
        const currArtistSongs = [];
        // Convert the songs object into an array
        const songsArray = Object.values(songs);
        const albumsArray = Object.values(albums);

        for(const album of albumsArray) {
          if(album.artistId === currArtistId) {
            for(const song of songsArray) {
              if(album.albumId === song.albumId) {
                currArtistSongs.push(song);
              }
            }
          }
        }
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        res.write(JSON.stringify(currArtistSongs))
        return res.end();
      } catch(error) {
        console.error('Error:', error);
      }
    }

    //Get all songs of a specific album based on albumId
    if(req.method === 'GET' && req.url.startsWith('/albums/') && req.url.split('/')[3] === 'songs'){
      try{
        const currAlbumId = Number(req.url.split('/')[2]);
        const songsArray = Object.values(songs);
        const albumSongs = [];
        if(albums.hasOwnProperty(currAlbumId)){
          for(const song of songsArray){
            if(song.albumId === currAlbumId) {
              albumSongs.push(song);
            }
          }
        }
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        return res.end(JSON.stringify(albumSongs));

      } catch(error) {
        console.error('Error:', error);
      }
    }

    // Get a specific song's details based on songId
    if(req.method === 'GET' && req.url.startsWith('/songs/') && req.url.split('/').length === 3) {
      try {
        const currSongId = Number(req.url.split('/')[2])
        if(songs.hasOwnProperty(currSongId)) {
          res.statusCode = 200;
          res.setHeader("Content-type", "application/json");
          return res.end(JSON.stringify(songs[currSongId]));
        }
      } catch(error) {
        console.error('Error:', error);
      }
    }

    // Add a song to a specific album based on albumId
    if(req.method === 'POST' && req.url.startsWith('/albums/') && req.url.split('/')[3] === 'songs') {
      try {
        const currAlbumId = Number(req.url.split('/')[2])
        if(songs.hasOwnProperty(currAlbumId)) {
          const newSong = {};
          newSong.songId = getNewSongId();
          newSong.name = req.body.name
          newSong.trackNumber = req.body.trackNumber
          newSong.albumId = currAlbumId;
          newSong.lyrics = req.body.lyrics;
          songs[newSong.songId] = newSong;
          res.statusCode = 201;
          res.setHeader("Content-type", "application/json");
          return res.end(JSON.stringify(newSong));
        }
      } catch(error){
        console.error('Error:', error);
      }
    }

    // Edit a specified song by songId
    if((req.method === 'PUT' || req.method === 'PATCH') && req.url.startsWith('/songs/')) {
      try {
        const currSongId = Number(req.url.split('/')[2]);
        if(songs.hasOwnProperty(currSongId)) {
          const currSong = songs[currSongId];
          currSong.name = req.body.name;
          currSong.trackNumber = req.body.trackNumber;
          currSong.lyrics = req.body.lyrics;
          console.log(songs)
          res.statusCode = 200;
          res.setHeader("Content-type", "application/json");
          return res.end(JSON.stringify(songs[currSongId]));
        }
      } catch(error) {
        console.log('Error:', error);
      }
    }

    // Delete a specified song by songId

    if(req.method === 'DELETE' && req.url.startsWith('/songs/')) {
      try{
        const currSongId= Number(req.url.split('/')[2]);
        if(songs.hasOwnProperty(currSongId)) {
          delete songs[currSongId];
          console.log(songs)
          res.statusCode = 200;
          res.setHeader("Content-type", "application/json");
          return res.end(JSON.stringify({"message": "Sucesfully deleted"}));
        }
      } catch(error) {
        console.error('Error:', error);
      }

    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.write("Endpoint not found");
    return res.end();
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
