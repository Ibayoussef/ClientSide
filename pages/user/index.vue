<template>
  <div>
        <div class="card row justify-content-center" style="width: 50%;" >
  <article class="card-body">
	<div class="form-row">
		<div class="col form-group">
			<label>First name </label>
		  <div class="col bg-dark text-light">{{user.firstname}}</div>
		</div>
		<div class="col form-group">
			<label>Last name</label>
   <div class="col bg-dark text-light">{{user.lastname}}</div>
  	</div>
	</div>
	<div class="form-group">
		<label>Email address</label>
  <div class="col bg-dark text-light">{{user.email}}</div>
	</div>
		<div class="form-group ">
		  <label>Gender</label>
    <div class="col bg-dark text-light ">{{user.gender}}</div>
		</div>
	<div class="form-row">
		<div class="form-group ">
		  <label>City</label>
    <div class="col bg-dark text-light ">{{user.adresse}}</div>
		</div>
		<div class="form-group ">
		  <label>Country</label>
  <div class="col bg-dark text-light">{{user.conso}}</div>
		</div>
	</div>

  </article>
  </div>
  </div>
</template>

<script>
  export default {

  }
</script>
