<template>
  <div class="form"
       :model="form">
    <div class="login-topm">
      <img src="@/assets/login/username1.png" />
      <input type="text"
             name="username"
             placeholder="请输入用户名"
             v-model="form.username" />
    </div>
    <div class="login-topm">
      <img src="@/assets/login/password2.png" />
      <input type="password"
             name="pwd"
             placeholder="请输入用户密码"
             v-model="form.password" />
    </div>
    <div class="login-topm">
      <img src="@/assets/login/yz.png" />
      <input type="text"
             placeholder="验证码"
             style="width: 180px;"
             v-model="form.code" />
      <div class="yanzhengm"
           @click="refreshCode">
        <s-identify :identifyCode="identifyCode"></s-identify>
      </div>
    </div>
    <div class="login-btn"
         @click="loginAction()">
      <span>登录</span>
    </div>
  </div>
</template>
<script>
import mm from './index.js'
export default mm
</script>
<style  lang="less">
@import "../index.less";
</style>
