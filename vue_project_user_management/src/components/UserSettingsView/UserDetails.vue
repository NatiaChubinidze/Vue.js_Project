<template>
  <div class="wrapper">
    <h3>Details</h3>
    <div class="flex-box">
      <div class="toggleButton">
        <ToggleButton
          :toggleChecked="user.status === 'active' ? true : false" @click="changeUserState(user)"
        />
      </div>
      <p>
        The user is
        <span>{{ user.status === "active" ? "Active" : "Inactive" }}</span>
      </p>
    </div>
    <form>
      <div class="line">
        <label for="firstName">*First Name</label>
        <input
          type="text"
          class="firstName"
          id="firstName"
          v-model="firstName"
        />
      </div>
      <div class="line">
        <label for="lastName">*Last Name</label>
        <input type="text" class="lastName" id="lastname" v-model="lastName" />
      </div>
      <div class="line">
        <label for="role">*Role</label>
        <div class="dropdown" id="role">
          <button class="dropbtn">{{ role }}</button>
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
    user: Object,
  },
  components: {
    ToggleButton,
  },
  methods:{
    changeUserState(user){
      this.$emit('changeState',user);
    }
  },
  data() {
    return {
      firstName: this.user.name.split(" ")[0],
      lastName: this.user.name.split(" ")[1],
      role: this.user.role,
    };
  },
};
</script>


<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
  align-items: flex-start;
}
h3 {
  font: normal normal 600 36px/48px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 40px;
  margin-left:20px;
}
.flex-box {
  width: 210px;
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  margin-bottom: 30px;
}
.flex-box p {
  font-size: 16px;
  font-family: "Segoe UI";
  width: 220px;
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
  margin-top: 10px;
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
  margin: 74px 15px;
}
</style>
