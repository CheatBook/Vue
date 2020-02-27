import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber)
Vue.filter("upperCase", function (value) {
  return value.toUpperCase()
})
// Vue.directive("border", {
//   bind() {
//     // ディレクティブが初めて対象の要素に紐づいたとき
//   },
//   inserted() {
//     // 親Nodeに挿入されたとき
//   },
//   update() {
//     // コンポーネントが更新されるたび。子コンポーネントが更新される前
//   },
//   componentUpdated() {
//     // コンポーネントが更新されるたび。子コンポーネントが更新される後
//   },
//   unbind() {
//     // ディレクティブが紐づいている要素から取り除かれたとき
//   },
// })

Vue.directive("border", function (el, binding) {
  el.style.border = "solid black 2px";
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  el.style.borderStyle = binding.arg
  if (binding.modifiers.round) {
    el.style.borderRadius = "0.5rem"
  }
  if (binding.modifiers.shadow) {
    el.style.boxShadow = "0.2px 5px rgba(0, 0, 0, 0.26)"
  }
});


new Vue({
  render: h => h(App),
}).$mount('#app')