<template>
  <div class="page">
    <Form
      :inline="false"
      :data="formList"
      @confirm="onConfirm"
      label-width="100px"
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
            // rules: [{ required: true, message: "请输入姓名", trigger: "blur" }],
          },
          value: "",
          key: "name",
          type: "Input",
        },
        {
          formItemOptions: {
            label: "年龄",
          },
          value: 18,
          key: "age",
          type: "InputNumber",
        },
        {
          formItemOptions: {
            label: "性别",
          },
          inputOptions: {
            options: [
              {
                value: 1,
                label: "男",
              },
              {
                value: 2,
                label: "女",
              },
              {
                value: 0,
                label: "保密",
              },
            ],
          },
          value: "",
          key: "gender",
          type: "Select",
        },
        {
          formItemOptions: {
            label: "启用状态",
          },
          inputOptions: {
            validator: (val) => this.$confirm(`是否确认${val ? '打开' : '关闭'}开关`, "警告"),
          },
          value: false,
          key: "status",
          type: "Switch",
          tooltip: "表示人员是否可正常使用平台功能",
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