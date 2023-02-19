<template>
  <button @click="inc">Add 2</button>
  <button @click="increase({value: 11})">Add 11</button>
</template>

<script lang="ts">
import { mapActions } from 'vuex'
export default {
  methods: {
    // addOne() {
    //   this.$store.commit('increment')
    // }
    // ...mapActions(['increment', 'increase'])
    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase'
    })
  }
}
</script>
