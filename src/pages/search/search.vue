<template>
  <div class="searchBox">
     <header class="heade">
        <span class="search_icon"></span>
        <input type="text" class="input" placeholder="扫拖两用机器人" v-model="searchContent">
         
         <div class="delete" v-show="searchContent" @click="handlechahao">x</div>
        <span class="cancel" @click="toHome">取消</span>
     </header>
     <section class="hotsousuo">
        <div class="title">热门搜索</div>
        <ul class="sousuoList" v-if="hotSearch.kingKongModule">
          <li v-for="(item,index) in hotSearch.kingKongModule.kingKongList" :key="index" :class="{active:currentIndex===index}" @click="handlecolor(index)">{{item.text}}</li>
          
        </ul>
     </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        searchContent:'',
        currentIndex:0
      }
    },
    computed:{
      ...mapState({
        hotSearch :state => state.search.hotSearch  
      })
      
    },
    mounted(){
      this.$store.dispatch('getHome')
    },
    methods:{
      handlechahao(){
        this.searchContent=''
      },
      toHome(){
        this.$router.back()
      },
      handlecolor(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .searchBox
      .heade
        display flex
        height 88px
        line-height 88px
        background #fff
        align-items center
        position relative
        .search_icon
          position absolute
          left 50px
          top 30px
          display inline-block
          width 30px
          height 30px
          background url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png')
          background-size cover
          z-index 2
        .input
          width 540px
          height 56px
          padding-left 60px
          line-height 56px
          background-color #f4f4f4
          font-size 28px
          color #666
          border-radius 5px
          margin-right 20px
          margin-left 30px
          outline none
        .delete
          position absolute
          right 150px
          top 0  
          font-size 30px

        .cancel
          font-size 28px 
      .hotsousuo
        width 100%
        background #fff        
        .title
          padding-left 25px
          height 88px
          line-height 88px
          font-size 30px
          color #999  
        .sousuoList
          display flex
          flex-wrap wrap
          padding-left 25px
          li
            padding 2px 10px
            line-height 55px
            text-align center
            color #333
            border-radius 5px
            border 1px solid #999
            margin-right 25px
            margin-bottom 25px
          .active
            border 1px solid #b4282d
            color #b4282d

</style>
