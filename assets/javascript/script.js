$(document).ready(function() {
  var client_id = 'a0cbb93ccba44ab8b9c2ad70242833ee'; // Replace with your actual Spotify client ID
  var redirect_Uri = 'https://www.google.com'; // Replace with your redirect URI
  var scope = 'user-read-private user-read-email'; // Specify the required scopes
  var authCode = getQueryParam('code'); // Get the authorization code from the query parameters
  var accessToken = '';

  // Function to extract query parameters from the URL
  function getQueryParam(param) {
      var urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
  }

  // Check if an authorization code is present in the query parameters
  if (!authCode) {
      // Redirect the user to the Spotify authorization URL
      var authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${encodeURIComponent(redirect_Uri)}&scope=${encodeURIComponent(scope)}`;
      window.location.href = authorizeUrl; // Redirect the user to Spotify for authorization
  } else {
      // You have obtained the authorization code, now exchange it for an access token
      var tokenUrl = 'https://accounts.spotify.com/api/token';

      // Define data object for the token request
      var data = {
          grant_type: 'authorization_code',
          code: authCode,
          redirect_uri: redirect_Uri,
      };

      // Define headers for the token request
      var headers = {
          'Authorization': `Basic ${btoa(`${client_id}:${clientSecret}`)}`,
          'Content-Type': 'application/x-www-form-urlencoded',
      };

      // Make a POST request to exchange the authorization code for an access token
      fetch(tokenUrl, {
          method: 'POST',
          body: new URLSearchParams(data),
          headers: headers,
      })
      .then(response => response.json())
      .then(data => {
          accessToken = data.access_token;

          // Use the access token to make requests to the Spotify API
          var apiUrl = 'https://api.spotify.com/v1/me';

          fetch(apiUrl, {
              headers: {
                  'Authorization': `Bearer ${accessToken}`,
              },
          })
          .then(response => response.json())
          .then(data => {
              // Handle the API response (e.g., display user data)
              console.log(data);
          })
          .catch(error => {
              console.error('Error:', error);
          });
      })
      .catch(error => {
          console.error('Error:', error);
      });
  }
});


    