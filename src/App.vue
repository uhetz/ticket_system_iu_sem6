<template>
  <div class="vue-template">
    <!-- Navigation -->
    <nav
      class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
    >
      <div class="container">
         <p class="page-info"><a href="/home"  target="_self" >Ticket System</a></p>
        <!--<a href="/home" class="page-info" target="_blank" >Ticket System</a>  -->
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/"
              >Sign up</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'About',
    created(){
        document.title = "Ticket System";
        document.name = "Ticket System";
        //document.cookie.set("keyName", keyValue, "expiring time") //timeout for password?
    }
  }
</script>
  