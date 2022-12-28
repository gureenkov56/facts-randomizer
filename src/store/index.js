import { createStore } from 'vuex'

export default createStore({
  state: {
    facts: []
  },
  getters: {
    getFactsLength: (state) => state.facts.length,
  },
  mutations: {
    pushFact(state, fact) {
      state.facts.push(fact);
    },
    shuffle(state) {
      state.facts = state.facts.sort(() => Math.random() - 0.5);
    },
    reset(state) {
      state.facts = [];
    }
  },
  actions: {
  },
  modules: {
  }
})
