// run a function that fetches data from all teams and then run a function that grabs statistics and pair ids accordingly and make sure when i fetch team data loop and creat all buttons make sure button has id information so when i click on buttonn it grabs id and uses that to grab statistics us on click to run function 2 that calls statistics and uses id that i got from team fetch to searcg statistics function 1 creates buttons function 2 creates the 


var nbaTeams = [
  { id: 1, name: 'Atlanta Hawks', nickname: 'Hawks', code: 'ATL', city: 'Atlanta' },
  { id: 2, name: 'Boston Celtics', nickname: 'Celtics', code: 'BOS', city: 'Boston' },
  { id: 4, name: 'Brooklyn Nets', nickname: 'Nets', code: 'BKN', city: 'Brooklyn' },
  { id: 5, name: 'Charlotte Hornets', nickname: 'Hornets', code: 'CHA', city: 'Charlotte' },
  { id: 6, name: 'Chicago Bulls', nickname: 'Bulls', code: 'CHI', city: 'Chicago' },
  { id: 7, name: 'Cleveland Cavaliers', nickname: 'Cavaliers', code: 'CLE', city: 'Cleveland' },
  { id: 8, name: 'Dallas Mavericks', nickname: 'Mavericks', code: 'DAL', city: 'Dallas' },
  { id: 9, name: 'Denver Nuggets', nickname: 'Nuggets', code: 'DEN', city: 'Denver' },
  { id: 10, name: 'Detroit Pistons', nickname: 'Pistons', code: 'DET', city: 'Detroit' },
  { id: 11, name: 'Golden State Warriors', nickname: 'Warriors', code: 'GSW', city: 'Golden State' },
  { id: 14, name: 'Houston Rockets', nickname: 'Rockets', code: 'HOU', city: 'Houston' },
  { id: 15, name: 'Indiana Pacers', nickname: 'Pacers', code: 'IND', city: 'Indiana' },
  { id: 16, name: 'LA Clippers', nickname: 'Clippers', code: 'LAC', city: 'LA' },
  { id: 17, name: 'Los Angeles Lakers', nickname: 'Lakers', code: 'LAL', city: 'Los Angeles' },
  { id: 19, name: 'Memphis Grizzlies', nickname: 'Grizzlies', code: 'MEM', city: 'Memphis' },
  { id: 20, name: 'Miami Heat', nickname: 'Heat', code: 'MIA', city: 'Miami' },
  { id: 21, name: 'Milwaukee Bucks', nickname: 'Bucks', code: 'MIL', city: 'Milwaukee' },
  { id: 22, name: 'Minnesota Timberwolves', nickname: 'Timberwolves', code: 'MIN', city: 'Minnesota' },
  { id: 23, name: 'New Orleans Pelicans', nickname: 'Pelicans', code: 'NOP', city: 'New Orleans' },
  { id: 24, name: 'New York Knicks', nickname: 'Knicks', code: 'NYK', city: 'New York' },
  { id: 25, name: 'Oklahoma City Thunder', nickname: 'Thunder', code: 'OKC', city: 'Oklahoma City' },
  { id: 26, name: 'Orlando Magic', nickname: 'Magic', code: 'ORL', city: 'Orlando' },
  { id: 27, name: 'Philadelphia 76ers', nickname: '76ers', code: 'PHI', city: 'Philadelphia' },
  { id: 28, name: 'Phoenix Suns', nickname: 'Suns', code: 'PHX', city: 'Phoenix' },
  { id: 29, name: 'Portland Trail Blazers', nickname: 'Trail Blazers', code: 'POR', city: 'Portland' },
  { id: 30, name: 'Sacramento Kings', nickname: 'Kings', code: 'SAC', city: 'Sacramento' },
  { id: 31, name: 'San Antonio Spurs', nickname: 'Spurs', code: 'SAS', city: 'San Antonio' },
  { id: 38, name: 'Toronto Raptors', nickname: 'Raptors', code: 'TOR', city: 'Toronto' },
  { id: 40, name: 'Utah Jazz', nickname: 'Jazz', code: 'UTA', city: 'Utah' },
  { id: 41, name: 'Washington Wizards', nickname: 'Wizards', code: 'WAS', city: 'Washington' }
];

function createTeamButtons() {
  var teamContainer = document.querySelector('.space-y-2');
  nbaTeams.forEach(team => {
    var button = document.createElement('button');
    button.classList.add('team-button');
    button.dataset.teamid = team.id;
    button.innerText = team.name;
    
    button.addEventListener('click', (function(teamId) {
      return function() {
      }
    })(team.id));
   
    teamContainer.appendChild(button);
  });
}

async function searchTeamStandings(teamId) {
  var teamUrl = `https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022&team=1`;
  var options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4f7674b837mshd6881d85361539ap1a8291jsn961969652d7c',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  try {
    var response = await fetch(teamUrl, options);
    var result = await response.json();
    console.log(result);
    fetchTeamStandings(result);
  } catch (error) {
    console.error(error);
  }
}

function fetchTeamStandings(data) {
  var teamInfoElement = document.getElementById('team-info');

  if (data && data.response) {
    var standings = data.response[0];

    var teamName = standings.team.name;
    var teamLogoUrl = standings.team.logo;
    var teamNickname = standings.team ? standings.team.nickname : 'N/A';

    var winsAll = standings.win.total;
    var winsHome = standings.win.home;
    var winsAway = standings.win.away;
    var lossesAll = standings.loss.total;
    var lossesHome = standings.loss.home;
    var lossesAway = standings.loss.away;
    var gamesPlayedAll = standings.games ? standings.games.total : 'N/A';
    var gamesPlayedHome = standings.games ? standings.games.home : 'N/A';
    var gamesPlayedAway = standings.games ? standings.games.away : 'N/A';


    var teamInfoHTML = `
      <h2>${teamName}</h2>
      <img src="${teamLogoUrl}" alt="${teamName} Logo">
     <p> Team Nickname: ${teamNickname}<p>
      <p>Wins: ${winsAll}<p>
      <p>Games Won at Home: ${winsHome}<p>
      <p>Games Won Away: ${winsAway}<p>
     <p>Losses: ${lossesAll}
      <p>Games Lost at Home: ${lossesHome}<p>
     <p>Games Lost Away: ${lossesAway}<p>
      <p>Games Wins Away ${gamesPlayedAll}<p>
      <p>Games Played at Home: ${gamesPlayedHome}</p>
       <p>Games Played Away: ${gamesPlayedAway}</p>
    `;

    teamInfoElement.innerHTML = teamInfoHTML;
  } else {
    teamInfoElement.innerHTML = 'No statistics available for this team and year.';
  }
}
createTeamButtons();
searchTeamStandings();