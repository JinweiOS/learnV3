<script>
import { ref, watch, inject } from 'vue'

export default {
  props: ['msg'],
  emits: ['update'],
  name: 'AsyncData',
  setup(props, { emit }) {
    console.log('props', props.msg.people.msg)
    const msgLocal = ref('')
    function updateP() {
      emit('update', msgLocal.value)
    }
    watch(
      () => props.msg,
      () => {
        msgLocal.value = props.msg.people.msg
      }
    )
    // 依赖注入
    const msgObj = inject('msgObj')
    return {
      msgLocal,
      updateP,
      msgObj
    }
  }
}
</script>
<template>
  <!-- 默认展示qingyunke机器人的回答的值 -->
  <!-- <div>{{ msg?.people?.msg }}</div> -->
  <input v-model="msgLocal" />
  <button @click="updateP">更新数据</button>
  <span>{{ msgObj.name }}</span>
</template>
