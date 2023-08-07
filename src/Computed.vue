<script>
import { ref, computed } from 'vue'

const author = ref({
  name: 'test',
  books: [
    {
      name: 'book1',
      price: 100
    },
    {
      name: 'book2',
      price: 200
    }
  ]
})


let authHasBooks = computed(() => {
  return author.value.books.length > 0 ? '是' : '否'
})

const authHasBookFn = () => {
  return author.value.books.length > 0 ? '是' : '否'
}

export default {
  name: 'ComputedComp',
  setup() {
    const firstName = ref('张')
    const lastName = ref('三')
    const inputName = ref('')
    const fullName = computed({
      get() {
        return firstName.value + lastName.value
      },
      set(val) {
        const names = val.split(' ')
        firstName.value = names[0]
        lastName.value = names[1]
      }
    })
    return {
      author,
      authHasBooks,
      authHasBookFn,
      fullName,
      inputName
    }
  }
}
</script>
<template>
  <button @click="author.books = []">删除作者书籍</button>
  <div>作者是否出过书：{{ authHasBookFn() }}</div>
  <input v-model="inputName" />
  <button @click="fullName = inputName">设置名字</button>
  <div>{{ fullName }}</div>
</template>
