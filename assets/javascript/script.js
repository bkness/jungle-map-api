
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

function displayTeamStatistics(data) {
  var teamInfoElement = document.getElementById('team-info');

  if (data && data.response) {
    var statistics = data.response;

    var gamesPlayedHome = statistics.games.played ? statistics.games.played.home : 'N/A';
    var gamesPlayedAway = statistics.games.played ? statistics.games.played.away : 'N/A';
    var gamesPlayedAll = statistics.games.played ? statistics.games.played.all : 'N/A';

    var winsAll = statistics.games.wins.all ? statistics.games.wins.all.total : 'N/A';    // Assuming 'total' is the relevant property 
    var winsHome = statistics.games.wins.home ? statistics.games.wins.home.total : 'N/A'; // Assuming 'total' is the relevant property
    var winsAway = statistics.games.wins.away ? statistics.games.wins.away.total : 'N/A';  // Assuming 'total' is the relevant property
    
    var lossesAll = statistics.games.loses ? statistics.games.loses.all.total : 'N/A';
    var lossesHome = statistics.games.loses ? statistics.games.loses.away.total : 'N/A';
    var lossesAway = statistics.games.loses ? statistics.games.loses.home.total : 'N/A';

    var teamName = statistics.team.name;
    var teamLogoUrl = statistics.team.logo;

    var teamInfoHTML = `
      <h2>${teamName}</h2>
      <img src="${teamLogoUrl}" alt="${teamName} Logo">
      <p>Wins: ${winsAll}
      <p>Losses: ${lossesAll}
      <p>Games Played All: ${gamesPlayedAll}<p>
      <p>Games Played at Home: ${gamesPlayedHome}</p>
      <p>Games Won at Home: ${winsHome}<p>
      <p>Games Lost at Home: ${lossesHome}
      <p>Games Played Away: ${gamesPlayedAway}</p>
      <p>Games Won Away: ${winsAway}<p>
      <p>Games Lost Away: ${lossesAway}<p>

    `;

    teamInfoElement.innerHTML = teamInfoHTML;
  } else {
    teamInfoElement.innerHTML = 'No statistics available for this team and year.';
  }
}




// Example usage:
document.getElementById('celtics-button').addEventListener('click', function() {
  var selectedYear = '2019-2020';
  var selectedTeamId = '133';

  fetchTeamStatistics(selectedYear, selectedTeamId);
});
