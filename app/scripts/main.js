require.config({
  baseUrl: 'scripts/',

  // alias libraries paths.  Must set 'angular'
  paths: {
    'angular': 'ext/angular',
    'angular-route': 'ext/angular-route',
    'angular-ui-router': 'ext/angular-ui-router',
    'ui-bootstrap-tpls': 'ext/ui-bootstrap-tpls',
    'ui-bootstrap': 'ext/ui-bootstrap',
    'angularAMD': 'ext/angularAMD',
    'ngload': 'ext/ngload',
    'angular-resource': 'ext/angular-resource',
    'bootstrap': 'ext/bootstrap',
    'jquery': 'ext/jquery'
    
  },

  // Add angular modules that does not support AMD out of the box, put it in a shim
  shim: {
    'angular-route': [ 'angular' ],
    'angularAMD': [ 'angular' ],
    'ngload': [ 'angularAMD' ],
    'angular-resource': [ 'angular' ],
    'angular-ui-router': [ 'angular' ],
    'ui-bootstrap': [ 'angular' ],
    'ui-bootstrap-tpls': [ 'angular', 'ui-bootstrap'],
    'bootstrap': [ 'jquery' ]    
  },

  // kick start application
  deps: ['app']
});
