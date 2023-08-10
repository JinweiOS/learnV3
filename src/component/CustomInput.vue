<script>
import { computed, ref } from 'vue'
export default {
  props: ['modelValue', 'second'],
  name: 'CustomInput',
  emits: ['update:modelValue', 'update:second'],
  setup(props, { emit }) {
    const localVal = ref('')

    function getInputValue(event) {
      emit('update:modelValue', event.target.value)
    }

    function updateInputSeconde(event) {
      emit('update:second', event.target.value)
    }

    const first = computed({
      get() {
        return props.modelValue
      },
      set(value) {
        // 想办法修改modelValue的值即可
        emit('update:modelValue', value)
      }
    })

    return {
      getInputValue,
      updateInputSeconde,
      first
    }
  }
}
</script>
<template>
  <div>
    <input v-model="first" />
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    <input :value="second" @input="updateInputSeconde" />
  </div>
</template>
