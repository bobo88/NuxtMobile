// import Vue from 'vue'
// import 'swiper/dist/css/swiper.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
 
// Vue.use(VueAwesomeSwiper)
import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
 
export default () => {
    if (process.browser) {
        console.log('浏览器端渲染');
        Vue.use(require('vue-awesome-swiper/dist/ssr'), /* { default global options } */)
    }else{
        console.log("非浏览器端渲染");
    }
}