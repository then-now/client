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
</style>
