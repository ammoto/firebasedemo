'use strict';
/**
 * @ngdoc function
 * @name demoApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('demoApp')
    .controller('ChatCtrl', function($scope, $firebase, fbutil, $timeout) {

        // Create a regularfirebase ref
        var ref = new Firebase("https://intense-inferno-3320.firebaseio.com/");

        // Pass it to angularfire 
        var sync = $firebase(ref);

        //download the data into a local object
        $scope.data = sync.$asObject();

        //replace entire node with new data
        $scope.set = function() {
            sync.$set({
                object: "this object was set"
            });

        }

        //adds a new child node
        $scope.push = function() {
            sync.$push({
                object: "this object was $pushed"
            }).then(function(newChildRef) {
                console.log("added record with id " + newChildRef.key());
            })
        }

        //Working with Arrays in Firebase

        $scope.messages = sync.$asArray();

        $scope.addMessage = function(text) {
            $scope.messages.$add({
                text: text
            });
        }

        //synchronize the object with a three-way data binding 
        var syncObject = sync.$asObject();
        syncObject.$bindTo($scope, "sdata");

        //add a new child node
        syncObject.$bindTo($scope, "sdata");

        

     
    });