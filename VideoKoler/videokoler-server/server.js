var express = require('express');
var express_peer_server = require('peer').ExpressPeerServer;
var peer_options = {
  debug: true
};

var app = express();
var port = 3000;
var server = app.listen(port, function() {
  console.log('Example app listening at http://localhost:' + port);

  console.log("Run on terminal: localtunnel --subdomain webdoctorvideokoler --port " + port);
});

app.use('/peerjs', express_peer_server(server, peer_options));
