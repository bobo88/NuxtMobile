<template>
  <div class="container pr">
    <TopTitle data-title="首页"></TopTitle>
    <!-- 搜索组件 -->
    <SearchCom class="mb20"></SearchCom>
    
    <div class="mb20">
      <van-switch v-model="checked" />
    </div>

    <van-uploader class="mb20" :after-read="afterRead" />

    <div class="mb20">
      <van-pagination 
        v-model="currentPage" 
        :total-items="24" 
        :items-per-page="5"
      />
    </div>

    <!-- 引入底部文件 -->
    <!-- <Footer :data-current="1"></Footer> -->
  </div>
</template>

<script>
import TopTitle from '~/components/TopTitle.vue'
import SearchCom from '~/components/home/SearchCom.vue'
// import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import { getClothes } from '@/api/home'

export default {
  data () {
    return {
      checked: true,
      currentPage: 1,
      foo: '异步加载中...',
      selected: ['130000', '130100', '']
    }
  },
  components: {
    TopTitle,
    SearchCom,
    // Header,
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
    console.log(this.$IOS_API)
    // if (process.client) {
    //   this.$toast('xxxxx');
    // }
  },
  mounted () {
    console.log(8888)
    // getClothes().then(res => {
    //   this.foo = res.data
    // });
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
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    showDialog () {
      Dialog.confirm({
        title: '标题',
        message: '弹窗内容'
      }).then(() => {
        // on confirm
      }).catch(() => {
        // on cancel
      });
    }
  },
  head () {
    return {
      meta: [
        {
          name: 'keywords',
          content: `首页`
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
}
</script>

<style src='~/assets/styles/home.scss' lang="scss" scoped></style>
<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    padding-bottom: 100px;
    width: 700px;
  }
</style>

