<template>
  <div class="container py-4">
    <navbar></navbar>
    <h2>
      Shopping Basket
    </h2>
    <div class="row">
      <div class="col-sm-6 no-item" v-if='cart.length==0'>
        <div class="media no-item">
          <div class="media-body no-item">
            <h5 class="mt-0">No item in directory</h5>
            <p>please have what you need here!</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6" v-if='cart.length!=0'>
        <div class="media item" v-for='(item, index) in cart' :key=index>
          <img class="mr-3 item_image" :src="item.image" alt="item_image">
          <div class="media-body">
            <h5 class="mt-0">{{item.name}}</h5>
            <p>{{item.description}}</p>
            <div class="row">
              <div class="col-sm-6 qty">
              <p class="item-qty"><button @click='decreaseQty(item)'>-</button> {{item.qty}}  <button @click='addQty(item)'>+</button></p>
              </div>
              <div class="col-sm-6 price">
                $ {{item.price * item.qty}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6" v-if='cart.length != 0'>
        <div class="media checkout">
          <div class="media-body">
            <h5 class="mt-0">Total Item</h5>
            <div class="row checkout-header">
              <div class="col-sm-6">
                Name
              </div>
              <div class="col-sm-3">
                Qty
              </div>
              <div class="col-sm-3">
                Price
              </div>
            </div><br>
            <div class="row" v-for='(item, index) in cart' :key=index>
              <div class="col-sm-6">
                {{item.name}}
              </div>
              <div class="col-sm-3">
                {{item.qty}}
              </div>
              <div class="col-sm-3">
                {{item.price * item.qty}}
              </div>
            </div><br>
            <div class="row checkout-header">
              <div class="col-sm-6">
              </div>
              <div class="col-sm-3 col-sm-offset-6">
                Total
              </div>
              <div class="col-sm-3">
                $ {{total}}
              </div>
            </div><br>
            <div class="row checkout-payment">
              <div class="col-sm-6">
              </div>
              <div class="col-sm-3 col-sm-offset-6">
                <button class="btn btn-outline-danger" @click='clearCart'>
                  Clear Cart
                </button>
              </div>
              <div class="col-sm-3">
                <button class="btn btn-pay" @click='payAndCheckout'>
                  Pay Now
                </button>
              </div>
            </div><br>
          </div>
        </div>
      </div>
    </div>
    <P>HAHAHHAHAHA</P>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  props: ['items', 'cart'],
  components: {
    Navbar
  },
  data () {
    return {
      total: 0
    }
  },
  methods: {
    addQty (item) {
      item.qty++
      this.total += item.price * item.qty
    },
    decreaseQty (item) {
      if (item.qty === 0) {
        return 0
      } else {
        item.qty--
        this.total -= item.price * item.qty
      }
    },
    clearCart () {
      this.cart = []
    },
    payAndCheckout () {
      let alert = confirm(`Are you sure with your items?`)
      if (alert) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
h2
{
  text-align: left!important;
  margin: auto auto;
}
.item
{
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 8px 3px;
  background-color: #ffcc00;
}
.no-item
{
  padding: auto auto;
  margin-top: 1rem;
}
.price
{
  text-align: right;
  padding-right: 30px;
}
.checkout
{
  margin-top: 1rem;
  /* border: 1px solid grey; */
  padding: 10px 10px;
}
.checkout-header
{
  font-weight: bolder;
}
.btn-pay {
  color: green!important;
  background-color: transparent;
  border-color: green!important; /*set the color you want here*/
}
.btn-pay:hover, .btn-pay:focus, .btn-pay:active, .btn-pay.active, .open>.dropdown-toggle.btn-pay {
  color: whitesmoke!important;
  background-color: green!important;
  border-color: white!important; /*set the color you want here*/
}
.media-body
{
  text-align: left!important;
  margin: auto auto;
}
.item_image
{
  width: 20%!important;
  height: auto;
  margin: auto 8px;
}
</style>
