<template>
  <div>
    <logo-text class="logo-text" width="400px" fill="#3E3930" />
    <transition name="fade" mode="out-in">
      <div class="list-title" :key="selectedGenre">
        {{ genreTitle[selectedGenre - 1] }}
      </div>
    </transition>
    <div class="sound-track">
      <div class="sound-track-nav">
        <div
          v-for="(item, idx) in navItem"
          class="nav-button"
          :key="idx"
          :id="'nav-button-' + item.id"
          :value="item.id"
          @click="selectGenre"
        >
          {{ item.name }}
        </div>
        <div class="highlight" id="levelCircle"></div>
      </div>
      <div class="sound-track-list">
        <div
          v-for="(item, idx) in playList"
          class="menu-item"
          :key="idx"
          @click="clickMusic(idx)"
        >
          <p :idx="idx" class="sound-track-title">{{ item.title }}</p>
          <p :idx="idx" class="movie-title">{{ item.movie_id.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { mapState } from "vuex";

export default {
  name: "TrackList",
  data() {
    return {
      navItem: [
        { id: "5", name: "5F" },
        { id: "4", name: "4F" },
        { id: "3", name: "3F" },
        { id: "2", name: "2F" },
        { id: "1", name: "B1" },
      ],
      genreTitle: [
        "Parting is such sweet sorrow",
        "You make me want to be a better man",
        "To make each day count",
        "Loving him was so easy for me",
        "Lighting could strike",
      ],
    };
  },
  methods: {
    // 음악 클릭: 음악 재생
    clickMusic: function (idx) {
      this.$store.dispatch("PlayMusic", idx);
    },
    selectGenre: function (e) {
      this.$store.dispatch("GetMovieData", e.target.getAttribute("value"));
    },
  },

  computed: {
    ...mapState(["playList", "selectedGenre"]),
  },
  watch: {
    selectedGenre() {
      const navId = "nav-button-" + this.selectedGenre;
      const level = document.getElementById(navId);
      const linkCoords = level.getBoundingClientRect();

      const coords = {
        top: linkCoords.top,
        left: linkCoords.left,
      };
      const levelCircle = document.getElementById("levelCircle");
      levelCircle.style.width = "75px";
      levelCircle.style.height = "75px";
      levelCircle.style.border = "4px solid #000000";
      levelCircle.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    },
  },
};
</script>

<style >
.sound-track {
  display: flex;
  margin-left: 20px;
}
.list-title {
  font-size: 18px;
  font-weight: 500;
  margin: 20px;
  text-align: center;
  transition: all 0.5s;
}

/* 사운드 트랙 네비게이션 */
.sound-track-nav {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: space-around;
  width: 100px;
}
.nav-button {
  width: 60px;
  height: 60px;

  text-align: center;
  line-height: 60px;
  font-size: 30px;
  font-weight: 600;
}

.highlight {
  transition: all 1s;
  width: 100px;
  height: 100px;
  top: 100px;
  left: 100px;
  border-radius: 50px;
  display: block;
  position: absolute;
}

/* 사운드트랙 리스트  */
.sound-track-list {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-x: auto;
  -ms-overflow-style: none;

  width: 300px;
  height: 60vmin;
  border: 4px solid #3e3930;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 20px;
}
.sound-track-list::-webkit-scrollbar {
  display: none;
}

/* 사운드트랙 아이템 */
.menu-item {
  height: 40px;
  border-bottom: dotted 1px #3e3930;
  margin: 5px;
}
.sound-track-title {
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.movie-title {
  font-size: 12px;
  font-weight: 200;
  margin: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>