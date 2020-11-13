window.addEventListener('beforeunload', function (e) {
  // Cancel the event
  e.preventDefault();
  // Chrome requires returnValue to be set
  e.returnValue = '';
});

window.addEventListener('unload', function(e) {
  navigator.sendBeacon("https://api.play-with-go.dev/sessions/" + pwd.sessionId + "/close");
});

