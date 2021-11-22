<template>
  <div class="menu">
    <logo-image />

    <h1 class="menu title">
      Choose your mood,
      <br />
      Meet a classic movie through music
    </h1>
    <h2 class="menu subtitle">hope this building finds you in good mood</h2>

    <br />
    <p
      v-for="(item, idx) in items"
      class="menu"
      :key="idx"
      :value="item.id"
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
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeMenu",

  data: function () {
    return {
      items: [
        { id: 5, title: "Lighting could strike" },
        { id: 4, title: "Loving him was so easy for me" },
        { id: 3, title: "To make each day count" },
        { id: 2, title: "You make me want to be a better man" },
        { id: 1, title: "Parting is such sweet sorrow" },
      ],
    };
  },

  methods: {
    // 마우스 호버: 이미지 색상 변경
    hoverItem: function (e) {
      this.$store.dispatch("HoverSection", e.target.getAttribute("value"));
    },

    // 마우스 클릭: 섹션 이동
    moveSectionDown: function (e) {
      this.$store.dispatch("GetMovieData", e.target.getAttribute("value"));
      fullpage_api.moveSectionDown();
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
  margin: 0px;
  font-size: 15px;
  color: rgba(243, 236, 234, 1);
  line-height: 15px;
}
.subtitle {
  font-weight: 300;
  margin-top: 6px;
  font-size: 10px;
  color: rgba(243, 236, 234, 1);
}
</style>