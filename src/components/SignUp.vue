<template>
  <div class="signupFrm">
    <form action="" class="form">
      <img
        alt="vishal-hotel-logo"
        src="../assets/vishal-hotel-logo.png"
        style="width: 200px"
      />
      <h1 class="title">Sign up</h1>

      <div class="inputContainer">
        <input
          type="text"
          class="input"
          v-model="name"
          placeholder="Please enter Username"
        />
        <label for="" class="label">Username</label>
      </div>

      <div class="inputContainer">
        <input
          type="text"
          class="input"
          v-model="email"
          placeholder="Please enter Email"
        />
        <label for="" class="label">Email</label>
      </div>

      <div class="inputContainer">
        <input
          type="password"
          class="input"
          v-model="password"
          placeholder="Please enter Password"
        />
        <label for="" class="label">Password</label>
      </div>

      <input type="button" class="submitBtn" @click="signUp" value="Sign up" />
      <p><router-link to="login">LOGIN</router-link></p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let dataInJson = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      console.log(dataInJson);

      //--Using fetch method--// but signUp function should be not sync

      // fetch("http://localhost:3000/users",{
      //   method:"POST",
      //   body: JSON.stringify(data),
      //   headers: {
      //      "Content-type": "application/json; charset=UTF-8"
      //     }
      // })
      // .then(response => response.json())
      // .then(dataInJson => console.log(dataInJson));

      //-- using axios --//
      let result = await axios.post("http://localhost:3000/users", dataInJson);
      if (result.status === 201) {
        localStorage.setItem("user-data", JSON.stringify(result.data));
        this.$router.push({ name: "HomePage" });
      } else {
        alert("Something went wrong");
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-data");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>
