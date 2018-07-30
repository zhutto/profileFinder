class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body">
      <div class ="row">
        <div class ="col-md-3">
          <img class ="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
        </div>
        <div="col-md-9">
          <span class ="badge badge-primary">Repositories: ${user.public_repos}</span>
          <span class ="badge badge-primary">Gists: ${user.public_gists}</span>
          <span class ="badge badge-primary">Followers: ${user.followers}</span>
          <span class ="badge badge-primary">Following: ${user.following}</span>
          <br><br>
          <ul class ="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class ="page-heading mb-3">Latest Projects</h3>
    <div id="repos"></div>
    `;
  }
// show user Repositories
showRepos(repos) {
  let output = '';
  repos.forEach(function(repo){
    output += `
    <div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
        <div class="col-md-6">
        <span class ="badge badge-primary">Stars: ${user.stargazers_count}</span>
        <span class ="badge badge-primary">Watchers: ${user.watchers_count}</span>
        <span class ="badge badge-primary">Forks: ${user.forks_count}</span>
        </div>
      </div>
    </div>`;

  });
}


// show alert if no user found

showAlert(message, className) {
  this.clearAlert();
  const div = document.createElement('div');
  div.className = className;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.searchContainer');
  const search = document.querySelector('.search');
  container.insertBefore(div, search);
  setTimeout(() => {
    this.clearAlert();
  }, 3000);
}

// clear alert
clearAlert() {
  const currentAlert = document.querySelector('.alert');
  if(currentAlert){
    currentAlert.remove();
  }
}


 // clear UI if empty searchbar
clearProfile() {
    this.profile.innerHTML = '';
  }

}
