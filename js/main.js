require.config({

  paths: {
    'tmpl': '../tmpl',
  },

});

require([

  'jquery', 'main_view',

], function($, MainView) {

  'use strict';

  var mainView = new MainView();
  mainView.render();

  $(document).ready(function() {
    $('body').append(mainView.el);
  });

});
