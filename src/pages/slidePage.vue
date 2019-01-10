<template>
  <page :title="header">
     <div slot="content" class="slid">
        <div class="slide-content">
            <slide ref="slide" :loop="true" :showDot="showDOT">
                <div class="item" v-for="item in items" :key="item.key">
                    <a href="">
                        <img :src="item.picUrl" alt="">
                    </a>
                </div>
            </slide>

          
        </div>

        <div class="main-content">
            <button @click="closeDot"> 关闭dots</button>
            <button @click="openDot"> 开启dots</button>
             <main-button class="main-button"></main-button>
        </div>

     </div>
  </page>
  
</template>

<script type="text/ecmascript-6">
import Page from "@/components/page.vue"
import Slide from "@/components/slide.vue"
import MainButton from "@/components/button/button.vue"

export default {

  data() {
    return {
        slideImage:"/static/img/slide.jpeg",
        header:"轮播案例",
        showDOT:false,
        items:[
            {
                linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
                picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
                id: 11378
            },
            {
                linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
                picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
                id: 11375
            },
            {
                linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
                picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
                id: 11287
            }
        ],
    }
  },
  computed: {

  },
  methods:{
      closeDot(){
           this.showDOT=false;
          //this.$refs.slide.closeDot();
      },
      openDot(){
          this.showDOT=true;
          //this.$refs.slide.openDot();
      }
  },
  created() {
    console.log("slide page created");
   
  },
   mounted(){
      console.log('slide mounted')
   },
  components:{
      Page,
      Slide,
      MainButton
  }
}
</script>

<style  lang='stylus' rel="stylesheet/stylus">

.slide-content
    background pink 
    width 100%
    .item
        img
            width 100%

.main-content
    background pink 
    padding 1.0rem 1.3rem
    .main-button
        margin-top 1.0rem
        color red
</style>
