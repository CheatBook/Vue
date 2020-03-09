<template>
  <div>
    <h2>Home</h2>
    <button @click="toUsers">Usersへ</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input type="text" v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("count", ["doubleCount", "tripleCount"]),
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("updateMessage", value);
      }
    }
  },
  // {
  //   doubleCount() {
  //     return this.$store.getters.doubleCount;
  //   },
  //   tripleCount() {
  //     return this.$store.getters.tripleCount;
  //   }
  // },
  methods: {
    toUsers() {
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1 },
        hash: "#next-user"
      });
    }
  }
};
</script>