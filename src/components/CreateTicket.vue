<template>
  <div class="vue-template">
    <form id="createTicket" action="" method="POST"> <!-- Action URL -->
      <h3>Create a new Ticket</h3>

     <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control form-control-lg" id="email" required />
      </div>

      <div class="form-group">
        <label>Ticket Name</label>
        <input type="text" class="form-control form-control-lg" id="ticketname" required/>
      </div>

      <div class="form-group">
        <label>Date</label>
        <input disabled type="date" class="form-control form-control-lg" id="date" required v-model="currentDate" />
      </div>
      
      <div class="form-group">
        <label>Priority </label>
        <select class="form-control form-control-lg" required >
            <option selected disabled value="">Please select a Priority Level</option>
            <option value="1">1 - High Priority</option>
            <option value="2">2 - Medium Priority</option>
            <option value="3">3 - Low Priority</option>
        </select>


      </div>
      
      <div class="form-group">
        <label>Description</label>
        <br>
        <textarea id="description" name="description" rows="4" cols="50"></textarea>
      </div>
        <input type="hidden" class="form-control form-control-lg" id="status" value="Open" required/>
     

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Submit & Create Ticket
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
      document.forms["createTicket"].addEventListener("submit", async (event) => {
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
  },
  date_function: function(){
        const date = new Date()
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        const y = String(date.getFullYear());

        const formatedDate = [y,m, d].join('-');
        console.log(formatedDate);
    return formatedDate;
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

</style>