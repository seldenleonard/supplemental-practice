/* global Vue */

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello from JavaScript!",
    movies: ["Get Him to The Greek", "The Lobster", "The Blues Brothers"],
    movieInput: "",
  },
  methods: {
    addMovie: function () {
      this.movies.push(this.movieInput);
    },
    addImage: function () {
      if (this.movies.include("Zoolander")) {
        let image = "http://tny.im/kPs";
      } else {
        let image = "";
      }
    },
  },
});

// This addImage function was my attempt at the bonus part for having an image render if movies included "Zoolander". I did not get the bonus to work so I left the HTML in working condition. However, what I was hoping would work is changing the src in the HTML to be the image variable. Just noting this so if you look at the image variable and wonder where I was going with it, thats where.
