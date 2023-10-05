// Get the search input element
const searchInput = document.querySelector('input[type="text"]');

// Add event listener for the input element
searchInput.addEventListener('input', function(event) {
  // Handle the input event
  console.log('Search input value:', event.target.value);
});

// Get the buttons with class "bg-blue-500"
const buttons = document.querySelectorAll('.bg-blue-500');

// Add event listener for each button
buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    // Handle the click event
    console.log('Button clicked:', event.target.textContent);
  });
});

// Get the team info div
const teamInfoDiv = document.getElementById('team-info');

// Add event listener for the team info div
teamInfoDiv.addEventListener('mouseover', function(event) {
  // Handle the mouseover event
  console.log('Mouse over team info div');
});