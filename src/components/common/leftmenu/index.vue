<template>
  <div class="left-menu">
    <ul>
      <li @click="clickUrl(item)"
          v-for="(item,index) in $store.state.topBanner.leftMenu "
          :key="index">
        <img :src="utils.setImgSrc(item.imgSrc)" />
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import index from './index.js'
export default index
</script>
<style  lang="less">
@import "./index.less";
</style>
