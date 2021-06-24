<template>
  <div class="invitation">
    <div class="invitation-box">
      <img src="../assets/icons/cancel.png" class="cancel" />
      <h3>Delete User</h3>

      <div class="form-wrapper">
        <div class="line">
          <div class="icon">
            <img src="../assets/icons/boy.png" />
          </div>
          <div class="userInfo">
            <button class="dropbtn">
                <span>
                Samantha Stenford
                </span>
                </button>
          </div>
             <div class="activeUser">
              <span>Active User</span>
          </div>
        </div>

        <div class="final-section">
          <button class="delete-btn">Delete User</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteUser",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.invitation {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
}
.invitation-box {
  position: absolute;
  top: calc((100vh - 350px) / 2);
  left: calc((100% - 37%) / 2);
  width: 37%;
  height: 300px;
  background-color: white;
  padding: 50px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 12px;
  cursor: pointer;
}
h3 {
  font-family: "Segoe UI";
  font-weight: 600;
  font-size: 27px;
  color: black;
  margin-left: 30px;
  text-align: left;
  margin-bottom: 50px;
}
.form-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
}

.line {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
}
.dropbtn {
  background-color: white;
  color: #707070;
  padding: 0px 30px 0px 2px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  text-align: left;
  display:flex;
  align-items:flex-start;
  border: 0px;
  color: #707070;
  font-family: "Segoe UI";
  font-weight: 300;
}

.userInfo {
  position: relative;
  display: inline-block;
  width:63%;
  height: 50px;
}

.icon {
  width: 7%;
  height: 28px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
.icon img {
  width: 18px;
  margin-top: 2px;
  margin-right:20px;
}



.invisible {
  width: 45%;
}

.icon img.img {
  margin-top: 5px;
}
.delete-btn,
.info-div {
  height: 40px;
  padding: 5px;
  border-radius: 35px;
  font-weight: 600;
  font-size: 14px;
}
.delete-btn {
  width: 35%;
  border: 0px;
  background-color: #f79696;
  color:white;
}

.final-section {
  width: 100%;
  height: fit-content;
  padding-left: 8%;
  display: flex;
  justify-content: space-between;
}
.userInfo, .activeUser{
      border-bottom: 2px solid #ccc9c9 !important;
}
.activeUser{
font-size: 16px;
border: 0px;
  color: #707070;
  font-family: "Segoe UI";
  font-weight: bold;
  width:30%;
  color:#4fa6d6;
}
</style>
