<template>
  <section class="container">
    <user-data
      :first-name="firstName"
      :last-name="lastName"
    ></user-data>
    <!-- <h2>{{ username }}</h2> -->
    <!-- <h3>{{ age }}</h3> -->
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName"/>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, computed, watch, provide } from 'vue'
import UserData from './components/UserData.vue'

export default {
  components: {
    UserData,
  },
  setup() {
    // const user = ref({
    //   name: 'Mooping',
    //   age: 13,
    // })
    const age = ref(13)

    watch(age, function(newValue, oldValue) {
      console.log('Old age: ' + oldValue)
      console.log('New age: ' + newValue)
    })

    provide('age', age)

    const username = computed(function () {
      return firstName.value + ' ' + lastName.value
    })

    const firstName = ref('')
    const lastName = ref('')

    function setNewAge() {
      age.value++
    }

    return {
      username,
      firstName,
      lastName,
      age,
      setAge: setNewAge,
    };
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
