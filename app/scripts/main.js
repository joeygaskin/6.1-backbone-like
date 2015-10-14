var Likes = require('models/likes');

window.likes = new Likes();

$(document).ready(function(){
  $('body').prepend(JST.application());

  $("#addbutton").on("click", function() {
    likes.increase();
  $("#addbutton").text(likes.get("count") + "likes")

});



});
module.exports = Likes;
