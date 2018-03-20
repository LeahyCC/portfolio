<template>
  <div id="app" class="wrapper">
    <nav>
      <div v-on:click="navFilter" class="nav-heading">
        <icon v-show="!navActive" class="nav-icon" name="folder"></icon>
        <icon v-show="navActive" class="nav-icon" name="folder-open"></icon>
        <span>Navigation</span>
      </div>
      <div v-bind:class="{navOpen: navActive}" class="nav-body">
        <ul>
          <li v-bind:class="{ navPageActive: $route.name === 'Index' }"><router-link to="/">Resume</router-link></li>
          <li v-bind:class="{ navPageActive: $route.name === 'Portfolio' }"><router-link to="portfolio">Portfolio</router-link></li>
          <li v-bind:class="{ navPageActive: $route.name === 'Personal' }"><router-link to="personal">Personal</router-link></li>
        </ul>
      </div>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      navActive: false
    }
  },
  methods: {
    navFilter: function () {
      this.navActive = !this.navActive
    }
  }
}
</script>
