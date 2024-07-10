<template>
  <div>
    <header-page></header-page>
    <h2>Update Hotel</h2>
    <div class="updateFrm">
      <form action="" class="form">
        <h1 class="title">Update Hotel</h1>

        <div class="inputContainer">
          <input
            type="text"
            class="input"
            v-model="hotel.name"
            placeholder="Please enter hotel name"
          />
          <label for="" class="label">Name</label>
        </div>

        <div class="inputContainer">
          <input
            type="text"
            class="input"
            v-model="hotel.address"
            placeholder="Please enter address"
          />
          <label for="" class="label">Address</label>
        </div>

        <div class="inputContainer">
          <input
            type="text"
            class="input"
            v-model="hotel.contact"
            placeholder="Please enter contact"
          />
          <label for="" class="label">Contact</label>
        </div>

        <input
          type="button"
          class="submitBtn"
          @click="updateHotel"
          value="Update Hotel"
        />
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import HeaderPage from "./HeaderPage.vue";
export default {
  data() {
    return {
      hotel: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  components: { HeaderPage },
  async mounted() {
    let user = localStorage.getItem("user-data");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    // getting detail of hotel by id with the help of API
    let result = await axios.get(
      "http://localhost:3000/hotels/" + this.$route.params.id
    );
    this.hotel = result.data;
  },
  methods: {
    async updateHotel() {
      let result = await axios.put(
        "http://localhost:3000/hotels/" + this.$route.params.id,
        {
          name: this.hotel.name,
          address: this.hotel.address,
          contact: this.hotel.contact,
        }
      );
      console.log(result);
      if (result.status === 200) {
        //localStorage.setItem("user-data", JSON.stringify(result.data));
        this.$router.push({ name: "HomePage" });
      } else {
        alert("Something went wrong");
      }
    },
  },
};
</script>
