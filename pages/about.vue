<template>
  <div class="container">
     <!-- 引入头部组件 -->
    <Header></Header>
    <div>
      <h1 class="title mb20">
        about page
      </h1>
      <h2 class="mb20">异步加载的数据:</h2>
      <p>
        {{users}}
      </p>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  },
  async asyncData ({ $axios }) {
    const {data} = await $axios.get('https://api.myjson.com/bins/6dzl4');
    return {
      users: data
    }
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
