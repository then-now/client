<template>
  <div class="button">
    <div v-if="ottUrl">
      <a href="">
        <div
          class="circle"
          :style="{
            backgroundColor: active ? '#DBDBDB' : '#a5a4a4',
          }"
          @mouseover="active = !active"
          @mouseout="active = !active"
        ></div
      ></a>
      <div class="text">{{ buttonName }}</div>
    </div>
    <div v-else>
      <div class="circle deactivate"></div>
      <div class="text no-url">{{ buttonName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonRound",
  props: {
    buttonName: { type: String, default: "hello" },
    ottUrl: { type: String, default: "" },
  },
  data: function () {
    return {
      active: false,
    };
  },
};
</script>

<style>
.circle {
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background-color: #a5a4a4;
  border: solid 4px #858585;
  margin: 5px;
  transition: all 0.5s;
}
.text {
  text-align: center;
  font-size: 12px;
  letter-spacing: 0px;
  color: #a5a4a4;
}
.deactivate {
  background-color: #959595;
}
.no-url {
  color: #d0d0d0;
}
</style>