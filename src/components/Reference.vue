<template>
    <div>

  <Navigation/>
  <section class="top__container section__container">
    <h1 class="center__text referene__heading">NOS REFERENCES</h1>
    <div class="reference__images">
     <img src="/../images/logo psej.png" class="img__resposive referene__image" alt="" srcset="">
    </div>
    </section>
    <Footer/>
  </div>
    
</template>

<script>
import Navigation from './Navigation';
import Footer from './Footer';

    export default {
     components:{
         Navigation,
         Footer
     }        
    }
</script>

<style lang="scss" scoped>
.referene__image{
    display: block;
    margin: 0 auto;
}
   @media(min-width: 64rem){
       .referene__heading{
           padding: 4rem;
       }
       .reference__images{
           margin-top: 4rem;
       }
   }
</style>