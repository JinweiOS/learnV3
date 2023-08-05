import { ref } from 'vue'
const user = ref({ name: 'outFileUser' })

setTimeout(() => {
  user.value.name = 'outFileUser2'
}, 2000)

export { user }