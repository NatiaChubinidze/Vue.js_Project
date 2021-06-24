<template>
<div class="wrapper">
<table class="table">
  <thead>
    <tr class="table-header">
      <th scope="col" class="th-thumbnail"></th>
      <th scope="col" class="th-user">User</th>
      <th scope="col" class="th-role">Role</th>
      <th scope="col" class="th-status">Status</th>
      <th scope="col" class="th-actions">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="thumbnail">
         <img src="../../assets/icons/user.png"/>
      </td>
      <td><div class="user-info"><span>Mark</span><p>Mark@test.com</p></div></td>
      <td>
          <div class="td-role">
          <div class="admin-div">
              <img src="../../assets/icons/key.png"/>
          </div>
          <p>Admin</p>
          </div>
          </td>
      <td class="td-status">
          <div class="toggle-wrapper">
              <div class="toggle-btn">
              <ToggleButton/>
              </div>
              </div>
              </td>
      <td class="td-actions">
          <div class="cont-wrapper">
          <div class="actions">
              <img class ="settings-img" src="../../assets/icons/settings.png"/>
              <img class="recycleBin-img" src="../../assets/icons/recycle.png"/>
          </div>
          </div>
      </td>
    </tr>
    
    
  </tbody>
</table>
</div>
</template>

<script>
import ToggleButton from '../ToggleButton.vue'

export default {
  name: 'UsersTable',
  props: {
    msg: String
  },
  components:{
      ToggleButton,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
    width:100%;
    padding:50px 10% 10px 6%;
   background-color: #f3f3f3;
}

table th{
    height:60px;
    padding-bottom:30px;
    border:0px;
   
}
table th:not(:first-child){
border-bottom: 2px solid #00000029 !important;
}
table td{
    height:80px;
    padding-top:20px;
    padding-left:0px;
}
table p{
    width:fit-content;
    margin:0px;
}
.user-info p{
    font: normal normal 300 16px/21px Segoe UI;
    letter-spacing: 0px;   
}
.user-info span{
    width:fit-content;
}
.user-info{
    width:100%;
    height:100%;
    padding-top:5px;
    display:flex;
    flex-direction: column;
    align-content: flex-start;
}
/* .table-cell{
    width:100%;
    height:100%;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
} */
.thumbnail{
    border:0px;
    text-align: left;
    padding-left:13px;
    width:120px;
}
.thumbnail img{
    width:45.64px;
    height:45.64px;
}
.th-user{
    text-align:left;
}
.th-role{
    width:130px;
}
.th-actions{
    width:100px;
}

.td-role{
    width:100%;
    height:100%;
    display:flex;
    justify-content: space-between;
}

.td-role p{
margin-top:5px;
}
.admin-div{
    width:48px;
    height:32px;
    background-color: #7E7EF1;
    border-radius:30px;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
}
.admin-div img{
    width:24px;
    height:24px;
}
.td-status{
    text-align:center;
    padding-left:20px;
}
.td-actions{
    text-align:right;
}
.actions{
    width:50px;
    height:100%;
    display:flex;
    justify-content: space-between;
    margin-right:5px;
    padding-top:7px;
    justify-self: flex-end;
}
.settings-img{
    width:18px;
    height:18px;
}
.recycleBin-img{
    width:13px;
    height:18px;
}
.settings-img:hover, .recycleBin-img:hover{
    cursor:pointer;
}
.cont-wrapper{
    width:100%;
    height:100%;
    display:flex;
    justify-content: flex-end;
}
.toggle-wrapper{
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
}
.toggle-btn{
    width:100px;
    height:25px;
}
</style>
