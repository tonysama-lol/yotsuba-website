var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;

const audio = new Audio('theaudio.webm');
var playing = 0;
audio.volume = 0.4;

function what_we_do() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("ajax").innerHTML = this.responseText;
    }
    xhttp.open("GET", "what-we-do.html");
    xhttp.send();
}

function gallery() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("ajax").innerHTML = this.responseText;
    }
    xhttp.open("GET", "gallery.html");
    xhttp.send();
}

function meet_our_team() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("ajax").innerHTML = this.responseText;
  }
  xhttp.open("GET", "meet-our-team.html");
  xhttp.send();
}

function how_to_read_Yotsuba() {
  window.scrollTo({ top: 350, behavior: 'smooth' })
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("ajax").innerHTML = this.responseText;
  }
  xhttp.open("GET", "how-to-read-Yotsuba.html");
  xhttp.send();
}

function how_to_read_Yotsuba1() {
  window.scrollTo({ top: 350, behavior: 'smooth' })
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("ajax").innerHTML = this.responseText;
  }
  xhttp.open("GET", "how-to-read-Yotsuba1.html");
  xhttp.send();
}

function how_to_read_Yotsuba2() {
  window.scrollTo({ top: 350, behavior: 'smooth' })
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("ajax").innerHTML = this.responseText;
  }
  xhttp.open("GET", "how-to-read-Yotsuba2.html");
  xhttp.send();
}

function how_to_read_Yotsuba3() {
  window.scrollTo({ top: 350, behavior: 'smooth' })
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("ajax").innerHTML = this.responseText;
  }
  xhttp.open("GET", "how-to-read-Yotsuba3.html");
  xhttp.send();
}

function how_to_read_Yotsuba4() {
  window.scrollTo({ top: 350, behavior: 'smooth' })
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("ajax").innerHTML = this.responseText;
  }
  xhttp.open("GET", "how-to-read-Yotsuba4.html");
  xhttp.send();
}

function how_to_read_Yotsuba5() {
  window.scrollTo({ top: 350, behavior: 'smooth' })
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("ajax").innerHTML = this.responseText;
  }
  xhttp.open("GET", "how-to-read-Yotsuba5.html");
  xhttp.send();
}

function how_to_read_Yotsuba6() {
  window.scrollTo({ top: 350, behavior: 'smooth' })
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("ajax").innerHTML = this.responseText;
  }
  xhttp.open("GET", "how-to-read-Yotsuba6.html");
  xhttp.send();
}

function how_to_read_Yotsuba7() {
  window.scrollTo({ top: 350, behavior: 'smooth' })
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("ajax").innerHTML = this.responseText;
  }
  xhttp.open("GET", "how-to-read-Yotsuba7.html");
  xhttp.send();
}

function go_to_top(){
  window.scrollTo({top:0, behavior: 'smooth'})
}

function open_facebook(){
  window.open("https://facebook.com/yotsubatodaily");
}
function open_discord(){
  window.open("https://discord.gg/M2Py59CwyK");
}
function open_email(){
  window.open("email.html");
}
function open_twitter(){
  window.open("https://twitter.com/Yotsubatodaily");
}

function open_insta(){
  window.open("https://www.instagram.com/yotsubatodaily/");
}

function play_audio(){
  if(!playing){
    audio.play();
    playing = 1;
  }
  else {
    audio.pause();
    audio.currentTime = 0;
    playing = 0;
  }
}

function reload_page(){
  window.open("http://yotsuba-everyday.gq/","_self");
}