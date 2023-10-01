$(document).ready(function() {



var client_id = 'CLIENT ID';
var redirect_Uri = 'www.google.com'; //needs to be changed when we know our websites name
var scope = 'user-read-private user-read-email'; // Specify the required scopes need to figure out scopes we need
var authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${encodeURIComponent(redirect_Uri)}&scope=${encodeURIComponent(scope)}`;
var clientSecret = 'YOUR_CLIENT_SECRET';
var authCode = "";
var accessToken = "";


//back to authoirzation URL
window.location.href = authorizeUrl;//will take user to login to spotify and grat permission
var authCode = "AUTHORIZATION_CODE" //AUTH FROM REDIRECT URL need to figure out how to get this
//extraction of auth code should preferably done after bing redirected
var tokenUrl = 'https://accounts.spotify.com/api/token';



 //define data object for the token request as spotify api uses
var data = {
    grant_type: 'authorization_code',
    code: authCode, //needs actual code for auth
    redirect_uri: redirect_Uri,
  };

  
  var headers = {
    'Authorization': `Basic ${btoa(`${client_id}:${clientSecret}`)}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  if (!authCode) {
    console.error('Authorization code not found.');
  } else {
    var tokenUrl = 'https://accounts.spotify.com/api/token';
  //method is used to request the token to enpoint  token to exchange auth code for auth token
  //post request which sends token for exchange of access/authorization
  fetch(tokenUrl, {
    method: 'POST',
    body: new URLSearchParams(data),
    headers: headers,
  })
  //preps for the request to go through. parse JSON then if successful it will set our token and expiresIn variables.
    .then(response => response.json())
    .then(data => {
      accessToken = data.access_token;
      /*possibly store these for future requests in case of timeout??????*/


      var apiUrl = 'https://api.spotify.com/v1/me';

      fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },//access token obtained is in the header as Authorization
        //then gewt be processed as needed
      })
      .then(response => response.json())
      .then(data => {
        // this will take the API response
        console.log(data);
      })

      // Use the access token to make requests to the Spotify API
      // Store the access token and expiration time as needed
  
    .catch(error => {
      console.error('Error:', error);
    });
  })
      .catch(error => {
        console.error('Error:', error);
      });
    }
    });

    