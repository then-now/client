<template>
  <div class="wrap">
    <div class="track-list">
      <TrackList />
    </div>
    <div class="turn-table">
      <TurnTable />
    </div>
    <ButtonScroll
      class="button-scroll"
      fill="#a5a4a4"
      title="explore our floors"
    />
  </div>
</template>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script>
export default {
  name: "MoviePage",
  components: {
    TrackList: () => import("@/containers/movie/TrackList.vue"),
    TurnTable: () => import("@/containers/movie/TurnTable.vue"),
    ButtonScroll: () => import("@/components/buttons/ButtonScroll.vue"),
  },
  methods: {
    // 마우스 클릭: 섹션 이동
    moveSectionUp: function () {
      fullpage_api.moveSectionUp();
    },
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
  right: 40px;
  margin-top: 3vh;
}
</style>