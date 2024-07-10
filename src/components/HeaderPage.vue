<template>
  <div class="header">
    <a href="#default" class="logo">Welcome {{ userName }}</a>
    <div class="header-right">
      <router-link to="/">Home</router-link>
      <router-link to="/add-hotel">Add Hotel</router-link>
      <!-- <router-link to="/update-hotel">Update Hotel</router-link> -->
      <router-link :to="'/profile-update/' + userId"
        >Profile Update
      </router-link>
      <a class="active" href="#" @click="logout">Logout</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      userId: "",
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LoginPage" });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-data");
    this.userId = JSON.parse(user).id;
    //alert(this.userId);
  },
};
</script>

<style>
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}
.header .header-right a:hover {
  background-color: #f96161;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }

  .header-right {
    float: none;
  }
}
</style>
