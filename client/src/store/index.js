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
        "id": 9,
        "movie_id": {
            "id": 9,
            "title": "Chung King Express",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mOP0XWkChKhxuCmjD7CNXpa8M1p.jpg"
        },
        "title": "Dreams",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/93/ea/55/93ea5549-2952-be49-4a61-dd13260ddfbd/mzaf_6129633060222038704.plus.aac.p.m4a"
    },
    {
        "id": 12,
        "movie_id": {
            "id": 12,
            "title": "My Fair Lady",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yzcoWv7NVsBc5Eh4gkmIqJTCM7J.jpg"
        },
        "title": "Wouldn't It Be Lovely",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/27/ad/34/27ad34f7-00ed-53ba-b9bc-355d27981222/mzaf_16528508426511168571.plus.aac.p.m4a"
    },
    {
        "id": 19,
        "movie_id": {
            "id": 19,
            "title": "Little Women",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1ZzH1XMcKAe5NdrKL5MfcqZHHsZ.jpg"
        },
        "title": "Little Women",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/64/b2/e7/64b2e718-acd1-9f05-18c1-c56d7434f129/mzaf_9751551570044036824.plus.aac.p.m4a"
    },
    {
        "id": 36,
        "movie_id": {
            "id": 36,
            "title": "Goodfellas",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f8rOfzX9UuY4Zc39rljrRbjsWK3.jpg"
        },
        "title": "Roses Are Red",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/98/3b/3d/983b3d2d-1b54-e3ba-4dc6-b5ddf8a8064c/mzaf_1759023396482778785.plus.aac.p.m4a"
    },
    {
        "id": 38,
        "movie_id": {
            "id": 38,
            "title": "The Graduate",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AuFvrbtWSPiBPIv9ewH2DV4nhCD.jpg"
        },
        "title": "The Sound Of Silence",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/71/79/b3/7179b3d0-d86b-9387-2287-cc4ffd0f2c30/mzaf_15257187111005924073.plus.aac.p.m4a"
    },
    {
        "id": 39,
        "movie_id": {
            "id": 39,
            "title": "Dirty Dancing",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/osfBQ18P0y3pwT5qVuhdPk8btbj.jpg"
        },
        "title": "Be My Baby",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1f/3f/18/1f3f18f2-e429-9acc-3244-af56dbfac8a5/mzaf_18329266676228630545.plus.aac.p.m4a"
    },
    {
        "id": 41,
        "movie_id": {
            "id": 41,
            "title": "The Breakfast Club",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/s3DGORGyUfUGbss45BYfX117GTS.jpg"
        },
        "title": "Don't You (Forget About Me)",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c1/9d/2a/c19d2aba-e95a-f92b-fe1a-6080cbb2426a/mzaf_2202361866046861089.plus.aac.p.m4a"
    },
    {
        "id": 44,
        "movie_id": {
            "id": 44,
            "title": "Top Gun",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/56XAyRDe8UpeAb7QKdqyERpXhTM.jpg"
        },
        "title": "Danger Zone",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/84/ce/ad/84ceadc1-f8e6-b0fc-2850-8d8254340650/mzaf_2204285353260886850.plus.aac.p.m4a"
    },
    {
        "id": 45,
        "movie_id": {
            "id": 45,
            "title": "Annie Hall",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t1uuqTlKVV9ZbjZUmnqeekrkrFa.jpg"
        },
        "title": "It Seems Like Old Times",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/Music5/v4/f6/cd/f4/f6cdf4c6-e612-a385-e1db-a63dae1686e6/mzaf_3508744505531045804.plus.aac.p.m4a"
    },
    {
        "id": 55,
        "movie_id": {
            "id": 6,
            "title": "Romeo And Juliet",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hzE63Fah1BbqGQ3srVhOXoPPkBb.jpg"
        },
        "title": "The Balcony Scene",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/66/0f/4d/660f4dce-f9c2-9e3f-d55b-60da80644724/mzaf_4186211604821316739.plus.aac.p.m4a"
    },
    {
        "id": 56,
        "movie_id": {
            "id": 7,
            "title": "Breakfast at Tiffany's",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4ZK7jjKjxUPniYtX8kyuOjVFQaS.jpg"
        },
        "title": "Something For The Cat",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5d/b7/26/5db72652-9a93-e306-0b90-8d81e6e60b3f/mzaf_17880767470389576611.plus.aac.p.m4a"
    },
    {
        "id": 58,
        "movie_id": {
            "id": 10,
            "title": "Gone with the Wind",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2ZvoAuwKDckMdx4pTmD68QfhcOM.jpg"
        },
        "title": "The New Store",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cd/7e/a8/cd7ea897-dda7-e3ca-95fc-3f9d5d57b17a/mzaf_17117544956158874485.plus.aac.p.m4a"
    },
    {
        "id": 59,
        "movie_id": {
            "id": 12,
            "title": "My Fair Lady",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yzcoWv7NVsBc5Eh4gkmIqJTCM7J.jpg"
        },
        "title": "The Rain In Spain",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c3/80/64/c38064c4-9d14-aca2-726c-3f7167c0b98e/mzaf_3268202775534582566.plus.aac.p.m4a"
    },
    {
        "id": 62,
        "movie_id": {
            "id": 16,
            "title": "Pride & Prejudice",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sGjIvtVvTlWnia2zfJfHz81pZ9Q.jpg"
        },
        "title": "Meryton Townhall",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/78/ad/bb/78adbb73-6d8a-143a-43e6-e15985a14883/mzaf_13028285750270547026.plus.aac.p.m4a"
    },
    {
        "id": 86,
        "movie_id": {
            "id": 9,
            "title": "Chung King Express",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mOP0XWkChKhxuCmjD7CNXpa8M1p.jpg"
        },
        "title": "California Dreamin",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c1/6a/66/c16a665d-b4bb-48a4-bfe9-0f655acd5a22/mzaf_12737105138101178945.plus.aac.p.m4a"
    },
    {
        "id": 89,
        "movie_id": {
            "id": 14,
            "title": " River Runs Through It",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hDtprZU1yQsLxF0fWXD3sA8iroC.jpg"
        },
        "title": "Down the Alley",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/37/88/2e/37882e2e-1922-8f40-61a2-1894b3b251da/mzaf_14904273280368239805.plus.aac.p.m4a"
    },
    {
        "id": 97,
        "movie_id": {
            "id": 23,
            "title": "Autumn In New York",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vmHvrhfYfUZ58RtLaq4LOHp9q5m.jpg"
        },
        "title": "(Getting Some) Fun Out of Life",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7e/99/b0/7e99b076-4129-5d95-3e02-14789359f08c/mzaf_1815798152804548314.plus.aac.p.m4a"
    },
    {
        "id": 103,
        "movie_id": {
            "id": 9,
            "title": "Chung King Express",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mOP0XWkChKhxuCmjD7CNXpa8M1p.jpg"
        },
        "title": "Only You",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e3/c3/8a/e3c38a86-78f2-3821-7e33-f27af0d82dcb/mzaf_7212593886272401879.plus.aac.p.m4a"
    },
    {
        "id": 108,
        "movie_id": {
            "id": 18,
            "title": "Meet Joe Black",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fDPAjvfPMomkKF7cMRmL5Anak61.jpg"
        },
        "title": "Meet Joe Black",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/87/f9/e7/87f9e71a-1b5b-e76e-047d-6376ce75ec1d/mzaf_3881596367515615012.plus.aac.p.m4a"
    },
    {
        "id": 109,
        "movie_id": {
            "id": 19,
            "title": "Little Women",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1ZzH1XMcKAe5NdrKL5MfcqZHHsZ.jpg"
        },
        "title": "Christmas Morning",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/cf/86/7a/cf867a82-c8f3-6822-ae28-76ae4894143a/mzaf_2675814097396026633.plus.aac.p.m4a"
    },
    {
        "id": 110,
        "movie_id": {
            "id": 21,
            "title": "Once Upon a Time in America",
            "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i0enkzsL5dPeneWnjl1fCWm6L7k.jpg"
        },
        "title": "Friends",
        "track_path": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c1/8f/cf/c18fcf05-d3db-2a30-1d18-50b14d181349/mzaf_7197277790167674618.plus.aac.p.m4a"
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
