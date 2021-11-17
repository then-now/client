<template>
  <div class="menu">
    <logo-image />

    <h2 class="menu title">explore our floors</h2>
    <br />
    <p
      v-for="(item, idx) in items"
      class="menu"
      :key="idx"
      :id="item.id"
      :style="{
        color: onHover[item.id]
          ? 'rgba(243, 236, 234, 1)'
          : 'rgba(129, 140, 147, 1)',
        fontSize: onHover[item.id] ? '14px' : '13px',
      }"
      @mouseover="hoverItem"
      @mouseleave="hoverItem"
      @click="moveSectionDown"
    >
      {{ item.title }}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeMenu",

  data: function () {
    return {
      items: [
        { id: 4, title: "Lighting could strike" },
        { id: 3, title: "Loving him was so easy for me" },
        { id: 2, title: "To make each day count" },
        { id: 1, title: "You make me want to be a better man" },
        { id: 0, title: "Parting is such sweet sorrow" },
      ],
    };
  },

  methods: {
    // 마우스 호버
    hoverItem: function (e) {
      this.$store.dispatch("HoverSection", e.target.id);
    },

    // 마우스 클릭
    moveSectionDown: function () {
      this.$emit("moveSectionDown");
    },
  },
  computed: {
    ...mapState(["onHover"]),
  },
};
</script>

<style>
.menu {
  font-family: Mulish;
  font-size: 13px;
  line-height: 14px;
  letter-spacing: 2px;
  text-align: right;

  transition: all 0.5s;
  transition-timing-function: csubic-bezier(0.28, 0.79, 0.36, 1.18);
}
.title {
  font-size: 20px;
  color: rgba(243, 236, 234, 1);
}
</style>