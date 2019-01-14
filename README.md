# vue-betterscroll

> A Vue.js project
https://www.vue-js.com/

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
//https://ustbhuangyi.github.io/better-scroll/#/examples/slide/
#安装stylus
npm install stylus --save-dev
npm install stylus-loader --svae-dev


#  axios 网络访问框架
    npm install axios --save-dev

    

#vue router使用
https://router.vuejs.org/zh/guide/#javascript

#flex 子元素自动换行
pages examples.vue 中ul flex布局 实现子元素 超出父元素时候自动换行
```
flex-warp: warp    可实自动换行
justify-content space-between 两端贴着父元素
flex 0 1 28%  flex-grow 0 父元素大的时候时候分父元素，
flex-shrink 1 父元素更小的时候是否缩小
flex-basis 占父元素的宽度

```

#vue 指令 函数相关

指令


```
props 指定接受的属性名 和默认值
通过 :prop_name 来传值 （router也可以用来穿值。）
```

```
父组件在子组件中写 html
子组件 中 使用 main 和solt 设置 slot name属性
父组件 在子组件中 div属性solt=name

或者子组件直接slot
```

```
$nextTick dom更新后才会回调 
```

```
vue 组件的生命周期
1、beforeCreate
2、created
3-beforeMounted
4-mounted
5-beforeUpdate
6-updated
7-activated
8-deactivated
9-beforeDestroy   
10-destroy
```
##父子组件间通信
1、通过 props 向子组件传递参数

2、父组件 @监听方法
    子组件 通过 emit 将方法抛出 ，并可以传递参数
    如：父 @pullDown="callBack(data)"  子 this.$emit("pullDown",data)

3、父组件 可以通过 refs 获取到子组件的引用  ，然后调用子组件的方法（props 传递的参数不要通过该方法调用。 因为子组件 和父组件  指向的是同一个引用地址）