<template>
   <div class="div_files">

        <ul id="files_content">
            
            <li class="item">
                <span>11-websocket</span>
                <ul class="item_content">
                    <li>  
                        <a target="_blank" href="http://juojuo.club:3006/project/11-websocket/index.html">index.html</a>
                    </li>
                </ul>
             
            </li>


        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    axios.get("/log/getFiles").then(data => {
      console.log(data);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus' rel="stylesheet/stylus">
@import '~assets/css/default.styl'
.div_files
  .item
    span 
      display: block;
      background: pink;
      color:white;
      padding: 8px 15px;
      box-sizing: border-box;
    .item_content
      padding 10px 25px;
      a{
        line-height 25px
      }
  
</style>
