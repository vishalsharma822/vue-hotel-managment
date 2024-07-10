<template>
    <div class="loginFrm">
    <form action="" class="form">
        <img alt="vishal-hotel-logo" src="../assets/vishal-hotel-logo.png" style="width:200px">
        <h1 class="title">LOGIN PAGE</h1>

        <div class="inputContainer">
            <input type="text" class="input" v-model="email" placeholder="Please enter Email">
            <label for="" class="label">Email</label>
        </div>

        <div class="inputContainer">
            <input type="password" class="input" v-model="password" placeholder="Please enter Password">
            <label for="" class="label">Password</label>
        </div>

        <input type="button" class="loginBtn" @click="userLogin" value="LOGIN">
        <p><router-link to="sign-up">Create Account</router-link></p>
    </form>
</div>
</template>
<script>
import axios from 'axios';
export default{
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        async userLogin(){
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
            if (result.status === 200 && result.data.length > 0) {
                localStorage.setItem("user-data", JSON.stringify(result.data[0]));
                this.$router.push({name:'HomePage'});
            } else {
                alert("Something went wrong");
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-data');
        if(user){
            this.$router.push({name:'HomePage'})
        }
    }
}
</script>