<template>
  <Header />
  <AddNewFact />
</template>

<script>
import Header from './components/Header.vue'
import AddNewFact from "@/components/AddNewFact.vue";

export default {
  name: 'App',
  components: {
    Header,
    AddNewFact
  }
}
</script>

<style lang="scss">

</style>
