<template>
  <div id="app">
    <navbar :items='items' :cart='cart' :total='total'></navbar>
    <!-- <router-view :items="items" :cart="cart" :total='total'/> -->
    <home :items='items' :cart='cart' :total='total'></home>
  </div>
</template>

<script>
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Home,
    Navbar
  },
  data () {
    return {
      items: [{
        id: 1,
        name: 'Classic Chair Simple',
        brand: 'AEKI',
        price: 150,
        description: 'Come with excellent-crafted wooden frame',
        image: 'http://www.tidesinstitute.org/place/images/art/2203/3501_400px.jpg',
        category: 'chair',
        qty: 1
      }, {
        id: 2,
        name: 'Classic Chair Wood Only',
        brand: 'AEKI',
        price: 100,
        description: 'Come with excellent-crafted wooden frame',
        image: 'http://www.tidesinstitute.org/place/images/art/2202/3495_400px.jpg',
        category: 'chair',
        qty: 1
      }, {
        id: 3,
        name: 'Classic Chair With Kindgdom Motif',
        brand: 'AEKI',
        price: 200,
        description: 'Come with excellent-crafted wooden frame',
        image: 'http://www.tidesinstitute.org/place/images/art/2136/3453_400px.jpg',
        category: 'chair',
        qty: 1
      }],
      cart: [],
      total: null
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 0px;
}
</style>
