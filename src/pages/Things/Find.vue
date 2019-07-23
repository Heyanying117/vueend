<template>
  <div class="findBox">
      <div class="wrapper" ref="wrapperNav">
        <ul class="nav">
          <li class="navItem" v-for="(nav,index) in ThingNav" :key="index" :class="{active:currentIndex===index}" @click="handleList(index)">{{nav.tabName}}</li>
      
        </ul>
      </div>
      <!-- 内容列表 -->
      <section class="contentList" v-for="(things,index) in thingContent" :key="index">
        <div class="contentInner" v-for="(thing,index) in things.topics" :key="index">
            <div class="style1" v-if="thing.style === 1">
              <section class="wrapper">
                <h2>
                  <img :src="thing.avatar" alt="">
                  <span>{{thing.nickname}}</span>
                </h2>
                <div class="txt">
                  <p>{{thing.title}}</p>
                </div>
                <div class="txtImg">
                  <img :src="thing.picUrl" alt="">
                </div>
                <div class="see">
                  <i class="iconfont icon-kanguo"></i>
                  <span>333人看过</span>
                </div>
              </section>
               
            </div>
            <div class="style2" v-if="thing.style === 2">
                <section class="wrapper">
                  <div class="wrappLeft">
                    <h2>
                      <img :src="thing.avatar" alt="">
                      <span>{{thing.nickname}}</span>
                    </h2>
                    <div class="text">
                      {{thing.title}}
                    </div>
                    <div class="desc">{{thing.subTitle}}</div>
                    <div class="see">
                      <i class="iconfont icon-kanguo"></i>
                      <span>31人看过</span>
                    </div>
                  </div>
                  
                  <div class="wrappRight">
                      <img :src="thing.picUrl" alt="">
                  </div>
                </section>
            </div>
        </div>
      </section>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll"
import {mapState} from 'vuex'
  export default {
    data(){
      return{
        currentIndex:0
      }
    },
    computed:{
       ...mapState({
         ThingNav : state => state.things.ThingNav,
         thingContent :state => state.things.thingContent
       })
      
    },
    mounted(){
     
     this.$store.dispatch('getThingNav',()=>{
        this.$nextTick(()=>{
          new BScroll(this.$refs.wrapperNav,{
            lick:true,
            scrollX: true,
            scrollY: false,
            click: true
        })
      })
     })
     this.$store.dispatch('getThingContent')
    },
    methods:{
      handleList(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .findBox
      .wrapper
        width 100%
        overflow hidden
        background #fff
        .nav
          display flex
          width 1440px
          height 80px
          align-items center
          padding-left 10px
          .navItem
            padding 0 20px
            height 78px
            line-height 78px
            color #7F7F7F
            font-size 28px
          .active
            color #b4282d
            border-bottom 2px solid #b4282d
      .contentList
        margin-top 20px
        
        .style1
          .wrapper
            width 100%
            padding 25px
            box-sizing border-box
            background #fff
            h2
              height 45px
              line-height 45px
              
              img 

                width 80px
                height 80px
                border-radius 50px
                vertical-align middle
              span
                display inline-block
                padding-left 20px
                font-size 28px
                vertical-align middle
            .txt
              line-height 60px
              margin-top 40px
              font-size 36px
              overflow hidden
              text-overflow ellipsis
            .txtImg
              margin-top 20px
              img 
                width 100%
                height 300px
                border-radius 5px
            .see
              color #999
        .style2
          .wrapper
            margin-top 20px
            width 100%
            padding 25px
            box-sizing border-box
            background #fff
            display flex
            justify-content space-around
            .wrappLeft
              
              h2
                height 45px
                line-height 45px
                img 

                  width 80px
                  height 80px
                  border-radius 50px
                  vertical-align middle
                span
                  display inline-block
                  padding-left 20px
                  font-size 28px
                  vertical-align middle
               

              .text
                
                line-height 50px
                padding-top 45px
                font-size 32px
                overflow hidden
                text-overflow: ellipsis
              .desc
                color #999
                width 100%
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                font-size 28px
                line-height 30px
                padding-top 10px
              .see
                padding-top 15px
                color #999
                .icon-kanguo
                  vertical-align middle
            .wrappRight
              img
                width 300px
                height 300px
</style>
