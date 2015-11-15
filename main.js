var portfolioPage = {
  init: function () {
    portfolioPage.styling();
    portfolioPage.events();
  },
  events: function () {
    $('#myTabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
  },
  styling:  function(){

  },
};

$(document).ready(function () {
  portfolioPage.init();
});
