require.register("main", function(exports, require, module){
  'use strict';

var Likes = require('models/likes');

window.likes = new Likes();

$(document).ready(function () {
  $('body').prepend(JST.application());

  $("#addbutton").on("click", function () {
    likes.increase();
    $("#addbutton").text(likes.get("count") + "likes");
  });
});
module.exports = Likes;
  
});

require.register("models/likes", function(exports, require, module){
  "use strict";

var Likes = Backbone.Model.extend({
    defaults: {
        count: 0
    },

    increase: function increase() {

        this.set("count", this.get("count") + 1);
        console.log("count");
    }

});

module.exports = Likes;
  
});
