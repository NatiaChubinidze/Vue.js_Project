<template>
  <div class="wrapper" v-if="user">
    <div class="box">
      <img src="../../assets/icons/profile-pic.png" class="profile-pic" />
      <div class="admin-div">
        <img src="../../assets/icons/key.png" />
      </div>
    </div>
    <span>Upload a Photo</span>
    <p class="name">{{ user.name }}</p>
    <p class="email">{{ user.email }}</p>
    <button class="submit-btn">Resend the invite</button>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 90px;
  align-items: center;
}
.box {
  position: relative;
  width: 232px;
  margin: 0 auto;
  height: fit-content;
}
.profile-pic {
  width: 100%;
}
.admin-div {
  position: absolute;
  width: 77px;
  height: 51px;
  background-color: #7e7ef1;
  border-radius: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  left: 160px;
}
.admin-div img {
  width: 24px;
  height: 24px;
}
.wrapper span {
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 40px;
  font: normal normal 300 14px/19px Segoe UI;
  letter-spacing: 0px;
  color: #b0acac;
}
.name {
  font: normal normal 600 48px/48px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
  size: 48px;
  font-style: 600;
}
.email {
  font: normal normal 300 16px/21px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
  margin-top: 5px;
  margin-bottom: 47px;
}
.submit-btn {
  height: 59px;
  padding: 5px;
  background: #7e7ef1 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 100px;
  font: normal normal 600 16px/21px Segoe UI;
  letter-spacing: 0px;
  color: #ffffff;
  width: 209px;
  border: 0px;
  margin: 0 auto;
}
</style>
