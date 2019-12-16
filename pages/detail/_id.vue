<template>
  <div class="container">
    <div>
      <h1 class="title">
        Detail - id - 当前ID是： {{$route.params.id}}
      </h1>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  validate ({ params }) {
    // if (!/^\d+$/.test(params.id)) {
    //   console.log(this, 111)
    //   this.$router.push({name:"about"})
    // }
    // 必须是number类型
    return /^\d+$/.test(params.id)
  },
  components: {
    Logo
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