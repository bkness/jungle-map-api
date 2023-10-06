
/*(async() => {
var url = 'https://api-basketball.p.rapidapi.com/statistics?season=2019-2020&league=12&team=133';
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3658930d88msh914f6e850e00bbcp1478ddjsnc67b9db401a9',
		'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
	}
};

try {
	var response = await fetch(url, options);
	var data = await response.json();
	console.log(data);
} catch (error) {
	console.error(error); 
}})()

*/
/* test to go off of is above */


// JavaScript code to fetch team statistics from the API

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
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

// Function to display team statistics
function displayTeamStatistics(data) {
  // Assuming you have a DOM element with id "team-info" where you want to display the statistics
  var teamInfoElement = document.getElementById('team-info'); // needs to be changed to match html if changed?

  // checking api response for data
  if (data && data.response) {
    // take the data statistics
    var statistics = data.response;

    // You can access the statistics properties here and format them as needed
    // For example: const pointsPerGame = statistics.points;

    // Update the "team-info" element with the statistics
    // Example that i can think of teamInfoElement.innerHTML = `Points Per Game: ${pointsPerGame}`;
  } else {
    teamInfoElement.innerHTML = 'No statistics available for this team and year.';
  }
}

// Example usage:
var selectedYear = '2019-2020'; // selected year
var selectedTeamId = '133'; // Desired ID for team

fetchTeamStatistics(selectedYear, selectedTeamId);


