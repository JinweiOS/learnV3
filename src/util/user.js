import { ref } from 'vue'
const user = { name: ref('outFileUser') }

setTimeout(() => {
  const { name } = user
  name.value = 'outFileUser2'
}, 2000)

export { user }