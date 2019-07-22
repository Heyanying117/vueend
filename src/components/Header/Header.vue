<template>
  <div class="header_box">
    <section class="header">
        <i class="iconfont icon-shouye"></i>
        <slot name="title"></slot>
        <div class="sousuo-shop">
            <i class="iconfont icon-sousuo"></i>
            <i class="iconfont icon-gouwuche"></i>
        </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .header_box
    .header
      display flex
      height 100px
      align-items center
      background #fff
      padding 0 25px
      bottom-border-1px(#333
      )
      .icon-shouye
        font-size 45px
        color #666
      .sousuo-shop
        .icon-sousuo
          margin-right 35px
        .icon-sousuo,.icon-gouwuche
          font-size 45px
          color #666
        

</style>
