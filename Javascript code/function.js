// home notification :
function home() {
    return alert("This is Home Page")
}

// function for search bar:
const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'facebook.com';

function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);


// exit the quiz page:
function exit() {
  if (!confirm("Would you like to leave? (Your progress will be lost)")) {
    return false;
  }
}


