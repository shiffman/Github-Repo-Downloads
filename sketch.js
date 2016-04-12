function setup() {
  noCanvas();

  var params = getURLParams();
  var user = params.user;
  var repo = params.repo;

  loadJSON('https://api.github.com/repos/' + user + '/' + repo + '/releases', gotData);

  function gotData(data) {
    for (var i = 0; i < data.length; i++) {
      var release = data[i].assets;
      for (var j = 0; j < release.length; j++) {
        var div = createDiv(release[j].name + ' ' + release[j].download_count);
        div.style('padding', '8px');
        div.style('margin', '2px');
        div.style('background-color', '#EEE');
      }

    }
  }

}

