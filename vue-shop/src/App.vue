<template>
  <div id="app">
    <IndexComp/>
    <BlogComp/>
    <BlogDetailsComp/>
  </div>
</template>

<script>

import IndexComp from './components/IndexComp.vue'
import BlogComp from './components/BlogComp.vue'
import BlogDetailsComp from './components/BlogDetailsComp.vue'

export default {
  name: 'App',
  components: {
    IndexComp,
    BlogComp,
    BlogDetailsComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
