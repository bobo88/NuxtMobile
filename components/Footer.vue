<template>
  <div class="footer-box">
    <van-row type="flex" justify="space-between">
      <van-col span="4" class="tc" :class="{current: dataCurrent === 1}">
        <p class="iconfont icon-shouye c-icon"></p>
        <p class="c-name">首页</p>
      </van-col>
      <van-col span="4" class="tc" :class="{current: dataCurrent === 2}">
        <p class="iconfont icon-fenlei c-icon"></p>
        <p class="c-name">分类</p>
      </van-col>
      <van-col span="4" class="tc" :class="{current: dataCurrent === 3}">
        <p class="iconfont icon-gouwuche c-icon"></p>
        <p class="c-name">购物车</p>
      </van-col>
      <van-col span="4" class="tc" :class="{current: dataCurrent === 4}">
        <p class="iconfont icon-wo c-icon"></p>
        <p class="c-name">我的</p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  props: {
    dataCurrent: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer-box {
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    padding: 10px 25px;
    width: 100%;
    height: 100px;
    line-height: 80px;
    background: #fff;
    overflow: hidden;
    .current {
      .c-icon {
        color: #f3bc2a;
      }
      .c-name {
        color: #000;
      }
    }
    .c-icon {
      margin-bottom: 10px;
      height: 40px;
      line-height: 40px;
      font-size: 40px;
      color: #808080;
    }
    .c-name {
      height: 30px;
      line-height: 30px;
      color: #808080;
      font-size: 24px;
    }
  }
</style>
