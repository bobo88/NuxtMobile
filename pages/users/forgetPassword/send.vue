<template>
  <div class="container">
     <!-- 引入头部组件 -->
    <Header></Header>
    <div>
      <h1 class="title">
        user - forgetPassword - send page
      </h1>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  },
  head () {
    return {
      meta: 
      [
        {
          name: 'keywords',
          content: `yyyy-about`
        },
      ]
    }
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

</style>
