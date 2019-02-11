<template>
  <div>
    <p v-if="message.length > 0">
      {{message}}
    </p>
    <p v-else>
      no text
    </p>
    <input type="text" v-model="message">
    <button @click="clear()">clear</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World!'
    }
  },
  methods: {
    clear () {
      this.message = ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
