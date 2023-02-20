<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script lang="ts">
import { computed, inject } from 'vue'

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const userName = computed(function () {
      return props.firstName + ' ' + props.lastName
    })

    const age = inject('age')

    return { userName, age }
  }
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   }
  // }
}
</script>

