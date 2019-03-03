<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <button @click="incrementAction">+</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: mapState({
    count : 'count'
  }),
  methods: {
    increment () {
      this.$store.commit('increment', {amount: 10} )
    },
    decrement () {
      this.$store.commit('decrement', {amount: 5})
    },
    incrementAction () {
      this.$store.dispatch('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
