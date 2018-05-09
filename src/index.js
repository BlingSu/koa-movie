import './assets/common.sass'
function change() {
  window.$('#app').html('xxx')
}

setTimeout(function(){
  change()
}, 2000)
