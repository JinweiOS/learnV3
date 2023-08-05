<script>
// 导入lib
import { ref, reactive, shallowRef } from 'vue'
import { user } from '@/util/user.js'
// 组合式api
const outRef = ref('外边也不错')

export default {
  name: 'App', // 建议给个名字
  // setup函数
  setup() {
    // 创建响应式变量
    const count = ref(0)

    const aimObj = {
      skill: [1, 2, 3, 4],
      obj: {
        name: '小明',
        age: 18
      }
    }
    const reactiveObj = ref(aimObj)

    setTimeout(() => {
      testReactiveApi = {
        name: 'wjp',
        age: 18
      }
      reactiveObj.value = {
        skill: [6],
        obj: {
          name: '小红',
          age: 18
        }
      }
    }, 2000)

    let testReactiveApi = reactive({
      name: 'pjw',
      age: 18
    })

    const userList = ref({
      data: [
        {
          name: '小明',
          age: 18
        },
        {
          name: '小红',
          age: 18
        }
      ]
    })

    const shallowRefTest = shallowRef({ name: 'shallowRefTest' })

    setTimeout(() => (shallowRefTest.value = { name: 'shallowRefTest2' }), 2000)
    // 所有模板中的数据都需要在setup中return出去
    return {
      count,
      reactiveObj,
      testReactiveApi,
      userList,
      shallowRefTest,
      outRef,
      user
    }
  }
}
</script>

<template>
  <div class="title">{{ reactiveObj.skill }}</div>

  <div>{{ reactiveObj.obj.name }}</div>
  <div>{{ time }}</div>

  <div>{{ testReactiveApi.name }}</div>

  <div>{{ userList.data[0].name }}</div>
  <div>{{ shallowRefTest.name }}</div>
  <div>{{ outRef }}</div>

  <div>{{ user.name }}</div>
</template>

<style scoped>
.title {
  color: red;
}
</style>
