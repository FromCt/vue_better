<template>
  <div id="app">
    <section class="pageHeader">
      <nav class="nav">
        <div class="left">
          <router-link class="brand" :to='helloWorld'>fromct</router-link>
          <a  class="brand" href="https://ustbhuangyi.github.io/better-scroll/doc/" target="_blank">bs_doc</a>
        </div>
        <div class="right">
          <router-link  class="brand" :to='examples'>home</router-link>
        </div>
      </nav>
      <h2>fromct Demo 0f Vue</h2>
      <h3>this is my study note</h3>
      <a href="https://ustbhuangyi.github.io/better-scroll/#/examples/slide"   target="blank" class="btn">官网demo</a>
      <router-link class="btn demo-btn" :to="demo">Demo</router-link>
    </section>
    <section class="mainContent">
      <router-view>

      </router-view>
      <footer class="footer">
        <span>this is footer</span>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    console.log('app created===========')
    console.log(this.$route);

  },
  computed:{
    helloWorld(){
      return '/fromct'
    },
    examples(){
      return '/example'
    },
    demo(){
      return "/"
    }
  }
}
</script>

<style  lang='stylus' rel="stylesheet/stylus">
@import "~assets/css/default.styl"

#app
  .pageHeader
    width:100%;
    box-sizing border-box
    text-align center

    @media screen and (max-width 375px) {
      padding 0.8rem 1rem
    }
    @media screen and (min-width 376px) and (max-width 675px) {
      padding 1rem 2rem
    }
    @media screen and (min-width 675px) and (max-width 1024px) {
      padding 2rem 3rem
    }
    @media screen and (min-width 1024px) {
      padding 2rem 4rem
    }
    //background pink
    background-image linear-gradient(135deg ,pink,#5FC3E4 )
    .nav
      //background $color-pink
      height 30px
      color white
     
      .left
        float left
        .brand
          font-size $font-size-large-x
          margin-right 0.5rem
          color white
      .right
        float right
        .brand
          color white
    h2
      @media screen and (max-width 375px) {
        padding-top 1.2rem
      }
      @media screen and (min-width 376px) {
        padding-top 2rem
      }
      text-align center
      color white
      font-size $font-size-large-xxx
    h3
      text-align center
      color: rgba(255, 255, 255, 0.8);
      font-weight normal
      margin-bottom 0.5rem
      margin-top 0.5rem
      font-size $font-size-large-x
    .demo-btn
      margin-left 1rem
    .btn
      min-width 5rem
      border 1px solid white 
      display inline-block
      color: rgba(255, 255, 255, 0.8);
      background-color: rgba(255, 255, 255, 0.1)
      border-color: rgba(255, 255, 255, 0.2)
      border-radius 0.3rem
      padding 0.5rem 1rem
      margin-bottom 1rem
    .btn:hover
      color: rgba(255, 255, 255, 0.9)
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.2)
      border-color: rgba(255, 255, 255, 0.3)
  .mainContent
    padding 2.0rem 1.0rem
    .footer
      border-top 1px solid grey
      text-align center
      span
        line-height 44px
</style>
