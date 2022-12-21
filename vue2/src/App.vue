<template>
  <div id="app">
    <Page></Page>
  </div>
</template>

<script>
import Page from "@/components/Page.vue";

export default {
  name: "app",
  components: {
    Page,
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
