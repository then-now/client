<template>
  <div class="wrap">
    <div class="track-list">
      <TrackList />
    </div>
    <div class="turn-table">
      <TurnTable />
    </div>
    <ButtonScroll class="button-scroll" />
  </div>
</template>

<script>
export default {
  name: "MoviePage",
  components: {
    TrackList: () => import("@/containers/movie/TrackList.vue"),
    TurnTable: () => import("@/containers/movie/TurnTable.vue"),
    ButtonScroll: () => import("@/components/buttons/ButtonScroll.vue"),
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.track-list {
  display: inline-flex;
  flex-direction: column;
  margin: 5vmin 0 0 5vmin;
}
.turn-table {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  flex-grow: 1;
}
.button-scroll {
  position: fixed;
  width: 200px;
  right: 30px;
  bottom: 93vh;
}
</style>