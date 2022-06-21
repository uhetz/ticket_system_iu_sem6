<template>
  <div class="vue-template">
    <form id="editUser" action="" method="POST"> <!-- Action URL -->
      <h3>Edit User</h3>

      <div class="form-group">
        <label>User ID</label>
        <input type="text" class="form-control form-control-lg" id="userid" required/>
      </div>

      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control form-control-lg" id="username" required/>
      </div>

     <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control form-control-lg" id="email" required />
      </div>

       <div class="form-group">
        <label>Permission</label>
        <select class="form-control form-control-lg" required >
            <option selected disabled value="">Please select a User Level</option>
            <option value="0">0 - Not Approved User</option>
            <option value="1">1 - User</option>
            <option value="2">2 - Administrator</option>
        </select>
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Submit Changes
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {

      return {
        currentDate: '2022-05-05'
    };
  },
methods:{
  responseReact(){
      document.forms["editUser"].addEventListener("submit", async (event) => {
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
  ,
  created: function(){
        this.currentDate = this.date_function()
      }

};
</script>


<style scoped>
.inner-block {
  width: 450px;
}

textarea {
    font-size: 1.25rem;
    border-radius: 0.3rem;
    border: 1px solid #ced4da;

}
.btn-lg {
    margin-top: 1vh;
}
</style>