<template>
  <div class="wrapper">
    <h3>Details</h3>
    <div class="flex-box">
      <div class="toggleButton">
        <ToggleButton />
      </div>
      <p>The user is <span>Active</span></p>
    </div>
    <form>
      <div class="line">
        <label for="firstName">*First Name</label>
        <input type="text" class="firstName" id="firstName" />
      </div>
      <div class="line">
        <label for="lastName">*Last Name</label>
        <input type="text" class="lastName" id="lastname" />
      </div>
      <div class="line">
        <label for="role">*Role</label>
        <div class="dropdown" id="role">
          <button class="dropbtn"></button>
          <img src="../../assets/icons/down-arrow.png" class="arrow" />
          <div class="dropdown-content">
            <a href="#">Admin</a>
            <a href="#">User</a>
          </div>
        </div>
      </div>
    </form>
    <button class="save">Save Changes</button>
  </div>
</template>

<script>
import ToggleButton from "@/components/ToggleButton.vue";

export default {
  name: "UserDetails",
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
  padding: 40px 50px;
  border: 1px solid rgb(228, 23, 23);
  justify-content: space-between;
  align-items: center;
}
h3 {
  font: normal normal 600 36px/48px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
}
.flex-box {
  width: 210px;
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
}
.flex-box p {
  font-size: 16px;
  font-family: "Segoe UI";
  width: fit-content;
  margin: 0px;
}
.flex-box p span {
  font-weight: bold;
}
.toggleButton {
  width: 80px;
  height: 30px;
}
form {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-end;
}
.line {
  width: 100%;
  height: fit-content;

  margin-bottom: 20px;
}
.dropbtn {
  background-color: white;
  color: #707070;
  padding: 0px 30px 0px 2px;
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
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 100%;
  top: 35px;
}

.dropdown-content a {
  padding: 8px 18px;
  text-decoration: none;
  display: block;
  text-align: left;
  color: #707070;
  font-family: "Segoe UI";
  font-weight: 300;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.firstName,
.lastName {
  width: 100%;
  height: 35px;
  background-color: #f3f3f3;
}

input:focus {
  outline: none;
}
input,
.dropbtn {
  border: 0px;
  border-bottom: 2px solid #ccc9c9;
  width: 100%;
  font-family: "Segoe UI";
  background-color: #f3f3f3;

  font: normal normal 300 16px/21px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
}
input::placeholder {
  color: #707070;
  font-family: "Segoe UI";
  font-weight: 300;
}
.invisible {
  width: 45%;
}
.arrow {
  width: 12px;
  position: absolute;
  top: 10px;
  right: 5px;
}
.line label {
  display: flex;
  justify-self: flex-start;
  size: 12px;
  font: normal normal 600 12px/16px Segoe UI;
  letter-spacing: 0px;
  color: #33a3dc;
  margin-bottom: 10px;
}
.save {
  height: 59px;
  padding: 5px;
  background: #44a0d3 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 100px;

  font: normal normal 600 16px/21px Segoe UI;
  letter-spacing: 0px;
  color: #ffffff;
  width: 209px;
  border: 0px;
  margin: 0 auto;
}
</style>
