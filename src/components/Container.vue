<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <div class="text-h3 my-10 mashanzheng">距离2023年高考还有</div>
      <v-scale-transition>
        <div v-show="countdownInfo">
          <div
            class="text-h3 mashanzheng my-10 font-weight-light d-md-block d-none"
          >
            {{ countdownInfo }}
          </div>
          <div class="text-h5 mashanzheng my-5 d-md-none">
            {{ countdownInfo }}
          </div>
        </div>
      </v-scale-transition>
    </v-responsive>
  </v-container>
</template>

<script setup>
// import moment from "moment";
import { ref } from "vue";
let countdownInfo = ref(null);
const ceeTime = "2023-06-07 09:00:00";
// 倒计时
function getDistanceSpecifiedTime(dateTime) {
  // 指定日期和时间
  let EndTime = new Date(dateTime);
  // 当前系统时间
  let NowTime = new Date();
  let t = EndTime.getTime() - NowTime.getTime();
  let d = Math.floor(t / 1000 / 60 / 60 / 24);
  let h = Math.floor((t / 1000 / 60 / 60) % 24);
  let m = Math.floor((t / 1000 / 60) % 60);
  let s = Math.floor((t / 1000) % 60);
  return d + " 天" + h + " 时" + m + " 分" + s + " 秒";
}

setInterval(() => {
  countdownInfo.value = getDistanceSpecifiedTime(ceeTime);
  // console.log(countdownInfo);
}, 1000);
</script>
