<script>
import { onMounted, onUpdated, onUnmounted, ref } from 'vue'

export default {
  name: 'TimeComp',
  setup() {
    // 不推荐
    let el = document.getElementById('time')
    console.log(el)
    // 回调函数既可以传同步的，也可以传递异步的
    // onCreated(() => {
    //   console.log('onCreated')
    // })
    const display = ref(null)
    onMounted(() => {
      console.log(display.value, 'display')
      // 作数据初始化
      // await sleep(2000)
      console.log('onMounted')
      let el = document.getElementById('time')
      console.log(el)
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onUnmounted(() => {
      // 做监听事件函数的销毁
      console.log('onUnmounted')
    })

    function sleep(time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, time)
      })
    }

    const time = ref(0)

    setTimeout(() => {
      time.value = 1
    }, 3000)

    return {
      time,
      display
    }
  }
}
</script>
<template>
  <div ref="display">{{ time }}</div>
  <div></div>
</template>
