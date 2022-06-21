<template>
  <div class="vue-template">
    <form id="loginForm" action="" method="POST"> <!-- Action URL -->
      <h3>Sign In</h3>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control form-control-lg" id="email"  name="email" required />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control form-control-lg" id="password" name="password" required />
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
export default {
  data() {
    return {};
  },

  /* mounted () {
      axios
        .post('')  //TODO: URL
        .then(response => ( this.users = response.data.data )) 
    }, */
methods:{
  responseReact(){
      document.forms["loginForm"].addEventListener("submit", async (event) => {
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inner-block {
  width: 450px;
}
</style>
