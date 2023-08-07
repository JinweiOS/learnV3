<script>
import { ref, watch } from 'vue'

export default {
  name: 'WatchComp',
  setup() {
    const question = ref({name: 'pjw', question: '123'})
    const answer = ref('')

    const imgUrl = ref('')
    watch(() => question.value.question, async () => {
      console.log('1')
      if (question.value.question.indexOf('?') > -1) {
        answer.value = 'Thinking...'
        // const res = await fetch(
        //   `http://api.qingyunke.com/api.php?key=free&appid=0&msg=${question.value}`,
        //   { mode: 'no-cors' }
        // )
        const res = await fetch('https://yesno.wtf/api')
        const data = await res.json()
        imgUrl.value = data.image
      }
    }, {
      immediate: true
    })

    return {
      question,
      answer,
      imgUrl
    }
  }
}
</script>

<template>
  <input v-model="question.question" />
  <div>{{ answer }}</div>
  <img :src="imgUrl" />
</template>
