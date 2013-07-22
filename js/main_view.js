define([

  'jquery', 'underscore', 'base_view', 'text!tmpl/main.html',

], function($, _, BaseView, tmplText) {

  'use strict';

  var MainView = BaseView.extend({

    tmpl: _.template(tmplText),
    tagName: 'div',
    className: 'main',

    render: function() {
      this.$el.html(this.tmpl())
      return this;
    },

  });

  return MainView;

});