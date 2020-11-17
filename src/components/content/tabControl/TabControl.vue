<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in titles" :key="index">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
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
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  > .tab-control-item {
    flex: 1;
    > span {
      padding: 5px;
      border-bottom: 1px solid #000;
    }
  }
  .active{
     color: var(--color-high-text);
     border-bottom: 3px solid var(--color-tint);
  }
}
</style>
