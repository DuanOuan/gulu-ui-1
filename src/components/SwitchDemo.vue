<template>
  <div>
    <Switch :value="y" @input="y = $event" />
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";

export default {
  setup() {
    const y = ref(false);
    return { y };
  },
  components: { Switch },
};
</script>
