<template>
  <page :title="header">
     <div slot="content" class="pageContent">
        <scroll ref="scroll" class="scroll" 
        :data="componentsDatas" 
        :pullDownRefresh="pullDownRefreshObj"
        :pullUpLoad="pullUpLoadObj"
        @pullUping="pullUping"
        @destroyed="isDestroyed"
        @pullDown="pullDown">
        </scroll>

     </div>
  </page>
  
</template>

<script type="text/ecmascript-6">

import Page from "@/components/page.vue"
import Scroll from "@/components/scroll.vue"


export default {


  data() {
    return {
        header:"竖直滚动案例",
        datas:[],
        pullDownRefreshObj:{
             threshold: 50,//开启刷新
             stop: 50  //回弹距离
        },
        pullUpLoadObj:{
            threshold: 50,//开启刷新
            
        },
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
      componentsDatas(){
          return this.datas;
      }
  },
  methods:{
      pullDown(){
          console.log("get conmponent pullDown event")
          setTimeout(()=>{

              if(this.scrollNoEnable){
                  return
              }
              if(Math.random()>0.5){
                console.log("updata success")
                //update successs
                this.datas=this.items.concat(this.items)
              }else{
                 console.log("updata fail")
                 this.$refs.scroll.finishPullDown()
              }            
          },2000) 
          
      },
      pullUping(){
          console.log("pullUping");
          setTimeout(() => {

              if(this.scrollNoEnable){
                  return
              }

              if(Math.random()>0.5){
                  console.log("pullUp success")
                  this.datas=this.datas.concat(this.items)
              }else{
                  console.log("pullUp fail")
                  this.$refs.scroll.pullUpTxt="没查询到更多"
                  this.$refs.scroll.finishPullUp()
              }
              
          }, 2000);
      },
      isDestroyed(){
          this.scrollNoEnable=true
      }
    
  },
  created() {
    console.log("scroll page created");
     for(let i=0;i<3;i++){
          this.datas=this.datas.concat(this.items)
      }
      //console.log(this.datas)
   
  },
   mounted(){
      console.log('scroll page mounted')
   },
  components:{
      Page,
      Scroll


  }
}
</script>

<style  lang='stylus' rel="stylesheet/stylus">
.pageContent
    height 100%
    .scroll
        height:100%

</style>
