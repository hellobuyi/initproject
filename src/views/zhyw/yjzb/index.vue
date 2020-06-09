<template>
  <div class="center clearfix">
    <left-menu :dxid="'zyfw'"
               :menuItem.sync="menuItem" />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import leftMenuNode from '@/components/common/leftmenu/index.vue'
export default {
  data () {
    return { menuItem: {} }
  },
  watch: {
    menuItem () {
      this.$router.push(this.menuItem.url)
    }
  },
  components: {
    'left-menu': leftMenuNode
  }
}
</script>
<style lang="less" scoped>
.center {
  height: calc(100% - 60px);
}
.content {
  float: left;
  width: calc(100% - 252px);
  height: 100%;
  padding: 20px;
  background: #fff;
}
</style>
