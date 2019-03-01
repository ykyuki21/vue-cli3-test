<template>
  <div id="Todos">
    <p>Completed Todos: {{ doneTodosCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Todos',
  computed: mapGetters([
    'doneTodos', 'doneTodosCount', 'getTodoById'
  ])
}
</script>