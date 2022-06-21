<template>
  <div class="vue-template">
    <form id="signupForm" action="" method="POST"> <!-- Action URL -->
      <h3>Sign Up</h3>

      <div class="form-group">
        <label>Full Name</label>
        <input type="text" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control form-control-lg" />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign Up
      </button>

      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{ name: 'login' }">sign in?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
methods:{
  responseReact(){
      document.forms["signupForm"].addEventListener("submit", async (event) => {
        event.preventDefault();
        const resp = await fetch(event.target.action, {
          method: "POST",
          body: new URLSearchParams(new FormData(event.target)),
        });
        const body = await resp.json();
        if(response.status==200){
          alert("Authentification was successful"); //To Remove after implemetation of "Home" Page
          //location.href=""; //TODO: Page to redirect to - if server does not automatically redirect
        }else{
          alert("Authentification failed");
        }
        
      });

  }
  }


};
</script>
<style scoped>
.inner-block {
  width: 450px;
}
</style>