<template>
  <div class="about">
    <SettingsHeader/>
    <div class="flex-wrapper">
      <div class="userInfo">
         <UserInfo :user="activeUser"/>
      </div>
       <div class="userDetails">
          <UserDetails :user="activeUser"/>
       </div>
        <div class="userPermissions">
               <UserPermission :user="activeUser"/>
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
import {USERS} from '../shared/data';

export default {
  name: 'Settings',
  components: {
    SettingsHeader,
    UserInfo,
    UserDetails,
    UserPermission
  },
  props:{
    userId:String
  },
 data(){
   return {
      users:[...USERS],
     activeUser:{},
   }
 },
 created(){
   this.activeUser=this.users.filter(user=>user.id==this.userId)[0];
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