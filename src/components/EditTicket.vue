<template>
  <div class="vue-template">
    <form id="editTicket" action="" method="POST"> <!-- Action URL -->
      <h3>Edit the Ticket</h3>

     <div class="form-group" v-for="ticket in tickets" :key="ticket.id">
        <label>Email address</label>

        <input type="email" class="form-control form-control-lg" id="email" required  v-model="user.email" >  <!-- v-model="getUserById(ticket.creatorId).email" -->
      </div>

      <div class="form-group" >

        <label>Ticket Name</label>
        <input type="text" class="form-control form-control-lg" id="ticketname" required  v-model="ticket.name" /> 
      </div>


      <div class="form-group" >
        <label>Date</label>
        <input type="date" class="form-control form-control-lg" id="date" required v-model="ticket.createDate"  />

      </div>
      
      <div class="form-group">
        <label>Priority </label>
        <select class="form-control form-control-lg" required  v-model="ticket.priority">
            <option selected disabled value="">Please select a Priority Level</option>
            <option value="1">1 - High Priority</option>
            <option value="2">2 - Medium Priority</option>
            <option value="3">3 - Low Priority</option>
        </select>
      </div>

       <div class="form-group">
        <label>Status </label>

        <select class="form-control form-control-lg" required v-model="ticket.status" >
            <option selected disabled value="">Please select a Status</option>
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="postponed">Postponed</option>
            <option value="cancelled">Cancelled</option>
            <option value="done">Done</option>
        </select>
      </div>


      <div class="form-group"  >

        <label>Description</label>
        <br>
        <textarea id="description" name="description" rows="4" cols="50" v-model="ticket.description" ></textarea>
      </div>
        
     

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Submit Changes
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {


      return {ticket:null,
        currentDate: '2022-05-05',
        user:{} 

    };
  },
  mounted(){
      axios
        .get('/tickets?id='  + this.$route.query.id  ) //TODO: Get Data 
        .then(response => {

            this.ticket = response.data[0];
            this.loadUser(this.ticket.creatorId);
            


            
                  }) 
        
  },

methods:{
  responseReact(){
      document.forms["editTicket"].addEventListener("submit", async (event) => {
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
  },
      loadUser(userid){
      axios.get('/users?id=' + userid) 
        .then(response => (this.user = (response.data[0]))) 

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