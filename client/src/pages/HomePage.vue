<template>
  <div class="wrap">
    <div>
      <HomeImage @moveSectionDown="moveSectionDown" />
    </div>
    <div>
      <HomeMenu @moveSectionDown="moveSectionDown" />
    </div>
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script>
export default {
  name: "HomePage",
  components: {
    HomeImage: () => import("@/components/home/HomeImage.vue"),
    HomeMenu: () => import("@/components/home/HomeMenu.vue"),
  },
};
</script>

<style>
.wrap {
  background-color: red;
}
</style>
