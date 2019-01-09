<template>
  <div class="mode-box" @touchmove.prevent="() => {}">
    <div class="box">
      <div class="top">
        <div class="title">{{title}}</div>
        <div class="cont-info">{{info}}</div>
      </div>
      <div class="btn-box">
        <div class="cancel" @click.prevent="$emit('cancel')">{{cancel}}</div>
        <div class="query" @click.prevent="$emit('query')">{{query}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mode',
  props:{
    title:String,
    info:String,
    cancel:String,
    query:String
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
.mode-box
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
  border-radius 5px
.top
  width 100%
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding 12px 0
.title
  width 100%
  padding 0px 15px
  font-size 0.16rem
  line-height 0.4rem
  font-weight 700
.cont-info
  font-size 0.13rem
  line-height 0.2rem
  padding 0px 30px
.btn-box
  width 100%
  height 0.45rem
  border-top 1px solid #e9e9e9
  font-size 0.14rem
  display flex
  line-height 0.45rem
.cancel
  width 50%
  height 100%
  border-right 1px solid #e9e9e9
  // font-weight 700
.query
  width 50%
  height 100%
  color #1994F9
  font-weight 700
</style>