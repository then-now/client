<template>
  <div class="app">
    <Home />
    <MovieTrack />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Home: () => import("@/pages/Home.vue"),
    MovieTrack: () => import("@/pages/MovieTrack.vue"),
  },
};
</script>

<style>
</style>
