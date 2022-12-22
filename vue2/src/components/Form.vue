<template>
  <div class="form">
    <el-form
      label-width="80px"
      v-bind="$attrs"
      v-on="$listeners"
      ref="form"
      :model="formData"
    >
      <el-form-item
        v-bind="item.formItemOptions"
        v-for="(item, i) of formList"
        :key="i"
      >
        <template v-if="item.type == 'Radio'">
          <Radio></Radio>
        </template>
        <template v-if="item.type == 'Checkbox'">
          <Checkbox></Checkbox>
        </template>
        <template v-if="item.type == 'InputNumber'">
          <InputNumber></InputNumber>
        </template>
        <template v-if="item.type == 'Select'">
          <Select></Select>
        </template>
        <template v-if="item.type == 'Cascader'">
          <Cascader></Cascader>
        </template>
        <template v-if="item.type == 'Switch'">
          <VSwitch></VSwitch>
        </template>
        <template v-if="item.type == 'Slider'">
          <Slider></Slider>
        </template>
        <template v-if="item.type == 'TimePicker'">
          <TimePicker></TimePicker>
        </template>
        <template v-if="item.type == 'DatePicker'">
          <DatePicker></DatePicker>
        </template>
        <template v-if="item.type == 'DateTimePicker'">
          <DateTimePicker></DateTimePicker>
        </template>
        <template v-if="item.type == 'Upload'">
          <Upload></Upload>
        </template>
        <template v-if="item.type == 'Rate'">
          <Rate></Rate>
        </template>
        <template v-if="item.type == 'ColorPicker'">
          <ColorPicker></ColorPicker>
        </template>
        <template v-if="item.type == 'Transfer'">
          <Transfer></Transfer>
        </template>
        <template v-else>
          <Input v-model="formList[i].value" v-bind="formList[i].inputOptions"></Input>
        </template>
      </el-form-item>
    </el-form>
    <div class="footer">
      <Button @click="cancel" style="margin-right: 8px">取消</Button>
      <Button @click="submit" type="primary">确认</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Form/Button.vue";
import Radio from "@/components/Form/Radio.vue";
import Checkbox from "@/components/Form/Checkbox.vue";
import InputNumber from "@/components/Form/InputNumber.vue";
import Select from "@/components/Form/Select.vue";
import Cascader from "@/components/Form/Cascader.vue";
import Switch from "@/components/Form/Switch.vue";
import Slider from "@/components/Form/Slider.vue";
import TimePicker from "@/components/Form/TimePicker.vue";
import DatePicker from "@/components/Form/DatePicker.vue";
import DateTimePicker from "@/components/Form/DateTimePicker.vue";
import Upload from "@/components/Form/Upload.vue";
import Rate from "@/components/Form/Rate.vue";
import ColorPicker from "@/components/Form/ColorPicker.vue";
import Transfer from "@/components/Form/Transfer.vue";
import Input from "@/components/Form/Input.vue";
export default {
  name: "Form",
  components: {
    Button,
    Radio,
    Checkbox,
    InputNumber,
    Select,
    Cascader,
    VSwitch: Switch,
    Slider,
    TimePicker,
    DatePicker,
    DateTimePicker,
    Upload,
    Rate,
    ColorPicker,
    Transfer,
    Input,
  },
  props: {},
  data() {
    return {
      formList: [
        {
          formItemOptions: {
            label: "活动名称",
            rules: [
              { required: true, message: "请输入邮箱地址", trigger: "blur" },
            ],
          },
          inputOptions: {},
          inputHandlers: {},
          value: "ddd",
          key: "ddd",
          type: "Input",
        },
      ],
    };
  },
  computed: {
    formData() {
      return this.formList
        .map(({ key, value }) => ({
          [key]: value,
        }))
        .reduce((res, e) => {
          return Object.assign(res, e);
        }, {});
    },
  },
  methods: {
    submit() {
      this.$refs.form.validate((res) => {
        console.log(res);
      });
    },
    cancel() {},
  },
};
</script>

<style lang="scss" scoped>
.form {
  .footer {
    display: flex;
    justify-content: center;
  }
}
</style>