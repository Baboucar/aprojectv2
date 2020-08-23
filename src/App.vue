<template>
  <div id="app">
   
    <router-view/>
    
  </div>
</template>
  <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5f4210031e7ade5df443266f/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
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
