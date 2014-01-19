'use strict';

angular.module('proceduralRadioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.genres = [
      'Weekend',
      'RRR-Other',
      'RRR-Blues',
      'RRR-Reggae',
      'RRR-Rock',
      'RRR-Hip Hop',
      'RRR-R&B / Soul',
      'Just Jazz',
      'Atmospherics',
      'Classics',
      'Overnight',
      '*'
    ];
    $scope.formats = ['CD', 'LP', '*'];
    $scope.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ*'.split('');

    $scope.currentLetter = null;
    $scope.currentGenre = null;
    $scope.currentFormat = null;
    $scope.randomNumber = 1;
    $scope.randomNumberMin = 1;
    $scope.randomNumberMax = 10;

    $scope.getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    $scope.random = function(arr) {
      var index = $scope.getRandomInt(0, arr.length - 1);

      console.log(index);

      return arr[index];
    };

    $scope.logs = [];

    $scope.randomizeAll = function() {
      if ($scope.currentLetter) {
        $scope.logs.unshift({
          letter: $scope.currentLetter,
          genre: $scope.currentGenre,
          format: $scope.currentFormat,
          number: $scope.randomNumber
        });
      }

      $scope.currentLetter = $scope.random($scope.alphabet);
      $scope.currentGenre = $scope.random($scope.genres);
      $scope.currentFormat = $scope.random($scope.formats);
      $scope.randomNumber = $scope.getRandomInt($scope.randomNumberMin, $scope.randomNumberMax);
    };

    $scope.randomizeAll();
  });
