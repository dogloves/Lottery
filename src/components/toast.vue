<template>
  <div class="toast-box" v-if="showToast">
    <div class="cont">{{contText}}</div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'toast',
  props:{
    contText:String
  },
  data() {
    return {
      showToast:false
    }
  },
  computed: {},
  watch: {},
  methods: {
     showToast () {
      this.showToast = true;
      setTimeout(()=>{this.showToast = false},1500)
    },
  },
  mounted() {
    console.log('我是toast')
    Vue.prototype.$Message = this.showToast;
  },
}
</script>

<style lang="stylus" scoped>
.toast-box
  width 100%
  height 100%
  position fixed
  display flex
  justify-content center
  align-items center
  background rgba(0, 0, 0, 0)
.cont
  min-width 1rem
  max-width 2.7rem
  background raba(100, 100, 100, 0.6)
  padding 10px 20px
  border-radius 8px
  font-size 0.13rem
  color #fff
  text-align center
</style>