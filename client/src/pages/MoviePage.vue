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
    TrackList: () => import("@/components/main/TrackList.vue"),
    TurnTable: () => import("@/components/main/TurnTable.vue"),
  },
};
</script>

<style>
.wrap {
  background-color: blue;
  width: 100px;
}
</style>