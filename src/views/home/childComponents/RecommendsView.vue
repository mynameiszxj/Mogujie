<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendsView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="less">
.recommend {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 0 20px;
  border-bottom: 5px solid #eee;
  > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
    a {
      img {
        width: 70px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
