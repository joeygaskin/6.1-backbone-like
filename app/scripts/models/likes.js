var Likes = Backbone.Model.extend({
  defaults: {
     count: 0
  },

  increase: function(){

      this.set("count", this.get("count") + 1);
      console.log("count");

  }

});

module.exports = Likes;
