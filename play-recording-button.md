<div
  style={{
    width: "180px",
    height: "50px",
    padding: "11px",
    borderRadius: "20px",
    backgroundColor: "#F7931A",
    border: "3px solid white",
    // We'll use 'relative' positioning in case we want to tweak the layout inside.
    position: "relative",
    fontFamily: "Arial, sans-serif"
  }}
>
  <div
    id="player-controls"
    style={{
      // Arrange buttons + time in a row, evenly spaced
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "100%"
    }}
  >
    <button
      id="play-pause-button"
      style={{
        fontSize: "30px",
        cursor: "pointer",
        color: "#FFD7A8",
        background: "none",
        border: "none",
        outline: "none"
      }}
    >
      ►
    </button>
    <button
      id="rewind-button"
      style={{
        fontSize: "30px",
        cursor: "pointer",
        color: "#FFD7A8",
        background: "none",
        border: "none",
        outline: "none"
      }}
    >
      ⏮
    </button>
    <button
      id="restart-button"
      style={{
        fontSize: "30px",
        cursor: "pointer",
        color: "#FFD7A8",
        background: "none",
        border: "none",
        outline: "none"
      }}
    >
      ⏻
    </button>
    <div
      id="time-display"
      style={{
        color: "#FFD7A8",
        fontSize: "15px",
        marginLeft: "8px"
      }}
    >
      00:00
    </div>
  </div>
</div>

<div
  id="video-container"
  style={{
    position: "absolute",
    width: "1px",
    height: "1px",
    overflow: "hidden"
  }}
></div>

<script
  type="text/javascript"
  dangerouslySetInnerHTML={{
    __html: `
      // Load the YouTube IFrame Player API asynchronously.
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      var isPlaying = false;

      // Called automatically by the YouTube API when it's ready.
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('video-container', {
          height: '1',
          width: '1',
          videoId: 'ZsDqTQs3_G0', // Replace with your desired video ID.
          playerVars: {
            enablejsapi: 1,
            playsinline: 1,
            mute: 1,        // Start muted to help bypass autoplay restrictions.
            autoplay: 0
          },
          events: {
            'onReady': onPlayerReady
          }
        });
      }

      // Called when the player is ready.
      function onPlayerReady() {
        var playPauseBtn = document.getElementById('play-pause-button');
        var rewindBtn = document.getElementById('rewind-button');
        var restartBtn = document.getElementById('restart-button');

        // Toggle Play/Pause on click.
        playPauseBtn.addEventListener('click', function() {
          if (!isPlaying) {
            player.unMute();
            player.playVideo();
            playPauseBtn.textContent = '❚❚';
            isPlaying = true;
          } else {
            player.pauseVideo();
            playPauseBtn.textContent = '►';
            isPlaying = false;
          }
        });

        // Rewind 10 seconds.
        rewindBtn.addEventListener('click', function() {
          var currentTime = player.getCurrentTime();
          var newTime = Math.max(currentTime - 10, 0);
          player.seekTo(newTime, true);
        });

        // Restart the video.
        restartBtn.addEventListener('click', function() {
          player.seekTo(0, true);
        });
      }

      // Update the time display every second.
      function updateTime() {
        if (player && typeof player.getCurrentTime === 'function') {
          var currentTime = player.getCurrentTime();
          // Format seconds as mm:ss.
          function formatTime(time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
          }
          var timeDisplay = document.getElementById('time-display');
          if (timeDisplay) {
            timeDisplay.textContent = formatTime(currentTime);
          }
        }
      }
      setInterval(updateTime, 1000);
    `
  }}
/>
