<template>
    <footer class="footer section__container">
        <div>
         <h3 class="center__text footer__title">Octopush</h3>
         <p>Plateforme d’envoi de SMS en masse pour les professionnels</p>
        </div>
  
   
   

   

    <nav class="footer__nav">
         <h3 class="">Informations</h3>
         <router-link class="footer__navlinks" to="">Qui sommes nous</router-link>
         <router-link class="footer__navlinks" to="">Comment ça marche</router-link>
         <router-link class="footer__navlinks" to=""> Ils nous font confiance</router-link>
         <router-link class="footer__navlinks" to=""> CGU</router-link>
         <router-link class="footer__navlinks" to="">    Politique de confidentialité</router-link>
         <router-link class="footer__navlinks" to=""> Octopush recrute</router-link>
         <router-link class="footer__navlinks" to="">Contactez-nous</router-link>
    </nav>

    <div>
        <h3 class="">Certifications</h3>
        <div class="flex__image">
        <div>
            <img class="`" src="/../images/octopush-GDPR-e1554162742598.png" alt="">
        </div>
        <div>
            <img class="image__certificate" src="/../images/octopush-iso-27001.png" alt="">
        </div>
        </div>
    </div>

    </footer>
</template>

<script>

export default {

}
</script>

<style>
@import "../assets/base.scss";


.footer__navlinks{
    display: block;
    text-decoration: none;
    color: #333;
}

.flex__image{
    display: flex;
    
}
.image__certificate{
    padding-left: 2rem;
}

@media(min-width:64rem){
    .footer{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .footer__title{
        text-align: left;
    }

}

</style>
