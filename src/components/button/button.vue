<template>
    <div class="button">
        <button>{{buttonText}}</button>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        buttonText:{
            default:String,
            default:"button"
        }
    }
   
}
</script>

<style lang='stylus' rel="stylesheet/stylus">
// 应该写个公共样式 来使用 而不是写个button组件
@import "~assets/css/default.styl"
.button
    button
        padding 6px 10px;
        color $color-main
        border-radius 3px;
        background-color: rgba(255, 255, 255, 0.1);
        border-color:$color-main;
        border-style: solid;
        border-width: 1px;

</style>

