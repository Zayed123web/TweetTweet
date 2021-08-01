//Selectors
const tweetBtn = document.getElementById('tweetBtn');
const tweetInput = document.getElementById('tweetInput');

const allTweetUI = document.getElementById('allTweet');
const searchTweet = document.getElementById('searchTweet');

const tweetList = [];

//Event Listeners
//Create
tweetBtn.addEventListener('click', (e) => {
  e.preventDefault();
  tweetList.push(tweetInput.value);
  tweetInput.value = '';
  showingTweetToUI();
  // console.log(tweetList);
});
tweetInput.addEventListener('keyup', () => {
  inputValidation();
});
//Search
searchTweet.addEventListener('keyup', (e) => {
  searchForTweet(e);
});
//Delete
allTweetUI.addEventListener('click', (e) => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.parentElement.parentElement.remove();
  }
})

//Input Validation
function inputValidation(){
  if(tweetInput.value.length > 250){
    document.querySelector('.tweetbox__input').style.border = '1px solid red';
    document.querySelector('.tweetBox__tweetButton').style.cursor = 'not-allowed';
    tweetBtn.setAttribute('disabled', 'disabled');

  }else{
    document.querySelector('.tweetbox__input').style.border = '0px solid transparent';
    document.querySelector('.tweetBox__tweetButton').style.cursor = 'default';
    tweetBtn.removeAttribute('disabled');
  }
}

//Showing Tweet to the UI
function showingTweetToUI(){
  let tweetUi;
  tweetList.forEach((tweet) => {
    // console.log(tweet) 
    tweetUi = document.createElement('div');
    tweetUi.className = 'post';
    tweetUi.innerHTML = `
    <div class="post__avatar">
            <img
              src="images/profile.png"
              alt=""
            />
          </div>
  
          <div class="post__body">
            <div class="post__header">
              <div class="post__headerText">
                <h3>
                  Somanath Goudar
                  <span class="post__headerSpecial"
                    ><span class="material-icons post__badge"> verified </span>@somanathg</span
                  >
                </h3>
              </div>
              <div class="post__headerDescription">
                <p>${tweet}</p>
              </div>
            </div>
            <img src="#" alt="" />
            <div class="post__footer">
              <span class="material-icons edit">  drive_file_rename_outline  </span>
              <span class="material-icons like"> favorite_border </span>
              <span class="material-icons delete"> delete_forever </span>
            </div>
          </div>`;
  });
  allTweetUI.appendChild(tweetUi);

};

//Search Tweet
function searchForTweet(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.post').forEach(tweet => {
    const tweetText = tweet.children[1].children[0].children[1].children[0].textContent.toLocaleLowerCase();
    if(tweetText.indexOf(text) === -1){
      tweet.style.display = 'none';
    }else{
      tweet.style.display = 'block';
    }
    console.log(tweetText);
  });
}
