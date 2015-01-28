angular.module('firebase.config', [])
  .constant('FBURL', 'https://intense-inferno-3320.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','twitter'])

  .constant('loginRedirectPath', '/login');
