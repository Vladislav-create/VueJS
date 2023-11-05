<template>
  <div id="app">
    <IndexComp/>
    <BlogComp/>
    <BlogDetailsComp/>
    <ProductDetails />
  </div>
</template>

<script>

import IndexComp from './components/IndexComp.vue'
import BlogComp from './components/BlogComp.vue'
import BlogDetailsComp from './components/BlogDetailsComp.vue'
import ProductDetails from './components/ProductDetails.vue'

export default {
  name: 'App',
  components: {
    IndexComp,
    BlogComp,
    BlogDetailsComp,
    ProductDetails,
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
