<template>
  <div
    :style="{
      opacity: active ? '1' : '0.7',
    }"
    @mouseover="active = !active"
    @mouseout="active = !active"
  >
    <div v-if="type === 'up'" class="button" @click="moveSectionUp">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.5025 21.8308L17 15.3425L10.4975 21.8308L8.5 19.8333L17 11.3333L25.5 19.8333L23.5025 21.8308Z"
          :fill="fill"
        />
      </svg>

      <div class="text">
        <p class="title up">{{ title }}</p>
      </div>
    </div>
    <div v-else class="button" @click="moveSectionDown">
      <svg
        width="40"
        height="34"
        viewBox="0 0 40 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.2802 12.1692L19.887 18.6575L27.4938 12.1692L29.8305 14.1667L19.887 22.6667L9.94348 14.1667L12.2802 12.1692Z"
          :fill="fill"
        />
      </svg>
      <div class="text" :style="{ color: fill }">
        <p class="title">{{ title }}</p>
        <p class="sub-title">{{ subTitle }}</p>
      </div>
    </div>
  </div>
</template>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script>
export default {
  name: "ButtonScroll",
  props: {
    title: { type: String, default: "" },
    subTitle: { type: String, default: "" },
    fill: { type: String, default: "#F3ECEA" },
    type: { type: String, default: "up" },
  },
  data: function () {
    return {
      active: false,
    };
  },
  methods: {
    // 마우스 클릭: 섹션 이동
    moveSectionUp: function () {
      fullpage_api.moveSectionUp();
    },
    moveSectionDown: function () {
      fullpage_api.moveSectionDown();
    },
  },
};
</script>

<style scoped>
.button {
  animation: motion 0.5s linear 0s infinite alternate;
  cursor: pointer;
  display: flex;
  height: 40px;
  width: 200px;
  align-items: center;
}

@keyframes motion {
  0% {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  100% {
    margin-top: 5px;
    margin-bottom: 5px;
  }
}

.text {
  width: 150px;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.up {
  line-height: 15px;
  color: #a5a4a4;
}

.title {
  font-size: 15px;
  line-height: 15px;
  margin: 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sub-title {
  font-size: 11px;
  line-height: 11px;
  margin: 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>