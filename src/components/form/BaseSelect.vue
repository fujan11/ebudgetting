<template>
  <div class="form-group">
    <label v-bind="labelFor" class="required fs- fw-bold mb-2">{{ label }}</label>
    <select
      class="form-control form-control-sm"
      :class="{ 'is-invalid': getError }"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    >
      <option value="" v-if="placeholder">{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="`option-${option.value}`"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <div class="invalid-feedback" v-if="getError">{{ getError }}</div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    error: {
      type: [Array, String],
      default: null,
    },
  },
  mounted() {
    console.log(this.options);
  },
  computed: {
    labelFor() {
      return this.$attrs.id ? { for: this.$attrs.id } : {};
    },
    getError() {
      return Array.isArray(this.error) ? this.error.join(", ") : this.error;
    },
  },
};
</script>
