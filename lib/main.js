var angular = require('angular');

//Defining the module that that app will user.
//It is making use of the raincatcher-mediator module and
//raincatcher-tutorial module.
angular.module('example-raincatcher-app', [
  require('raincatcher-modrain')(),
  require('raincatcher-tutorial-module-angular')
]).run(['modrain', function(modrain) {
  require('raincatcher-tutorial-module/lib/client')(modrain);
}]);

//These components below are specific to this app, but use Raincatcher functionality.

//Adding Templates
require('../dist');

//The controller for monitoring topics
require('./angular/eventMonitor/topicMonitor-controller');

//The directive for rendering the published topics.
require('./angular/eventMonitor/topicMonitor-directive');