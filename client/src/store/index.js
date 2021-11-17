import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 사운드트랙
    // 오디오 플레이어
    soundtrack: null,
    isPlaying: false,
    onToneArm: false,
    onSpinning: false,

    // API 요청 리스트
    playList: Array,


    // 랜딩페이지
    onHover: [false, false, false, false, false],


  },
  mutations: {
    // 사운드트랙
    SET_NOW_PLAY: function (state, soundTrack) {
      return state.soundtrack = soundTrack
    },

    // 랜딩페이지
    SET_ON_HOVER: function (state, selected_id) {
      return state.onHover.splice(selected_id, 1, !state.onHover[selected_id]);
    },


    // 메인 페이지
    SET_MOVIE_DATA: function (state, data) {
      return state.playList = data
    } 
  },
  actions: {
    // 사운드트랙
    
    PlayMusic: function ({commit}, soundTrack) {
      console.log(soundTrack)
      commit("SET_NOW_PLAY", soundTrack)
      let audio = new Audio(soundTrack);
      audio.play();
    },


    // 랜딩페이지
    // 선택된 이미지 마우스 호버 감지
    HoverSection: function ({commit},selected_id) {
      commit("SET_ON_HOVER", selected_id)
    },

    GetMovieData: function ({commit}, genre_id) {
      commit("SET_MOVIE_DATA", genre_id)

    },

  },
  modules: {
  }
})
