<template>
  <div class="home">
    <HomeHeader msg="Welcome to Your Vue.js App"/>
    <UsersTable msg="Welcome to Your Vue.js App"/>
    <Pagination msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader.vue'
import UsersTable from '@/components/UsersTable.vue'
import Pagination from '@/components/Pagination.vue'


export default {
  name: 'Home',
  components: {
    HomeHeader,
    UsersTable,
    Pagination
  }
}
</script>
