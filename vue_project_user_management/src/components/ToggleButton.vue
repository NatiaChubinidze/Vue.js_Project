<template>
<div class="cont">
    <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
    </label>
</div>
</template>

<script>
export default {
  name: 'ToggleButton',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cont{
    width:100%;
    height:100%;
}
.switch{
    position:relative;
    display:inline-block;
    width:40px;
    height:15px;
    
}
.slider{
    position:absolute;
    cursor:pointer;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: #b1d4e7;
    transition:.4s;
    border-radius:34px;
}
.switch input{display:none}
.slider:before{
    position:absolute;
    content:"";
    height:24px;
    width:24px;
    left:-5px;
    top:-4.5px;
    background-color: #44a0d3;
    transition: 0.4s;
    border-radius: 50px;
}
input:checked + .slider{
    background-color:#f89797;
}
input:checked + .slider:before{
    transform: translateX(30px);
    background-color: red;
}


</style>
