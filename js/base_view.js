define([

  'jquery',
  'underscore',
  'backbone',

], function($, _, Backbone) {

  'use strict';

  // Configure underscore templates.
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g, // {{  verbatim  }}
    escape:      /\{\%(.+?)\%\}/g, // {%  escaped   %}
    evaluate:    /\[\[(.+?)\]\]/g, // [[  evaluated ]]
    variable:    'data'
  };

  // Add helpers to the backbone view.
  _.extend(Backbone.View.prototype, {

    // Creates DOM elements from the given html. Sets the view's
    // element to the root of the new elements.
    setHTML: function(html) {
      this.setElement($.parseHTML(html.trim())[0]);
    },

  });

  return Backbone.View;

});
