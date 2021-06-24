<template>
<div class="pagination-footer">
    <div class="wrapper">
<p class="mt-1">Records on page</p>
<div class="dropdown">
  <button class="btn light" >
    5
  </button>
  <img src="../assets/icons/down-arrow.png" class="arrow"/>
  <ul class="dropdown-menu" >
    <li><a class="dropdown-item" href="#">3</a></li>
    <li><a class="dropdown-item" href="#">5</a></li>
    <li><a class="dropdown-item" href="#">10</a></li>
  </ul>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pagination-footer{
    width:100%;
    height:160px;
    background-color: #f3f3f3;
    text-align:left;
    padding-left:6%;
    padding-right: 10%;
}
.wrapper{
    display:flex;
    width:310px;
    justify-content: space-between;
    padding-left:120px;
}
.light{
    background-color: #f3f3f3;
    width:50px;
    padding:5px;
}

.dropdown-menu {
    display:none;
    background-color: #f3f3f3 !important;
    /* border:0px; */
}
.dropdown:hover .dropdown-menu{
    display:block;
}
.dropdown{
    display:inline-block;
}
.arrow{
    width:10px;
    position:relative;
    right:10px;
}
</style>
