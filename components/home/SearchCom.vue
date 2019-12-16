<template>
  <div class="search-com-box pr">
    <van-search class="search-com-item" placeholder="请输入搜索关键词" v-model="value" />
    <span class="iconfont icon-camera pb"></span>
  </div>
</template>
<script>
export default {
  // props: {
  //   dataTitle: {
  //     type: String,
  //     required: true
  //   }
  // },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-com-box {
    margin: 0 auto;
    width: 700px;
    .icon-camera {
      top: 19px;
      left: 550px;
      font-size: 30px;
    }
  }
</style>
