<template>
  <div class="box">
    <div class="header">
      <div class="wrapper">
        <h1 class="title">Project Access</h1>
        <div id="v-model-basic">
          <input type="text" class="search" placeholder="Type to filter the table" v-model="searchTerm" />
          <img src="../../assets/icons/search.png" class="search-icon" />
        </div>
      </div>
    </div>
    <div class="plus" @click="emitAddUsers">+</div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {},
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    emitAddUsers() {
      this.$emit("toggleAddUser", true);
    },
  },
  renderTriggered() {
    this.$emit("newTerm", this.searchTerm);
  },
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

input[type="text"].search:focus {
  outline: none;
}

input[type="text"].search {
  border: 0px;
  border-bottom: 2px solid #707070;
  width: 356px;
  margin-bottom: 7px;
  font-size: 20px;
  color: #707070;
  font-family: "Segoe UI";
  font-weight: 300;
  font-style: italic;
}

input[type="text"].search::placeholder {
  font-size: 20px;
  color: #707070;
  font-family: "Segoe UI";
  font-weight: 300;
  font-style: italic;
}

.plus {
  width: 72px;
  height: 72px;
  background-color: #305eca;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  color: white;
  font: normal normal 300 48px/64px Segoe UI;
  letter-spacing: 0px;
  position: relative;
  top: -38px;
  left: 6%;
}

.plus:hover {
  cursor: pointer;
}

.search-icon {
  position: relative;
  right: 25px;
}
</style>
