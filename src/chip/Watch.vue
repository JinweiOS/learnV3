<script>
import { ref, watch } from 'vue'

export default {
  name: 'WatchComp',
  setup() {
    const question = ref('')
    const answer = ref('')

    const imgUrl = ref('')

    async function getAnswer() {
      answer.value = 'Thinking...'
      const qingyunkeRes = await fetch(
        `http://124.223.90.239:8000/api/qingyunke?msg=${question.value}`
      )
      const qingyunkAns = await qingyunkeRes.json()
      return qingyunkAns.data.msg
    }

    async function getGif() {
      const res = await fetch('https://yesno.wtf/api')
      const data = await res.json()
      return data.image
    }

    watch(question, () => {
      if (question.value.indexOf('?') > -1) {
        answer.value = 'Thinking...'
        Promise.all([getAnswer(), getGif()]).then(([resAnswer, resGif]) => {
          console.log(resAnswer, resGif)
          answer.value = resAnswer
          imgUrl.value = resGif
        })
      }
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
  <!-- 展示问答轮次信息 -->
  <div>
    <div>Q:这是问题</div>
    <div>Bot: 这是回答</div>
  </div>
  <input v-model="question" />
  <div>{{ answer }}</div>
  <img :src="imgUrl" />
</template>
