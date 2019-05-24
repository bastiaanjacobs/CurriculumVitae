console.log("this is loaded!");

new Vue({
  el: "#vue-app",
  data: {
    name: "bastiaan",
    surname: "jacobs",
    title: "Front-end Developer & Product Specialist",
    summary:
      "Web Developer en SharePoint branding specialist. \
        Ontwerp- en technologie-enthousiast. \
        Duiker en gefascineerd door het zeeleven. \
        Houdt ervan nieuwe plekken te verkennen. Animal avenger.",
    twitter: "https://twitter.com/bastiaanjacobs",
    github: "https://www.github.com/bastiaanjacobs",
    linkedin: "https://www.linkedin.com/in/bastiaanjacobs",
    website: "https://bastiaanjacobs.nl"
  },
  methods: {
    greet: function(time) {
      return "Good" + time + " " + this.name;
    }
  }
});
