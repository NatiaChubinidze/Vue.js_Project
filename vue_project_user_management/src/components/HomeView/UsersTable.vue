<template>
  <div class="wrapper">
    <table class="table" v-if="users">
      <thead>
        <tr class="table-header">
          <th scope="col" class="th-thumbnail"></th>
          <th scope="col" class="th-user">
            <span @click="sortByUser">User</span>
          </th>
          <th scope="col" class="th-role">
            <span @click="sortByRole">Role</span>
          </th>
          <th scope="col" class="th-status">
            <span @click="sortByStatus">Status</span>
          </th>
          <th scope="col" class="th-actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.email">
          <td class="thumbnail">
            <img src="../../assets/icons/user.png" />
          </td>
          <td>
            <div class="user-info">
              <span>{{ user.name }}</span>
              <p>{{ user.email }}</p>
            </div>
          </td>
          <td>
            <div class="td-role">
              <div class="admin-div" v-if="user.role === 'admin'">
                <img src="../../assets/icons/key.png" />
              </div>
              <p>{{ user.role }}</p>
            </div>
          </td>
          <td class="td-status">
            <div class="toggle-wrapper">
              <div class="toggle-btn">
                <ToggleButton
                  :toggleChecked="user.status === 'active' ? true : false"
                />
              </div>
            </div>
          </td>
          <td class="td-actions">
            <div class="cont-wrapper">
              <div class="actions">
                <img
                  class="settings-img"
                  src="../../assets/icons/settings.png"
                  v-on:click="navigate(user)"
                />
                <img
                  class="recycleBin-img"
                  src="../../assets/icons/recycle.png"
                  v-on:click="toggleDeletionOption"
                />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ToggleButton from "../ToggleButton.vue";

export default {
  name: "UsersTable",
  props: {
    usersArray: Array,
    toggleDelete: Boolean,
    filterTerm: String,
  },
  components: {
    ToggleButton,
  },
  data() {
    return {
      sortByUserDesc: true,
      sortByRoleDesc: true,
      sortByStatusDesc: true,
      users: [...this.usersArray],
    };
  },
  watch: {
    filterTerm: function () {
      console.log("table component filterterm", this.filterTerm);
      if (this.filterTerm) {
        console.log("if statement");
        let clonedArray = [...this.usersArray];
        const searchTerm = this.filterTerm.toLowerCase();

        let filteredArray = clonedArray.filter((user) => {
          return (
            user.name.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm) ||
            user.role.toLowerCase().includes(searchTerm) ||
            user.status.toLowerCase().includes(searchTerm)
          );
        });
        console.log("clonedArray", clonedArray);
        this.users = [...filteredArray];
        console.log("this users", this.users);
      } else {
        console.log("else statement");
        this.users = [...this.usersArray];
      }
    },
    usersArray: function() {
      console.log("users changed table compoennt");
      this.users=[...this.usersArray];
    },
  },

  methods: {
    navigate(user) {
      this.$emit("activeUser", user);
      this.$router.push({
        name: "Settings",
        params: {
          userId: user.id,
        },
      });
    },
    toggleDeletionOption() {
      this.$emit("toggleDelete", true);
    },
    sortByUser() {
      this.users.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      if (!this.sortByUserDesc) {
        this.users.reverse();
      }
      this.sortByUserDesc = !this.sortByUserDesc;
    },
    sortByRole() {
      this.users.sort((a, b) =>
        a.role > b.role ? 1 : b.role > a.role ? -1 : 0
      );
      if (!this.sortByRoleDesc) {
        this.users.reverse();
      }
      this.sortByRoleDesc = !this.sortByRoleDesc;
    },
    sortByStatus() {
      this.users.sort((a, b) =>
        a.status > b.status ? 1 : b.status > a.status ? -1 : 0
      );
      if (!this.sortByStatusDesc) {
        this.users.reverse();
      }
      this.sortByStatusDesc = !this.sortByStatusDesc;
    },
  },
};
</script>


<style scoped>
.wrapper {
  width: 100%;
  padding: 50px 10% 10px 6%;
  background-color: #f3f3f3;
}

table th {
  height: 60px;
  padding-bottom: 30px;
  border: 0px;
}
table th span {
  cursor: pointer;
}
table th:not(:first-child) {
  border-bottom: 2px solid #00000029 !important;
}
table td {
  height: 80px;
  padding-top: 20px;
  padding-left: 0px;
}
table p {
  width: fit-content;
  margin: 0px;
}
.user-info p {
  font: normal normal 300 16px/21px Segoe UI;
  letter-spacing: 0px;
}
.user-info span {
  width: fit-content;
}
.user-info {
  width: 100%;
  height: 100%;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
}

.thumbnail {
  border: 0px;
  text-align: left;
  padding-left: 13px;
  width: 120px;
}
.thumbnail img {
  width: 45.64px;
  height: 45.64px;
}
.th-user {
  text-align: left;
}
.th-role {
  width: 190px;
}
.th-actions {
  width: 100px;
}

.td-role {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}

.td-role p {
  margin-top: 5px;
}
.admin-div {
  width: 48px;
  height: 32px;
  background-color: #7e7ef1;
  border-radius: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}
.admin-div img {
  width: 24px;
  height: 24px;
}
.td-status {
  text-align: center;
  padding-left: 20px;
}
.td-actions {
  text-align: right;
}
.actions {
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-right: 5px;
  padding-top: 7px;
  justify-self: flex-end;
}
.settings-img {
  width: 18px;
  height: 18px;
}
.recycleBin-img {
  width: 13px;
  height: 18px;
}
.settings-img:hover,
.recycleBin-img:hover {
  cursor: pointer;
}
.cont-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
.toggle-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.toggle-btn {
  width: 100px;
  height: 25px;
}
</style>
