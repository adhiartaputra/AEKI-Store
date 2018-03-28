<template>
  <div class="container">
  <p>
  <button class="btn btn-primary" data-toggle="collapse" href="#createItem" role="button" aria-expanded="false" aria-controls="createItem">Create Item</button>
  <button class="btn btn-info" type="button" data-toggle="collapse" data-target="#showItem" aria-expanded="false" aria-controls="showItem">Read Item</button>
  <button class="btn btn-warning" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Update Item</button>
  <button class="btn btn-danger" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Delete Item</button>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
  </p>
  <div class="row">
    <div class="col">
      <div class="collapse multi-collapse" id="createItem">
        <div class="card card-body">
          <label for="name">Item Name</label>
          <input type="text" placeholder="item name">
          <label for="name">Item Name</label>
          <input type="text" placeholder="item name">
          <label for="name">Item Name</label>
          <input type="text" placeholder="item name">
          <label for="name">Item Name</label>
          <input type="text" placeholder="item name">
        </div>
      </div>
    </div>
    <div class="col">
      <div class="collapse multi-collapse" id="showItem">
        <div class="card card-body">
          item on the list
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {

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
