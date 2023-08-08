<script>
import AButton from './Abutton.vue'

import { ref } from 'vue'
export default {
  name: 'AttrComp',
  inheritAttrs: false, // 取消attr默认继承
  components: {
    AButton,
  },
  setup() {
    const form = ref({
      name: '',
      password: ''
    })

    const usernameText = ref('用户名')

    function login() {
      console.log(form.value)
      // TODO: 后端请求
    }
    return {
      form,
      login,
      usernameText
    }
  }
}
</script>

<template>
  <a-button>
    <template v-slot:header>
      <div>头</div>
    </template>
    <template v-slot:default="{ id }">
      {{ id }}
    </template>
    <template v-slot:footer>
      <div>脚</div>
    </template>
  </a-button>
  <el-form :model="form" label-width="60px">
    <el-form-item>
      <template v-slot:label
        ><div class="form-title">{{ usernameText }}</div></template
      >
      <el-input v-model="form.name" placeholder="输入用户名" />
    </el-form-item>
    <el-form-item>
      <template v-slot:label><div class="form-title">密码</div></template>
      <el-input
        v-model="form.password"
        type="password"
        :show-password="true"
        placeholder="输入密码"
      />
    </el-form-item>
    <el-button @click="login">登录</el-button>
  </el-form>
</template>

<style scoped>
.form-title {
  display: flex;
  justify-content: flex-start;
}
</style>
