// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const app = require('express')();
const shell = require('electron').shell;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "zxfzxfzxfz.spotilocal.com:4390");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
});

app.listen(4390);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client.html');
});

app.get('/login', function (req, res) {
  res.send('login');
  const params = JSON.stringify(req.query);
  console.log(params);
  document.getElementById('params').innerHTML = params;
});

if (document.readyState != "complete") {
  document.addEventListener('DOMContentLoaded', function() {
    prepareTags()
  }, false);
} else {
  prepareTags();
}

function openBrowser(e) {
  e.preventDefault();
  console.log('openBrowser', e.target.href)
  shell.openExternal(e.target.href);
}

function prepareTags(){
  aTags = document.getElementsByTagName("a");
  for (var i = 0; i < aTags.length; i++) {
    aTags[i].addEventListener("click", openBrowser);
  }
  return false;
}
