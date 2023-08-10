<script>
import PartComp from '@/component/Part.vue'
import AttrComp from '@/component/Attr.vue'

import TableComp from '@/component/Table.vue'
import CustomInput from '@/component/CustomInput.vue'
import { ref } from 'vue'
export default {
  name: 'MainComp',
  // 局部注册
  components: {
    // 'PartCom': PartComp
    AttrComp,
    TableComp,
    CustomInput
  },
  setup() {
    const msgText = ref('hello world')
    const msgObj = ref({
      name: '哈哈哈哈'
    })


    const count = ref(0)
    const customInput = ref('0941')

    function add(a, b, c) {
      count.value = a + b
      msgObj.value.name = c
    }

    function getData(data) {
      console.log('获取数据', data)
    }


    setTimeout(() => {
      msgObj.value.name = '我改变了'
      customInput.value = '0943'
    }, 3000)
    return {
      msgText,
      msgObj,
      add,
      count,
      customInput,
      getData
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
  <custom-input v-model="customInput"></custom-input>
  <!-- <CustomInput
    :modelValue="customInput"
    @update:modelValue="(newValue) => (customInput = newValue)"
  /> -->
  <table-comp @submit="getData"></table-comp>
  <attr-comp class="title-pjw" @click="() => console.log('p')"></attr-comp>
</template>

<style scoped>
.title-pjw {
  color: red !important;
}
</style>
