<template>
  <div
    v-bind:class="
      showDeletionWindow || showAddUsers ? 'home background-grey' : 'home'
    "
  >
    <div
      v-bind:class="
        showDeletionWindow || showAddUsers ? 'wrapper toBack' : 'wrapper'
      "
    >
      <HomeHeader
        @toggleAddUser="changeAddUserOption($event)"
        @newTerm="setFilterTerm($event)"
      />
      <UsersTable
        :usersArray="users"
        :filterTerm="filterTerm"
        @activeUser="setActiveUser($event)"
        @toggleDelete="changeDeletionPopUp($event)"
        @toggleUserState="toggleState($event)"
      />
      <Pagination />
    </div>
    <InvitationBox
      @visibilityChange="changeAddUserOption($event)"
      v-bind:class="showAddUsers ? 'pop-up' : 'd-none'"
      @inviteUser="addNewUser($event)"
    />
    <DeleteUser
      :user="activeUser"
      @deleteUser="deleteConcreteUser($event)"
      @toggleDeletion="closeDeletionPopUp($event)"
      v-bind:class="showDeletionWindow === true ? 'pop-up' : 'd-none'"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/HomeView/HomeHeader.vue";
import UsersTable from "@/components/HomeView/UsersTable.vue";
import Pagination from "@/components/HomeView/Pagination.vue";
import InvitationBox from "@/components/HomeView/Invitation.vue";
import DeleteUser from "@/components/HomeView/DeleteUser.vue";
import { USERS } from "../shared/data";

export default {
  name: "Home",
  components: {
    HomeHeader,
    UsersTable,
    Pagination,
    InvitationBox,
    DeleteUser,
  },

  data() {
    return {
      users: [...USERS],
      showDeletionWindow: false,
      showAddUsers: false,
      filterTerm: "",
      activeUser: {},
    };
  },

  methods: {
    changeDeletionPopUp(event) {
      this.showDeletionWindow = true;
      this.activeUser = { ...event };
    },
    closeDeletionPopUp(event) {
      this.showDeletionWindow = event;
    },
    changeAddUserOption(event) {
      this.showAddUsers = event;
    },
    setFilterTerm(event) {
      this.filterTerm = event;
    },
    setActiveUser(event) {
      this.activeUser = { ...event };
    },
    addNewUser(event) {
      let clonedUsers = [...this.users];
      clonedUsers.unshift(event);
      this.users = [...clonedUsers];
      this.saveDataToLocalStorage();
    },
    deleteConcreteUser(event) {
      let elementIndex;
      let clonedArray = [...this.users];
      clonedArray.forEach((user) => {
        if (user.id === event.id) {
          elementIndex = clonedArray.indexOf(user);
        }
      });
      if (elementIndex >= 0) {
        clonedArray.splice(elementIndex, 1);
      }
      this.users = [...clonedArray];
      this.$forceUpdate();
      this.showDeletionWindow = false;
      this.saveDataToLocalStorage();
      this.$forceUpdate();
    },
    toggleState(selectedUser) {
      let newStatus = selectedUser.status === "active" ? "disabled" : "active";
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
  },
  beforeMount() {
    if (!localStorage.getItem("USERS_DATA")) {
      this.saveDataToLocalStorage();
    } else {
      this.users = JSON.parse(localStorage.getItem("USERS_DATA"));
    }
  },
};
</script>

<style scoped>
.background-grey {
  position: relative;
  background-color: rgba(49, 49, 49, 0.8);
}

.toBack {
  position: relative;
  z-index: -1;
}
.pop-up {
  position: relative;
  z-index: 100;
}
</style>
