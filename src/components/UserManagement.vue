<template>
  <div class="home">
    <h1>{{ msg }}</h1>
   <table>
  <tr>
    <th>User ID</th>
    <th>Name</th>
    <th>Surname</th>
    <th>Email</th>
    <th>Berechtigung</th>
  </tr>
  <tr>
    <td><a href="/editUser?Userid=U001">U001</a></td>
    <td>User 1</td>
    <td>UserSurname1</td>
    <td>User1@example.com</td>
    <td>Admin</td>
  </tr>
  <tr>
    <td><a href="/editUser?Userid=U002">U002</a></td>  <!-- <td> <a href="/editTicket?id={{tickets.id}}">{{tickets.id}}</a></td>   -->
    <td>User 2</td>
    <td>UserSurname2</td>                        <!-- {{tickets.name}}  -->
    <td>User2@example.com</td>           <!-- {{user.email}}  -->
    <td>Admin</td>                         <!-- {{user.Berechtigung}}  -->
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
