<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/">Go to Home</router-link>
    <todos/>
  </div>
</template>

<script>
import todos from '@/components/Todos.vue'

export default {
  name: 'about2',
  components: {
    todos
  }
}
</script>
