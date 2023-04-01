const access_token = windows.spotify_token

function getStreams() {
  // Get the song ID from the input field
  const song_id = document.getElementById("song-id").value;
  
  // Set up the endpoint URL with the song ID
  const url = `https://api.spotify.com/v1/tracks/${song_id}`;
  
  // Set up the headers with the access token
  const headers = {
    'Authorization': `Bearer ${access_token}`,
    'Content-Type': 'application/json'
  };
  
  // Make the API request
  fetch(url, { headers })
    .then(response => response.json())
    .then(data => {
      // Parse the response JSON to get the number of streams
      const streams = data.popularity;
      
      // Display the result on the page
      document.getElementById("result").innerHTML = `The number of streams for the song is: ${streams}`;
    })
    .catch(error => {
      // Display an error message if the API request fails
      console.error(error);
      document.getElementById("result").innerHTML = `Error: ${error}`;
    });
}
