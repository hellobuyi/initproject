<template>
  <el-form :model="ruleForm"
           :rules="rules"
           ref="ruleForm"
           label-width="100px"
           class="demo-ruleForm"
           style="margin-right: 20px">
    <el-form-item label="用户账户"
                  prop="username">
      <el-input v-model="ruleForm.username"
                :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="原始密码"
                  prop="opwd">
      <el-input type="password"
                v-model="ruleForm.opwd"></el-input>
    </el-form-item>
    <el-form-item label="新密码"
                  prop="pwd">
      <el-input type="password"
                v-model="ruleForm.pwd"></el-input>
    </el-form-item>
    <el-form-item label="确认密码"
                  prop="epwd">
      <el-input type="password"
                v-model="ruleForm.epwd"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
import xg from './xg.js'
export default xg
</script>
