<template>
  <div class="footer-box">
    <p>公用底部：</p>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple"><el-button size="small">默认按钮</el-button></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"><el-button size="small">默认按钮</el-button></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"><el-button size="small">默认按钮</el-button></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"><el-button size="small">默认按钮</el-button></div></el-col>
    </el-row>
  </div>
</template>
<style>
  .footer-box {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 50%;
    margin-left: -600px;
    padding: 20px 0;
    width: 1200px;
  }
</style>
