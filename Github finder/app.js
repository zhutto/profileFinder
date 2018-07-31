const github = new Github;
const ui = new UI
// search input field

const SearchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup', (e) => {

  const userText = e.target.value;
  if(userText !==''){
    // http call
    github.getUser(userText)
    .then(data =>{
     if(data.profile.message === 'Not Found') {
       // show alert
       ui.showAlert('User not found','alert alert-danger');
     } else {
       // show profile
       ui.showProfile(data.profile);
      // ui.showRepos(data.repos);
     }
    })
  } else {
    // clear profile
    ui.clearProfile();
  }
});
