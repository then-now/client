<template>
  <div class="wrap">
    <HomeImage />
    <logo-text class="logo-component" />
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
  computed: {
    ...mapState(["soundtrack"]),
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
