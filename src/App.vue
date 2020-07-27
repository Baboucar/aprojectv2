<template>
  <div id="app">
   
    <router-view/>
    
  </div>
</template>
  
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Livvic&display=swap');
#app {
    font-family: 'Livvic', sans-serif;
     -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.7;
  
 
}
#nav {
  a {
    font-weight: bold;
    color: #226bb4;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
