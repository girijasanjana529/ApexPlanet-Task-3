function getJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      document.getElementById('setup').textContent = data.setup;
      document.getElementById('punchline').textContent = data.punchline;
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
      document.getElementById('setup').textContent = "Oops! Couldn't fetch a joke.";
      document.getElementById('punchline').textContent = "";
    });
}
