<template>
  <div class="title1-box">
    <div class="back" @click="back"></div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'title1',
  props:{
    title:''
  },
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  methods: {
    back(){
      this.$router.go(-1)
    }
  },
  mounted() {

  },
}
</script>

<style lang="stylus" scoped>
.title1-box
  width 100%
  height 0.5rem
  background #fff
  padding 0 0.2rem
  display flex
  justify-content flex-start
  align-items center
.back
  width 0.21rem
  height 0.21rem
  background url("../assets/back.png") no-repeat
  background-position center
  background-size cover
.title
  width calc(100% - 0.21rem)
  height 100%
  text-align center
  font-size 0.16rem
  line-height 0.5rem
  font-weight 700
</style>