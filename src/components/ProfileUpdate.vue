<template>
  <header-page></header-page>
  <h2>Profile Update</h2>
  <div class="profileUpdateFrm">
    <form action="" class="form">
      <h1 class="title">Profile Update</h1>

      <div class="inputContainer">
        <input
          type="text"
          class="input"
          v-model="user.name"
          placeholder="Please enter Username"
        />
        <label for="" class="label">Username</label>
      </div>

      <div v-if="user.profileImage">
        <img
          alt="vishal-hotel-logo"
          src="user.profileImage"
          style="width: 100px"
        />
      </div>
      <div v-else>
        <img
          alt="vishal-hotel-logo"
          src="../assets/avtar-default.png"
          style="width: 100px"
        />
      </div>

      <h5 style="text-align: left">Profile image</h5>
      <div class="inputContainer">
        <input
          type="file"
          class="input"
          accept="image/*"
          placeholder="Please select profile image"
          v-on:change="selectImage"
        />
      </div>

      <div class="inputContainer">
        <input
          type="text"
          class="input"
          v-model="user.email"
          placeholder="Please enter Email"
        />
        <label for="" class="label">Email</label>
      </div>

      <div class="inputContainer">
        <input
          type="password"
          class="input"
          v-model="user.password"
          placeholder="Please enter Password"
        />
        <label for="" class="label">Password</label>
      </div>

      <input
        type="button"
        class="submitBtn"
        @click="profileUpdate"
        value="Profile Update"
      />
    </form>
  </div>
</template>

<script>
import axios from "axios";
import HeaderPage from "./HeaderPage.vue";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        profileImage: "",
      },
    };
  },
  components: { HeaderPage },
  async mounted() {
    let user = localStorage.getItem("user-data");
    if (!user) {
      this.$router.push({ name: "LoginPage" });
    }

    if (JSON.parse(user).id == this.$route.params.id) {
      let result = await axios.get(
        "http://localhost:3000/users/" + this.$route.params.id
      );
      this.user = result.data;
    } else {
      alert("You can only change your profile id");
      this.$router.push({ name: "HomePage" });
    }
  },
  methods: {
    async profileUpdate() {
      console.log(this.user);
      let result = await axios.put(
        "http://localhost:3000/users/" + this.$route.params.id,
        {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          profileImage: this.user.profileImage,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      //console.log(result);
      if (result.status === 200) {
        //this.$router.push({ name: "HomePage" });
        alert("profile updated");
      } else {
        alert("Something went wrong");
      }
    },
    selectImage(e) {
      let currentImage = e.target.files[0];
      console.log(currentImage);
      this.user.profileImage = currentImage.name;
      this.createBase64Image(currentImage);
    },
    createBase64Image(img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png");
      //return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
      console.log(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
    },
  },
};
</script>
