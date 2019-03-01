import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'task1', done: true },
      { id: 2, text: 'task2', done: false }
    ]
  },
  mutations: {
    increment: (state, payload) => {
      state.count += payload.amount
    } ,
    decrement: (state, payload) => {
      state.count -= payload.amount
    }
  },
  actions: {

  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: getters => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) =>{
      return state.todos.find(todo => todo.id === id)
    }
  }
})

export default store