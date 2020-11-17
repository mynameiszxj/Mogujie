<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banners="banners" />
    <RecommendsView :recommends="recommends" />
    <FeatureView />
    <TabControl :titles="['流行', '新款', '精选']" />
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendsView from "./childComponents/RecommendsView";
import FeatureView from "./childComponents/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

import { getHomeMultidata } from "network/home";

export default {
  props: {},
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  methods: {},
  components: {
    HomeSwiper,
    RecommendsView,
    FeatureView,
    NavBar,
    TabControl,
  },
  created() {
    //   请求多个数据
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped lang="less">
#home {
  padding-top: 44px;
  .home-nav {
    width: 100%;
    color: #fff;
    background-color: var(--color-tint);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
  }
}
</style>
