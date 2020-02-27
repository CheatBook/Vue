<template>
  <div>
    <p>いいね({{ harfNumber}})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      default: 118
    }
  },
  computed: {
    harfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment() {
      this.$emit("my-click", this.totalNumber + 1)
    }
  }
};
</script>
