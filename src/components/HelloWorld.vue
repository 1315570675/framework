<template>
  <div>
    我是首页的鸭
  </div>
</template>

<script>
import * as tools from './../config/tools.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mouted(){
    console.log(tools)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" rel="stylesheet/scss" scoped>

</style>
