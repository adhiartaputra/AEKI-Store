<template>
  <div class="container">
    <form class="form-horizontal" role="form" method="POST" action="/login">
      <div class="row">
        <div class="col-md-3"></div>
          <div class="col-md-6">
            <h2>WELCOME TO AEKI INDONESIA</h2>
            <hr>
          </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="form-group has-danger">
              <label class="sr-only" for="email">E-Mail Address</label>
              <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
                <input type="text" name="email" class="form-control" id="email" placeholder="you@example.com" required autofocus>
              </div>
          </div>
        </div>
        <div class="col-md-3">
            <div class="form-control-feedback">
              <span class="text-danger align-middle">
                  <i class="fa fa-close"></i>
              </span>
            </div>
        </div>
      </div>
      <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="sr-only" for="password">Password</label>
              <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                <input type="password" name="password" class="form-control" id="password" placeholder="Password" required>
              </div>
            </div>
          </div>
          <div class="col-md-3">
              <div class="form-control-feedback">
                  <span class="text-danger align-middle">
                  </span>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="fb-login-button" data-scope="public_profile, email" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true">
            </div>
            <div id="fb-root"></div>
          </div>
      </div>
      <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6" style="padding-top: .35rem">
              <div class="form-check mb-2 mr-sm-2 mb-sm-0">
                  <label class="form-check-label">
                      <input class="form-check-input" name="remember"
                              type="checkbox" >
                      <span style="padding-bottom: .15rem">Remember me</span>
                  </label>
              </div>
          </div>
      </div>
      <div class="row" style="padding-top: 1rem">
          <div class="col-md-3"></div>
          <div class="col-md-6">
              <button type="submit" class="btn btn-success"><i class="fa fa-sign-in"></i> Login</button>
              <a class="btn btn-link" href="/password/reset">Forgot Your Password?</a>
          </div>
      </div>
    </form>
  </div>
</template>

<script>
// import FBLogin from '../FBLogin'
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    verifyUser: function () {
      axios({
        method: 'post',
        url: 'http://aeki-store.server.adhiarta.com/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(data => {})
    }
  }
}
</script>

<style>
.container
{
  margin-top: 5rem;
}
.row
{
  margin-bottom: 10px;
}
.password,.email
{
  text-align: right!important;
}
.input-email,.input-password
{
  text-align: left;
}
</style>
