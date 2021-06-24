<template>
  <div class="about">
    <SettingsHeader/>
    <div class="flex-wrapper">
      <div class="userInfo">
         <UserInfo/>
      </div>
       <div class="userDetails">
          <UserDetails/>
       </div>
        <div class="userPermissions">
               <UserPermissions/>
        </div>
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
 
  justify-content: space-between;
}
.userInfo{
width:32%;
height:fit-content;
}
.userDetails{
width:32%;
height:fit-content;
}

.userPermissions{
width:36%;
height:fit-content;
}
</style>