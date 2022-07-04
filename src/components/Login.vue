<template>
  <div class="vue-template">
    <form id="loginForm"  @submit.prevent="loginCheck()" > <!-- Action URL -->
      <h3>Sign In</h3>

      <div class="form-group">
        <label>Username</label>
        <input type="text" class="form-control form-control-lg" id="username"  name="username"  v-model="login.username" required />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control form-control-lg" id="password" name="password" v-model="login.password"  required />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign In
      </button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>


    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      login:{}

    };
  },

  /* mounted () {
      axios

        .get('')  //TODO: URL
        .then(response => ( this.users = response.data.data )) 

    }, */
methods:{
 loginCheck(){
//console.log("Login checker");
  axios.post('/login', this.login ) 
        .then(response => { if(response.status == 200){
                  console.log("Authentification was successful"); //To Remove after implemetation of "Home" Page
                  //location.href=""; //TODO: Page to redirect to - if server does not automatically redirect
                }else{
                  alert("Authentification failed");
                } } 
          );
        
 }

  }


    
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inner-block {
  width: 450px;
}
</style>
