<template>
  <div>
    <router-view name="header"></router-view>
    <transition name="fade" mode="out-in" @before-enter="beforeEnter">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter() {
      this.$root.$emit('triggerScroll');
    }
  }
}
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
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>