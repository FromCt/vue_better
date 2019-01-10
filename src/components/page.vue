<template>
    <div class="page">
        <div class="header">
           <h1>{{title}}</h1>
           <img :src="backIcon" @click="goBack" alt="">
        </div>
        <main class="content">
            <slot name="content"></slot>
        </main>
    </div>
</template>
<script type="text/ecmascript-6">
//全屏组件  模拟打开新页面
export default {
    props:{
        title:{
            type:String,
            default:'header'
        }
    },
    data(){
        return {
            backIcon:require('../assets/images/back.svg')
        }
    },
    methods:{
        goBack(){
            this.$router.back()
        }
    },
    mounted(){
      console.log('page mounted')
   },
 
}
</script>

<style scoped lang='stylus' rel="stylesheet/stylus">
@import '~assets/css/default.styl'

.page
    position fixed
    z-index 20
    top 0
    left 0
    height 100%
    width 100%
    background #efeff4
    .header
        position relative
        height 44px
        background #f7f7f7
        text-align center
        color $color-main
        h1
            line-height 44px
            font-weight 200
        img 
            position absolute
            left 10px
            top 6px
            height 30px
    .content
        width 100%
        height calc(100% - 44px)   
        background white 

        

</style>
