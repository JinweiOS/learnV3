<script>
import { ref, watch } from 'vue'
import { pingSend, pongSend } from '@/util/pingpang.js'
import eventbus from '@/util/eventbus.js'
export default {
  name: 'PingComp',
  setup() {
    const count = ref(1)

    eventbus.on('pong', (val) => {
      count.value += val
    })

    function send() {
      pingSend.value = count.value
    }

    function sendByBus() {
      eventbus.emit('ping', count.value)
    }

    watch(pongSend, (newVal) => {
      count.value += newVal
    })
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
