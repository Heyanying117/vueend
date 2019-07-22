<template>
  <section class="shopCard">
      <header class="head">
          <h2>购物车</h2>
          <span class="securities">领劵</span>
      </header>
      <ul class="service">
        <li>30天无忧退货</li>
        <li>48小时快速退款</li>
        <li>满88元免邮费</li>
      </ul>
      <section class="shopgowu">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
          <span class="add">添加点什么吧</span>
          <button @click="$router.push('/login')">登录</button>
      </section>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopCard
    .head
      display flex
      justify-content: space-between
      background #fff
      height 88px
      line-height 88px
      width 100%
      padding 0 35px
      box-sizing border-box
      h2
        font-size 34px
      .securities
        font-size 32px
        color #b4282d
    .service
      display flex
      padding 0 35px
      height 70px
      line-height 70px
      justify-content: space-between
      background #eee
      color #666
    .shopgowu
      display flex
      flex-direction column
      justify-content center
      align-items center
      margin-top 380px
      img 
        width 248px
        height 248px  
      .add
        font-size 24px
        color #666
      button
        color #fff
        font-size 30px
        width 480px
        height 92px
        background #b4282d
        outline none
        border none
        margin-top 50px

</style>
