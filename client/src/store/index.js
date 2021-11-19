import Vue from 'vue'
import Vuex from 'vuex'

// Axios 요청
import axios from 'axios'
import SERVER from '@/api/drf.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 사운드트랙
    // 오디오 플레이어
    soundtrack: null,
    ott: null,
    isPlaying: false,
    onToneArm: false,
    onSpinning: false,

    // API 요청 리스트
    selectedGenre: "",
    playList: [
      {
          "id": 2,
          "movie_id": {
              "id": 2,
              "title": "Love Story",
              "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dMg3CG0YKJZYgPR9b5q52OQzd7u.jpg"
          },
          "title": "Theme from Love Story",
          "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3f/ff/ba/3fffbad3-19a1-708d-2fd3-23a7c45b9cee/mzaf_1685559436962139016.plus.aac.p.m4a"
      },
      {
          "id": 6,
          "movie_id": {
              "id": 19,
              "title": "Little Women",
              "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1ZzH1XMcKAe5NdrKL5MfcqZHHsZ.jpg"
          },
          "title": "Amy",
          "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7b/8c/41/7b8c415a-a7ed-a3cc-7316-a75ab5fe0b3a/mzaf_1364425258604095221.plus.aac.p.m4a"
      },
      {
          "id": 10,
          "movie_id": {
              "id": 10,
              "title": "Gone with the Wind",
              "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2ZvoAuwKDckMdx4pTmD68QfhcOM.jpg"
          },
          "title": "I'll Never Be Hungry Again!",
          "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/65/85/ac/6585ac99-e03d-dfcc-bbba-e08858dca8eb/mzaf_12487717456703519792.plus.aac.p.m4a"
      },      {
        "id": 2,
        "movie_id": {
            "id": 2,
            "title": "Love Story",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dMg3CG0YKJZYgPR9b5q52OQzd7u.jpg"
        },
        "title": "Theme from Love Story",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3f/ff/ba/3fffbad3-19a1-708d-2fd3-23a7c45b9cee/mzaf_1685559436962139016.plus.aac.p.m4a"
    },
    {
        "id": 6,
        "movie_id": {
            "id": 19,
            "title": "Little Women",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1ZzH1XMcKAe5NdrKL5MfcqZHHsZ.jpg"
        },
        "title": "Amy",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7b/8c/41/7b8c415a-a7ed-a3cc-7316-a75ab5fe0b3a/mzaf_1364425258604095221.plus.aac.p.m4a"
    },
    {
        "id": 10,
        "movie_id": {
            "id": 10,
            "title": "Gone with the Wind",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2ZvoAuwKDckMdx4pTmD68QfhcOM.jpg"
        },
        "title": "I'll Never Be Hungry Again!",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/65/85/ac/6585ac99-e03d-dfcc-bbba-e08858dca8eb/mzaf_12487717456703519792.plus.aac.p.m4a"
    },      {
      "id": 2,
      "movie_id": {
          "id": 2,
          "title": "Love Story",
          "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dMg3CG0YKJZYgPR9b5q52OQzd7u.jpg"
      },
      "title": "Theme from Love Story",
      "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3f/ff/ba/3fffbad3-19a1-708d-2fd3-23a7c45b9cee/mzaf_1685559436962139016.plus.aac.p.m4a"
  },
  {
      "id": 6,
      "movie_id": {
          "id": 19,
          "title": "Little Women",
          "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1ZzH1XMcKAe5NdrKL5MfcqZHHsZ.jpg"
      },
      "title": "Amy",
      "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7b/8c/41/7b8c415a-a7ed-a3cc-7316-a75ab5fe0b3a/mzaf_1364425258604095221.plus.aac.p.m4a"
  },
  {
      "id": 10,
      "movie_id": {
          "id": 10,
          "title": "Gone with the Wind",
          "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2ZvoAuwKDckMdx4pTmD68QfhcOM.jpg"
      },
      "title": "I'll Never Be Hungry Again!",
      "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/65/85/ac/6585ac99-e03d-dfcc-bbba-e08858dca8eb/mzaf_12487717456703519792.plus.aac.p.m4a"
  },      {
    "id": 2,
    "movie_id": {
        "id": 2,
        "title": "Love Story",
        "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dMg3CG0YKJZYgPR9b5q52OQzd7u.jpg"
    },
    "title": "Theme from Love Story",
    "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3f/ff/ba/3fffbad3-19a1-708d-2fd3-23a7c45b9cee/mzaf_1685559436962139016.plus.aac.p.m4a"
},
{
    "id": 6,
    "movie_id": {
        "id": 19,
        "title": "Little Women",
        "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1ZzH1XMcKAe5NdrKL5MfcqZHHsZ.jpg"
    },
    "title": "Amy",
    "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7b/8c/41/7b8c415a-a7ed-a3cc-7316-a75ab5fe0b3a/mzaf_1364425258604095221.plus.aac.p.m4a"
},
      ],


    // Home 페이지
    onHover: [false,false, false, false, false, false],

  },
  mutations: {
    // 사운드트랙
    SET_SOUNDTRACK: function (state, idx) {
      return state.soundtrack = state.playList[idx]
    },
    SET_MOVIE_OTT: function (state, data) {
      return state.ott = data
    },

    // 랜딩페이지
    SET_ON_HOVER: function (state, selected_id) {
      return state.onHover.splice(selected_id, 1, !state.onHover[selected_id]);
    },

    // 메인 페이지
    SET_GENRE: function (state, data) {
      return state.selectedGenre = data
    },
    SET_MOVIE_DATA: function (state, data) {
      return state.playList = data
    },

  },
  actions: {
    // 사운드트랙 클릭시
    PlayMusic: function ({commit, state}, idx) {
      commit("SET_SOUNDTRACK", idx)
      const movie_id = state.soundtrack.movie_id.id
      axios({
        url: SERVER.URL + SERVER.ROUTES.movie + movie_id +'/',
        method: 'get',
      })
      .then((res) => {
        commit('SET_MOVIE_OTT', res.data.movie_movies)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    


    // 랜딩페이지
    // 선택된 이미지 마우스 호버 감지
    HoverSection: function ({commit},selected_id) {
      commit("SET_ON_HOVER", selected_id)
    },

    // 장르에 대한 영화,노래정보 
    GetMovieData: function ({commit}, genre_id) {
      commit("SET_GENRE", genre_id)

      axios({
        url: SERVER.URL + SERVER.ROUTES.genre + genre_id +'/',
        method: 'get',
      })
      .then((res) => {
        commit('SET_MOVIE_DATA', res.data.tracks_genre)
      })
      .catch((err) => {
        console.log(err)
      })
    },

  },
  modules: {
  }
})
