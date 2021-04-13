<template>
<div class="card" style="width: 50%;">
  <div class="card-body">
    <form @submit.prevent="submit">
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" v-model.trim="form.email" class="form-control" name="email" id="email" aria-describedby="emailHelp" autofocus>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    <small class="form-text text-danger" v-if="errors.email">{{errors.email[0]}}</small>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" v-model.trim="form.password" class="form-control" name="password" id="password" autofocus>
    <small class="form-text text-danger" v-if="errors.password">{{errors.password[0]}}</small>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Remember me</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<br>
  </div>
  </div>
</template>

<script>
  export default {
    middleware: ['guest'],
    data() {
      return {
        form : {
          email: '',
          password: ''
        }
        }
    },
    methods: {
      async submit() {
        await this.$auth.loginWith("local", {
          data: this.form
        })
        .catch(err => console.log(err.response.data))
      if(this.$auth.loggedIn) {
          this.$router.push('/')
      }
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
