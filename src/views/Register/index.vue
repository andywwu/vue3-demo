<template>
  <a-form
    class="register-form"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-item
      label="Username"
      name="username"
      v-bind="validateInfos.username"
    >
      <a-input
        v-model:value="modelRef.username"
        type="text"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item
      name="password"
      label="Password"
      v-bind="validateInfos.password"
    >
      <a-input
        v-model:value="modelRef.password"
        type="password"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item
      name="confirmPassword"
      label="Confirm Password"
      v-bind="validateInfos.confirmPassword"
    >
      <a-input
        v-model:value="modelRef.confirmPassword"
        type="password"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item
      name="phone"
      label="Phone Number"
      v-bind="validateInfos.phone"
    >
      <a-input-group compact>
        <a-select v-model:value="modelRef.areaNum">
          <a-select-option value="86">
            +86
          </a-select-option>
          <a-select-option value="00">
            +00
          </a-select-option>
        </a-select>
        <a-input
          style="width: 80%"
          v-model:value="modelRef.phone"
          type="text"
          autocomplete="off"
        />
      </a-input-group>
    </a-form-item>
    <a-form-item label="Captcha">
      <a-row :gutter="8">
        <a-col :span="12">
          <a-form-item v-bind="validateInfos.captcha">
            <a-input
              v-model:value="modelRef.captcha"
              type="text"
              autocomplete="off"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-button>
            Get captcha
          </a-button>
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 24 }">
      <div class="footer">
        <a-button
          type="primary"
          html-type="submit"
          class="submit-btn"
          @click="handleFinish"
        >
          Register
        </a-button>
        <a @click="this.$router.push('login')">login</a>
      </div>
    </a-form-item>
  </a-form>
</template>
<script>
import { reactive, toRaw } from 'vue'
import { useForm } from '@ant-design-vue/use'
export default {
  setup() {
    const modelRef = reactive({
      username: '',
      password: '',
      confirmPassword: '',
      phone: '',
      areaNum: '86',
      captcha: '',
    })
    const validateConfirmPass = async (rule, value, callback) => {
      if (value === '') {
        return Promise.reject('Please input the password again')
      } else if (value !== modelRef.password) {
        return Promise.reject("Two inputs don't match!")
      } else {
        return Promise.resolve()
      }
    }
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
      confirmPassword: [
        {
          required: true,

          message: 'Please input confirm password',
        },
        {
          validator: validateConfirmPass,
        },
      ],
      phone: [
        {
          required: true,
          message: 'Please input phone',
        },
      ],
      captcha: [
        {
          required: true,
          message: 'Please input captcha',
        },
      ],
    })
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef)
    const handleFinish = (e) => {
      e.preventDefault()
      validate()
        .then((res) => {
          console.log(res, toRaw(modelRef))
        })
        .catch((err) => {
          console.log('error', err)
        })
    }
    return {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
      modelRef,
      rulesRef,
      validateInfos,
      handleFinish,
    }
  },
}
</script>
<style lang="less" scoped>
.register-form {
  width: 500px;
}
.footer {
  text-align: center;
  > a {
    display: block;
  }
}
</style>