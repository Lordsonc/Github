// instatiate Github
const github = new Github;
// instantiate UI
const ui = new UI;

const search = document.querySelector('.inputSearch');

search.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // make http call
    github.getUser(userText)
    .then(data => {
      if (data.profile.message === 'Not Found') {
        // show alert
        ui.showAlert('User Not Found', 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded m-2')
      } else {
        // show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos); 
      }
    })
    
  } else {
    // clear profile
      ui.clearProfile()
  }
  
});