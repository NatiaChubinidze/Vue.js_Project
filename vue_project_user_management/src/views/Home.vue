<template>
  <div class="home background-grey">
    <div class="wrapper toBack">
    <HomeHeader msg="Welcome to Your Vue.js App"/>
    <UsersTable msg="Welcome to Your Vue.js App"/>
    <Pagination msg="Welcome to Your Vue.js App"/>
  </div>
  <InvitationBox class="invitation"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader.vue'
import UsersTable from '@/components/UsersTable.vue'
import Pagination from '@/components/Pagination.vue'
import InvitationBox from '@/components/Invitation.vue'


export default {
  name: 'Home',
  components: {
    HomeHeader,
    UsersTable,
    Pagination,
    InvitationBox
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
.invitation{
  position:relative;
  z-index:100;
}
</style>