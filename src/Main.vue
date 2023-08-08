<script>
import PartComp from '@/component/Part.vue'
import AttrComp from '@/component/Attr.vue'

import TableComp from '@/component/Table.vue'
import {ref} from 'vue'
export default {
  name: 'MainComp',
  // 局部注册
  components: {
    // 'PartCom': PartComp
    AttrComp,
    TableComp
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
  <!-- <child-comp :add-fn="add" :obj="msgObj"></child-comp>
  <div>父亲：{{ msgObj.name }}</div>
  <div>父亲:{{ count }}</div>
  <el-button>这是elementui提供的</el-button> -->
  <table-comp></table-comp>
  <attr-comp class="title-pjw" @click="() => console.log('p')"></attr-comp>
</template>

<style scoped>
.title-pjw {
  color: red !important;
}
</style>

