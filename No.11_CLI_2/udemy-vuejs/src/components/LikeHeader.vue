<template>
  <div>
    <slot name="title"></slot>
    <hr />
    <slot name="iine" :user="user"></slot>
    <hr />
    <slot></slot>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        firstName: "Jack",
        lastName: "Donald"
      }
    };
  }
};
</script>