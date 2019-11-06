export default {
  changeCity (state, city) {
    state.city = city // 将数据放入公共区
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
