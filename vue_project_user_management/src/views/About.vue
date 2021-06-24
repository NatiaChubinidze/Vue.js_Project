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
               <UserPermission/>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
 import SettingsHeader from '@/components/UserSettingsView/SettingsHeader.vue'
 import UserInfo from '@/components/UserSettingsView/UserInfo.vue'
 import UserDetails from '@/components/UserSettingsView/UserDetails.vue'
 import UserPermission from '@/components/UserSettingsView/UserPermission.vue'


export default {
  name: 'Settings',
  components: {
    SettingsHeader,
    UserInfo,
    UserDetails,
    UserPermission
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
  height:fit-content;
  display: flex;
  justify-content: space-between;
  background-color: #f3f3f3;
}
.userInfo{
width:32%;
}
.userDetails{
width:32%;
}

.userPermissions{
width:36%;
}
</style>