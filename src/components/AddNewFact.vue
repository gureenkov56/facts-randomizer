<template>
  <div class="container-sm">
    <h2>Добавить факт</h2>
    <form @submit.prevent>
      <input v-model="factInput"
             type="text"
             class="form-control"
      />
      <button :class="{disabled: !factInput.length}"
              @click.prevent="pushFact"
              class="btn btn-primary mt-2 btn-block w-100">
        OK
      </button>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import { useStore } from 'vuex'



export default {
  name: "AddNewFact",
  setup() {
    const store = useStore();
    let factInput = ref('');

    function pushFact() {
      store.commit('pushFact', factInput.value);
      factInput.value = '';
    }

    return {
      factInput,
      pushFact
    }
  }
}
</script>

<style scoped>

</style>
