<template>
  <div class="container" style="min-height: 79px;">
    <header class="d-flex justify-content-end py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <button @click="shuffle"
                  class="btn btn-outline-primary"
                  v-if="stage === 'addNewFact' "
          >
            Закончить и перемешать
          </button>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: 'Header',
  props: {
    stage: String
  },
  setup(props, ctx) {
    const store = useStore();

    function shuffle() {
      store.commit('shuffle');
      ctx.emit('startNewStage');
    }

    return {
      factsLength: computed(() => store.getters.getFactsLength),
      shuffle
    }
  }
}
</script>

<style scoped lang="scss">

</style>
