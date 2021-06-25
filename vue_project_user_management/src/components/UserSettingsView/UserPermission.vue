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
      <div class="title-line">
        <img class="img" src="../../assets/icons/permission_arrow.png" />
        <div class="permission-title">
          <button class="dropbtn" v-on:click="togglePermissionOne">
            Permission Group 1
          </button>
        </div>
        <div class="toggleBtn">
          <ToggleButton />
        </div>
      </div>
      <div class="dropdown-content" v-if="permission_1">
        <div class="flex-box">
          <div class="flex-wrapper">
            <div class="circle"></div>
            <p>Permission 1</p>
          </div>
          <div class="toggleBtn">
            <ToggleButton />
          </div>
        </div>

        <div class="flex-box">
          <div class="flex-wrapper">
            <div class="circle"></div>
            <p>Permission 2</p>
          </div>
          <div class="toggleBtn">
            <ToggleButton />
          </div>
        </div>

        <div class="flex-box">
          <div class="flex-wrapper">
            <div class="circle"></div>
            <p>Permission 3</p>
          </div>
          <div class="toggleBtn">
            <ToggleButton />
          </div>
        </div>

        <div class="flex-box">
          <div class="flex-wrapper">
            <div class="circle"></div>
            <p>Permission 4</p>
          </div>
          <div class="toggleBtn">
            <ToggleButton />
          </div>
        </div>
      </div>
    </div>

    <hr />
    <div class="permission_group">
      <div class="title-line">
        <img class="img" src="../../assets/icons/permission_arrow.png" />
        <div class="permission-title">
          <button class="dropbtn" v-on:click="togglePermissionTwo">
            Permission Group 2
          </button>
          <!-- <div class="dropdown" id="role" v-if="permissions_1"> -->
          <!-- </div> -->
        </div>
        <div class="toggleBtn">
          <ToggleButton />
        </div>
      </div>
      <div class="dropdown-content" v-if="permission_2">
        <div class="flex-box">
          <div class="flex-wrapper">
            <div class="circle"></div>
            <p>Permission 1</p>
          </div>
          <div class="toggleBtn">
            <ToggleButton />
          </div>
        </div>

        <div class="flex-box">
          <div class="flex-wrapper">
            <div class="circle"></div>
            <p>Permission 2</p>
          </div>
          <div class="toggleBtn">
            <ToggleButton />
          </div>
        </div>

        <div class="flex-box">
          <div class="flex-wrapper">
            <div class="circle"></div>
            <p>Permission 3</p>
          </div>
          <div class="toggleBtn">
            <ToggleButton />
          </div>
        </div>

        <div class="flex-box">
          <div class="flex-wrapper">
            <div class="circle"></div>
            <p>Permission 4</p>
          </div>
          <div class="toggleBtn">
            <ToggleButton />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="permission_group">
      <div class="title-line">
        <img class="img" src="../../assets/icons/permission_arrow.png" />
        <div class="permission-title">
          <button class="dropbtn" v-on:click="togglePermissionThree">
            Permission Group 3
          </button>
          <!-- <div class="dropdown" id="role" v-if="permissions_1"> -->
          <!-- </div> -->
        </div>
        <div class="toggleBtn">
          <ToggleButton />
        </div>
      </div>
      <div class="dropdown-content" v-if="permission_3">
        <div class="flex-box">
          <div class="flex-wrapper">
            <div class="circle"></div>
            <p>Permission 1</p>
          </div>
          <div class="toggleBtn">
            <ToggleButton />
          </div>
        </div>

        <div class="flex-box">
          <div class="flex-wrapper">
            <div class="circle"></div>
            <p>Permission 2</p>
          </div>
          <div class="toggleBtn">
            <ToggleButton />
          </div>
        </div>

        <div class="flex-box">
          <div class="flex-wrapper">
            <div class="circle"></div>
            <p>Permission 3</p>
          </div>
          <div class="toggleBtn">
            <ToggleButton />
          </div>
        </div>

        <div class="flex-box">
          <div class="flex-wrapper">
            <div class="circle"></div>
            <p>Permission 4</p>
          </div>
          <div class="toggleBtn">
            <ToggleButton />
          </div>
        </div>
      </div>
    </div>
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
  data() {
    return {
      permission_1: false,
      permission_2: false,
      permission_3: false,
    };
  },
  methods: {
    togglePermissionOne() {
      console.log("click", this.permission_1);
      this.permission_1 = !this.permission_1;
      console.log("after", this.permission_1);
    },
    togglePermissionTwo() {
      this.permission_2 = !this.permission_2;
    },
    togglePermissionThree() {
      this.permission_3 = !this.permission_3;
    },
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
  align-items: flex-start;
}
h3 {
  font: normal normal 600 36px/48px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 40px;
  margin-left: 20px;
}
p {
  width: fit-content;
}

.super-admin {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 15px;
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
  flex-direction: column;
  align-items: space-between;
  width: 100%;
  font: normal normal 600 16px/21px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
}
.permission-title {
  width: 80%;
  height: fit-content;
  margin-bottom: 20px;
}
.permission-disabled {
  font: normal normal 300 16px/21px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
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
  font: normal normal bold 16px/21px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
}

.dropdown-content {
  position: relative;
  background-color: #f3f3f3;
  min-width: 160px;
  z-index: 1;
  width: 100%;
  padding-right: 15px;
  padding-top: 30px;
}

.img {
  width: 24px;
  height: 24px;
}
.flex-box {
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
}
.title-line {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 15px;
}

.circle {
  width: 6px;
  height: 6px;
  background-color: #44a0d3;
  border-radius: 50%;
  margin-top: 7px;
  margin-right: 10px;
}
.flex-wrapper {
  display: flex;
  justify-content: flex-start;
}
</style>
