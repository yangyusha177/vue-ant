<template>
    <div class="login-container">
      <a-form
        class="login-form"
        :form="form"
        @submit="handleSubmit">
        <div class="title-container">
          <h3 class="title">Login Form</h3>
        </div>
        <a-form-item
          :validate-status="userNameError() ? 'error' : ''"
          :help="userNameError() || ''"
        >
          <a-input
            v-decorator="[
          'userName',
          {rules: [{ required: true, message: 'Please input your username!' }]}
        ]"
            placeholder="Username"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color:rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item
          :validate-status="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
        >
          <a-input
            v-decorator="[
          'password',
          {rules: [{ required: true, message: 'Please input your Password!' }]}
        ]"
            type="password"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color:rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="hasErrors(form.getFieldsError())"
          >
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </div>
</template>

<script>
import { Layout, Form, Icon, Checkbox, Input, Button } from 'ant-design-vue'
const FormItem = Form.Item
function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default {
  name: 'Login.vue',
  data () {
    return {
      hasErrors,
      form: this.$form.createForm(this)
    }
  },
  components: {
    ALayout: Layout,
    AForm: Form,
    AIcon: Icon,
    AInput: Input,
    ACheckbox: Checkbox,
    AFormItem: FormItem,
    AButton: Button
  },
  methods: {
    userNameError () {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('userName') && getFieldError('userName')
    },
    passwordError () {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('password') && getFieldError('password')
    },
    handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          localStorage.setItem('username', values.userName)
          localStorage.setItem('password', values.password)
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100%;
  background-color: #2d3a4b;
}
.login-form {
  width: 520px;
  padding: 160px 35px 0;
  margin: 0 auto;
}
.title-container {
  width:100%;
}
.title-container .title {
  margin: 0 auto 40px auto;
  font-size: 26px;
  text-align: center;
  color: #ffffff;
}
.ant-btn {
  width: 100%;
  height: 40px;
}
</style>
