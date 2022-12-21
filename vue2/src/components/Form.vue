<template>
  <div class="form">
    <el-form v-bind="$attrs" v-on="$listeners">
      <el-form-item
        v-bind="item.formItemOptions"
        v-for="(item, i) of formList"
        :key="i"
      >
        <template v-if="item.inputOptions.type == 'Radio'">
          <Radio></Radio>
        </template>
        <template v-if="item.inputOptions.type == 'Checkbox'">
          <Checkbox></Checkbox>
        </template>
        <template v-if="item.inputOptions.type == 'InputNumber'">
          <InputNumber></InputNumber>
        </template>
        <template v-if="item.inputOptions.type == 'Select'">
          <Select></Select>
        </template>
        <template v-if="item.inputOptions.type == 'Cascader'">
          <Cascader></Cascader>
        </template>
        <template v-if="item.inputOptions.type == 'Switch'">
          <Switch></Switch>
        </template>
        <template v-if="item.inputOptions.type == 'Slider'">
          <Slider></Slider>
        </template>
        <template v-if="item.inputOptions.type == 'TimePicker'">
          <TimePicker></TimePicker>
        </template>
        <template v-if="item.inputOptions.type == 'DatePicker'">
          <DatePicker></DatePicker>
        </template>
        <template v-if="item.inputOptions.type == 'DateTimePicker'">
          <DateTimePicker></DateTimePicker>
        </template>
        <template v-if="item.inputOptions.type == 'Upload'">
          <Upload></Upload>
        </template>
        <template v-if="item.inputOptions.type == 'Rate'">
          <Rate></Rate>
        </template>
        <template v-if="item.inputOptions.type == 'ColorPicker'">
          <ColorPicker></ColorPicker>
        </template>
        <template v-if="item.inputOptions.type == 'Transfer'">
          <Transfer></Transfer>
        </template>
        <template v-else>
          <Input
            v-model="item.value"
            v-bind="item.inputOptions"
            v-on="item.inputHandlers"
          ></Input>
        </template>
      </el-form-item>
      <Button @click="submit"></Button>
    </el-form>
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
    Switch,
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
      formData: {},
      formList: [
        {
          formItemOptions: {
            label: "活动名称",
          },
          inputOptions: {},
          value: "ddd",
          type: "Input",
        },
      ],
    };
  },
  methods: {
    submit() {
      console.log("a");
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
}
</style>