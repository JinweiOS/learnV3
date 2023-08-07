<script>
import PartComp from '@/component/Part.vue'
import {ref} from 'vue'
export default {
  name: 'MainComp',
  // 局部注册
  components: {
    'PartCom': PartComp
  },
  setup() {
    const msgText = ref('hello world')
    const msgObj = ref({
      name: '哈哈哈哈'
    })
    setTimeout(() => {
      msgObj.value.name = '我改变了'
    }, 3000)

    const count = ref(0)

    function add(a, b, c) {
      count.value = a + b
      msgObj.value.name = c
    }

    return {
      msgText,
      msgObj,
      add,
      count
    }
  }
}
</script>
<template>
  <!-- <child-comp></child-comp> -->
  <!-- <part-com :msg="msgText" :obj="msgObj"></part-com> -->
  <child-comp :add-fn="add" :obj="msgObj"></child-comp>
  <div>父亲：{{ msgObj.name }}</div>
  <div>父亲:{{ count }}</div>
</template>
