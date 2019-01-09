<template>
  <div class="timer-box">
    <span class="icon"></span>
    <span class="timer">{{ sec | formatToTime }}</span>
  </div>
</template>

<script>
export default {
  name: 'countdownm',
  props:['time'],
 filters: {
    formatToTime(v) {
      let min, sec
      min = String(Math.floor(v / 60)).replace(/^(\d)$/, '0$1')
      sec = String(Math.floor(v % 60)).replace(/^(\d)$/, '0$1')
      return `${min} : ${sec}`
    }
  },
  data() {
    return {
      sec: 0
    }
  },
  computed: {
  },
  watch:{
    time:function(v,o){
      this.time = v
    }
  },
  methods: {
    go() {
      this.sec = this.time;
      let self = this;
      this.timer = setInterval( () => {
        self.sec--;
        if(self.sec === 0) {
          clearInterval(timer);
          self.$emit('over');
        }
      }, 1000)
    },
  },
  mounted() {
    this.go.call(this);
  },
 beforeDestroy(){

  }
}
</script>
<style lang="stylus" scoped>
.timer-box
  color #FF5555
</style>
