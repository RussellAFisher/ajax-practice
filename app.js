$(document).ready(function() {
  $.get("http://www.omdbapi.com/?t=rambo", function(data){
    console.log(data)
    $("h1").append("<h1>" + data.Title + "<br>" + data.Actors + "</h1>");
  })

})
