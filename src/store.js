import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state: {
    count: 3
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },
  actions: {
    incrementIfOdd({ state, commit }) {
      if (state.count % 2 === 1) {
        commit('increment');
      }
    }
  }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA
  },
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
    increment ({ commit }) {
      setTimeout(() => {
        commit('increment', {amount: 1})
      }, 1000)
    }
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