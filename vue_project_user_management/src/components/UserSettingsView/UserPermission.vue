<template>
  <div class="wrapper">
    <h3>Permissions</h3>
    <div class="super-admin">
      <p>Super Admin</p>
      <div class="toggleBtn">
        <ToggleButton />
      </div>
    </div>
    <hr />
    <div class="permission_group">
      <img class="img" src="../../assets/icons/permission_arrow.png" />
      <div class="line">
        <div class="dropdown" id="role">
          <button class="dropbtn">Permission Group 1</button>

          <div class="dropdown-content">
            <div class="flex-box">
              <div class="circle"></div>
              <p>Permission 1</p>
              <div class="toggleBtn">
                <ToggleButton />
              </div>
            </div>
            <div class="flex-box"><p>Permission 2</p></div>
            <div class="flex-box"><p>Permission 3</p></div>
            <div class="flex-box"><p>Permission 4</p></div>
          </div>
        </div>
      </div>
      <div class="toggleBtn">
        <ToggleButton />
      </div>
    </div>
    <hr />
    <div class="permission_group"></div>
    <hr />
    <div class="permission_group"></div>
    <hr />
  </div>
</template>

<script>
import ToggleButton from "@/components/ToggleButton.vue";

export default {
  name: "UserPermission",
  props: {
    msg: String,
  },
  components: {
    ToggleButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 40px 10px;
  border: 1px solid rgb(23, 228, 132);
  align-items: center;
}
h3 {
  font: normal normal 600 36px/48px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 40px;
}
p {
  width: fit-content;
}

.super-admin {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.toggleBtn {
  width: 80px;
  height: 25px;
}
.super-admin p {
  font: normal normal bold 16px/21px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
}
hr {
  width: 100%;
}
.permission_group {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.line {
  width: 80%;
  height: fit-content;
  margin-bottom: 20px;
}
.dropbtn {
  background-color: #f3f3f3;
  padding: 0px 17px 0px 2px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 100% !important;
  height: 100%;
  text-align: left;
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 35px;
  background-color: #f3f3f3;
}
.dropdown-content {
  display: none;
  position: relative;
  background-color: #f3f3f3;
  min-width: 160px;
  z-index: 1;
  width: 100%;
  top: 35px;
  padding-right: 15px;
  padding-top: 30px;
  background-color: darkorchid;
}
.dropdown-content li {
  padding: 8px 18px;
  text-decoration: none;
  display: block;
  text-align: left;
  color: #707070;
  font-family: "Segoe UI";
  font-weight: 300;
  /* background-color: #f3f3f3; */
}

.dropdown-content li:hover {
  background-color: #d36e6e;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.img {
  width: 24px;
  height: 24px;
}
.flex-box{
  display:flex;
  justify-content: space-between;
}
</style>
