var users = {
  user1: {
    userName: "@elonmusk",
    displayName: "Elon Musk",
    joinedDate: "June 2009",
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: "assets/elonmusk.jpg",
    coverPhotoURL: "assets/elonmusk-cover.jpeg",
    tweets: [
      {
        text: "I admit to judging books by their cover",
        timestamp: "2/10/2021 00:01:20",
      },
      {
        text: "Starship to the moon",
        timestamp: "2/09/2021 18:37:12",
      },
      {
        text: "Out on launch pad, engine swap underway",
        timestamp: "2/09/2021 12:11:51",
      },
    ],
  },

  user2: {
    userName: "@BillGates",
    displayName: "Bill Gates",
    joinedDate: "June 2009",
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: "assets/billgates.jpg",
    coverPhotoURL: "assets/billgates-cover.jpeg",
    tweets: [
      {
        text: "Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/",
        timestamp: "2/10/2021 00:01:20",
      },
      {
        text: "Should I start tweeting memes? Let me know in a comment.",
        timestamp: "2/09/2021 18:37:12",
      },
      {
        text: "In 2020, I read a book every hour.",
        timestamp: "2/09/2021 12:11:51",
      },
    ],
  },
};

//App

const urlParams = new URLSearchParams(window.location.search);
const userParameter = users[urlParams.get("user")];
console.log(userParameter);
//Header
const header = document.querySelector(".header");
header.innerHTML = `<div class="arrow"><img class="arrow-image" src='assets/left-arrow.png'/></div>
<div class="header-content">
<p class="larger-display-name">${userParameter.displayName}</p>
<p class="follower-count">${
  userParameter.followerCount / 1000000
}M Tweets</p></div>`;
//Cover Picture
let cover = document.querySelector(".cover");
cover.style.backgroundImage = `url('${userParameter.coverPhotoURL}')`;
//Profile Details Section
let profileDetails = document.querySelector(".profile-details");
profileDetails.innerHTML = `<div class='profile-header'> <img class="avatar" src=${
  userParameter.avatarURL
} alt="" srcset="" />
<button class='btn'>Following</button></div>
<div class="profile-description">
    <p class="display-name">${userParameter.displayName}</p>
    <p class="user-name">${userParameter.userName}</p>
    <div class="date-joined">
    <img class="calendar-pic" src="assets/calendar.png"/>
    <p >Joined ${userParameter.joinedDate}</p>
    </div>
    <p class="following"><span class="bold-number">${
      userParameter.followingCount
    }</span> Following    <span class="bold-number"> ${
  userParameter.followerCount / 1000000
}</span>M Followers</p>
</div>`;
//Tweet Navigation
let tweetHeader = document.querySelector(".tweets-header");
tweetHeader.innerHTML = `<div ><ul class="tweet-navigation">
    <a class="tweet-nav-links" href='#'><li>Tweets</li></a>
    <a class="tweet-nav-links" href='#'><li>Tweets & replies</li></a>
    <a class="tweet-nav-links" href='#'><li>Media</li></a>
    <a class="tweet-nav-links" href='#'><li>Likes</li></a>
</ul></div>`;
//Tweets
for (let i = 0; i < userParameter.tweets.length; i++) {
  let expiringDate = new Date(userParameter.tweets[i].timestamp);
  let currentDate = new Date();
  let sincePost = (
    Math.floor(Number(currentDate) - Number(expiringDate) / 5) / 100000000000
  ).toFixed(0);

  let tweetSection = document.querySelector(".tweet-section");
  let tweetContainer = document.createElement("div");
  tweetContainer.classList.add("tweet-container");
  let leftSide = document.createElement("div");
  leftSide.classList.add("left-side");
  let leftSideImage = document.createElement("img");
  leftSideImage.src = userParameter.avatarURL;
  leftSideImage.classList.add("tweet-avatar");
  ///////////////////////////////////////////
  let rightSide = document.createElement("div");
  rightSide.classList.add("right-side");
  let tweetInfo = document.createElement("div");
  tweetInfo.classList.add("tweet-info");
  let tweetDisplayName = document.createElement("p");
  tweetDisplayName.textContent = `${userParameter.displayName}`;
  tweetDisplayName.classList.add("small-tweet-display-name");
  let tweetUserName = document.createElement("p");
  tweetUserName.textContent = ` ${userParameter.userName}`;
  tweetUserName.classList.add("user-name");
  let sincePostTime = document.createElement("p");
  sincePostTime.textContent = `-  ${sincePost}m`;
  let tweet = document.createElement("div");
  tweet.classList.add("tweets");
  let tweetContent = document.createElement("p");
  tweetContent.textContent = `${userParameter.tweets[i].text}`;
  tweetContainer.appendChild(leftSide);
  leftSide.appendChild(leftSideImage);
  tweetContainer.appendChild(rightSide);
  rightSide.appendChild(tweetInfo);
  tweetInfo.appendChild(tweetDisplayName);
  tweetInfo.appendChild(tweetUserName);
  tweetInfo.appendChild(sincePostTime);
  rightSide.appendChild(tweet);
  tweet.appendChild(tweetContent);
  tweetSection.appendChild(tweetContainer);
}
