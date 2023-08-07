<script>
import { onMounted, ref, watch } from 'vue';
export default {
  // 声明
  props: ['msg', 'obj'],
  name: 'PartComp',
  setup(props) {
    console.log(props)
    const partLocal = ref(props.obj.name)

    // props.obj.name = '哈哈哈' 会通知修改父组件的数据
    // 建议是子组件用一个local变量进行保存
    watch(() => props.obj.name, () => {
      partLocal.value = props.obj.name
    })

    setTimeout(() => {
      partLocal.value = '子级自己变化'
    }, 5000)

    return {
      partLocal
    }
  }
}
</script>
<template>
  <div>{{ msg }}</div>

  <div>{{ partLocal }}</div>
</template>