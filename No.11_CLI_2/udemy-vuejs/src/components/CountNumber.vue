<template>
  <div>
    <h2>{{ tatile | lowerCase | upperCase }}</h2>
    <h2>{{ subTitle | upperCase | lowerCase }}</h2>
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber]
};
</script>