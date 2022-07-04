<template>
  <div class="home">
    <h1>{{ msg }}</h1>
   <table>
  <tr>
    <th>Ticket ID</th>
    <th>Name</th>
    <th>Description</th>
    <th>Status</th>
    <th>Prio</th>
    <th>Author</th>
  </tr>
 <!--  <tr>
    <td><a href="/editTicket?id=001">001</a></td> <td> <a href="/editTicket?id={{tickets.id}}">{{tickets.id}}</a></td>
    <td> Alfreds Fehler</td> {{tickets.name}}
    <td>ABCDEFG</td> {{tickets.description}}
    <td>Open</td>  {{tickets.status}}
    <td>3</td> {{tickets.prio}}
  </tr> 
  <tr>
    <td><a href="/editTicket?id=002">002</a></td>  
    <td>Alfreds 2.Fehler</td>  
    <td>ABCDEFG</td>           
    <td>Open</td>             
    <td>3</td>                 
  </tr> -->

<tr v-for="ticket in tickets" :key="ticket.id" >
            <td><a v-bind:href="'/editTicket?id='+ ticket.id">{{ticket.id}}</a></td>
            <td><a v-bind:href="'/editTicket?id='+ ticket.id">{{ticket.name}}</a></td>
            <td>{{ticket.description}}</td>
            <td>{{getStatus(ticket.status)}}</td>
            <td>{{ticket.priority}}</td>
            <td>{{getUserById(ticket.creatorId).firstName}} {{getUserById(ticket.creatorId).lastName}}</td>
          </tr>

</table>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return { tickets:null, users:[] }

  },
  mounted(){
      axios
        .get('/tickets') //TODO: Get Data 
        .then(response => {
            this.tickets = response.data;
            this.tickets.forEach(ticket => {this.loadUser(ticket.creatorId);});        }) 
        
  },
  methods:{
    loadUser(userid){
      axios.get('/users?id=' + userid) 
        .then(response => (this.users.push(response.data[0]))) 
    },
    getUserById(userid){
      for(let i=0; i < this.users.length; i++){
               if(this.users[i].id===userid){
                   return this.users[i]
               }
            }
    },
    getStatus(status){
      var status_formatted ="";
      switch(status){
        case "cancelled": 
          status_formatted="Cancelled";
          break;
        case "open": 
          status_formatted="Open";
          break;
        case "in_progress": 
          status_formatted="In Progress";
          break;
        case "postponed": 
          status_formatted="Postponed";
          break;
        case "done": 
          status_formatted="Done";
          break;  
      }
    return status_formatted;
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

table{
  width:85vw;
  }
th,tr,td {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 10px;
    }
</style>
