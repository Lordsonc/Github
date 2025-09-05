class UI {
  constructor() {
    this.profile = document.querySelector('.profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="shadow-md rounded-lg p-8 mb-3">
      <div class="grid grid-cols-2 gap-4">
        <div class="h-2/3">
          <img class="max-w-full h-auto mb-4" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded" >View Profile</a>
        </div>
        <div>
          <span class="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded mb-2">Public Repos: ${user.public_repos}</span>
          <span class="inline-block bg-gray-600 text-white text-xs font-semibold px-2 py-1 rounded mb-2">Public Gists: ${user.public_gists}</span>
          <span class="inline-block bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded mb-2">Followers: ${user.followers}</span>
          <span class="inline-block bg-sky-500 text-white text-xs font-semibold px-2 py-1 rounded mb-2">Following: ${user.following}</span>
          <br><br>
          <ul class="divide-y divide-gray-200 border border-gray-200 rounded">
            <li class="px-4 py-2 border-b border-gray-200">Company: ${user.company}</li>
            <li class="px-4 py-2 border-b border-gray-200">Website/Blog: ${user.blog}</li>
            <li class="px-4 py-2 border-b border-gray-200">Location: ${user.location}</li>
            <li class="px-4 py-2 border-b border-gray-200">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3 font-bold text-2xl text-center text-gray-600">Latest Repos</h3>
    <div id="repos"></div>`
    
  }
  showAlert(message, className){
    // Clear any existing alert
    this.clearAlert();
    // create div 
    const div = document.createElement('div');
    // add classname
    div.className = className;
    // add textnode
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.container');
    // get search box
    const search = document.querySelector('.search');
    // insert alert
    container.insertBefore(div, search);
    // Vanish after 3s
    setTimeout(() => { this.clearAlert(); }, 3000);
  }
  // show profile
  showRepos(repos) {
    let output = '';
    repos.forEach(function(repo) {
      output += `
      <div class="bg-white shadow rounded p-4 mb-2">
        <div class="flex flex-row gap-4">
          <div class="w-full md:w-1/2">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="w-full md:w-1/2">
            <span class="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded mb-2">Public Stars: ${repo.stargazers_count}</span>
            <span class="inline-block bg-gray-600 text-white text-xs font-semibold px-2 py-1 rounded mb-2">Watchers: ${ResizeObserver.watchers_count}</span>
            <span class="inline-block bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded mb-2">Forks: ${repo.forms_count}</span>
          </div>
        </div>
      </div>
      `
    });
    // output repository
    document.getElementById('repos').innerHTML = output;
  }

  // clear alert
  clearAlert() {
    const currentAlert = document.querySelector('.bg-red-100');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile(){
    this.profile.innerHTML = '';
  }
}