
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



var updateTeamBtn = document.getElementById('updateTeam');
var cancelBtn = document.getElementById('cancel');
var dialog = document.getElementById('theModal');
var confirmBtn = document.getElementById('confirm')
var dropDown = document.getElementById('favTeam');
dialog.returnValue = "favTeam";




function dialogOpen(dialog) {
  if(dialog.open) {
    console.log("dialog box is open.");
  }else {
    console.log("dialog box is closed.");
  }
}

updateTeamBtn.addEventListener("click", () => {
  dialog.showModal();
  dialogOpen(dialog);
});

dropDown.addEventListener('change', function(){
  var selectedTeam = dropDown.value;

  localStorage.setItem('selectedTeam', selectedTeam);
  console.log(selectedTeam);
})
cancelBtn.addEventListener('click', () => {
  dialog.closest("no Favorite Team");
  dialogOpen(dialog);
});



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
      console.log(data)
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

function displayTeamStatistics(data) {
  var teamInfoElement = document.getElementById('team-info');

  if (data && data.response) {
    var statistics = data.response;

    var gamesPlayedHome = statistics.games.played.home;
    var gamesPlayedAway = statistics.games.played.away;
    var gamesPlayedAll = statistics.games.played.all;
    
    var winsHome = statistics.games.wins.home.total;  // Assuming 'total' is the relevant property
    var winsAway = statistics.games.wins.away.total;  // Assuming 'total' is the relevant property
    var winsAll = statistics.games.wins.all.total;    // Assuming 'total' is the relevant property
    

    var teamName = statistics.team.name;
    var teamLogoUrl = statistics.team.logo;

    var teamInfoHTML = `
      <h2>${teamName}</h2>
      <img src="${teamLogoUrl}" alt="${teamName} Logo">
      <p>Games Played at Home: ${gamesPlayedHome}</p>
      <p>Games Played Away: ${gamesPlayedAway}</p>
      <p>Wins All: ${winsAll}</p>
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