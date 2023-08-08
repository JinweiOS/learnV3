<script>
export default {
  name: 'AttrComp',
  inheritAttrs: false, // 取消attr默认继承
  setup() {
    return {
      msg: 'Attr'
    }
  }
}
</script>

<template>
  <el-button>{{ msg }}</el-button>
  <el-button v-bind="$attrs">{{ msg }}</el-button>
</template>