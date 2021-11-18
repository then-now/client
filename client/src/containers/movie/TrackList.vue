<template>
  <div>
    <logo-text class="logo-text" width="400px" fill="#3E3930" />
    <h2>You make me want to be a better man</h2>
    <div class="sound-track">
      <div class="sound-track-nav">
        <div class="nav-button">4F</div>
        <div class="nav-button">3F</div>
        <div class="nav-button">2F</div>
        <div class="nav-button">1F</div>
        <div class="nav-button">B1</div>
      </div>
      <div class="sound-track-list">
        <div v-for="(item, idx) in items" class="menu-item" :key="idx">
          <p class="sound-track-title">{{ item.soundTrackTitle }}</p>
          <p class="movie-title">{{ item.movieTitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrackList",
  data: function () {
    return {
      items: [
        {
          soundTrackTitle:
            "Concerto in C Major for Mandolin, Strings and Harpsichord, P. 134: III. Allegro",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
        {
          soundTrackTitle: "The Whole Nine Yards",
          movieTitle: "Between Calm And Passion",
        },
      ],
    };
  },
};
</script>

<style >
.sound-track {
  display: flex;
  margin-left: 20px;
}
/* 사운드 트랙 네비게이션 */
.sound-track-nav {
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: space-around;
  width: 100px;
}
.nav-button {
  width: 60px;
  height: 60px;
  border: solid black 5px;
  border-radius: 50%;

  text-align: center;
  line-height: 60px;
  font-size: 30px;
  font-weight: 800;
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
  height: 100px;
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
</style>