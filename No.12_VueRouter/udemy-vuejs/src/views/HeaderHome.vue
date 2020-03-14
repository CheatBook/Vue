<template>
  <div>
    <h2>Home</h2>
    <nav>
      <router-link to="/" active-class="link--active" exact class="link"
        >Home</router-link
      >
      <router-link to="/users/1" active-class="link--active" exact class="link"
        >Users</router-link
      >
      <button @click="increment(2)">+1</button>
      <button @click="decrement(2)">-1</button>
    </nav>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  methods: {
    // increment() {
    //   this.$store.dispatch("increment", 2);
    // },
    // decrement() {
    //   this.$store.dispatch("decrement", 2);
    // }
    ...mapActions("count", ["increment", "decrement"])
    // ...mapMutations(["increment", "decrement"])
  }
};
</script>

<style scoped>
div {
  width: 700px;
  margin: auto;
  padding-top: 50px;
}
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 20px;
}
</style>
