<template>
  <div id="app">
    <div id="nav">
    <router-link to="{ name: 'EventList'}">Events</router-link> |
    <router-link to="{ name: 'AbaoutView'}">About</router-link>
    </div>
    <h1>Eventos para todos</h1>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
 
}

nav {
  padding: 30px;
  
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #2c3e50;
}

</style>
