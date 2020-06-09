<template>
  <div class="home-wrap">
    <header class="header">
      <div class="logo">
        <router-link tag='span'
                     to="/">LOGO萧山区智慧农业水利系统</router-link>
        {{this.$store.state.topBanner.name?'（'+this.$store.state.topBanner.name+'）':''}}
      </div>
      <!-- 菜单最大长度6 -->
      <el-menu :default-active="activeIndex"
               class="el-menu-demo header"
               mode="horizontal"
               @select="handleSelect">

        <el-menu-item v-for="(val,key) in $store.state.topBanner.bannerArr"
                      :key="key"
                      :index="(key+1).toString()">{{val.title}}</el-menu-item>
        <!-- <el-menu-item index="2">我的工作台</el-menu-item>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4">订单管理</el-menu-item> -->
        <div class="nav">
          <el-dropdown class="user-name"
                       @command="handleCommand">
            <el-button type="primary">
              <i>{{username}}</i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="item.command"
                                :divided="item.divided"
                                v-for="(item,index) in dropdownData"
                                :key="index">
                <i :class="setDropdownClass(item.class)"></i>
                {{item.name}}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-menu>
    </header>
    <!-- <header class="header">
      <div class="logo">
        <router-link tag='span'
                     to="/">LOGO萧山区智慧农业水利系统</router-link>
        （综合业务管理平台）
      </div>
      <div class="nav">
        <div class="banner">
          <router-link to="/zhyw/yjzb/yjfy">预警指标</router-link>
          <router-link to="/zhyw/yjzb/yjtc">设备管理</router-link>
        </div>
        <el-dropdown class="user-name"
                     @command="handleCommand">
          <el-button type="primary">
            <i>{{username}}</i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :command="item.command"
                              :divided="item.divided"
                              v-for="(item,index) in dropdownData"
                              :key="index">
              <i :class="setDropdownClass(item.class)"></i>
              {{item.name}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header> -->
    <router-view />

    <!-- 密码修改弹窗 -->
    <gr-dialog :dialogVisible.sync="dialogVisible"
               :dialogOptions="dialogOptions"
               :dialogContentComponent="dialogContentComponent" />
  </div>
</template>
<script>
import index from './index.js'
export default index
</script>
<style lang="less">
@import "./index.less";
</style>
