<template>
    <footer class="footer section__container">
        <div>
         <h3 class="footer__title">Produits</h3>

         <li class="footer__listings">SMS Pro</li>
         <li class="footer__listings">SMS Vocal</li>
         <li class="footer__listings">SMS Enrichi</li>
         <li class="footer__listings">Location BDD</li>
         <li class="footer__listings"> Mailing SMS</li>
         <li class="footer__listings">Sondage par SMS</li>
         <li class="footer__listings">Vote par SMS</li>
         <li class="footer__listings">Questionnaire de satisfaction <br> par sms</li>
         <li class="footer__listings">Mobile Ticketing</li>
         <li class="footer__listings">Rate'Pas votre Bus</li>

        </div>
  
   
   

   

    <nav class="footer__nav">
         <h3 class="">Notre societe</h3>
         <router-link class="footer__navlinks" to="">Qui sommes nous?</router-link>
         <router-link class="footer__navlinks" to="">Comment ça marche</router-link>
         <router-link class="footer__navlinks" to="">Nos References </router-link>
         <router-link class="footer__navlinks" to=""> Nous recrutons</router-link>
         <router-link class="footer__navlinks" to=""> FAQ</router-link>

    </nav>

    <nav class="footer__nav">
         <h3 class="">Legal</h3>
         <router-link class="footer__navlinks" to="">Mentions Legales</router-link>
         <router-link class="footer__navlinks" to="">CGU-CGV</router-link>
         <router-link class="footer__navlinks" to="">Politiques de confidentialites</router-link>
         <router-link class="footer__navlinks" to=""> Nos cookies</router-link>


    </nav>
            
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
.footer__listings{
    list-style-type: none;
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
