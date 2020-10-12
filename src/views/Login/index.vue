<template>
  <a-form class="login-form">
    <a-form-item
      v-bind="validateInfos.username"
      name="username"
    >
      <a-input
        v-model:value="modelRef.username"
        placeholder="username"
        type="text"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item
      name="password"
      v-bind="validateInfos.password"
    >
      <a-input
        v-model:value="modelRef.password"
        type="password"
        placeholder="password"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 24 }">
      <a
        class="login-form-forgot"
        href=""
        @click="this.$router.push('register')"
      >
        Forgot password
      </a>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 24 }">
      <a-button
        type="primary"
        html-type="submit"
        class="submit-btn"
        :loading="user.loading"
        @click="handleFinish"
      >
        Login
      </a-button>
      <a @click="this.$router.push('register')">register</a>
    </a-form-item>
  </a-form>
</template>
<script>
import { computed, reactive, toRaw } from 'vue'
import { useStore } from 'vuex'
import { useForm } from '@ant-design-vue/use'
export default {
  setup() {
    const modelRef = reactive({
      username: '',
      password: '',
    })
    const rulesRef = reactive({
      username: [
        {
          required: true,
          message: 'Please input username',
        },
      ],
      password: [
        {
          required: true,
          message: 'Please input password',
        },
      ],
    })
    const store = useStore()
    const user = computed(() => {
      return store.getters.user
    })
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef)
    const handleFinish = (e) => {
      e.preventDefault()
      validate()
        .then((res) => {
          store.dispatch('user/Login')
        })
        .catch((err) => {
          console.log('error', err)
        })
    }
    return {
      modelRef,
      rulesRef,
      handleFinish,
      validateInfos,
      user,
      // loading: store.
    }
  },
}
</script>
<style lang="less" scoped>
.login-form {
  width: 300px;
}
.submit-btn {
  width: 100%;
}
</style>