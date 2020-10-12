<template>
  <div>
    <div class="container">
      <h2>xxx系统</h2>
      <router-view />
    </div>
  </div>

</template>


<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';
.container {
  width: max-content;
  margin: 200px auto;
  padding: 20px 50px;
  border: 1px solid @primary-color;
  > h2 {
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>