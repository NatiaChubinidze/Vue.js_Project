<template>
  <div class="about">
    <SettingsHeader />
    <div class="flex-wrapper">
      <div class="userInfo">
        <UserInfo :user="activeUser" />
      </div>
      <div class="userDetails">
        <UserDetails :user="activeUser" @changeState="toggleState($event)" />
      </div>
      <div class="userPermissions">
        <UserPermission
          :user="activeUser"
          @toggleSuperAdmin="modifyUser($event)"
          @toggleGroupPermission="modifyUser($event)"
          @togglePermissions="modifyUser($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SettingsHeader from "@/components/UserSettingsView/SettingsHeader.vue";
import UserInfo from "@/components/UserSettingsView/UserInfo.vue";
import UserDetails from "@/components/UserSettingsView/UserDetails.vue";
import UserPermission from "@/components/UserSettingsView/UserPermission.vue";
// import { USERS } from "../shared/data";

export default {
  name: "Settings",
  components: {
    SettingsHeader,
    UserInfo,
    UserDetails,
    UserPermission,
  },
  props: {
    userId: String,
  },
  data() {
    return {
      users: JSON.parse(localStorage.getItem("USERS_DATA")),
      activeUser: {},
    };
  },
  methods: {
    toggleState(selectedUser) {
      let newStatus = selectedUser.status;
      let newArr = this.users.map((user) => {
        if (user.id == selectedUser.id) {
          return { ...user, status: newStatus };
        }
        return user;
      });
      this.users = [...newArr];
      this.saveDataToLocalStorage();
    },
    
    saveDataToLocalStorage() {
      const usersData = JSON.stringify(this.users);
      localStorage.setItem("USERS_DATA", usersData);
    },
    getDataFromLocalStorage() {
      if (localStorage.getItem("USERS_DATA")) {
        this.users = JSON.parse(localStorage.getItem("USERS_DATA"));
      }
    },

    modifyUser(activeUser) {
      let newArr = this.users.map((user) => {
        if (user.id == activeUser.id) {
          return { ...activeUser };
        }
        return user;
      });
      this.users = [...newArr];
      this.saveDataToLocalStorage();
    },
  },
  created() {
    this.activeUser = this.users.filter((user) => user.id == this.userId)[0];
  },
};
</script>

<style scoped>
.about {
  width: 100%;
  height: fit-content;
}
.flex-wrapper {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  background-color: #f3f3f3;
}
.userInfo {
  width: 32%;
}
.userDetails {
  width: 32%;
}

.userPermissions {
  width: 36%;
}
</style>
