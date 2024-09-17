/* import {computed, onUnmounted, ref} from 'vue'
import dayjs from 'dayjs'
// 倒计时函数
export const useCountDown =() => {
  const timer = ref(null)
  const time = ref(0)
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  const start = (currentTime) => {
    formatTime.value = currentTime
    setInterval(() => {
      formatTime.value --
    },1000)
  }
  onUnmounted(() => {
    timer.value && clearInterval(timer)
  })
  return{
    formatTime,
    start
  }
} */

  import { computed, onUnmounted, ref } from 'vue'
  
  // 倒计时函数
  export const useCountDown = () => {
    const timer = ref(null) // 使用 ref 来响应式地存储定时器 ID
    const time = ref(0)
    const formatTime = computed(() => {
      const minutes = Math.floor(time.value / 60);
      const seconds = time.value % 60;
      return `${minutes}分${seconds}秒`;
    });
  
    const start = (currentTime) => {
      time.value = currentTime;
      timer.value = setInterval(() => {
        if (time.value > 0) {
          time.value--;
        } else {
          clearInterval(timer.value);
        }
      }, 1000);
    };
  
    onUnmounted(() => {
      if (timer.value) {
        clearInterval(timer.value);
      }
    });
  
    return {
      formatTime,
      start
    };
  }