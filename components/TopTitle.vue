<template>
  <div>
    <h1 class="top-title">
      {{ dataTitle }}
    </h1>
  </div>
</template>
<script>
export default {
  props: {
    dataTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .top-title {
    height: 88px;
    line-height: 88px;
    color: #000;
    font-size: 32px;
    text-align: center;
  }
</style>
