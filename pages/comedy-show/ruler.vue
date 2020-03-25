<template>
  <div class="comedy-show container">
    <div class="ruler-sec">
      <h3>How to participate?</h3>
      <p><span class="num">1.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci purus, luctus vitae dignissim eu, iaculis sed purus. </p>
      <p><span class="num">2.</span> Vivamus faucibus, ipsum nec aliquet viverra, leo mauris condimentum ligula, sit amet sagittis enim ligula quis arcu.</p>
      <p><span class="num">3.</span> Nam egestas tortor id nisi porttitor mattis.</p>
    </div>

    <div class="ruler-sec">
      <h3>How to claim prizes?</h3>
      <p><span class="num">1.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci purus, luctus vitae dignissim eu, iaculis sed purus. </p>
      <p><span class="num">2.</span> Vivamus faucibus, ipsum nec aliquet viverra, leo mauris condimentum ligula, sit amet sagittis enim ligula quis arcu.</p>
      <p><span class="num">3.</span> Nam egestas tortor id nisi porttitor mattis.</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // xx
    }
  },
  mounted () {
    console.log(8888)
  },
  methods: {
    // xx
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    padding: 55px 30px;
    width: 720px;
  }
  .ruler-sec {
    margin-bottom: 100px;
    color: #fff;
    h3 {
      margin-bottom: 21px;
      padding-bottom: 8px;
      height: 55px;
      line-height: 38px;
      font-size: 32px;
      border-bottom: 2px solid rgba(151, 151, 151, 0.6);
    }
    p {
      position: relative;
      padding-left: 35px;
      margin-bottom: 30px;
      line-height: 40px;
      font-size: 28px;
      color: rgba(255, 255, 255, 0.8);
      .num {
        position: absolute;
        z-index: 2;
        left: 0;
        top: 0;
        display: inline-block;
        width: 20px;
      }
    }
  }
</style>