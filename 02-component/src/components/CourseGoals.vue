<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-props="..."></slot>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  data() {
    return {
      goals: ['Finish the course', 'Learn Vue']
    };
  },
}
</script>

