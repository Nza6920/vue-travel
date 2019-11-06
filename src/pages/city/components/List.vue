<template>
  <div class="list" ref="wrapper">
    <div>
      <!-- 当前城市 -->
      <div class="area">
        <div class="title border-topbottom">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              {{ this.currentCity }}
            </div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hot"
               :key="item.id"
               @click="handleCityClick(item.name)">
            <div class="button">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <!-- 城市列表 -->
      <div class="area"
           v-for="(item, key) of cities"
           :key="key"
           :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleCityClick(innerItem.name)">
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  name: 'CityList',
  methods: {
    handleCityClick (city) {
      // 派发一个 changeCity 的 action
      // this.$store.dispatch('changeCity', city)
      // 也可以直接调用 mutation
      // this.$store.commit('changeCity', city)
      this.changeCity(city) // 简便写法
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        // 获取到对应字母的区域
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus">
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .list
    position: absolute;
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .border-bottom
      &:before
        border-color #ccc
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        width 33.33%
        float left
        .button
          text-align center
          padding .1rem 0
          margin .1rem
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        padding-left: .2rem
</style>
