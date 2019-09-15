<template>
  <div>
      <home-header></home-header>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {HomeHeader},
  comments: {
    // 全写 HomeHeader: HomeHeader
    HomeHeader
  }
}
</script>
<style>

</style>
