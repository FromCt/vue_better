<template>
<div class="slide" ref="slide">
    <div class="slide-group" ref='slideGroup'>
        <slot></slot>
    </div>

    <div v-if="showDot" class="dots">
        <span v-for="(item,index) in items" :key="item.key" :class="{active:dotIndex===index}"></span>
    </div>
</div>
    
</template>
<script type='text/ecmascript-6'>
//轮播组件实现
import Bscroll from "better-scroll";
import { addClass } from "assets/js/dom";

export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    click: {
      type: Boolean,
      default: true
    },
    threshold: {
      type: Number,
      default: 0.3
    },
    speed: {
      type: Number,
      default: 400
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    showDot: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      items: [],
      dotIndex: 0
    };
  },
  mounted() {
    console.log("slide component mounted");
    this.updata();

    window.addEventListener("resize", () => {
      console.log("resize========")
      console.log(this.slide);
      console.log(this.slide.enabled)
      if (!this.slide || !this.slide.enabled) {
        return;
      }
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        if (this.slide.isInTransition) {
          this._onScrollEnd();
        }
        this.refresh();
      }, 60);
    });
  },
  destroyed(){
    console.log("destroyed")
    this.slide.disable();
    clearTimeout(this.timer);
  },

  methods: {
    openDot() {
      this.showDot = true;
    },
    closeDot() {
      this.showDot = false;
    },
    updata() {
      if (this.slide) {
        this.slide.destroy();
      }
      this.$nextTick(() => {
        this.init();
      });
    },
    refresh() {
      this._setSlideWidth(true);
      this.slide.refresh();
      if (this.autoPlay) {
        this._play();
      }
    },
    init() {
      clearTimeout(this.timer);
      this._setSlideWidth();

      this._initSlide();
      if (this.autoPlay) {
        this._play();
      }
    },
    _setSlideWidth(isResize) {
      if (!isResize) {
        this.items = [...this.$refs.slideGroup.children];
      }
      this.children = this.$refs.slideGroup.children;
      //console.log(this.children.length);
      let width = this.$refs.slide.clientWidth;
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        addClass(child, "slide-item");
        child.style.width = width + "px";
      }
      let slideGroupWidth = 0;
      if (this.loop && !isResize) {
        slideGroupWidth = (this.children.length + 2) * width + "px";
      } else {
        slideGroupWidth = this.children.length * width + "px";
      }
      //console.log(slideGroupWidth);
      this.$refs.slideGroup.style.width = slideGroupWidth;
    },
    _initSlide() {
      this.slide = new Bscroll(this.$refs.slide, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: this.threshold,
          speed: this.speed
        },
        bounce: false,
        stopPropagation: true,
        click: this.click
      });

      this.slide.on("scrollEnd", this._onScrollEnd);

      this.slide.on("touchEnd", () => {
        console.log("touchEnd");
      });

      this.slide.on("beforeScrollStart", () => {
        console.log("beforeScrollStart");
        if (this.autoPlay) {
          clearTimeout(this.timer);
        }
      });
    },
    _onScrollEnd() {
      this.dotIndex = this.slide.getCurrentPage().pageX;
      //console.log("onScrollEnd");
      if (this.autoPlay) {
        this._play();
      }
    },
    _play() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.slide.next();
      }, 3000);
    }
  },
  watch: {
    loop() {
      this.updata();
    }
  }
};
</script>

<style lang="stylus">
.slide {
    min-height: 1px;
    overflow: hidden;
    position: relative;

    .slide-group {
        overflow: hidden;

        .slide-item {
            float: left;
            box-sizing: border-box;
            overflow: hidden;
            text-align: center;
        }
    }

    .dots {
        width: 100%;
        height: 20px;
        // background grey
        position: absolute;
        bottom: 10px;
        display: flex;
        justify-content: center;

        span {
            margin: 5px;
            height: 10px;
            background: #cccccc;
            width: 10px;
            border-radius: 5px;
        }

        .active {
            width: 20px;
            background: white;
        }
    }
}
</style>

