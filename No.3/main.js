var app = new Vue({
  el: "#app",
  data: {
    km: 0,
    m: 0,
    mm: 0,
    colors: [{ name: "Red" }, { name: "Green" }, { name: "Blue" }]
  },
  watch: {
    km: function(value) {
      this.km = value;
      this.m = value * 1_000;
      this.mm = value * 1_000_000;
    },
    m: function(value) {
      this.km = value / 1_000;
      this.m = value;
      this.mm = value * 1_000;
    },
    mm: function(value) {
      this.km = value / 1_000_000;
      this.m = value / 1_000;
      this.mm = value;
    },
    colors: {
      handler: function(newValue, oldValue) {
        console.log("Update!");
        console.log(
          "new: %s, oldValue: %s",
          JSON.stringify(newValue, null, "\t"),
          JSON.stringify(oldValue, null, "\t")
        );
      },
      deep: true,
      immediate: true
    }
  }
});
