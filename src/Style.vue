<script>
import { ref } from 'vue'
export default {
  name: 'StyleComp',
  setup() {
    const isTitle = ref(false)
    const colorFont = ref('blue')
    const colorStr = ref('')

    function changeTextColor() {
      colorFont.value = colorStr.value
    }

    return {
      isTitle,
      colorFont,
      colorStr,
      changeTextColor
    }
  }
}
</script>
<template>
  <div :class="{ title: isTitle, 'text-color': isTitle }">12345</div>
  <!-- <div :style="{ color: colorFont }">style</div> -->
  <div :style="{ color: colorStr }">style</div>
  <!-- <input v-model="colorStr" /> -->
  <input type="color" v-model="colorStr">
  <!-- <button @click="changeTextColor">点击</button> -->
</template>

<style scoped>
.title {
  color: red;
}

.text-color {
  background-color: aquamarine;
}
</style>
