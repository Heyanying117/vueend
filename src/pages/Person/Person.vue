<template>
  <div class="personBox">
     <Header>
        <div slot="title" class="logo">
            <div class="logoImg"></div>
        </div>
     </Header>
     <div class="yanxuanLogo">
       <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
     </div>
    <div class="phone_mail">
        <!-- <a href="###">
            <i class="iconfont icon-shouji"></i>
            <span>手机号登陆</span>
        </a> -->
        <router-link to="/login">
          <i class="iconfont icon-shouji"></i>
          <span>手机号登陆</span>
        </router-link>
        <!--  <a href="###">
            <i class="iconfont icon-youxiang"></i>
            <span>邮箱登陆</span>
        </a> -->
        <router-link to="/loginmail">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱登陆</span>
        </router-link>
        
        <router-link to="/register">
          手机号快速注册>
        </router-link>
    </div>
    <ul class="otherlogin">
      <li>
          <a href="##">
            <i class="iconfont icon-weixin"></i>
            微信
          </a>
      </li>
       <li>
          <a href="##">
            <i class="iconfont icon-qq"></i>
            QQ
          </a>
      </li>
       <li>
          <a href="##">
            <i class="iconfont icon-weibo"></i>
            微博
          </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '../../components/Header/Header.vue'
  export default {
    components:{
      Header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .personBox
      .logo
        flex 1
        
        text-align center
        .logoImg
          width 140px
          height 40px
          display inline-block
          background  url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png')
          background-size cover
      .yanxuanLogo
        text-align center
        padding-top 220px
        padding-bottom 120px
        img 
          width 260px
          height 110px
      .phone_mail
        padding 0 30px
        margin-bottom 120px
        a
          display block
          width 100%
          height 100px
          line-height 100px
          border-radius 4px
          text-align center
          font-size 28px
          &:nth-child(1)
            background #b4282d
            color #fff
            margin-bottom 20px
          &:nth-child(2)
            border 1px solid #b4282d
            color #b4282d
          &:nth-child(3)  
            color #333
      .otherlogin
        display flex
        padding 180px 120px 0 120px
        justify-content center
        li
          padding 0 30px
          border-right  1px solid #7f7f7f
          &:last-child
            border-right none

</style>
