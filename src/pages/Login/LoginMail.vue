<template>
  <div class="loginMail">
      <Header>
        <div slot="title" class="logo">
            <div class="logoImg"></div>
        </div>
     </Header>
     <section class="phone">
        <div class="logo">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="lableLogin">
            <div class="loginItem">
              
              <input class="myinput" type="text" placeholder="邮箱账号" v-model="mailname" @blur="mailYan" />
              <div class="chahao" @click="handelchahao" v-show="mailname">X</div>
            </div>
            <div class="loginItem">
              
              <input class="myinput" type="password" placeholder="密码" v-model="pwd" />
            </div>
             <!-- 错误提示 -->
            <div class="err" v-show="errormail">{{errormail}}</div> 
            <div class="answer">
              <span>注册账号</span>
              <span>忘记密码</span>
            </div>
            <div class="loginButton">
              <a href="javascript:;">登录</a>
              <router-link to='/person'>其他方式登录</router-link>
            </div>
            <div class="zhuce">
              <a href="javascript:;">注册账号></a>
            </div>
        </div>
     </section>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '../../components/Header/Header.vue'
  export default {
     data(){
      return{
        mailname:'',//初始化用户名为空
        pwd:'',
        errormail:''
      }
    },
    components:{
      Header
    },
    methods:{
      handelchahao(){
        this.mailname=''
      },
      mailYan(){
        if(!/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(this.mailname.trim()) && this.mailname){
          this.errormail='请输入正确的邮箱'
        }
      }
    }
  }
  
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginMail
    background #fff
    
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
    .phone
      
      .logo
        padding-top 120px
        img 
          width 240px
          height 90px
      .lableLogin
        padding-top 120px
        .loginItem
          padding 0px 70px
          margin-bottom 20px
          position relative
          input 
            border-bottom  1px solid #c5cddb
            width 100%
            height 90px
            outline none
            font-size 28px
          .chahao
            position absolute
            right 90px
            bottom 25px
            color #999
        .err
          padding-left 70px
          color #b4282d
        .answer
          padding 20px 70px 0 70px
          display flex
          justify-content space-between
          color #999
        .loginButton
          padding 40px 70px 0 70px
          a
            display block
            width 100%
            height 80px
            line-height 80px
            text-align center
            border-radius 5px
            font-size 28px
            &:nth-child(1)
              background #b4282d
              color #fff
            &:nth-child(2)
              margin-top 25px
              border 1px solid #b4282d
              color #b4282d
        .zhuce
          height 80px
          line-height 80px
          text-align center
          color #000
          padding-bottom 328px
</style>

