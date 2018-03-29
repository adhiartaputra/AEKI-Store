<template>
  <div>
    <navbar :items='items' :cart='cart' :total='total'></navbar>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../assets/banner-1.jpeg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/banner-1.jpeg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/banner-1.jpeg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    {{cart}}
    <items :items='items' :cart='cart' :total='total'></items>
  </div>
</template>

<script>
import Items from '@/components/Items'
import Navbar from '@/components/Navbar'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Items,
    Navbar
  },
  data () {
    return {
      msg: 'Welcome to AEKI',
      items: [],
      cart: [],
      total: 0
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData: function () {
      axios({
        method: 'get',
        url: 'http://localhost:3000/items'
      }).then(({data}) => {
        this.items = data.item
        // console.log(data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
