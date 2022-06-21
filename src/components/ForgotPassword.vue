<template>
  <div class="vue-template">
    <form id="forgotPWForm" action="" method="POST"> <!-- Action URL -->
      <h3>Forgot Password</h3>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control form-control-lg" />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Reset password
      </button>
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
      document.forms["forgotPWForm"].addEventListener("submit", async (event) => {
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