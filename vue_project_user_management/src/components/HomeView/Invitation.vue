<template>
  <div class="invitation">
    <div class="invitation-box">
      <img
        src="../../assets/icons/cancel.png"
        class="cancel"
        @click="toggleVisibility"
      />
      <h3>Invite New User</h3>
      <form>
        <div class="form-wrapper">
          <div class="line">
            <div class="icon">
              <img src="../../assets/icons/boy.png" class="img" />
            </div>
            <input
              type="text"
              class="firstName"
              placeholder="* First Name"
              v-model="invitedUser.firstName"
            />
            <input
              type="text"
              class="lastName"
              placeholder="* Last Name"
              v-model="invitedUser.lastName"
            />
          </div>
          <div class="line">
            <div class="icon">
              <img src="../../assets/icons/arroba.png" class="img" />
            </div>
            <input
              type="email"
              class="email"
              placeholder="* Email"
              v-model="invitedUser.email"
            />
          </div>
          <div class="line">
            <div class="icon">
              <img src="../../assets/icons/role_key.png" />
            </div>
            <div class="dropdown">
              <button class="dropbtn" id="dropbtn" disabled>* Role</button>
              <img src="../../assets/icons/down-arrow.png" class="arrow" />
              <div class="dropdown-content" @click="setRole($event)">
                <a href="#">Admin</a>
                <a href="#">User</a>
              </div>
            </div>
            <div class="invisible"></div>
          </div>

          <div class="final-section">
            <button class="submit-btn" @click="submitInvitation">
              Send Invitation
            </button>
            <div class="info-div">Fill in all the fields</div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvitationBox",
  props: {},
  methods: {
    toggleVisibility() {
      this.$emit("visibilityChange", false);
    },
    submitInvitation(event) {
      event.preventDefault();
      let userToAdd = {
        name: `${this.invitedUser.firstName} ${this.invitedUser.lastName}`,
        email: this.invitedUser.email,
        role: this.invitedUser.role,
        id: Math.round(Math.random() * 1000),
        status: "active",
        per_group_1: {
          permission_11: "true",
          permission_12: "true",
          permission_13: "true",
          permission_14: "false",
          permission_15: "false",
        },
        per_group_2: {
          permission_16: "true",
          permission_17: "true",
          permission_18: "true",
        },
        per_group_3: {
          permission_19: "true",
          permission_20: "true",
          permission_21: "true",
        },
      };

      console.log(userToAdd);
      this.$emit("inviteUser", userToAdd);
      this.toggleVisibility();
    },
    setRole(event) {
      if (event.target.tagName == "A") {
        document.getElementById("dropbtn").innerText = event.target.innerText;
        this.invitedUser.role = event.target.innerText.toLowerCase();
        console.log(this.invitedUser.role);
      }
    },
  },
  data() {
    return {
      invitedUser: {
        firstName: "",
        lastName: "",
        email: "",
        role: "",
      },
    };
  },
};
</script>

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
  height: 400px;
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
form {
  width: 100%;
  height: 100%;
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
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 45%;
  height: 28px;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 100%;
}

.dropdown-content a {
  padding: 8px 18px;
  text-decoration: none;
  display: block;
  text-align: left;
  color: #707070;
  font-family: "Segoe UI";
  font-weight: 300;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.firstName,
.lastName {
  width: 45%;
}
.email {
  width: 91.5%;
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
}
input:focus {
  outline: none;
}
input,
.dropbtn {
  border: 0px;
  border-bottom: 2px solid #ccc9c9;

  color: #707070;
  font-family: "Segoe UI";
  font-weight: 300;
}
input::placeholder {
  color: #707070;
  font-family: "Segoe UI";
  font-weight: 300;
}
.invisible {
  width: 45%;
}
.arrow {
  width: 12px;
  position: absolute;
  top: 10px;
  right: 5px;
}
.icon img.img {
  margin-top: 5px;
}
.submit-btn,
.info-div {
  height: 40px;
  padding: 5px;
  border-radius: 35px;
  font-weight: 600;
  font-size: 14px;
}
.submit-btn {
  width: 35%;
  border: 0px;
}
.info-div {
  width: 37%;
  display: flex;
  align-items: center;
  cursor: default;
  font-style: italic;
}

.final-section {
  width: 100%;
  height: fit-content;
  padding-left: 8%;
  display: flex;
  justify-content: space-between;
}
</style>
