<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisble = ref(width <= 500 ? false : true);
    provide("asideVisble", asideVisble);
  },
};
</script>
