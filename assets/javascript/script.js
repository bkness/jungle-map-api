// added an array to use with the dynamically created buttons   
// variable for our default year
var selectedYear = 2022;

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
// dynamially creating out buttons and appending them to the page so the user can interact with them
function createTeamButtons() {
  var teamContainer = document.querySelector('.space-y-2');
  nbaTeams.forEach(team => {
    console.log(team)
    var button = document.createElement('button');
    // IMAGES STILL NEED TO BE ADDED TO THE REST OF THE TEAMS
    // functionality to change team pictures based off photo name and relative path using default photos until other team photos are incorporated 
    switch (team.code) {
      case 'ATL':
        button.style.backgroundImage = `url('./assets/images/${'ATL'.toLowerCase()}_photo.avif')`;
        break;
      case 'BOS':
        button.style.backgroundImage = `url('./assets/images/${'BOS'.toLowerCase()}_photo.avif')`;
        break;
      case 'BKN':
        button.style.backgroundImage = `url('./assets/images/${'BKN'.toLowerCase()}_photo.avif')`;
        break;
        case 'CHA':
          button.style.backgroundImage = `url('./assets/images/${'CHA'.toLowerCase()}_photo.avif')`;
          break;
        
      // creates buttons for buttons with no image created
      default:
        button.style.backgroundImage = 'url(./assets/images/default_photo.avif)';
    }
    // Creating a team button dynamically 
    button.classList.add('team-button');
    button.dataset.teamid = team.id;
    button.innerText = team.name;
    teamContainer.appendChild(button);
    //  creates the event listener that adds our teamId into the api
    button.addEventListener('click', function () {
      console.log('click');
      var teamId = this.dataset.teamid;
      // searches a team id  in the api hen a button is clicked 
      searchTeamStandings(teamId);

    
         //Moved this to this position so when the team button is clicked it will genrate and display the gif simoltaneously and change when a new one is also
         fetchNbaBasketballGifs(giphyApiKey, searchTerm)
         .then((gifs) => {
           console.log('NBA basketball GIFs:', gifs);
           var randomIndex = Math.floor(Math.random()*gifs.length);
           var image = gifs[randomIndex];
           var imageEl = document.createElement('img');
           imageEl.src = image;
          
           document.getElementById('gif-image').innerHTML = "";
           document.getElementById('gif-image').append(imageEl);
       
       
       
         });


            //Moved this to this position so when the team button is clicked it will genrate and display the gif simoltaneously and change when a new one is also
            fetchNbaBasketballGifs(giphyApiKey, searchTerm)
            .then((gifs) => {
              console.log('NBA basketball GIFs:', gifs);
              var randomIndex = Math.floor(Math.random()*gifs.length);
              var image = gifs[randomIndex];
              var imageEl = document.createElement('img');
              imageEl.src = image;
             
              document.getElementById('gif-image').innerHTML = "";
              document.getElementById('gif-image').append(imageEl);
          
          
          
            });

    });
  });
}

// run a function that fetches data from all teams and then run a function that grabs statistics and pair ids accordingly and make sure when i fetch team data loop and creat all buttons make sure button has id information so when i click on buttonn it grabs id and uses that to grab statistics us on click to run function 2 that calls statistics and uses id that i got from team fetch to searcg statistics function 1 creates buttons function 2 creates the 

document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM Loaded");

  // Retrieve selectedYear from local storage
  var storedYear = localStorage.getItem("selectedYear");

  // Use the stored year if available, or default to 2022
  selectedYear = storedYear || 2022;

  createTeamButtons();

  var modal = document.getElementById("myModal");
  var btn = document.getElementById("yearSelector");
  var span = document.getElementsByClassName("close")[0];
  var submitYearButton = document.getElementById("submitYear");
  // on click our modal performs correctly 
  btn.onclick = function () {
    modal.style.display = "block";
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  // submits the year and then grabs the value to be used 
  submitYearButton.addEventListener('click', function () {
    var newSelectedYear = document.getElementById("yearSelect").value;
    console.log("Selected Year:", newSelectedYear);
    selectedYear = newSelectedYear;
    localStorage.setItem("selectedYear", selectedYear);
    modal.style.display = "none";
  });
});


// our api for grabing team standings data
async function searchTeamStandings(teamId) {
  var teamUrl = `https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=${selectedYear}&team=${teamId}`;
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

// accessing the data points based on json data returned
function fetchTeamStandings(data) {
  var teamInfoElement = document.getElementById('team-info');

  if (data && data.response && data.response.length > 0) {
    var standings = data.response[0];

    var seasonYear = data.parameters.season;
    var teamName = standings.team ? standings.team.name : 'N/A';
    var teamLogoUrl = standings.team ? standings.team.logo : 'N/A';
    var teamNickname = standings.team ? standings.team.nickname : 'N/A';

    var seasonRank = standings.conference.rank;
    var winsAll = standings.win.total;
    var winsHome = standings.win.home;
    var winsAway = standings.win.away;
    var lossesAll = standings.loss.total;
    var lossesHome = standings.loss.home;
    var lossesAway = standings.loss.away;

    // here we dynamically create a spot on our html that our accessed data can be incorporated with
    var teamInfoHTML = `
    <div class="center-content">     
     <h2 class="center-text">${teamName}</h2>
        <img class="center-img" src="${teamLogoUrl}" alt="${teamName} Logo">
        <p class="center-text">${seasonYear}<p>
        <p class="center-text"> Team Nickname: ${teamNickname}<p>
       <p class="center-text">Season Rank: ${seasonRank}
       <p class="center-text">Season Wins: ${winsAll}<p>
        <p class="center-text">Games Won at Home: ${winsHome}<p>
        <p class="center-text">Games Won Away: ${winsAway}<p>
       <p class="center-text">Season Losses: ${lossesAll}
        <p class="center-text">Games Lost at Home: ${lossesHome}<p>
        <p class="center-text">Games Lost Away: ${lossesAway}<p>
      </div>
       `;

    teamInfoElement.innerHTML = teamInfoHTML;
  } else {
    teamInfoElement.innerHTML = 'No statistics available for this team and year.';
  }
}


function fetchNbaBasketballGifs(giphyApiKey, searchTerm) {
  // URL for gif request thr9ough the api
  var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&&api_key=${giphyApiKey}`;

  //API request using the fetch function
  return fetch(giphyApiUrl)
    .then((response) => {
      // Checks for our response 200 which means it is working
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Extract the GIFs from the response data
      var gifs = data.data.map((gif) => gif.images.original.url);
      console

      return gifs;
    })//if we arent able to pull anything displays our error
    .catch((error) => {
      console.error('Error fetching NBA basketball GIFs:', error);
    });
}

///usage for the key and our search term just nba baskertball
var giphyApiKey = 'ehhVqXyAm0xa78JH81Upx5S2xknqbRjl';
var searchTerm = 'NBA basketball';

fetchNbaBasketballGifs(giphyApiKey, searchTerm)
  .then((gifs) => {
    console.log('NBA basketball GIFs:', gifs);
  });
