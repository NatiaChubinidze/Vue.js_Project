<template>
  <div class="about">
    <SettingsHeader/>
    <div class="flex-wrapper">
      <UserInfo/>
      <UserDetails/>
      <UserPermissions/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
 import SettingsHeader from '@/components/UserSettingsView/SettingsHeader.vue'
 import UserInfo from '@/components/UserSettingsView/UserInfo.vue'
 import UserDetails from '@/components/UserSettingsView/UserDetails.vue'
 import UserPermissions from '@/components/UserSettingsView/UserPermissions.vue'


export default {
  name: 'Settings',
  components: {
    SettingsHeader,
    UserInfo,
    UserDetails,
    UserPermissions
  }
}
</script>

<style scoped>
.about{
  width:100%;
  height:fit-content;
}
.flex-wrapper{
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
}
</style>