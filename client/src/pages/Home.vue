<template>
  <div>
    <div>
      <MainImage />
    </div>
    <div>
      <MainMenu />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  components: {
    MainImage: () => import("@/components/home/MainImage.vue"),
    MainMenu: () => import("@/components/home/MainMenu.vue"),
  },
};
</script>

<style>
</style>
