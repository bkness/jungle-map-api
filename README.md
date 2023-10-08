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


 <button class="team-button" data-teamid="1">Atlanta Hawks</button>
            <button class="team-button" data-teamid="2">Boston Celtics</button>
            <button class="team-button" data-teamid="4">Brooklyn Nets</button>
            <button class="team-button" data-teamid="5">Charlotte Hornets</button>
            <button class="team-button" data-teamid="6">Chicago Bulls</button>
            <button class="team-button" data-teamid="7">Cleveland Caveliers</button>
            <button class="team-button" data-teamid="8">Dallas MAvericks</button>
            <button class="team-button" data-teamid="9">Denver Nuggets</button>
            <button class="team-button" data-teamid="10">Detroit Pistons</button>
            <button class="team-button" data-teamid="11">Golden State Warriors</button>
            <button class="team-button" data-teamid="14">Houston Rockets</button>
            <button class="team-button" data-teamid="15">Indiana Pacers</button>
            <button class="team-button" data-teamid="16">LA Clippers</button>
            <button class="team-button" data-teamid="17">Los Angeles Lakers</button>
            <button class="team-button" data-teamid="19">Memphis Grizzlies</button>
            <button class="team-button" data-teamid="20">Miami Heat</button>
            <button class="team-button" data-teamid="21">Milwauke Bucks</button>
            <button class="team-button" data-teamid="22">Minnesota Timberwolves</button>
            <button class="team-button" data-teamid="23">New Orleans Pelicans</button>
            <button class="team-button" data-teamid="24">New York Knicks</button>
            <button class="team-button" data-teamid="25">Oklahoma City Thunder</button>
            <button class="team-button" data-teamid="26">Orlando Magic</button>
            <button class="team-button" data-teamid="27">Philidelphia 76ers</button>
            <button class="team-button" data-teamid="28">Phoenix Suns</button>
            <button class="team-button" data-teamid="29">Portland Trail Blazers</button>
            <button class="team-button" data-teamid="30">Sacremento Kings</button>
            <button class="team-button" data-teamid="31">San Antonio Spurs</button>
            <button class="team-button" data-teamid="38">Toronto Raptors</button>
            <button class="team-button" data-teamid="40">Utah Jazz</button>
            <button class="team-button" data-teamid="41">Washington Wizards</button>