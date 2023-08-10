<script>
import { ref, watch } from 'vue'
import eventbus from '@/util/eventbus.js'
import { pingSend, pongSend } from '@/util/pingpang'
export default {
  name: 'PongComp',
  setup() {
    const count = ref(1)
    watch(pingSend, (newVal) => {
      count.value += newVal
    })

    function sendByBus() {
      eventbus.emit('pong', count.value)
    }

    eventbus.on('ping', (val) => {
      count.value += val
    })


    function send() {
      pongSend.value = count.value
    }
    return {
      count,
      send,
      sendByBus
    }
  }
}
</script>
<template>
  <div>
    <div>{{ count }}</div>
    <button @click="send">发送数据</button>
    <button @click="sendByBus">事件总线发送数据</button>
  </div>
</template>
