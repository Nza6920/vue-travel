<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_600x330_5aa6e477.jpg"/>
      <div class="banner-info">
        <div class="banner-title">
          青城道温泉
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>199
        </div>
      </div>
    </div>
    <common-gallery
      :imgs="imgs"
      v-show="showGallery"
      @close="handleGalleryClose"></common-gallery>
  </div>
</template>
<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_600x330_5aa6e477.jpg'],
      showGallery: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .4rem
        margin-top .14rem
        padding 0 .4rem
        line-height .4rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        .banner-icon
          font-size .24rem
</style>
