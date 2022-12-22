<template>
  <div class="form">
    <el-form
      :label-width="$attrs['label-width'] || '80px'"
      v-bind="$attrs"
      v-on="$listeners"
      ref="form"
      :model="formData"
      :inline="inline"
    >
      <el-form-item
        v-bind="item.formItemOptions"
        v-for="(item, i) of data"
        :key="i"
        :prop="item.key"
        :style="{
          float: inline ? 'left' : '',
        }"
      >
        <template #label>
          {{ item.formItemOptions.label }}
          <el-tooltip v-if="item.tooltip" :content="item.tooltip">
            <i class="el-icon-question"></i>
          </el-tooltip>
        </template>
        <template v-if="item.type == 'Radio'">
          <Radio></Radio>
        </template>
        <template v-else-if="item.type == 'Checkbox'">
          <Checkbox></Checkbox>
        </template>
        <template v-else-if="item.type == 'InputNumber'">
          <InputNumber
            v-model="item.value"
            v-bind="item.inputOptions"
            :placeholder="`请输入${item.formItemOptions.label}`"
          ></InputNumber>
        </template>
        <template v-else-if="item.type == 'Select'">
          <Select
            v-model="item.value"
            v-bind="item.inputOptions"
            :placeholder="`请选择${item.formItemOptions.label}`"
          ></Select>
        </template>
        <template v-else-if="item.type == 'Cascader'">
          <Cascader></Cascader>
        </template>
        <template v-else-if="item.type == 'Switch'">
          <VSwitch
            v-on="item.inputHandlers"
            v-bind="item.inputOptions"
            :value="item.value"
            @change="(val) => onSwitchChange(val, item)"
          ></VSwitch>
        </template>
        <template v-else-if="item.type == 'Slider'">
          <Slider></Slider>
        </template>
        <template v-else-if="item.type == 'TimePicker'">
          <TimePicker></TimePicker>
        </template>
        <template v-else-if="item.type == 'DatePicker'">
          <DatePicker></DatePicker>
        </template>
        <template v-else-if="item.type == 'DateTimePicker'">
          <DateTimePicker></DateTimePicker>
        </template>
        <template v-else-if="item.type == 'Upload'">
          <Upload></Upload>
        </template>
        <template v-else-if="item.type == 'Rate'">
          <Rate></Rate>
        </template>
        <template v-else-if="item.type == 'ColorPicker'">
          <ColorPicker></ColorPicker>
        </template>
        <template v-else-if="item.type == 'Transfer'">
          <Transfer></Transfer>
        </template>
        <template v-else>
          <Input
            v-model="item.value"
            v-bind="item.inputOptions"
            :placeholder="`请输入${item.formItemOptions.label}`"
          ></Input>
        </template>
      </el-form-item>
      <div
        class="operations"
        :style="{
          display: inline ? 'inline-flex' : '',
          justifyContent: inline ? '' : 'center',
          float: inline ? 'left' : '',
        }"
      >
        <Button
          v-for="(button, key) of operations"
          :key="key"
          :type="key == 'confirm' ? 'primary' : ''"
          :decorator="key == 'confirm' ? 'debounce' : ''"
          @click="onClick(key)"
          class="operation"
        >
          {{
            typeof button == "string"
              ? button
              : { confirm: "确认", cancel: "取消", reset: "重置" }[key]
          }}
        </Button>
        <slot name="operations"></slot>
      </div>
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
  props: {
    data: Array,
    operations: Object,
    inline: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    return {
      inline: this.inline,
    };
  },
  computed: {
    formData() {
      return this.data
        .map(({ key, value }) => ({
          [key]: value,
        }))
        .reduce((res, e) => {
          return Object.assign(res, e);
        }, {});
    },
  },
  methods: {
    onClick(key) {
      if (key == "confirm") this.confirm();
      if (key == "cancel") this.cancel();
      if (key == "reset") this.reset();
    },
    confirm() {
      this.$refs.form.validate((res) => {
        if (res) {
          this.$emit("confirm", this.formData);
        }
      });
    },
    cancel() {
      this.$emit("cancel");
    },
    reset() {
      this.data.forEach((e) => {
        e.value = new e.value.constructor().valueOf();
        this.$refs.form.resetFields();
      });
      this.$emit("reset");
    },
    async onSwitchChange(val, item) {
      try {
        if (item.inputOptions.validator) {
          if (await item.inputOptions.validator(val)) {
            item.value = val;
          }
        } else {
          item.value = val;
        }
      } catch (error) {
        error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  .operations {
    display: flex;
    flex-wrap: wrap;
    .operation {
      margin-bottom: 22px;
      margin-left: 16px;
    }
  }
}
</style>