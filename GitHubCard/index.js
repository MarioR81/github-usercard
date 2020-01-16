/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('http://api.github.com/users/marior81')
.then(response => console.log(response.data))
.catch(err => {
  console.log('error', err);
});
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

function createCards(object){
  const cardMain = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const userName = document.createElement('p');
  const userLoc = document.createElement('p');
  const userProfile = document.createElement('p')
  const userUrl = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bioInfo = document.createElement('p')
  cardMain.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  userName.classList.add('username');
  cardMain.append(cardImg);
  cardMain.append(cardInfo);
  cardInfo.append(cardName);
  cardInfo.append(userName);
  cardInfo.append(userLoc);
  cardInfo.append(userProfile);
  userProfile.append(userUrl);
  cardInfo.append(followers);
  cardInfo.append(following);
  cardInfo.append(bioInfo);

  cardImg.src = object.avatar_url;
  cardName.textContent = object.name;
  userName.textContent = object.login;
  userLoc.textContent = `Location: ${object.location}`;
  userProfile.textContent = 'Profile:';
  followers.textContent = `Followers: ${object.followers}`;
  following.textContent = `Following: ${object.following}`;
  bioInfo.textContent = `Bio: ${object.bio}`
  
  urladdress.setAttribute('href', object.html_url);
  urlAddress.textContent = object.html_url;
  

  return cardMain;
};
// createCards();

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
