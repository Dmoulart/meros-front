<template>
  <div style="width:20vw">
  <el-form :model="form" status-icon :rules="rules" ref="form" label-width="120px" class="demo-ruleForm" size="mini">
    <el-form-item label="Email" prop="email">
      <el-input type="text" v-model="form.email" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit()">Se connecter</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from "nuxt-property-decorator"
@Component({})
export default class Login extends Vue {
  form = {
    email: '',
    password: '',
  }

  rules = {}

  async submit(){
    try {
      const data = { username: this.form.email, password: this.form.password }
      const res = await this.$auth.loginWith('local', { data })
    } catch (err) {
      console.log(err)
    }
  }

}
</script>

<style scoped>

</style>
