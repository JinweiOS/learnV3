<script>
import { ref } from 'vue'
export default {
  name: 'StyleComp',
  setup() {
    const isTitle = ref(false)
    const colorFont = ref('blue')
    return {
      isTitle,
      colorFont
    }
  }
}
</script>
<template>
  <div :class="{ title: isTitle, 'text-color': isTitle }">12345</div>
  <div :style="{ color: colorFont }">style</div>
  <input />
  <button @click="isTitle = !isTitle">点击</button>
</template>

<style scoped>
.title {
  color: red;
}

.text-color {
  background-color: aquamarine;
}
</style>
