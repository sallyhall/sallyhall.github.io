var $ = require('jquery')(window);
global.jQuery = require("jquery");
var _ = require('underscore');
var bootstrap = require('bootstrap/dist/js/bootstrap');

var portfolioPage = {
  init: function () {
    portfolioPage.styling();
    portfolioPage.events();
  },
  events: function () {

  },
  styling:  function(){
    _.each(projects, function (project) {
      if(project.display){
        portfolioPage.loadTemplate("#projectTmpl",project,"#projects");
      }
    })
  },
  loadTemplate: function (template,object,element) {
    var temp = _.template($(template).html());
    $(element).append(temp(object));
  }
};

$(document).ready(function () {
  portfolioPage.init();
});
