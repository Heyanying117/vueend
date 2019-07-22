<template>
    <section class="things">
      <Header>
          <div slot="title" class="tab">
            
              <div class="item active">
                <!-- <a href="##">发现</a> -->
                <router-link to="/things/find" replace>发现</router-link>
              </div>
              <div class="item">
                <!-- <a href="##">甄选家</a> -->
                <router-link to="/things/choose" replace>甄选家</router-link>
              </div>
          </div>
      </Header>
      <router-view />
    </section>
</template>

<script type="text/ecmascript-6">
  import Header from '../../components/Header/Header.vue'
 
  export default {
    components: {
      Header,
     
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tab
    display flex
    flex 1
    align-items center
    
    justify-content center
    .item
      font-size 32px
      
      padding 0 15px
      a
        color #333
        &.router-link-active
          font-size 40px
          color #b4282d
          font-weight bold
    
      
</style>
