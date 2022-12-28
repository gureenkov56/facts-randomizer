<template>
  <div class="container-sm">
    <h2>Отгадайте, чей это факт</h2>
    <h3>{{ facts[currentFactIdx] }}</h3>
    <button v-show="!lastFact"
            @click="currentFactIdx++"
            class="btn btn-primary btn-block w-100"
    >
      Далее
    </button>
    <button v-show="lastFact"
            @click="resetGame"
            class="btn btn-outline-primary btn-block w-100"
    >
      Играть снова
    </button>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed, ref} from "vue";

export default {
  name: "ShowFact",
  setup(_, ctx) {
    const store = useStore();
    let currentFactIdx = ref(0);

    function resetGame() {
      store.commit('reset');
      ctx.emit('reset')
    }

    return {
      currentFactIdx,
      resetGame,
      facts: computed(() => store.state.facts),
      lastFact: computed(() => store.getters.getFactsLength - 1 === currentFactIdx.value)
    }
  }
}
</script>

<style scoped>

</style>
