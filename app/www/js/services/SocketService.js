(function() {

  angular.module('starter')
    .service('SocketService', ['socketFactory', SocketService]);

  function SocketService(socketFactory) {
    return socketFactory({
      ioSocket: io.connect('http://webdoctorapp.localtunnel.me')
    });
  }
})();
