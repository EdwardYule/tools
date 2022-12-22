<template>
  <div class="page">
    <Form
      :inline="false"
      :data="formList"
      @confirm="onConfirm"
      :operations="{
        cancel: true,
        reset: true,
        confirm: '搜索',
      }"
    ></Form>
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
  },
  data() {
    return {
      formList: [
        {
          formItemOptions: {
            label: "姓名",
            rules: [{ required: true, message: "请输入姓名", trigger: "blur" }],
          },
          inputOptions: {},
          inputHandlers: {},
          value: "",
          key: "name",
          type: "Input",
        },
        {
          formItemOptions: {
            label: "年龄",
          },
          inputOptions: {},
          inputHandlers: {},
          value: "",
          key: "age",
          type: "InputNumber",
          tooltip: "填写虚岁"
        },
      ],
    };
  },
  methods: {
    onConfirm(form) {
      console.log(form);
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
}
</style>