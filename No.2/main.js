var app = new Vue({
  el: "#app",
  data: {
    preview: "",
    val: 50,
    list: [],
    budget: 300,
    limit: 2
  },
  methods: {
    handleChange: function(event) {
      var file = event.target.files[0];
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(file);
      }
    }
  },
  created: function() {
    axios
      .get("list.json")
      .then(
        function(response) {
          this.list = response.data;
        }.bind(this)
      )
      .catch(function(e) {
        console.error(e);
      });
  },
  computed: {
    matched: function() {
      return this.list.filter(function(el) {
        return el.price <= this.budget;
      }, this);
    },
    limited: function() {
      return this.matched.slice(0, this.limit);
    }
  }
});
