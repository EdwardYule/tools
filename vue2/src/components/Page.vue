<template>
  <div class="page">
    <Form></Form>
    <Table></Table>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import Table from "@/components/Table.vue";
export default {
  name: "Page",
  components: {
    Form,
    Table,
  }
}
</script>

<style lang="scss" scoped>
.page{

}
</style>