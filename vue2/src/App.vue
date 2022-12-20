<template>
  <div id="app">
    <Template></Template>
    <Button type="warning">
      ddd
    </Button>
  </div>
</template>

<script>
import Template from "@/components/Template.vue";
import Button from "@/components/Button.vue";

export default {
  name: 'app',
  components: {
    Template,
    Button,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
