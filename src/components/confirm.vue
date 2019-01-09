<template>
  <div class="confirm-box" @touchmove.prevent="() => {}">
    <div class="box">
      <div class="top">
        <div class="title">{{title}}</div>
        <div class="cont-info">{{info}}</div>
      </div>
      <div class="btn-box">
        <div class="query" @click.prevent="$emit('query')">好</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'confirm',
  props:{
    title:String,
    info:String,
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {

  },
}
</script>

<style lang="stylus" scoped>
.confirm-box
  width 100%
  height 100%
  position fixed
  left 0
  top 0
  background rgba(10, 10, 10, 0.6)
  display flex
  justify-content center
  align-items center
  text-align center
  color #000
.box
  width 2.7rem
  background #fff
  border-radius 15px
.top
  width 100%
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding 12px 0
.title
  width 100%
  margin-top 0.1rem
  padding 0px 15px
  font-size 0.16rem
  line-height 0.3rem
  font-weight 700
.cont-info
  font-size 0.14rem
  line-height 0.25rem
.btn-box
  width 100%
  height 0.45rem
  border-top 1px solid #e9e9e9
  font-size 0.14rem
  line-height 0.45rem
.query
  width 100%
  height 100%
  color #1994F9
</style>