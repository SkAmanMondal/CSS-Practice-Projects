const reels = [
  {
    username: "tech_sam",
    likeCount: 1420,
    isLiked: false,
    commentCount: 120,
    shareCount: 45,
    video: "./videos/reel1.mp4",
    logo: "images/user1.avif",
    caption: "Just finished this awesome project! 💻🔥",
    isFollowed: true,
  },
  {
    username: "foodie_kriti",
    likeCount: 9800,
    isLiked: true,
    commentCount: 350,
    shareCount: 120,
    video: "videos/reel2.mp4",
    logo: "images/user2.avif",
    caption: "Best street momos ever 😍🥟",
    isFollowed: false,
  },
  {
    username: "travel_with_aarav",
    likeCount: 15000,
    isLiked: true,
    commentCount: 580,
    shareCount: 210,
    video: "videos/reel3.mp4",
    logo: "images/user3.avif",
    caption: "Sunset in Goa hits different 🌅❤️",
    isFollowed: true,
  },
  {
    username: "musicbyriya",
    likeCount: 2300,
    isLiked: false,
    commentCount: 90,
    shareCount: 22,
    video: "videos/reel4.mp4",
    logo: "images/user4.avif",
    caption: "Small cover of my fav song 🎶✨",
    isFollowed: false,
  },
  {
    username: "coder_rahul",
    likeCount: 3100,
    isLiked: true,
    commentCount: 160,
    shareCount: 70,
    video: "videos/reel5.mp4",
    logo: "images/user5.avif",
    caption: "React + Node = Power 💥💥",
    isFollowed: true,
  },
  {
    username: "fitness_vik",
    likeCount: 7200,
    isLiked: false,
    commentCount: 300,
    shareCount: 150,
    video: "videos/reel6.mp4",
    logo: "images/user6.avif",
    caption: "Leg day destroyed me 😭💪",
    isFollowed: false,
  },
  {
    username: "style_by_sana",
    likeCount: 8400,
    isLiked: true,
    commentCount: 410,
    shareCount: 180,
    video: "videos/reel7.mp4",
    logo: "images/user7.avif",
    caption: "Weekend outfit idea ✨✨",
    isFollowed: true,
  },
  {
    username: "nature_soul",
    likeCount: 4600,
    isLiked: false,
    commentCount: 210,
    shareCount: 88,
    video: "videos/reel8.mp4",
    logo: "images/user8.avif",
    caption: "Peaceful waterfall sound 🏞️💧",
    isFollowed: false,
  },
  {
    username: "gamershub",
    likeCount: 15800,
    isLiked: true,
    commentCount: 770,
    shareCount: 310,
    video: "videos/reel9.mp4",
    logo: "images/user9.avif",
    caption: "New record unlocked 🔥🎮",
    isFollowed: true,
  },
  {
    username: "dance_with_me",
    likeCount: 9400,
    isLiked: true,
    commentCount: 500,
    shareCount: 200,
    video: "videos/reel10.mp4",
    logo: "images/user10.avif",
    caption: "Trend alert! Try this step 🕺🔥",
    isFollowed: false,
  },
];
let allReels = document.querySelector(".all-reels");

function addData() {
  let sum = "";
  reels.forEach(function (elem, idx) {
    sum += `<div class="reel">
                    <video src="${elem.video}" autoplay muted loop></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.logo}" alt="">
                            <h3>${elem.username}</h3>
                            <button id="${idx}" class="follow">${
                              elem.isFollowed ? "Unfollow" : "Follow"
                            }</button>
                        </div>
                        <p class="ellipsis">${elem.caption}</p>
                    </div>
                    <div class="right">
                        <div id="${idx}" class="like icon">
                            <h2>${
                              elem.isLiked
                                ? '<i class="ri-thumb-up-fill"></i>'
                                : '<i class="ri-thumb-up-line"></i>'
                            }</h2>
                            <h3>${elem.likeCount}</h3>
                        </div>
                        <div class="comment icon">
                            <h2><i class="ri-message-2-fill"></i></h2>
                            <h3>${elem.commentCount}</h3>
                        </div>
                        <div class="share icon">
                            <h2><i class="ri-send-plane-fill"></i></h2>
                            <h3>${elem.shareCount}</h3>
                        </div>
                        <div class="menu icon">
                            <h2><i class="ri-more-2-line"></i></h2>
                        </div>
                    </div>
                </div>`;
  });

  allReels.innerHTML = sum;
}
addData();

allReels.addEventListener("click", function (dets,idx) {
  // console.log(reels[dets.target.id]) // using this you can do multiple things
  if (dets.target.className == "like icon") {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].isLiked = true;
      reels[dets.target.id].likeCount++;
    } else {
      reels[dets.target.id].isLiked = false;
      reels[dets.target.id].likeCount--;
    }
    addData();
  } else if (dets.target.className == "follow") {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true;
    } else {
      reels[dets.target.id].isFollowed = false;
    }
    addData();
  }
  // console.log(reels[dets.target.id].isLiked);
});
