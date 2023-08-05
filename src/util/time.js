import { ref } from 'vue'

const count = ref(10)

const timer = setInterval(() => {
  count.value--
  if (count.value === 0) {
    clearInterval(timer)
  }
}, 1000)

export { count }


