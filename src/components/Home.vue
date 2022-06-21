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
  </tr>
  <tr>
    <td><a href="/editTicket?id=001">001</a></td>
    <td> Alfreds Fehler</td>
    <td>ABCDEFG</td>
    <td>Open</td>
    <td>3</td>
  </tr>
  <tr>
    <td><a href="/editTicket?id=002">002</a></td>  <!-- <td> <a href="/editTicket?id={{tickets.id}}">{{tickets.id}}</a></td>   -->
    <td>Alfreds 2.Fehler</td>  <!-- {{tickets.name}}  -->
    <td>ABCDEFG</td>           <!-- {{tickets.description}}  -->
    <td>Open</td>              <!-- {{tickets.status}}  -->
    <td>3</td>                 <!-- {{tickets.prio}}  -->
  </tr>
</table>
  </div>
</template>


<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {}

  },
  mounted(){
     // axios
     //   .get('') //TODO: Get Data 
     //   .then(response => (this.tickets = response.data.data)) 
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
