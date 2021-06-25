<template>
    <div v-bind:class="showDeletionWindow || showAddUsers ? 'home background-grey' : 'home'">
    <div v-bind:class="showDeletionWindow || showAddUsers ? 'wrapper toBack' : 'wrapper'">
    <HomeHeader @toggleAddUser="changeAddUserOption($event)" @newTerm="setFilterTerm($event)"/>
    <UsersTable :usersArray="users" :filterTerm="filterTerm" @toggleDelete="changeDeletionPopUp($event)"/>
    <Pagination msg="Welcome to Your Vue.js App"/>
  </div>
  <InvitationBox @visibilityChange="changeAddUserOption($event)" v-bind:class="showAddUsers ? 'pop-up' : 'd-none'"/>
  <DeleteUser @toggleDeletion="changeDeletionPopUp($event)" v-bind:class="showDeletionWindow ? 'pop-up' : 'd-none'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeView/HomeHeader.vue'
import UsersTable from '@/components/HomeView/UsersTable.vue'
import Pagination from '@/components/HomeView/Pagination.vue'
import InvitationBox from '@/components/HomeView/Invitation.vue'
import DeleteUser from '@/components/HomeView/DeleteUser.vue'
import {USERS} from '../shared/data';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    UsersTable,
    Pagination,
    InvitationBox,
    DeleteUser,
  },
  data(){
    return{
      users:[...USERS],
      showDeletionWindow:false,
      showAddUsers:false,
      filterTerm:'',
    }
  },
  methods:{
    changeDeletionPopUp(event){
      this.showDeletionWindow=event;
    },
    changeAddUserOption(event){
      this.showAddUsers=event;
    },
    setFilterTerm(event){
      this.filterTerm=event;
    }
  },
  created(){
  console.log(USERS);
}
}
</script>

<style scoped>
.background-grey{
  position:relative;
  background-color: rgba(49, 49, 49, 0.8);
}

.toBack{
  position:relative;
  z-index:-1;
}
.pop-up{
  position:relative;
  z-index:100;
}
</style>