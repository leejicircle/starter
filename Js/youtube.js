// youtube 삽입

let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", //유튜브 영상 ID
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8",
      cc_lang_pref: 'ko',
    },
    events: {
      onReady: function (event) {
        event.target.mute()
      }
    }
  });
}
function onPlayerReady(event) {
  event.target.playVideo();
}
let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
