<template>
  <div class="hm-goods-card">
    <div class="box">
      <div class="titleClass">
        <text class="title">{{ options.title }}</text>
        <image class="titleimg" :src="options.titleimg" />
      </div>
      <div class="goods">
        <div class="wrap"><image class="pic" :src="options.pic" /></div>
        <div class="block">
          <text class="tradeName">{{ options.tradeName }}</text>
          <text class="describe">{{ options.describe }}</text>
          <text class="commodity">{{ options.commodity }}</text>
        </div>
      </div>
      <div class="row" />
      <div class="row2">
        <div class="group"><image class="img" :src="options.img" /></div>
        <div class="container">
          <text class="secondName">{{ options.secondName }}</text>
          <text class="secondDescribe">{{ options.secondDescribe }}</text>
          <text class="secondcommodity">{{ options.secondcommodity }}</text>
        </div>
      </div>
      <div class="submain" />
      <div class="main">
        <div class="outer">
          <image class="smallItem" :src="options.smallItem" />
        </div>
        <div class="wrap_2">
          <text class="thirdName">{{ options.thirdName }}</text>
          <text class="thirdDescribe">{{ options.thirdDescribe }}</text>
          <text class="thirdcommodity">{{ options.thirdcommodity }}</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HmGoodsCard',
  props: {
    dataId: {
      type: String,
      default: 'hm-goods-card'
    },
    options: {
      type: Object,
      default: function() {
        return {
          title: '热门产品',
          titleimg:
            './images/img_25335_0_0.png',
          pic:
            './images/img_25335_0_1.png',
          tradeName: '圆形户外搁脚凳',
          describe: '搁脚凳',
          commodity: '凳子',
          img:
            './images/img_25335_0_2.png',
          secondName: '深灰色翼背',
          secondDescribe: '椅子第1版',
          secondcommodity: '椅子',
          smallItem:
            './images/img_25335_0_3.png',
          thirdName: '简易木端',
          thirdDescribe: '小号桌',
          thirdcommodity: '桌子'
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
@import './index.response.css';
</style>
