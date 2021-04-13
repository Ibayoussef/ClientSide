<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <nuxt-link class="navbar-brand" to="/">ENJY</nuxt-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="navbar-nav ml-auto" id="navbarScroll">
           <li class="nav-item">
         <nuxt-link class="nav-link"  to="/">Home</nuxt-link>
      </li>
     <li class="nav-item">
      <nuxt-link class="nav-link" v-if="authenticated" to="/dashboard">dashboard</nuxt-link>
     </li>
<li class="nav-item">

<nuxt-link class="nav-link" v-if="!authenticated" to="/">Login</nuxt-link>
<nuxt-link class="nav-link" v-if="authenticated" to="/user">{{user.lastname}} {{user.firstname}}</nuxt-link>
</li>
<li class="nav-item">

<a @click.prevent="logout" v-if="authenticated" class="nav-link" style="cursor: pointer;">Logout</a>
</li>
</ul>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>


