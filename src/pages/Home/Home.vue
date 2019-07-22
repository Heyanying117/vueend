<template>
  <div class="Home">
    
      <!-- 最初搜索 -->
      <header class="header">
          <div class="logo">
              <a href="javascript:;" class="logo_img"></a>
          </div>
          <div class="search" @click="toSearch">
              <span class="icon-search"></span>
              <span class ="placeholder">搜索商品,共1222好产品</span>
          </div>
          <div class="btn_Login">
              <button class="btn">登陆</button>
          </div>
      </header>
      <!-- 导航 -->
      <section class="homeNav">
          <div class="inner" ref='category'>
              <ul class="nav">
                <li class="itemNav" v-for="(item,index) in navList" :key="index" :class="{active: currentIndex === index}" @click="handleIndex(index)">{{item}}</li>
              </ul>
          </div>
          <div class="opcityBox"></div>
          <div class="row" @click="handleArrow">
              <i class ='icon' :class="isArrow ? 'downArrow':'upArrow'" ></i>
          </div>
         
      </section>
       <!-- 全部频道 -->
      <div class="row-List" v-show="isShow">
          <h2>全部频道</h2>
          <ul class="allItem">
            <li class="rowItem" v-for="(item,index) in navList" :key="index"  @click="currentIndex=index" :class="currentIndex===index?'rowItem active':'rowItem'">{{item}}</li>
            
          </ul>
      </div>
      <!-- 遮罩层 -->
        <section class="wrap" v-show="isShow" @click="handleArrow"></section>
      <!-- 轮播 -->
      
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/8ceaa8053baf2056334e166493e9eaab.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/9a98a10f260bcde62951a36ac43b2f92.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        
      </div>
      <section class="brand-return-speed ">
          <ul class="grow">
            <li>
              <a>
                <i class="h-icon1" style="background-image:url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);"></i>
                <span>网易自营品牌</span>
              </a>
            </li>
            <li>
              <a>
                <i class="h-icon1" style="background-image:url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);"></i>
                <span>30天无忧退货</span>
              </a>
            </li>
            <li>
              <a>
                <i class="h-icon1" style="background-image:url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);"></i>
                <span>48小时快速退款</span>
              </a>
            </li>
          </ul>
      </section>
    <!-- 九宫格 -->
      <section class="proLIst">
          <ul class="proBox" v-if="homeData.kingKongModule">
              <li class="proItem" v-for="(item,index) in homeData.kingKongModule.kingKongList" :key ="index">
                <img :src="item.picUrl" alt="">
                <div class="title">{{item.text}}</div>
              </li>
              
          </ul>
      </section>
    <!-- 新人专项 -->
      <section class="new-designed">
          <div class="newTitle">
              <span class="txt">新人专享</span>
          </div>
          <div class="new-designedList">
               <div class="new-designedLeft">
                <div class="name">新人专享礼包</div>
                <div class="newPacket">
                    <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
                </div>
                <div class="slide"></div>
              </div>
             <div class="new-designedRight">
                  <div class="RightToTop">
                      <div class="TopTotle">
                          <span class="welfare">社会福利</span>
                          <span class="tePrice">今日特价</span>
                      </div>
                      <div class="topImg">
                        <div class="discount">
                            <span>￥98</span>
                            <span style="text-decoration:line-through;">￥198</span>
                        </div>
                        <img src="//yanxuan.nosdn.127.net/d83864b34b2e47f2a47b8dbd569209f8.png" alt="">
                      </div>
                  </div>
                  <div class="RightToBottom">
                    <div class="TopTotle">
                          <span class="welfare">新人拼团</span>
                          <span class="tePrice">1元起包邮</span>
                      </div>
                      <div class="topImg">
                        <div class="discount">
                            <span>￥98</span>
                            <span style="text-decoration:line-through;">￥198</span>
                        </div>
                        <img src="//yanxuan.nosdn.127.net/0e3d378ed4c6345714fa3b002bc8a83f.png" alt="">
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- 四个拼图 -->
      <section class="puzzle">
        <ul class="puzzleList">
          <li class="puzzleTitle" v-for="(pre,index) in homeData.sceneLightShoppingGuideModule" :key="index">
              <p class="big">{{pre.styleItem.title}}</p>
              <p class="small">{{pre.styleItem.desc}}</p>
              <div class="puzzleImg">
                <img :src="pre.styleItem.picUrlList[0]" alt="">
                <img :src="pre.styleItem.picUrlList[1]" alt="">
              </div>
          </li>
          
        </ul>
      </section>
      <!-- 私人订制轮播 -->
      <section class="personal-Tailo">
          <h2>私人订制</h2>
          <div class="swiper-container personal1">
            <ul class="swiper-wrapper personal-TailoList" v-if="homeData.personalShop">
              <li class="swiper-slide  listItem" v-for="(item,index) in personaArry" :key="index">
                <div class="innerItem" v-for="(goods,index) in item" :key="index">
                    <img :src="goods.primaryPicUrl" alt="">
                    <p class="name">{{goods.name}}<i>¥{{goods.counterPrice}}</i></p>
                </div>
               
              </li>
            </ul>
             <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          
      </section>
      <!-- 限时购 -->
      <section class="timeTobuy">
          <h3 class="timeTobuyTitle">
            <span class="left">限时购</span>
            <span class="right">更多></span>
          </h3>
          <ul class="timeTobuyList" v-if="homeData.flashSaleModule">  
            <li class="timeTobuyItem" v-for="(item,index) in homeData.flashSaleModule.itemList" :key="index">
              <img :src="item.picUrl" alt="">
              <div class="timeTobuyPrice">
                <span class="now">¥{{item.activityPrice}}</span>
                <del class="old">¥{{item.originPrice}}</del>
              </div>
            </li>
           
          </ul>
      </section>
      <!-- 新品首发 -->
      <section class="newProduct">
          <h3 class="newProductTitle">
            <span class="left">新品首发</span>
            <span class="right">更多></span>
          </h3>
          <ul class="newProductList">
            <li class="newProductItem" v-for="item in homeData.newItemList" :key="item.id">
              <img :src="item.primaryPicUrl" alt="">
              <div class="newProduct_title_price">
                <span class="title">{{item.name}}</span>
                <span class="price">¥{{item.counterPrice}}</span>
              </div>
            </li>
            
          </ul>
      </section>
  </div>
</template>

<script type="text/ecmascript-6">

  import BScroll from "better-scroll"
  import { reqHome } from '../../api'
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.css"
  export default {
    data(){
      return{
        isShow:false,//是否显示，默认不显示
        isArrow :true,//箭头向下
        homeData: {},
        currentIndex: 0,//让index初始值为0
        navList:[
          "推荐",
        "居家生活",
        "服饰鞋包",
        "美食酒水",
        "个护清洁",
        "母婴亲子",
        "运动旅行",
        "数码家电",
        "全球特色"


        ]
      }
    },
    computed :{
      personaArry(){
        let result = []
        for (let i = 0; i<4; i++) {
          let start = i * 3
          let end = start + 3
          if(this.homeData.personalShop){
              result.push(this.homeData.personalShop.slice(start,end))
          }
          
        }
        return result
      }
    },
    async mounted(){
        new BScroll(this.$refs.category,{
          lick:true,
          scrollX: true,
          scrollY: false,
          click: true
        })
        new Swiper ('.swiper-container', {
            /*  direction: 'vertical', // 垂直切换选项 */
              loop: true, // 循环模式选项

              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },

              /* // 如果需要前进后退按钮
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },

              // 如果需要滚动条
              scrollbar: {
                el: '.swiper-scrollbar',
              }, */
            })
           
            /* listpro数据 */
          const result  =await reqHome('/home')
            console.log(result)
            this.homeData = result.data
            this.$nextTick(function(){
                 /* 私人订制轮播 */
               new Swiper ('.personal1', {
                loop: true, // 循环模式选项
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
              },
            })  
            })
      

      },
      methods:{
        //点击高亮
        handleIndex(index){
          console.log("xxxxx")
           this.currentIndex = index
        },
        handleArrow(){
            this.isShow = !this.isShow
            this.isArrow = !this.isArrow
        },
        toSearch(){
          this.$router.push('/search')
        }
      },
      
     
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .Home
    display flex 
    flex-direction column 
    position relative
    padding-bottom 88px
    .header
      position fixed
      display flex
      align-items center
      flex-direction row
      width 100%
      height 88px
      padding 12px 25px
      background #fff
      box-sizing border-box
      z-index 999
      .logo
        display flex
        width 140px
        height 40px
       
        .logo_img
          
          width 140px
          height 40px
          display inline-block
          background  url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png')
          background-size cover
      .search
        display flex
        
        align-items center
        margin-left 10px  
        background #ededed 
        height 56px
        text-align center
        justify-content center
        padding 0 70px
        border-radius 5px
        flex-flow: row nowrap
        .icon-search
          display inline-block
          width 30px
          height 30px
          background url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png')
          background-size cover
        .placeholder
          margin-left 10px
          color #666
      .btn_Login
        margin-left 20px
        .btn
          width 80px
          height 50px
          background  #fff
          outline none
          border 1px solid #b4282d
          color #b4282d
          border-radius 5px
          font-size 20px
    .homeNav
      
      margin-top 88px
      height 62px
      line-height 60px
      width 100%  
      background #fff 
      position relative
      
      .inner
        
        width 100%
        white-space nowrap
        overflow hidden
       
        
        .nav
          padding-left 30px
          display flex
          width 1600px
          .itemNav
            margin-left 20px
            font-size 28px
            color #333
            padding 0 20px
            &.active
              color #b4282d
              border-bottom 2px solid #b4282d 
      .opcityBox
        width 60px
        height 60px
        z-index 15
        position absolute
        top 0
        right 100px
        background linear-gradient(90deg,rgba(255,255,255,0) 0,#fff 100%)       
      .row
        position absolute
        right 0px
        bottom 5px
        width 120px
        height 60px
        background #fff
        z-index 999
        .icon
          position absolute
          right 20px
          bottom 5px
          width 40px
          height 40px
          background url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png')
          background-size cover
          transition all 1s
        .downArrow
          transform rotate(0deg)
          transition all 0.5s
        .upArrow
          transform rotate(180deg)
          transition all 0.5s
       
    .row-List 
      background-color #fff
      height 372px
      width 100%
      color #333
      top-border-1px(#eee)
      position absolute
      top 88px
      left 0
      z-index 10
       
      h2
        padding-left 25px
        font-size 30px
        height 60px 
        line-height 60px
        color #999 
      .allItem
        display flex
        flex-wrap wrap
        margin-top 30px
        
        .rowItem
          width 140px
          height 60px
          line-height 60px
          text-align center
          margin-bottom 20px
          margin-left 35px
          background #FAFAFA
          border 1px solid #CCC
          border-radius 5px
        .active
          border 1px solid #b4282d
          color #b4282d
    .wrap
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      z-index 5
      margin auto
      background-color rgba(0,0,0,.5)
    .swiper-container
      width 100%
      height 370px
      img
        width 100%
      .swiper-pagination-bullet
        border-radius 0
        width 30px
        height 2px
      .swiper-pagination-bullet-active 
        opacity: 1
        background: #333
    .brand-return-speed
      background #fff
      width 100%
      
      .grow
        
        height 70px
        padding 0 20px
        display flex
        flex-flow row nowrap
        align-items center
        li
          flex 1
          .h-icon1
            display inline-block
            width 40px
            height 40px 
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-index-bf1239c157.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            vertical-align middle
          .span
            margin-left 10px
    .proLIst
      width 100%
      background #fff
      .proBox
        display flex
        flex-wrap wrap
        padding-left 20px
        .proItem
          width 130px
          height 130px
          margin-bottom 45px
          margin-right 14px
         
          img
            
            width 130px
            height 130px
         
          .title
            color #7f7f7f
            line-height 36px
            text-align center
    .new-designed
      margin-top 20px
      background #fff      
      .newTitle
        height 90px
        line-height 90px
        text-align center
        position relative
        .txt
          
          display inline-block
          margin  0 15px
          font-size 30px
          
        &::after,&::before
          content ''
          position absolute
          top 40px
          width 40px
          height 3px
          background #333
        &::before
          left 260px
      .new-designedList
        padding-left 25px
        overflow hidden
        display flex
        
        height 460px
        .new-designedLeft
          width 48%
          height 460px
          background #F9E9CF
          margin-right 4px
          position relative
          .name
            font-size 32px
            padding 25px 0 0 25px
          .newPacket
            margin 50px auto 0 auto
            width 300px
            height 260px
            img
              width 100%
              height 100%
          .slide
            position absolute
            top 30px
            left 40px
            width 30px
            height 20px
            background url('//yanxuan.nosdn.127.net/3f7e731….png')no-repeat
            background-size 100% 100%
            animation carousel 1s linear infinite
            z-index 10
        .new-designedRight
          width 48%
          height 460px
          .RightToTop
            height 229px
            background #FBE2D3
            position relative
            .TopTotle
              padding 25px 0 0 25px
              .welfare
                display block
                padding-bottom 10px
                font-size 30px
            .topImg
              img
                position absolute
                right 0
                top 30px
                width 200px
                height 200px 
              .discount
                position absolute
                right 20px
                top 30px
                width 80px
                height 80px
                background #F59524
                border-radius 50px
                z-index 2
                span
                  display block
                  text-align center
                  margin-top 10px
                  color #fff
                  &:last-child
                    color #999
                    font-size 10px
                    color #fff
              .tePrice
                display block
                color #7F7F7F
              
          .RightToBottom
            margin-top 4px
            height 230px
            background #FFECC2
            position relative
            .TopTotle
              padding 25px 0 0 25px
              .welfare
                display block
                padding-bottom 10px
                font-size 30px
            .topImg
              img
                position absolute
                right 0
                top 30px
                width 200px
                height 200px 
              .discount
                position absolute
                right 20px
                top 30px
                width 80px
                height 80px
                background #F59524
                border-radius 50px
                z-index 99
                span
                  display block
                  text-align center
                  margin-top 10px
                  color #fff
                  &:last-child
                    color #999
                    font-size 10px
                    color #fff
              .tePrice
                display block
                color #7F7F7F
    .puzzle
      margin-top 20px
      background #fff
      .puzzleList
        display flex
        flex-wrap wrap
        justify-content center
        align-items center
        .puzzleTitle
          padding 20px 0 0 20px
          margin 4px 0 0 4px
          width 44%
          background #f5f5f5
          .big
            font-size 32px
            color #333
            
          .small
            font-size 25px
            color #999
            margin 10px 0  
        .puzzleImg
          img 
            width 120px
            height 120px
    .personal-Tailo
      margin-top 30px
      height 450px
      h2
        height 45px
        line-height 45px
        font-size 36px
        padding-left 25px
      .personal-TailoList
        margin-top 25px
        display flex
        width 100%
        .listItem
          display flex
          .innerItem
            width 218px
            height 300px
            padding-left 25px
            img
              width 100%
              background #f5f5f5
            .name
              margin-top 15px
              width 200px
              text-align center
              i 
                color #b4282d
    .timeTobuy
      margin-top 20px
      background #fff
      .timeTobuyTitle
        height 60 px
        line-height 45px
        
        .left
          margin-left 25px
          font-size 36px
        .right
          float right
          margin-right 25px
          font-size 28px
      .timeTobuyList
        display flex
        flex-wrap wrap
        padding-left 25px
        .timeTobuyItem
          width 216px
          height 216px
          margin-bottom 90px
          margin-right 25px
          text-align center
          img 
            background #f5f5f5
            width 100%
            height 216px
          .timeTobuyPrice
            height 90px
            line-height 90px
            .now
              font-size 30px
              color #b4282d
              margin-right 25px
            .old
              color #7f7f7f
    .newProduct
      margin-top 30px
      background #fff
      .newProductTitle
        height 120px
        line-height 120px
      
      .left
        margin-left 25px
        font-size 36px
      .right
        float right
        margin-right 25px
        font-size 28px
    .newProductList
      display flex
      flex-wrap wrap
      padding-left 25px
      .newProductItem
        width 216px
        height 216px
        margin-bottom 90px
        margin-right 25px
        
        img 
          background #f5f5f5
          width 100%
          height 216px
        .newProduct_title_price
          .title
            line-height 30px
            color #7f7f7f
          

</style>
