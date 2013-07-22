define([

  'jquery', 'underscore', 'backbone',

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

  });

  return Backbone.View;

});
