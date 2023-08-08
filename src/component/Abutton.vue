<script>

import {ref} from 'vue'

export default {
  name: 'AButton',
  setup() {
    const msg = ref('响应式变量，从slot中进行传递')
    return {
      msg
    }
  }
}
</script>

<template>
  <header><slot name="header"></slot></header>
  <main><slot :id="msg"></slot></main>
  <footer><slot name="footer"></slot></footer>
</template>