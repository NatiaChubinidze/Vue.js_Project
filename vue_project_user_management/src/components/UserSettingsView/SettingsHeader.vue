<template>
  <div class="box">
    <div class="header">
      <div class="wrapper">
        <h1 class="title">User Setup</h1>
      </div>
    </div>
    <div class="settings-gear">
      <img src="../../assets/icons/settings_white.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsHeader",
  props: {},
};
</script>

<style scoped>
.box {
  height: 150px;
}

.header {
  width: 100%;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  box-shadow: 0px 3px 6px #00000029;
}

.wrapper {
  width: 95%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px 10% 10px 10%;
}

.title {
  font: normal normal 600 36px Segoe UI;
  margin: 0px;
}

.settings-gear {
  width: 72px;
  height: 72px;
  background-color: #c6c6c6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
  top: -38px;
  left: 6%;
  cursor: pointer;
}

.settings-gear img {
  width: 34px;
  height: 35px;
}
</style>
