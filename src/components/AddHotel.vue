<template>
  <div>
      <header-page></header-page>
      <h2> Add Hotel</h2>
      <div class="addFrm">
    <form action="" class="form">
        <h1 class="title">Add Hotel</h1>

        <div class="inputContainer">
            <input type="text" class="input" v-model="hotel.name" placeholder="Please enter hotel name">
            <label for="" class="label">Name</label>
        </div>

        <div class="inputContainer">
            <input type="text" class="input" v-model="hotel.address" placeholder="Please enter address">
            <label for="" class="label">Address</label>
        </div>

        <div class="inputContainer">
            <input type="text" class="input" v-model="hotel.contact" placeholder="Please enter contact">
            <label for="" class="label">Contact</label>
        </div>

        <input type="button" class="submitBtn" @click="addHotel" value="Add Hotel">
    </form>
</div>
  </div>
</template>
<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
export default{
    data(){
        return{
            hotel:{
                name:'',
                address:'',
                contact:''
            }
        }
    },
  components:{HeaderPage},
  methods:{
    async addHotel(){
        console.log(this.hotel);
        let result = await axios.post("http://localhost:3000/hotels", this.hotel);
            if (result.status === 201) {
                //localStorage.setItem("user-data", JSON.stringify(result.data));
                this.$router.push({name:'HomePage'});
            } else {
                alert("Something went wrong");
            }
    }
  },
  mounted(){
      let user = localStorage.getItem('user-data');
      if(!user){
          this.$router.push({name:'SignUp'})
      }
  }
}
</script>