<template>
  <div class="wrapper">
    <h3>Permissions</h3>
    <span class="role-title">{{ user.role }}</span>
    <div class="super-admin">
      <p>Super Admin</p>
      <div class="toggleBtn">
        <ToggleButton :toggleChecked="superAdmin == true ? true : false" @click.prevent="toggleSuperAdmin" />
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
          <ToggleButton :toggleChecked="permission_group_1 ? true : false"
            @click.prevent="toggleGroupPermission('group_1')" />
        </div>
      </div>
      <div class="dropdown-content" v-if="permission_1_visibility">
        <div class="flex-box" v-for="(value, name) in user.per_group_1" :key="value">
          <div class="flex-wrapper">
            <div class="circle"></div>
            <p>{{ name }}</p>
          </div>
          <div class="toggleBtn">
            <ToggleButton :toggleChecked="value == 'true' ? true : false"
              @click.prevent="togglePermissions(name, 'per_group_1')" />
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
        </div>
        <div class="toggleBtn">
          <ToggleButton :toggleChecked="permission_group_2 === true ? true : false"
            @click.prevent="toggleGroupPermission('group_2')" />
        </div>
      </div>
      <div class="dropdown-content" v-if="permission_2_visibility">
        <div class="flex-box" v-for="(value, name) in user.per_group_2" :key="`${value} + ${name}`">
          <div class="flex-wrapper">
            <div class="circle"></div>
            <p>{{ name }}</p>
          </div>
          <div class="toggleBtn">
            <ToggleButton :toggleChecked="value == 'true' ? true : false"
              @click.prevent="togglePermissions(name, 'per_group_2')" />
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
        </div>
        <div class="toggleBtn">
          <ToggleButton :toggleChecked="permission_group_3 ? true : false"
            @click.prevent="toggleGroupPermission('group_3')" />
        </div>
      </div>
      <div class="dropdown-content" v-if="permission_3_visibility">
        <div class="flex-box" v-for="(value, name) in user.per_group_3" :key="`${value} + ${name} + 123`">
          <div class="flex-wrapper">
            <div class="circle"></div>
            <p>{{ name }}</p>
          </div>
          <div class="toggleBtn">
            <ToggleButton :toggleChecked="value == 'true' ? true : false"
              @click.prevent="togglePermissions(name, 'per_group_13')" />
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
    user: Object,
  },
  components: {
    ToggleButton,
  },
  data() {
    return {
      permission_1_visibility: false,
      permission_2_visibility: false,
      permission_3_visibility: false,
      permission_group_1: true,
      permission_group_2: true,
      permission_group_3: true,
      superAdmin: false,
    };
  },
  methods: {
    togglePermissionOne() {
      this.permission_1_visibility = !this.permission_1_visibility;
    },
    togglePermissionTwo() {
      this.permission_2_visibility = !this.permission_2_visibility;
    },
    togglePermissionThree() {
      this.permission_3_visibility = !this.permission_3_visibility;
    },
    toggleSuperAdmin() {
      this.superAdmin = !this.superAdmin;
      if (this.superAdmin == true) {
        this.permission_group_1 = this.permission_group_2 = this.permission_group_3 = true;
      } else {
        this.permission_group_1 = this.permission_group_2 = this.permission_group_3 = false;
      }

      this.setPermissions();
      this.$emit("toggleSuperAdmin", this.user);
    },

    toggleGroupPermission(group) {
      switch (group) {
        case "group_1":
          this.permission_group_1 = !this.permission_group_1;
          this.setPermissions();
          this.setSuperAdmin();
          return;

        case "group_2":
          this.permission_group_2 = !this.permission_group_2;
          this.setPermissions();
          this.setSuperAdmin();
          return;
        case "group_3":
          this.permission_group_3 = !this.permission_group_3;
          this.setPermissions();
          this.setSuperAdmin();
          return;
      }
      this.setSuperAdmin();
      this.$emit("toggleGroupPermission", this.user);
    },
    togglePermissions(permission_name, permission_group) {
      if (this.user[permission_group][permission_name] == "true") {
        this.user[permission_group][permission_name] = "false";
      } else {
        this.user[permission_group][permission_name] = "true";
      }
      this.setPermissionGroupStatus();
      this.setSuperAdmin();
      this.$emit("togglePermissions", this.user);
    },
    setSuperAdmin() {
      if (
        this.permission_group_1 &&
        this.permission_group_2 &&
        this.permission_group_3
      ) {
        this.superAdmin = true;
      } else {
        this.superAdmin = false;
      }
    },
    setPermissionGroupStatus() {
      this.permission_group_1 = true;
      this.permission_group_2 = true;
      this.permission_group_3 = true;
      for (const item in this.user.per_group_1) {
        if (this.user.per_group_1[item] == "false") {
          this.permission_group_1 = false;
        }
      }

      for (const item in this.user.per_group_2) {
        if (this.user.per_group_2[item] == "false") {
          this.permission_group_2 = false;
        }
      }

      for (const item in this.user.per_group_3) {
        if (this.user.per_group_3[item] == "false") {
          this.permission_group_3 = false;
        }
      }
    },
    setPermissions() {
      if (this.permission_group_1 == true) {
        for (const item in this.user.per_group_1) {
          this.user.per_group_1[item] = "true";
        }
      } else {
        for (const item in this.user.per_group_1) {
          this.user.per_group_1[item] = "false";
        }
      }
      if (this.permission_group_2 == true) {
        for (const item in this.user.per_group_2) {
          this.user.per_group_2[item] = "true";
        }
      } else {
        for (const item in this.user.per_group_2) {
          this.user.per_group_2[item] = "false";
        }
      }
      if (this.permission_group_3 == true) {
        for (const item in this.user.per_group_3) {
          this.user.per_group_3[item] = "true";
        }
      } else {
        for (const item in this.user.per_group_3) {
          this.user.per_group_3[item] = "false";
        }
      }
    },
  },

  beforeMount() {
    this.setPermissionGroupStatus();
    this.setSuperAdmin();
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 40px 30px;
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

.role-title {
  position: absolute;
  top: 220px;
  right: 65px;
  text-transform: capitalize;
}
</style>
