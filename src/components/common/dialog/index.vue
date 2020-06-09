<template>
  <el-dialog :title="dialogOptions.title"
             :visible.sync="dialogVisible"
             :width="dialogOptions.width"
             :before-close="handleClose"
             v-dialogDrag>
    <component ref="childFunx"
               :is="dialogContentComponent"
               :data="data"
               :typeSelectData="typeSelectData"
               :roomSelectData="roomSelectData"
               :day="day"></component>
    <span slot="footer"
          class="dialog-footer"
          v-if="show">
      <el-button @click="resetForm()">重置</el-button>
      <el-button type="primary"
                 @click="submitForm()">{{dialogOptions.saveBtn}}</el-button>
      <el-button type="danger"
                 v-if="showDel"
                 @click="deleteDate">删除</el-button>
    </span>
  </el-dialog>
</template>
<script>
import grDialog from './index.js'
export default grDialog
</script>
<style  lang="less">
.el-dialog {
  border-radius: 8px;
  .el-dialog__header {
    border-radius: 8px 8px 0 0;
    background: #4991f0;
    padding: 8px 15px;
    .el-dialog__headerbtn {
      top: 12px;
    }
    .el-dialog__title {
      font-size: 18px;
      color: #fff;
    }
    .el-icon-close:before {
      color: #fff;
    }
  }
  .el-dialog__body {
    padding: 25px 15px 5px 15px;
  }
  .el-dialog__footer {
    text-align: center;
    padding-top: 0;
  }
  .el-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
  .el-button:hover {
    background-color: rgb(193, 218, 243);
    border-color: rgb(121, 184, 248);
    color: #000;
  }
}
.el-message-box {
  .el-button--primary,
  .el-button--primary:active {
    color: #fff;
    background: #409eff;
    border-color: #409eff;
  }
  .el-button:hover {
    background-color: rgb(193, 218, 243);
    border-color: rgb(121, 184, 248);
    color: #000;
  }
}
</style>
