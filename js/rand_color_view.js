define([

  'jquery',
  'underscore',
  'base_view',
  'text!tmpl/rand_color.html',

], function($, _, BaseView, tmplText) {

  'use strict';

  var RandColorView = BaseView.extend({

    tmpl: _.template(tmplText),
    tagName: 'div',
    className: 'rand-color',
    color: null,

    events: {
      'click .link': 'clicked',
    },

    initialize: function() {
      this.color = this.randColor();
    },

    render: function() {
      this.$el.html(this.tmpl());
      this.renderColor();
      return this;
    },

    renderColor: function() {
      this.$el.css('background-color', this.color);
      this.$('.link').text(this.color);
    },

    randColor: function() {
      var s = Math.floor(Math.random() * Math.pow(2, 24)).toString(16);
      while (s.length != 6) {
        s = '0' + s;
      }
      return '#' + s;
    },

    clicked: function() {
      this.color = this.randColor();
      this.renderColor();
      return false;
    },

  });

  return RandColorView;

});