<template>
  <div>
    <header-page></header-page>
    <h2>Hello from home</h2>
    <table border="1">
      <th>Id</th>
      <th>name</th>
      <th>address</th>
      <th>contact</th>
      <th>Actions</th>
      <tr v-for="hotel in hotelArray" :key="hotel">
        <td>{{ hotel.id }}</td>
        <td>{{ hotel.name }}</td>
        <td>{{ hotel.address }}</td>
        <td>{{ hotel.contact }}</td>
        <td>
          <router-link :to="'/update-hotel/' + hotel.id">Update</router-link>
          <button v-on:click="deleteHotel(hotel.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import HeaderPage from "./HeaderPage.vue";
export default {
  data() {
    return {
      hotelArray: [],
    };
  },
  components: { HeaderPage },
  async mounted() {
    let user = localStorage.getItem("user-data");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    // listing hotel-listing
    let hotelList = await axios.get(`http://localhost:3000/hotels`);
    console.log(hotelList);
    if (hotelList.status === 200 && hotelList.data.length > 0) {
      // localStorage.setItem("user-data", JSON.stringify(hotelList.data[0]));
      // this.$router.push({name:'HomePage'});
      this.hotelArray = hotelList.data;
    } else {
      alert("Something went wrong");
    }
  },
  method: {
    deleteHotel(hotelId) {
      console.log(hotelId);
    },
  },
};
</script>
