<template>
  <div class="header-box">
    <p>公用头部：</p>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <nuxt-link to="/about"><el-button type="primary" size="mini">About页面</el-button></nuxt-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <nuxt-link to="/xxx"><el-button type="primary" size="mini">Slug动态路由 - index页面</el-button></nuxt-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <nuxt-link to="/xxx/comments"><el-button type="primary" size="mini">Slug动态路由 - comments页面</el-button></nuxt-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <!-- 下面两个对应detail文件夹中的 _id.vue 文件 -->
          <nuxt-link to="/detail/8"><el-button type="primary" size="mini">Detail详情页 - 动态路由ID -  当前ID传值为8</el-button></nuxt-link>
          <nuxt-link :to="{path: '/detail/9'}"><el-button type="primary" size="mini">Detail详情页 - :to - path 动态路由ID -  当前ID传值为9</el-button></nuxt-link>
          <nuxt-link :to="{path: '/detail/xxx'}"><el-button type="primary" size="mini">Detail详情页 - 当前ID传值为 xxx (注意这里不是数字)</el-button></nuxt-link>
          <!-- 备注：用name时，对应必须是index.vue。否则会报错 -->
          <nuxt-link :to="{name: 'detail', params:{id: 10}}"><el-button type="primary" size="mini">Detail详情页 - :to - name 动态路由ID -  当前ID传值为10</el-button></nuxt-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  .header-box {
    margin: 0 auto;
    padding: 20px 0;
    width: 1200px;
  }
</style>
