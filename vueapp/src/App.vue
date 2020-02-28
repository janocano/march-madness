<template>
  <div id="app">
    <bracket-item :gameId="0" :team="dummyTeam" />
  </div>
</template>

<script>

import BracketItem from "./components/BracketItem.vue";

export default {
  name: 'App',
  components: {
    BracketItem
  },
  data() {
    return {
      dummyTeam: {
        id: 34,
        name: "Arizona"
      }
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  background-color: #2c3e50;
}
</style>
