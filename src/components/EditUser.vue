<template>
  <div class="vue-template">
    <form id="editTicket" action="" method="POST"> <!-- Action URL -->
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
        <label> Berechtigung</label>
        <input type="text" class="form-control form-control-lg" id="permission" required />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Submit Changes
      </button>
    </form>
  </div>
</template>

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