<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color:#003399!important;">
    <a class="navbar-brand" href="#" style="color:#ffcc00!important;" @click='toHome'><i class="fab fa-foursquare"></i>URNITURA</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Chair</a>
          <a class="dropdown-item" href="#">Table</a>
          <a class="dropdown-item" href="#">Couch</a>
          <!-- <div class="dropdown-divider"></div> -->
        </div>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-custom my-2 my-sm-0" type="submit">Search</button>
      </form>
      <li class="nav-item dropdown">
        <a href="" class="nav-link" id="navbarUser" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-shopping-basket fa-2x"></i><span class="badge badge-warning">{{cart.length}}</span></a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarUser">
            <div class="dropdown-item">
              <div class="row">
                <div class="col-sm-6">
                  <p v-for='(item, index) in cart' :key=index>{{item.name}}</p>
                </div>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <router-link :to="{name: 'Cart', params: { items:items, cart:cart, total:total } }">Shopping Cart</router-link>
          </div>
      </li>
      <li class="nav-item dropdown">
        <a href="" class="nav-link" id="navbarUser" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-user-circle fa-2x"></i></a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarUser">
            <a href="#" class="dropdown-item">Profile</a>
            <div class="dropdown-divider"></div>
            <div class="dropdown-item logout">Logout</div>
          </div>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['items', 'cart', 'total'],
  data () {
    return {}
  },
  created () {
  },
  methods: {
    showCart () {
      this.$router.push('/cart')
    },
    toHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.navbar-brand
{
  font-weight: 900;
}
.navbar-toggler
{
  color:#ffcc00!important;
}
.nav-link
{
  color:#ffcc00!important;
}
.img
{
  width: 10px;
  height: auto;;
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
.logout
{
  color:red
}
</style>
