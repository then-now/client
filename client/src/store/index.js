import Vue from 'vue'
import Vuex from 'vuex'

// Axios 요청
import axios from 'axios'
import SERVER from '@/api/drf.js'

// PersistedState
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[
    createPersistedState()
  ],

  state: {
    // 사운드트랙
    // 오디오 플레이어
    soundtrack: null,
    isPlaying: false,
    ottData: [{name: "watcha", ottUrl:"" }, {name: "wavve",ottUrl:""}, {name: "netfilx",ottUrl:""}],
    playingTrack: "",
    playingGenre: "",

    // API 요청 리스트
    selectedGenre: "",
    playList: [    ],


    // Home 페이지
    onHover: [false,false, false, false, false, false],
  },

  getters: {
    isHover: function(state) {
      return state.onHover.some(item => item === true)
    },
  },

  mutations: {
    // 사운드트랙
    SET_SOUNDTRACK: function (state, idx) {
      return state.soundtrack = state.playList[idx]
    },
    SET_PLAYINGTRACK: function (state, idx) {
      return state.playingTrack = idx
    },
    SET_PLAYINGGENRE: function (state) {
      return state.playingGenre = state.selectedGenre
    },
    SET_MOVIE_OTT: function (state, data) {
      return state.ottData = data
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
    // 사운드트랙 클릭시 영화정보 
    PlayMusic: function ({commit, state}, idx) {
      commit("SET_SOUNDTRACK", idx)
      commit("SET_PLAYINGTRACK", idx)
      commit("SET_PLAYINGGENRE")
      const movie_id = state.soundtrack.movie_id.id
      axios({
        url: SERVER.URL + SERVER.ROUTES.movie + movie_id +'/',
        method: 'get',
      })
      .then((res) => {
        const otts = [{name: "watcha", ottUrl:"" }, {name: "wavve",ottUrl:""}, {name: "netfilx",ottUrl:""}]
        res.data.movie_movies.map(item => otts[item.ott_id-1]["ottUrl"] = item.ott_url)
        commit('SET_MOVIE_OTT', otts)
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
