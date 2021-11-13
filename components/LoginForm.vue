<template>

  <el-form :model="form" status-icon :rules="rules" ref="form" label-width="120px" class="demo-ruleForm">
    <el-form-item label="Email" prop="email">
      <el-input type="text" v-model="form.email" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit('form')">Se connecter</el-button>
    </el-form-item>
  </el-form>

</template>

<script lang="ts">
import {
  Component,
  Vue,
} from "nuxt-property-decorator"
@Component({})
export default class Login extends Vue {
  name="Login"
  form = {
    email: '',
    password: '',
  }

  rules = {}

  submit(form: any){

  }

}
</script>

<style scoped>

</style>
