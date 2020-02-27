<template>
  <div>
    <p v-border:solid.round.shadow="{width: '5px', color:'red'}">Home</p>
    <h2>{{ tatile | lowerCase | upperCase }}</h2>
    <h2>{{ subTitle | upperCase | lowerCase }}</h2>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],
  components: {
    CountNumber
  }
};
</script>