<script>
export default {
  props: ['modelValue'],
  name: 'CustomInput',
  setup() {}
}
</script>
<template>
  <div>
    <div>{{ modelValue }}</div>
    <input type="text" />
  </div>
</template>
