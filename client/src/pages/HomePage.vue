<template>
  <div class="wrap">
    <HomeImage />
    <div @click="moveSectionUp">
      <logo-text class="logo-component" />
    </div>
    <div class="menu-component">
      <HomeMenu />
    </div>
    <ButtonScroll
      v-if="soundtrack"
      class="button-scroll"
      :title="soundtrack.title"
      :sub-title="soundtrack.movie_id.title"
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
    moveSectionUp: function () {
      fullpage_api.moveSectionUp();
    },
  },
  computed: {
    ...mapState(["soundtrack"]),
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
}
.logo-component {
  position: absolute;
  top: 10px;
  left: 10px;
}
.menu-component {
  position: absolute;
  right: 40px;
  top: 15vh;
}
.button-scroll {
  position: absolute;
  width: 200px;
  right: 40px;
  bottom: 3vh;
}
</style>
