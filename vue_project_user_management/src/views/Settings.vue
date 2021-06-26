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
          @changeUserRole="setRole()"
          @assignGroupPermission="assignGroupPermissions"
          @changePermission="assignPermissionperField($event)"
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
import { USERS } from "../shared/data";

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
      users: [...USERS],
      activeUser: {},
    };
  },
  methods: {
    toggleState(selectedUser) {
      let newStatus = selectedUser.status === "active" ? "disabled" : "active";
      let newArr = USERS.map((user) => {
        if (user.id == selectedUser.id) {
          return { ...user, status: newStatus };
        }
        return user;
      });
      console.log("newArr", newArr);
      this.USERS = [...newArr];
      //this.users=[...newArr];
      console.log("updated USERS", ...this.USERS);
      console.log("updated users array", this.users);
    },
    setRole() {
      let newRole = this.activeUser.role === "superAdmin" ? "admin" : "superAdmin";
      let newArr = USERS.map((user) => {
        if (user.id == selectedUser.id) {
          return { ...user, status: newStatus };
        }
        return user;
      });
      console.log("newArr", newArr);
      this.USERS = [...newArr];
      //this.users=[...newArr];
      console.log("updated USERS", ...this.USERS);
      console.log("updated users array", this.users);
    },
    assignGroupPermissions(group) {},
    assignPermissionperField(permission_name) {},
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