<template>
  <div class="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <div>
          <LandingPage />
        </div>
      </div>
      <div class="section">
        <div>
          <HomePage />
        </div>
      </div>
      <div class="section">
        <div><MoviePage /></div>
      </div>
    </full-page>
    <audio v-if="soundtrack" id="player" :src="soundtrack.track_path"></audio>
  </div>
</template>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    LandingPage: () => import("@/pages/LandingPage.vue"),
    HomePage: () => import("@/pages/HomePage.vue"),
    MoviePage: () => import("@/pages/MoviePage.vue"),
  },

  data() {
    return {
      options: {
        anchors: ["landing", "home", "main"],
        sectionsColor: ["#0D3F5C", "#0D3F5C", "#F6F5F4"],
        normalScrollElements: ".sound-track-list",
      },
    };
  },

  mounted() {
    fullpage_api.setAllowScrolling(false);
  },

  computed: {
    ...mapState(["soundtrack"]),
  },

  updated() {
    this.$nextTick(function () {
      if (this.soundtrack) {
        const audio = document.getElementById("player");
        audio.play();
      }
    });
  },
};
</script>

<style scoped>
/* Mulish Font */
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.app {
  font-family: "Mulish";
}
</style>
