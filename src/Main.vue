<script>
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
    const customInput2 = ref('0942')

    function add(a, b, c) {
      count.value = a + b
      msgObj.value.name = c
    }

    function getData(data) {
      console.log('获取数据', data)
    }


    const childTableData = ref()
    function setMainTableData(data) {
      childTableData.value = data
      console.log('子组件传递的数据', childTableData.value)
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
      getData,
      setMainTableData,
      customInput2
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
  <custom-input v-model:modelValue="customInput" v-model:second="customInput2"></custom-input>
  <!-- <CustomInput
    :modelValue="customInput"
    @update:modelValue="(newValue) => (customInput = newValue)"
  /> -->
  <div>父组件customInput1: {{ customInput }}</div>
  <div>父组件customInput2: {{ customInput2 }}</div>
  <table-comp :send-parent="setMainTableData" @submit-data="getData"></table-comp>
  <attr-comp class="title-pjw" @click="() => console.log('p')"></attr-comp>
</template>

<style scoped>
.title-pjw {
  color: red !important;
}
</style>
