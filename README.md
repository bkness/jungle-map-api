# jungle-map-api
music app to help users find and experience music





// Define your RapidAPI key and host
var rapidAPIKey = '3658930d88msh914f6e850e00bbcp1478ddjsnc67b9db401a9';
var rapidAPIHost = 'api-basketball.p.rapidapi.com';

// Function to fetch team statistics
function fetchTeamStatistics(year, teamId) {
  // Define the API endpoint URL
  var apiUrl = `https://api-basketball.p.rapidapi.com/statistics?season=${year}&league=12&team=${teamId}`;

  // Make the API request
  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': rapidAPIKey,
      'X-RapidAPI-Host': rapidAPIHost,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the API response data here
      displayTeamStatistics(data);
      console.log(data)
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}
