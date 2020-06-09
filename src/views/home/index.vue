<template>
  <!-- <div class="home-wrap"> -->

  <div class="main-content">
    <div class="line">
      <div class="line3">
        <div v-for="(val,key) in menu_list"
             :key="key">
          <div class="same"
               v-if="val.tp==1"
               @click="handleSys(val)">
            <span v-html="restr(val.title)" />
          </div>
          <!-- <router-link tag="div"
                         class="same"
                         :to="val.url"
                         v-if="val.tp==1">
              <span v-html="restr(val.title)"></span></router-link> -->
        </div>

      </div>
      <div class="line4">

        <div v-for="(val,key) in menu_list"
             :key="key">
          <div class="same"
               v-if="val.tp==2"
               @click="handleSys(val)">
            <span v-html="restr(val.title)" />
          </div>
          <!-- <router-link tag="div"
                         class="same"
                         :to="val.url"
                         v-if="val.tp==2">
              <span v-html="restr(val.title)"></span></router-link> -->
        </div>
      </div>
    </div>
  </div>

  <!-- </div> -->
</template>
<script>
import index from './index.js'
export default index
</script>
<style lang="less">
@import "./index.less";
</style>
