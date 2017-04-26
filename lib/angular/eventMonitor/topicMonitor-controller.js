var angular = require('angular');
var moment = require('moment');
angular.module('example-raincatcher-app').controller('TopicMonitorController', ['$scope', 'modrain', '$timeout', TopicMonitorController]);


/**
 *
 * This controller monitors all user topics and appends them to the UI.
 *
 *
 * The goal here is to highlight that you can subscribe to any topic outside the modules.
 * This allows apps that consume Raincatcher modules to have custom business logic that is fired by published topics
 * from modules.
 *
 * @param $scope
 * @param modrain
 * @param $timeout
 *
 * @constructor
 */
function TopicMonitorController($scope, modrain, $timeout) {
  $scope.topics = [];

  $scope.clearTopicList = function() {
    $scope.topics = [];
  };

  function applyEvent(details) {
    $timeout(function() {
      $scope.topics.push(details);
    })
  }

  modrain.user.observe('create').subscribe(function() {
    applyEvent({
      topic: 'User Created',
      time: moment(new Date())
    });
  });

  modrain.user.observe('list').subscribe(function() {
    applyEvent({
      topic: 'Users Listed',
      time: moment(new Date())
    });
  });

}

