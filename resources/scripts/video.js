// open_video();
// close_video();

function close_video() {
  var elem = document.getElementById('video-popup');
  elem.parentNode.removeChild(elem);
}

function open_video() {
  if (!document.getElementById('video-popup')) {
    var bg = document.createElement("div");
    bg.id = 'video-popup';
    bg.onclick = function() { close_video() };
    document.body.appendChild(bg);
    
    var player = document.createElement('iframe');
    player.src = 'https://www.youtube.com/embed/sYtRgzp43So?autoplay=1';
    player.frameBorder = '0';
    player.allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    player.allowFullscreen;
    player.autoplay;
  
    bg.appendChild(player);
    setTimeout(() => {
      bg.style.opacity = 1;
    }, 100);
  }  
}


  