define([

  'jquery',
  'underscore',
  'base_view',
  'rand_color_view',
  'text!tmpl/main_view.tmpl',

], function($, _, BaseView, RandColorView, tmplText) {

  'use strict';

  var MainView = BaseView.extend({

    tmpl: _.template(tmplText),

    render: function() {
      this.setHTML(this.tmpl());

      var randColorView = new RandColorView();
      randColorView.render();
      this.$('.content').append(randColorView.el);

      return this;
    },

  });

  return MainView;

});