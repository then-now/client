<template>
  <div>
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
  name: "MovieTrack",
  components: {
    TrackList: () => import("@/components/main/TrackList.vue"),
    TurnTable: () => import("@/components/main/TurnTable.vue"),
  },
};
</script>

<style>
</style>