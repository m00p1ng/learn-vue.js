<template>
  <the-header title="RememberMe"></the-header>
  <the-resources></the-resources>
</template>

<script lang="ts">
import TheHeader from './components/layouts/TheHeader.vue'
import TheResources from './components/learning-resource/TheResources.vue'

export default {
  components: {
    TheHeader,
    TheResources,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
