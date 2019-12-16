<template>
  <div class="container">
    <!-- 引入头部组件 -->
    <Header></Header>

    <div class="main-box">
      <p><nuxt-link to="/about">goto about页面</nuxt-link></p>
      <h1 class="title mb20">
        dxmall
      </h1>
      <h2 class="mb10">异步加载的数据：</h2>
      <p>{{ foo }}</p>
      <!-- <h2 class="mb10">异步加载的数据：</h2> -->
      <!-- <p>{{ users }}</p> -->
    </div>

    <!-- 引入底部文件 -->
    <Footer></Footer>
  </div>
</template>

<script>
// import '../assets/styles/xx.scss'
import { getClothes } from '@/api/user'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  data () {
    return {
      foo: '异步加载中...'
    }
  },
  components: {
    Header,
    Footer
  },
  async asyncData ({ $axios }) {
    // const {data} = await $axios.get('https://api.myjson.com/bins/13nerg');
    // // console.log(6868, data)
    // return {
    //   users: data
    // }
  },
  /**
   * request – nuxtServerInit – middleware – validate – asyncData(fetch) – render，跳转页面后，又开始从middleware开始运行，
   * nuxtServerInit的作用是在vuex的actions内运行，可以拿到一些服务端的数据，比如session，用户验证信息等，然后通过vuex返回给客户端，
    以上钩子，都是在服务端执行，且都是在pages页面下有钩子函数，而components和layout没有；beforeCreated和created是服务端和客户端都执行的钩子函数，
    切记，没有window对象，操作dom必须在mounted钩子，不支持keep-alive，所有它的钩子也没有
   */
  nuxtServerInit () {
    console.log(1111)
  },
  middleware () {
    console.log(2222)
  },
  validate () {
    console.log(3333)
    return true
  },
  // asyncData() 适用于在渲染组件前获取异步数据
  // asyncData () {
  //   console.log(4444)
  // },
  // fetch() 适用于在渲染页面前填充 vuex 中维护的数据
  fetch () {
    console.log(5555)
  },
  render () {
    console.log(6666)
  },
  created () {
    console.log(7777)
    // this.open();
    // console.log(this.users)
    // console.log(this.msg)
    if (process.client) {
      this.$toast('xxxxx');
    }
  },
  mounted () {
    getClothes().then(res => {
      this.foo = res.data
    });
    // this.$axios.get('/api/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3&callback=cb')
    // .then((res) => {
    //   this.foo = res
    // });
    // this.open();
    // console.log($('.main-box').html());
  },
  methods: {
    open() {
      this.$message('这是一条消息提示');
    }
  },
  head () {
    return {
      meta: [
        {
          name: 'keywords',
          content: `xxxx无限宝石,无限元宝`
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        // { rel: 'stylesheet', href: '../assets/styles/xx.css' }
      ]
    }
  }
  // <style src='../assets/styles/xx.scss'></style>
}
</script>

<style src='../assets/styles/xx.scss' lang="scss" scoped></style>
<style scoped>
    .main-box {
      width: 750px;
      background: #069;
    }
</style>

