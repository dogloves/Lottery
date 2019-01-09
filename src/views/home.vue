<template>
  <div class="wrap">
    <div class="lottery-wrap">
      <div class="big-title">{{lotteryTitle}}</div>
      <div class="lottery">

        <div class="left">
          <div class="left-title">
            <p class="left-title-b">{{minLotteryTitle}}</p>
          </div>
          <div class="left-pic">
            <p class="pic"><img src="@/assets/default-award.png"></p>
            <p class="pic-number">数量： {{lotteryNumber}}</p>
          </div>
          <div class="left-name">{{lotteryName}}</div>
          <div class="left-set">
            <div class="all-member">
              <p class="name">抽奖参与人数</p>
              <p class="number">{{allMember}}</p>
              <p class="icon"><img src="@/assets/refresh-btn.png"></p>
            </div>
            <div class="all-member">
              <p class="name">每次抽奖人数</p>
              <p class="icon" @click="minMomber"><img src="@/assets/minus-btn.png"></p>
              <p class="number">{{everyMember}}</p>
              <p class="icon" @click="addMomber"><img src="@/assets/add-btn.png"></p>
            </div>
          </div>
        </div>

        <div class="middle">
          <div class="lotteryers-box">
            <div class="lotter-ing" :style="{width:ingWidth+'px',height:ingWidth+'px'}" v-for="(item,index) in lotteryIngList"
              :key="index">
              <div class="lotter-ing-bac lotter-ing-animation"><img src="@/assets/head-light.png"></div>
              <div class="lotter-ing-img"><img :src="item.imgpath"></div>
              <div class="lotter-ing-name">{{item.nickName}}</div>
            </div>
          </div>
          <div class="start-btn" @click="controlLottery"><img :src="startBtnImg"></div>
        </div>

        <div class="right">
          <div class="right-title">
            <div class="lottery-list-name">中奖名单</div>
            <div class="lotterys-number">{{lotteryList.length}}</div>
            <div>人</div>
          </div>
          <div class="lottery-list">
            <div class="lotterys" v-for="(item,index) in showLottteryList" :key="index">
              <div @click="deleatehe(item)" :class="item.id ? 'head-pic deleate' : 'head-pic'">
                <img :src="item.imgpath">
              </div>
              <div class="name">{{item.nickName}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { browser } from "@/tool/bowertest";
export default {
  name: "home",
  components: {

  },
  data() {
    return {
      ingWidth:150,
      lotteryTitle:'年终大抽奖啊！',
      minLotteryTitle:'MAC笔记本大家拿',
      lotteryName:'MAC笔记本',
      allMember:10,
      everyMember:1,
      lotteryListNumber:0,
      lotteryNumber:5,//奖品数量
      lotteryList:[], //实际中奖人员
      beforehandLottery:[], //预设中奖人员
      seatObg:{imgpath:require('@/assets/default.png'),nickName:'虚位以待'},
      showLottteryList:[],
      lotteryIngList:[
        {imgpath:require('@/assets/default.png'),nickName:''},
      ],
      start:false,
      startBtnImg:require('@/assets/startbtn.png'),
      // 默认的待抽奖人   奖池用户信息
      wxUserList :  [
          {
            id: 17,
            nickName: '793伟岸古树茶幽兰号',
            imgpath: 'http://bar.test.hixianchang.com/images/signthreed/1.jpg',
          },
          { id: 18, nickName: '794℡速冻矮子', imgpath: 'http://bar.test.hixianchang.com/images/signthreed/2.jpg' },
          { id: 19, nickName: '795普扎克', imgpath: 'http://bar.test.hixianchang.com/images/signthreed/3.jpg' },
          { id: 20, nickName: '796👾', imgpath: 'http://bar.test.hixianchang.com/images/signthreed/4.jpg' },
          { id: 21, nickName: '797Daisy🌊漪婷', imgpath: 'http://bar.test.hixianchang.com/images/signthreed/5.jpg' },
          {
            id: 22,
            nickName: '798莫 ☀ 欺少 年一时穷🔫',
            imgpath: 'http://bar.test.hixianchang.com/images/signthreed/6.jpg',
          },
          { id: 23, nickName: '799Juens', imgpath: 'http://bar.test.hixianchang.com/images/signthreed/7.jpg' },
          { id: 24, nickName: '801popo', imgpath: 'http://bar.test.hixianchang.com/images/signthreed/9.jpg' },
          { id: 25, nickName: '8022amor', imgpath: 'http://bar.test.hixianchang.com/images/signthreed/10.jpg' },
          { id: 34, nickName: '800来自地狱的天使', imgpath: 'http://bar.test.hixianchang.com/images/signthreed/8.jpg' },
          {
            id: 9149,
            nickName: 'й',
            imgpath: 'https://res.dev.hixianchang.com/qn/336b2f218645858e5e5be049b648748e.jpg',
          },
          {
            id: 9151,
            nickName: '栗栗🌹',
            imgpath: 'https://res.dev.hixianchang.com/qn/wx/d84231c076cb43c563caad708ac4a655.jpeg',
          },
          {
            id: 9152,
            nickName: '刘肖🔆',
            imgpath: 'https://res.dev.hixianchang.com/qn/wx/46ccdd82d26e570b8d469bdb872c6b8d.jpg',
          },
          {
            id: 9175,
            nickName: '安安🍎',
            imgpath: 'https://res.dev.hixianchang.com/qn/wx/56cb449ab4f1c4398ad48793737e2d92.jpeg',
          },
          {
            id: 9177,
            nickName: 'M',
            imgpath: 'https://res.dev.hixianchang.com/qn/e9a0adc7fc5d36cf29a341bbae64f30f.jpg',
          },
          {
            id: 9336,
            nickName: 'April-sky',
            imgpath: 'https://res3.hixianchang.com/qn/c3100f6c9c0b21ac6c9167df48aa2b60.jpg',
          },
          {
            id: 9341,
            nickName: 'junjun',
            imgpath: 'https://res3.hixianchang.com/qn/60ca9cabe97e92fcd4a721e0fda8e9b5.jpg',
          },
          {
            id: 9377,
            nickName: 'qplv🦌',
            imgpath: 'https://res.dev.hixianchang.com/qn/55cc6978b9c404389c481b3c77715078.jpg',
          },
          {
            id: 9406,
            nickName: 'Banana',
            imgpath: 'https://res.dev.hixianchang.com/qn/0268bbbe2546b391273fd10cf674df25.jpg',
          }]
    };
  },
  computed: {

  },
  watch: {
    lotteryList(New,Old){
      this.getShowLottteryList()
    },
    'lotteryIngList.length'(New,Old){
       this.ingWidth = (575)/New - 10
       if(this.ingWidth > 150){
         this.ingWidth = 150
       }
       if(this.ingWidth < 50){
         this.ingWidth = 50
       }
    }
  },
  methods: {
    //控制抽奖开始或停止
    controlLottery(){
      if(!this.start){
        if(this.lotteryList.length >= this.lotteryNumber){
          this.$Message('奖品发完啦！')
          }else if(this.lotteryList.length + this.everyMember > this.lotteryNumber){
            this.$Message('剩余奖品不够发')
          }else{
          this.start = true;
          this.startBtnImg = require('@/assets/stopbtn.png')
          this.changeLotteryShow()
        }
      }else{
        //抽取中奖人
        this.start = false;
        this.startBtnImg = require('@/assets/startbtn.png')
        clearInterval(this.LotteryTimer)
        this.saveLotters(); //保存中间人信息
      }
    },
    //把中奖人员保存
    saveLotters(){
      for(let i = 0; i < this.lotteryIngList.length;i++){
         this.lotteryList.push(this.lotteryIngList[i])
      }
    },
    //删除此人
    deleatehe(item){
      let index = this.lotteryList.indexOf(item);
      if(index > -1){
        this.lotteryList.splice(index,1);
      }
    },
    //获取右侧显示中奖人数组
    getShowLottteryList(){
       this.showLottteryList.length = 0;
      let n = this.lotteryNumber - this.lotteryList.length;
      this.showLottteryList = this.lotteryList.concat(this.getSeatList(n))
      //console.log(this.showLottteryList)
    },
    //随机变化中奖人显示
    changeLotteryShow(){
     this.LotteryTimer = setInterval(()=>{
       this.lotteryIngList = this.getRandomList(this.everyMember);

      }, 100)
    },

    //生成n个虚位以待数据
    getSeatList(n){
      let Arr = []
      for(let i = 0; i < n; i++){
        Arr.push(this.seatObg)
      }
      return Arr;
    },
    //增加单次中奖人数
    addMomber(){
      if(this.everyMember < this.allMember){
        this.everyMember = this.everyMember + 1;
        this.lotteryIngList = this.getSeatList(this.everyMember)
      }
    },
    //减少单次中奖人数
    minMomber(){
      if(this.everyMember > 0){
        this.everyMember = this.everyMember - 1;
        this.lotteryIngList = this.getSeatList(this.everyMember)
      }

    },
    //确定本轮参与人数
    getPartyArr(){
     let Arr = []
     Arr = this.wxUserList.filter((item,index)=>{
       return this.lotteryList.indexOf(item) < 0;
      })
      return Arr;
    },
    //预设中奖者
    getResultArr(){

    },
    //抽取随机中奖者
    getRandomList(n){
      let resultArr = []; //用来保存结果
      let partyArr = this.getPartyArr(); //参与本轮抽奖人的数组
      let RadomArrList = this.getRandomNumber(0,partyArr.length-1,n); //随机数组
      this.lotteryIngList.length = 0;
      for(let i = 0;i < RadomArrList.length; i++){
        console.log(RadomArrList[i])
        resultArr.push(this.wxUserList[RadomArrList[i]]);
      }
      return resultArr;
    },
    //产生随机数数组
    getRandomNumber(start,end,n){
      let arr = [];
      for(var i = 0;i < n; i++){
          var number = Math.floor(Math.random()*(end-start+1)+start);
          if(arr.indexOf(number) < 0){
              arr.push(number);
          }else{
              i--;
          }
      }
      return arr;
    }
  },
 mounted() {
    this.allMember = this.wxUserList.length;
    this.getShowLottteryList();
  },
  beforeDestroy() {

  }
};
</script>

<style lang="stylus" scoped>
img
  width 100%
  height 100%
  object-fit contain
  object-position center
.wrap
  height 100%
  width 100%
  display flex
  justify-content center
  align-items center
  background #484891
  color #fff
.lottery-wrap
  //width 860px
.big-title
  height 50px
  font-size 28px
  font-weight 700
  color #fff
  text-align center
  line-height 50px
.lottery
  width 100%
  display flex
  justify-content space-between
  align-items center
.left
  width 224px
  height 464px
  background url('../assets/leftbg.png') no-repeat
  background-position center
  background-size contain
  overflow hidden
  padding-right 25px
  padding-left 3px
.middle
  width 624px
  height 464px
  background url('../assets/centerbg.png') no-repeat
  background-position center
  background-size contain
  overflow hidden
  padding-right 25px
.right
  width 160px
  height 464px
  padding-right 45px
  padding-top 20px
  padding-left 10px
  background url('../assets/rightbg.png') no-repeat
  background-position center
  background-size contain
  overflow hidden
.left .left-title
  width 100%
  height 90px
  padding-top 55px
  font-size 14px
  color #eee
.left .icon
  width 18px
  height 18px
  cursor pointer
.left .left-pic
  width 100%
  height 180px
  display flex
  justify-content center
  align-items center
  flex-direction column
.left .pic
  width 120px
  height 120px
.left .pic-number
  font-size 14px
.left .left-name
  height 73px
  width 100%
  display flex
  justify-content center
  align-items center
.left .left-set
  width 100%
  height 100px
  padding 5px 0
.left .all-member
  width 170px
  height 30px
  font-size 12px
  padding 0 10px
  border-top-right-radius:2em;
  border-bottom-right-radius:2em;
  display flex
  justify-content space-between
  align-items center
  background rgba(100,100,100,0.5)
  margin 10px 0
.left .number
  color gold
.middle .lotteryers-box
  width 100%
  padding 10px
  padding-top 20px
  height calc(100% - 120px)
  display flex
  justify-content center
  align-items center
  flex-wrap wrap
.middle .start-btn
  width 150px
  height 55px
  margin auto
  margin-top 20px
  cursor pointer
.right .right-title
  width 100%
  display flex
  justify-content space-between
  align-items center
.right .lottery-list-name
  width 48px
  cursor pointer
  border-bottom 1px solid #fff
  font-size 12px
.right .lotterys-number
  width 20px
  color gold
.lottery-list
  width 100%
  height 384px
  overflow-y auto
  padding-top 20px
  color #ddd
.lottery-list::-webkit-scrollbar
  display:none
.right .lotterys
  width 100%
  height 52px
  display flex
  justify-content flex-start
  align-items center
.right .lotterys .head-pic
  width 35px
  height 35px
  overflow hidden
  border 1px solid gold
  border-radius 50%
  position relative
.right .lotterys .name
  width calc(100% - 45px);
  margin-left 10px
.deleate:hover
  background url(../assets/clear.png) no-repeat
  background-size contain
  background-position center
  cursor pointer
.middle .lotter-ing
  width 150px
  height 150px
  position relative
  overflow hidden
  border-radius 50%
  margin 10px
.middle .lotter-ing-bac
  width 100%
  height 100%
  overflow hidden
.middle .lotter-ing-img
  width 100%
  height 100%
  border-radius 50%
  position absolute
  left 0
  top 0
  z-index 98
  overflow hidden
.middle .lotter-ing-name
  width 100%
  height 100%
  position absolute
  z-index 99
  left 0
  top 0
  font-size 14px
  display flex
  justify-content center
  align-items center
.middle .lotter-ing-animation
  animation: gostart 2s linear infinite;
@keyframes gostart
  0% {transform:rotate(360deg);}
  25% {transform:rotate(270deg);}
  50% {transform:rotate(180deg);}
  75% {transform:rotate(90deg);}
  100%{transform:rotate(0deg);}
</style>