<template>
  <div ref="wrapper" class="list-wrapper">
      <div class="scroll-content">
          <div>
              <slot>
                  <!--slot 下是默认展示方案，可以由父组件 来填充 -->
                  <ul class="list-content">
                      <li @click="clickItem($event,item)" class="list-item" v-for="(item,index) in data" :key="index" >
                          <img :src="item.picUrl" alt="" srcset="">
                      </li>
                  </ul>
              </slot>
          </div>
          <slot name="pullup"
            :pullUpLoad="pullUpLoad"
            :isPullUpLoad="isPullUping">
            <div class="pullup-wrapper" v-if="pullUpLoad">
              <div class="before-trigger" v-if="!isPullUping">
                <span>{{pullUpTxt}}</span>
              </div>
              <div class="after-trigger" v-else>
                <loading></loading>
              </div>
            </div>
        </slot>
      </div>
      <slot name="pulldown"
          :pullDownRefresh="pullDownRefresh"
          :pullDownStyle="pullDownStyle"
          :beforePullDown="beforePullDown"
          :isPullingDown="isPullingDown"
          :bubbleY="bubbleY">
            
            <div ref="pulldown" class="pulldown-wrapper" :style="pullDownStyle" v-if="pullDownRefresh">
              <div class="before-trigger" v-if="beforePullDown">
                <bubble :y="bubbleY"></bubble>
              </div>
              <div class="after-trigger" v-else>
                <div v-if="isPullingDown" class="loading">
                  <loading></loading>
                </div>
                <div v-else><span>{{refreshTxt}}</span></div>
              </div>
            </div>
    </slot>
  </div>
</template>

<script type="text/ecmascript-6">
//滚动组件 下拉刷新 上拉加载
import BScroll from "better-scroll";
import Bubble from "./bubble/bubble.vue";
import Loading from "./loading/loading.vue"

const COMPONENT_NAME = "scroll";
const DIRECTION_V = "vertical";
const DIRECTION_H = "horizontal";

export default {
  name:COMPONENT_NAME,
  props: {
       data: {
            type: Array,
            default: function() {
            return [
            {
                pickurl: "defaulturl==================="
            }
            ];
        }
      },
      startY: {
        type: Number,
        default: 0
      },
      probeType: {
        type: Number,
        default: 1
      },
      direction: {
        type: String,
        default: DIRECTION_V
      },
      freeScroll: {
        type: Boolean,
        default: false
      },
      bounce: {
        type: Boolean,
        default: true
      },
      scrollbar: {
        type: null,
        default: true
      },
      pullDownRefresh: {
        type: null,
        default: true
      },
      pullUpLoad: {
        type: null,
        default: true
      },
      mouseWheel: {
        type: Boolean,
        default: true
      },
      listenScroll:{
        type:Boolean,
        default:false
      },
      listenBeforeScroll:{
        type:Boolean,
        default:false
      },
      listenScrollEnd:{
        type:Boolean,
        default:false
      }
  },
  data() {
    return {
        beforePullDown: true,
        isRebounding: false,
        isPullingDown: false,
        pullDownStyle: '',
        bubbleY: 0,
        isPullUping:false,
        pullUpTxt:"加载更多"
    };
  },
  watch:{
    data(){
      if(this.isPullingDown){
        this.finishPullDown()
      }

      if(this.isPullUping){
        this.finishPullUp()
      }
     
    }
  },
  created() {
    console.log("component scroll created");
    this.pullDownInitTop = -50
  },
  mounted() {
    console.log("component scroll mounted");
    //console.log(this.data)
    setTimeout(() => {
      this.initBscroll();
    }, 20);
  },
  components:{
    Bubble,
    Loading
  },
  destroyed() {
    this.scroll.destroy()
    this.$emit("destroyed")
  },
  methods: {
    initBscroll() {
      console.log("initBscroll");
      if (!this.$refs.wrapper) {
        return;
      }
      let options = {
        probeType: this.probeType,
        click: this.click,
        scrollY: this.freeScroll || this.direction === DIRECTION_V,
        scrollX: this.freeScroll || this.direction === DIRECTION_H,
        scrollbar: this.scrollbar,
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad,
        startY: this.startY,
        freeScroll: this.freeScroll,
        mouseWheel: this.mouseWheel,
        bounce: this.bounce,
        zoom: this.zoom
      };

      this.scroll = new BScroll(this.$refs.wrapper, options);

      if(this.listenScroll){
        this.scroll.on("scroll",function(){
          console.log("scroll scroll=============")
        })
      }

      if(this.listenBeforeScroll){
        this.scroll.on("beforeScrollStart",function(){
          console.log("scroll  beforeScrollStart========")
        })
      }

      if(this.listenScrollEnd){
        this.scroll.on("scrollEnd",function(){
          console.log("scroll scrollEnd===========")
        })
      }

      if(this.pullDownRefresh){
        this._initPullDownRefresh()
      }

      if(this.pullUpLoad){
        this._initPullUp()
      }
      console.log(this.scroll);
    },
    _initPullDownRefresh(){
      console.log("init pullDownRefresh=====")
      //this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
       this.pullDownStyle=`top:${this.pullDownInitTop}px`

      this.scroll.on("pullingDown",()=>{
        console.log("pullingDown=======")
        this.beforePullDown = false
        this.isPullingDown = true
        this.$emit("pullDown")
       
      })

      this.scroll.on("scroll",(pos)=>{
        //console.log("pullDownRefresh scroll====")
        if(!this.pullDownRefresh){
          return
        }
        if(this.beforePullDown){
            this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
            this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
        
        }else{
          this.bubbleY = 0
        }

        if (this.isRebounding) {
            this.pullDownStyle = `top:${10 - (this.pullDownRefresh.stop - pos.y)}px`
          }

      })
    },
    _initPullUp(){
      console.log("initPullUp")
      this.scroll.on("pullingUp",()=>{
        console.log("pullingUp loading")
        if(this.isPullUping){
          return
        }
        this.isPullUping=true;
        this.$emit("pullUping")

      })

      
    },
    finishPullDown(){
      if(this.isPullingDown){
        console.log("change isPullingDown")
        this.isPullingDown=false;
        this.beforePullDown=true;
        this.isRebounding=false;

        this.pullDownStyle = `top:${this.pullDownInitTop}px`
      }

      

       this.scroll.finishPullDown()
        setTimeout(()=>{
          this.refresh()
        },20)
      
    },
    finishPullUp(){
      console.log("finishPullUp====")
      this.isPullUping=false;
      this.scroll.finishPullUp();
      setTimeout(() => {
        this.refresh()
      }, 20);
    },
    refresh(){
      console.log('scroll refresh')
      this.scroll && this.scroll.refresh()
    }
  },
  
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.list-wrapper {
    //background: pink;
    height: 100%;
    overflow: hidden;
    position relative

    .list-content {
        img {
            width: 100%;
        }
    }
}

.pulldown-wrapper
    position: absolute
    width: 100%
    left: 0
    top:0
    display: flex
    justify-content center
    align-items center
    transition: all
    .after-trigger
      margin-top: 10px

  .pullup-wrapper
    width: 100%
    display: flex
    justify-content center
    align-items center
    padding: 16px 0
</style>
