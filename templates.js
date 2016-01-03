var workTmpl = [
  "<div class='job'>",
    "<h2 class='company'><%=company%></h2>"
    "<h2 class='jobTitle'><%=title%></h2>",
    "<h4 class='city'><%=city%></h4>",
    "<h4 class='date'><%=date%></h4>",
    "<ul>",
      "<% _.each(points, function(point) { %>",
        "<li class='point'><%=point%></li>",
      "<% }); %>",
    "</ul>",
  "</div>"
].join();

var schoolTmpl = [

].join();

var projectTmpl = [

].join();
