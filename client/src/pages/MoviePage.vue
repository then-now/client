<template>
  <div class="wrap">
    <div>
      <TrackList />
    </div>
    <div>
      <TurnTable />
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviePage",
  components: {
    TrackList: () => import("@/containers/movie/TrackList.vue"),
    TurnTable: () => import("@/containers/movie/TurnTable.vue"),
  },
};
</script>

<style>
</style>