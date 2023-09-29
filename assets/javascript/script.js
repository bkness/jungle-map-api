$(document).ready(function() {



var client_id = 'CLIENT ID';
var redirect_Uri = 'http://localhost:8888/callback';
var scope = 'user-read-private user-read-email'; // Specify the required scopes need to figure out scopes we need
var authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${encodeURIComponent(redirect_Uri)}&scope=${encodeURIComponent(scope)}`;
var clientSecret = 'YOUR_CLIENT_SECRET';


//back to authoirzation URL
window.location.href = authorizeUrl;//will take user to login to spotify and grat permission
var authCode = "AUTHORIZATION_CODE" //AUTH FROM REDIRECT URL need to figure out how to get this
//extraction of auth code should preferably done after bing redirected
var token = "https://accounts.spotify.com/api/token";


 //define data object for the token request as spotify api uses
var data = {
    grant_type: 'authorization_code',
    code: "AUHTORIZATIO_ CODE", //needs actual code for auth
    redirect_uri: redirect_Uri,
  };

  
  var headers = {
    'Authorization': `Basic ${btoa(`${client_id}:${clientSecret}`)}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  //method is used to request the token to enpoint  token to exchange auth code for auth token
  //post request which sends token for exchange of access/authorization
  fetch(token, {
    method: 'POST',
    body: new URLSearchParams(data),
    headers: headers,
  })
  //preps for the request to go through. parse JSON then if successful it will set our token and expiresIn variables.
    .then(response => response.json())
    .then(data => {
      const accessToken = data.access_token;
      const expiresIn = data.expires_in;
      /*possibly store these for future requests in case of timeout??????*/





      // Use the access token to make requests to the Spotify API
      // Store the access token and expiration time as needed
    })
    .catch(error => {
      console.error('Error:', error);
    });


    var apiUrl = 'https://api.spotify.com/v1/me';
//produces the proper get/fetch with the authenticated users information
    fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },//access token obtained is in the header as Authorization
      //then gewt be processed as needed
    })
      .then(response => response.json())
      .then(data => {
        // this will take the API response
      })
      .catch(error => {
        console.error('Error:', error);
      });

    });