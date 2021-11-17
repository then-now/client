<template>
  <div class="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <div>
          <HomePage />
        </div>
      </div>
      <div class="section main">
        <div><MoviePage /></div>
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    HomePage: () => import("@/pages/HomePage.vue"),
    MoviePage: () => import("@/pages/MoviePage.vue"),
  },
  data() {
    return {
      options: {
        anchors: ["landing", "main"],
      },
    };
  },
};
</script>

<style>
/* Mulish Font */
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.app {
  background-color: rgba(13, 63, 92, 1);
  font-family: "Mulish";
}
</style>
