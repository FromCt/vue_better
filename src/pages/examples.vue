<template>
  <div class="example">
      <ul class="example-list">
          <li class="list-item">
              <router-link :to="slide">
                <img src="../assets/images/slide.jpeg" alt="">
              </router-link>
          </li>
       
          <li class="list-item">
              <router-link :to="scrollPage">
                 <img src="../assets/images/vertical-scroll-en.jpeg" alt="">
              </router-link>
          </li>
          <li class="list-item">
              <img src="../assets/images/vertical-scroll-en.jpeg" alt="">
          </li>
          <li class="list-item">
              <img src="../assets/images/vertical-scroll-en.jpeg" alt="">
          </li>
      </ul>

      <transition name="move">
          <router-view class="view">

          </router-view>
      </transition>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
        slideImage:"/static/img/slide.jpeg"
    }
  },
  computed: {
      slide(){
          return "/example/slide/ct"
      },
      scrollPage(){
          return "/example/scrollpage"
      }
  },
  methods:{
      
  },
  created() {
    console.log("example page created")
  }
}
</script>

<style  lang='stylus' rel="stylesheet/stylus">
.example
    //background pink
    width 100%
    box-sizing border-box
    .example-list
        width 100%
        padding-bottom 1rem
        box-sizing border-box
        display flex
        justify-content space-between
        flex-wrap wrap
        
        .list-item
            @media screen and (max-width 675px){
                 flex 1 1 80%
            }
            flex 0 1 28%
            padding 0.5rem
            padding 0.5rem
            border 1px solid gray
            margin-top 1rem 
            img
                border 1px solid 
                width 100%
    .view
      width 100%
      transition: all 0.3s
      transform: translate3d(0, 0, 0)
      &.move-enter-active, &.move-leave-active
        transform: translate3d(100%, 0, 0)

</style>
