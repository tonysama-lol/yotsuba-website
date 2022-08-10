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