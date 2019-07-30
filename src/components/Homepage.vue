<template>
    <div>
        <Navigation/>
       <section class="sms__pro section__container spacer-2">
           <div>
      
           <p class="solution spacer-1">SOLUTION PRO</p>
           <h1 class="title">
               Plateforme d’envoi de SMS
           </h1>

           <p class="sms__description">
               La solution simple et rapide pour envoyer vos messages dans le monde entier en quelques secondes.
           </p>
              <button class="btn "> ESSAYEZ GRATUITEMENT</button>
                     
           </div>
              <div class="phone spacer-2">
                  <img class="img" src="/../images/Iphone.png" alt="iphone">
              </div>
       </section>
    </div>
</template>

<script>
import Navigation from './Navigation';
    export default {
      components:{
          Navigation
      }
        
    }
</script>

<style lang="scss" scoped>
@import  '../assets/base.scss';

.solution{
    font-weight: bold;
    
}

.btn{
    border: none;
    padding: 1.3rem;
    border-radius: 25px;
    background: $color-secondary;
    color: $color-white;
    font-weight: bold;
    font-size: .7rem;

}

@media(min-width: 64rem){
    .sms__pro{
        
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
}

</style>