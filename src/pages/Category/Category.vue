<template>
  <div class="category_index">
      <section class="categoryHeader" @click="toSearch">
          <div class="search">
            <span class="icon-search"></span>
            <span class="input">搜索商品,共~~~~~款好物</span>
          </div>
      </section>
      <section class="containerWrap" >
          <!-- 左滑动 -->
          <section class="leftContainer" v-if="category.categoryL1List" ref="we">
            <ul class="leftUl">
              <li class="liftItem " v-for="(item,index) in category.categoryL1List" :key="index"  @click="handleIndex(index)" :class="thisIndex===index?'active':''">{{item.name}}</li>
             
            </ul>
          </section>
          <!-- 右滑动 -->
          <section class="rightContainer"  v-if="category.categoryL1List" >
            <div class="rightBox">
                <div class="rightImg">
                  <img :src="category.categoryL1List[thisIndex].wapBannerUrl" alt="">
                </div>
                <ul class="rightContainerlist">
                  <li v-for="(item,index) in category.categoryL1List[thisIndex].subCateList" :key="index">
                    <div class="categoryImg">
                        <img :src="item.wapBannerUrl" alt="">
                    </div>
                    <div class="title">
                        {{item.name}}
                    </div>
                  </li>
                 
                </ul>
            </div>
          </section>
      </section>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import BScroll from "better-scroll"
  export default {
    data(){
      return{
        thisIndex: 0
      }
    },
    computed: {
      ...mapState({
        category : state => state.category.category
      })
      
    },
    mounted(){
      this.$store.dispatch('getcategory',()=>{
        this.$nextTick(() => {
          new BScroll(this.$refs.we,{
            click: true
          })
          new BScroll('.rightContainer',{
            
            click: true
          
          })
        })
      })
    },
    methods:{
      handleIndex(index){
        this.thisIndex = index
      },
      toSearch(){
        this.$router.push('/search')
      }
    },
    /* watch:{
      category(){
        new BScroll(this.$refs.we,{
          click: true
        })
      }
    } */
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
    .category_index
      height 100%
      
      overflow hidden
      .categoryHeader
        width 100%
        display flex
        position fixed
        height 88px
        background #fff
        align-items center
        padding 0 25px
        box-sizing border-box
        z-index 99
        .search
          width 100%
          background #ededed
          border-radius 5px
          height 60px
          display flex
          align-items center
          justify-content center
          font-size 28px
          .icon-search
            display inline-block
            width 30px
            height 30px
            background url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png')
            background-size cover
      
      .containerWrap
        top-border-1px(#eee)
        margin-top 88px
        display flex
        flex-direction row
        width 100%
        height 100%
        background #fff
        .leftContainer
          width 170px
          text-align center
          height 1140px
          
          .liftItem
            margin-top 25px
            height 70px
            line-height 70px
            font-size 30px
            color #666
            &:first-child
              margin-top 0
          .active
            color #b4282d
            border-left 6px solid #b4282d
        .rightContainer
          margin-top 20px
          height 1140px
          width 580px
          padding 20px
          .rightBox
            
            .rightImg
              img
                display block
                width 100%
                height 280px
            .rightContainerlist
              margin-top 30px
              display flex
              flex-wrap wrap
              li
                width 130px
                height 216px
                margin-right 35px
                
                
                .categoryImg
                  width 130px
                  height 144px
                  overflow hidden
                  img 
                    width 130px
                    height 144px
                .title
                  font-size 24px
                  text-align center
</style>
