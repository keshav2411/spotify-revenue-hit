var client_id = '1951ece4bb2d4fc88bee82092fc1e3a8';
var client_secret = '25b4f335c39940f0bd325e9815c9a3aa';

// Make a POST request to the Spotify API to retrieve the client access token
$.ajax({
    url: 'https://accounts.spotify.com/api/token',
    type: 'POST',
    data: {
        grant_type: 'client_credentials',
        client_id: client_id,
        client_secret: client_secret
    },
    success: function(response) {
        // Store the client access token in a global variable
        var access_token = response.access_token;
        window.spotify_token = access_token;
        console.log(access_token);
    }
});
