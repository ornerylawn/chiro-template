define([

  'jquery',
  'underscore',
  'base_view',
  'rand_color_view',
  'text!tmpl/main.html',

], function($, _, BaseView, RandColorView, tmplText) {

  'use strict';

  var MainView = BaseView.extend({

    tmpl: _.template(tmplText),
    tagName: 'div',
    className: 'main',

    render: function() {
      this.$el.html(this.tmpl())

      var randColorView = new RandColorView();
      this.$('.content').append(randColorView.render().el);

      return this;
    },

  });

  return MainView;

});