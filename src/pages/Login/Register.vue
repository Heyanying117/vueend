<template>
  <div class="login">
      <Header>
        <div slot="title" class="logo">
            <div class="logoImg"></div>
        </div>
     </Header>
     <section class="phone">
        <div class="logo">
            手机号注册
        </div>
        <div class="lableLogin">
            <div class="loginItem">
              
              <input class="myinput" type="text" placeholder="请输入用户名" v-model="phone"  />
              <div class="chahao" @click="handelchahao" v-if="phone">X</div>
            </div>
            <div class="loginItem">
              
              <input class="myinput" type="password" placeholder="请输入短信验证码" v-model="codePhone" />
              <div class="yanzheng">获取验证码</div>
            </div>
            <div class="loginItem">
              
              <input class="myinput" type="text" placeholder="请输入密码" v-model="mima" />
              <div class="chahao" @click="handelchahao" v-if="phone">X</div>
            </div>
            
            <div class="loginButton">
              <a href="javascript:;">注册</a>
           
            </div>
            <div class="answer">
              <input type="checkbox" class="check">
              <a href="javascript:;">《服务条款》</a>和
              <a href="javascript:;">《网易隐私政策》</a>
            </div>
            <div class="zhuce">
              
              <router-link to="/loginMail">邮箱注册账号></router-link>
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
        phone:'',//初始化手机号为空
        mima:'',
        codePhone:''
        
      }
    },
    components:{
      Header
    },
    methods:{
      handelchahao(){
        this.phone=''
      },
     
    }
  }
  
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login
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
        padding-top 90px
        font-size 40px
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
          .chahao,.yanzheng
            position absolute
            right 90px
            bottom 25px
            color #999
          .yanzheng
            border 1px solid #333
            padding 18px 20px
            border-radius 5px
            color #333
        .answer
          padding 20px 70px 0 70px
          
          
          color #999
          a
            color #007AFF
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
          
          padding-bottom 515px
          a
            color #333
</style>
