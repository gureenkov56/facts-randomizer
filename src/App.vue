<template>
  <Header :stage="stage"
          @startNewStage="startNewStage"
  />
  <AddNewFact v-if="stage === 'addNewFact' "
  />
  <ShowFact v-else
            @reset="reset"
  />
</template>

<script>
import Header from './components/Header.vue'
import AddNewFact from "@/components/AddNewFact.vue";
import ShowFact from "@/components/ShowFact.vue";

export default {
  name: 'App',
  components: {
    ShowFact,
    Header,
    AddNewFact
  },
  data: () => ({
    stage: 'addNewFact'
  }),
  methods: {
    startNewStage() {
      this.stage = 'showFacts';
    },
    reset() {
      this.stage = 'addNewFact';
    }
  }
}
</script>

<style lang="scss">

</style>
