<template>
<div class="container py-4">
  <h1>
    HOT ITEMS AVAILABLE
  </h1>
  <div class="card-deck">
    <div class="card" v-for='(item, index) in items' :key=index>
      <img class="card-img-top" :src="item.image" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text description">{{item.description}}</p>
        <p class="card-text price">$ {{item.price}}</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-custom" @click='addToCart(item)'>
          <i class="fas fa-shopping-basket fa-2x"></i>
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['items', 'cart', 'total'],
  name: 'Items',
  data () {
    return {
      msg: 'Here\'s your Items',
      recent_cart: [],
      recent_total: null
    }
  },
  methods: {
    addToCart (item) {
      alert(`Added ${item.name} into basket`)
      for (let i = 0; i < this.recent_cart.length; i++) {
        if (this.recent_cart[i].id === item.id) {
          this.recent_cart[i].qty += item.qty
          this.recent_cart[i].price += item.price
          return ''
        }
      }
      this.recent_cart.push(item)
      this.recent_total += item.price
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1
{
  padding: 3rem 3rem;
  text-align: center;
}
.card
{
  background-color: #ffcc00;
}
p.description
{
  text-align: justify;
}
p.price
{
  text-align: left;
}
.btn-custom {
    color: #ffcc00!important;
    background-color: transparent;
    border-color: #ffcc00!important; /*set the color you want here*/
}
.btn-custom:hover, .btn-custom:focus, .btn-custom:active, .btn-custom.active, .open>.dropdown-toggle.btn-custom {
    color: #003399!important;
    background-color: #ffcc00!important;
    border-color: #ffcc00!important; /*set the color you want here*/
}
.card-footer
{
  background-color: #003399!important;
}
/* .card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
} */
</style>
