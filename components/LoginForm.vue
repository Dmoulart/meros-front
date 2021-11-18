<template>
  <div style="width:20vw">
    <el-form
      ref="form"
      :model="form"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      size="mini"
    >
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email" type="text" autocomplete="off" />
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input v-model="form.password" type="password" autocomplete="off" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit()">
          Se connecter
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator'
@Component({})
export default class Login extends Vue {
  form = {
    email: '',
    password: ''
  }

  rules = {}

  async submit () {
    try {
      const data = { username: this.form.email, password: this.form.password }
      await this.$auth.loginWith('local', { data })
    } catch (err) {
      console.warn(err)
    }
  }
}
</script>

<style scoped>

</style>
