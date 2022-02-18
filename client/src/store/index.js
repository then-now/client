import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import SERVER from '@/api/drf.js'

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[
    createPersistedState()
  ],

  state: {
    isPlaying: false,

    soundtrack: null,
    ottData: [{name: "watcha", ottUrl:"" }, {name: "wavve",ottUrl:""}, {name: "netfilx",ottUrl:""}],
    playingTrack: "",
    playingGenre: "",

    selectedGenre: "",
    playList: [ ],

    onHover: new Array(6).fill(false),
  },

  getters: {
    isHover: function(state) {
      return state.onHover.some(item => item === true)
    },

    shorttenTrackTitle: function(state) {
      if(state.soundtrack.title.length > 24){
        return state.soundtrack.title.substr(0, 24) + "..."
      }else{
        return state.soundtrack.title
      }
    },
  },

  mutations: {
    SET_SOUNDTRACK: function (state, idx) {
      return state.soundtrack = state.playList[idx]
    },
    SET_ISPLAYING: function (state, bool) {
      return state.isPlaying = bool
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

    SET_ON_HOVER: function (state, selected_id) {
      return state.onHover.splice(selected_id, 1, !state.onHover[selected_id]);
    },

    SET_GENRE: function (state, data) {
      return state.selectedGenre = data
    },
    SET_MOVIE_DATA: function (state, data) {
      return state.playList = data
    },

  },

  actions: {
    PlayMusic: function ({commit, state}, idx) {
      commit("SET_SOUNDTRACK", idx)
      commit("SET_ISPLAYING", true)
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
    },

    SetPlaying: function({commit, state}) {
      commit("SET_ISPLAYING", !state.isPlaying)
    },

    HoverSection: function ({commit},selected_id) {
      commit("SET_ON_HOVER", selected_id)
    },

    GetMovieData: function ({commit}, genre_id) {
      commit("SET_GENRE", genre_id)
      axios({
        url: SERVER.URL + SERVER.ROUTES.genre + genre_id +'/',
        method: 'get',
      })
      .then((res) => {
        commit('SET_MOVIE_DATA', res.data.tracks_genre)
      })
    },

  },
  modules: {
  }
})
