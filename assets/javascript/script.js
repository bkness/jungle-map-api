
(async() => {
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


/* test to go off of*/


