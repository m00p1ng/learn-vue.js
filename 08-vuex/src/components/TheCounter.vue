<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('numbers', ['finalCounter']),
  },
}
</script>
