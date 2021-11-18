<template>
  <div class="wrap">
    <HomeImage @moveSectionDown="moveSectionDown" />
    <logo-text class="logo-component" />
    <div class="menu-component">
      <HomeMenu @moveSectionDown="moveSectionDown" />
    </div>
    <ButtonScroll
      class="button-scroll"
      title="The Whole Nine Yards"
      sub-title="Between Calm And Passion"
      type="down"
    />
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script>
import { mapState } from "vuex";
export default {
  name: "HomePage",
  components: {
    HomeImage: () => import("@/containers/home/HomeImage.vue"),
    HomeMenu: () => import("@/containers/home/HomeMenu.vue"),
    ButtonScroll: () => import("@/components/buttons/ButtonScroll.vue"),
  },
  methods: {
    // 마우스 호버: 이미지 색상 변경
    hoverImage: function (e) {
      this.$store.dispatch("HoverImage", e.target.id);
    },

    // 마우스 클릭: 섹션 이동
    moveSectionDown: function () {
      // this.$store.dispatch("GetMovieData", e.target.id);
      fullpage_api.moveSectionDown();
    },
  },
  computed: {
    ...mapState(["hoverActive"]),
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  width: 100%;
  height: 100%;
}
.logo-component {
  position: fixed;
  top: 10px;
  left: 10px;
}
.menu-component {
  position: fixed;
  right: 40px;
  top: 15vh;
}
.button-scroll {
  position: fixed;
  width: 200px;
  right: 30px;
  top: 90vh;
}
</style>
