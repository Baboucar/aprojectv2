<template>
  <div>
  <Navigation/>
    <div class="top__container section__container">
      <section class="head">
        <div class="center__head">
          <h1 class="header__title ">
            Tarifs SMS professionnels <br />
            Acheter vos SMS au Meilleur Tarif du Web
          </h1>
          <p class="sub__paragraph "></p>
          <vue-typed-js
            :strings="[
              `  Des paliers dégressifs en fonction de votre volume d'envoi !`,
            ]"
            :loopCount="3"
            :typeSpeed="300"
            :cursorChar="'_'"
          >
            <p class="typing sub__paragraph"></p>
          </vue-typed-js>

          <p class="">
            Aucun frais d'inscription, ni d'abonnement... vous ne <br />
            payez que les crédits SMS que vous pouvez consommer à votre rythme !
          </p>

          <vue-typed-js
            :strings="[' (durée de vie des crédits : illimitée)']"
            :startDelay="7000"
            :loopCount="3"
            :typeSpeed="260"
            :cursorChar="'_'"
          >
            <p class="typing sub__paragraph"></p>
          </vue-typed-js>
          <vue-typed-js
            :strings="['Des packs adaptés à vos besoins']"
            :startDelay="7000"
            :loopCount="3"
            :typeSpeed="270"
            :cursorChar="'_'"
          >
            <p class="typing"></p>
          </vue-typed-js>
        </div>
      </section>

      <section class="tarrif">
        <h2 class="tarif__price">Des packs adaptés à vos besoins</h2>
       <div class="terif__info">
       <h1 class="center__text tarif__header">NOS FORMULES D'ENVOIS DE SMS</h1>
    <p class="center__text tarif__description">Découvrez la formule de SMS adaptée à vos besoins, quelle que soit la
        fréquence et la récurrence de vos envois.</p>
    
        <table class="table first__table sixty__container">
        <thead>
            <tr>
                <th class="transparent"></th>
                <th class="transparent"></th>
                <th><span class="text">1 à 4.999 </span> <br> <span class="sms">SMS</span></th>
                <th><span class="text">5.000 à 9.999 </span> <br> <span class="sms">SMS</span></th>
                <th><span class="text">10.000 à 24.999 </span> <br> <span class="sms">SMS</span></th>
                <th><span class="text">25.000 à 49.999 </span> <br><span class="sms">SMS</span></th>
                <th><span class="text">50.000 à 99.999</span> <br> <span class="sms">SMS</span></th>
                <th><span class="text">100.000 à 250.000</span> <br> <span class="sms">SMS</span></th>

            </tr>

        </thead>
        <tbody>
            <tr>
                <td class="white"></td>
                <td class="lead"><span>Tarif</span> <br> <span>HT/SMS</span></td>
                <td class="tri_oran">28,24 F</td>
                <td class="tri_oran">27,58 F</td>
                <td class="tri_oran">26,93 F</td>
                <td class="tri_oran">26,27 F</td>
                <td class="tri_oran">25,58 F</td>
                <td class="tri_oran">24,30 F</td>
            </tr>
            <tr>
                <td style="background:transparent"></td>
                <td></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
            </tr>
        </tbody>

    </table>

    <table class="table second__table">
        <thead>
            <tr>
               
                <th><span class="text">1 à 4.999 </span> <br> <span class="sms">SMS</span></th>
                <th><span class="text">5.000 à 9.999 </span> <br> <span class="sms">SMS</span></th>
                <th><span class="text">10.000 à 24.999 </span> <br> <span class="sms">SMS</span></th>
              

            </tr>

        </thead>
        <tbody>
            <tr>
              
                <td class="tri_oran"><span class="price">28,24 F</span></td>
                <td class="tri_oran"><span  class="price">27,58 F</span></td>
                <td class="tri_oran"><span  class="price">26,93 F</span></td>
              
            </tr>
            <tr>
              
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
               
                 
            </tr>
        </tbody>

    </table>


    <p class="center__text tarif__subtext">(*) Ces tarifs concernent un usage vers la France Métropolitaine, pour une
        utilisation vers d'autres destinations, merci de nous contacter.</p>

        <div class="calculate__price center__text sixty__container" >
            
            <div>
                <h3>Indiquez le nombre de SMS souhaités</h3>
                
                <input   class="input" v-model="price" @keypress="onlyNumber" > 
              
            </div>
       
            <div>
                <img class="svg__image" src="/../images/down-arrow.png" alt="">
                <img class="next__arrow" src="/../images/next.svg" alt="" srcset="">
            </div>

            <div>
                <h3>Notre Tarif (HT)</h3>
                <div class="tarif__result">
                    <span>{{calculatePrice}}  F   (28,24 F /SMS)</span>
                    
                </div>
            </div>
        </div>
        <p class="center__text">N'hésitez pas à nous contacter si vous désirez un nombre plus important de SMS.
            Je commande</p>
           
       
       </div>

        <div class="tarif__details">
          <h3>Besoin d’envoyer + de sms ?</h3>
          <ul>
            <li>
              Prix dégressif selon le nombre de SMS achetés au-delà de 250 000
              SMS/an, nous contacter
            </li>
            <li>Devis et factures établis sur demande</li>
            <li>Quantités supérieures ou besoins spécifiques</li>
          </ul>
        </div>
      </section>

      <section class="benifits seventy__container">
        <h3 class="tarif__price">
          En plus de cela... Bénéficiez d'un service optimal et d'un
          accompagnement de qualité...
        </h3>

        <div class="cards">
          <div class="card">
            <img class="card__image" src="/../images/icone-inscript.png" alt />
            <div class="card__details">
              <h3 class="card__title">
                Ouverture de compte et Tests Gratuits
              </h3>
              <p>
                L'inscription et l'accès à la plateforme est Gratuit et Sans
                Engagement. 5 crédits SMS Pro vous sont offerts à l'ouverture du
                compte
              </p>
            </div>
          </div>

          <div class="card">
            <img class="card__image" src="/../images/icone-12mois.png" alt />
            <div class="card__details">
              <h3 class="card__title">
                Durée de vie illimitée des crédits !
              </h3>
              <p>
                Nous répondons à toutes vos questions.
              </p>
            </div>
          </div>

          <div class="card">
            <img
              class="card__image"
              src="/../images/icone-suptechnique.png"
              alt
            />
            <div class="card__details">
              <h3 class="card__title">
                Un support technique à votre écoute
              </h3>
              <p>
                Vous pouvez utiliser vos crédits plus d'un an après achat
              </p>
            </div>
          </div>
        </div>

        <p class="sixty__container spacer-2">
          Plusieurs formules de paiements sont disponibles. Optez pour la
          tranquillité avec le paiement en fin de mois. Je paie mensuellement ce
          que je consomme « Je m’inscris au servicesms.sn. J’utilise ensuite le
          nombre de SMS dont j’ai besoin et je reçois ma facture en fin de mois,
          uniquement pour les sms consommés. Plus besoin de passer de commande
          ni de me préoccuper de mon crédits de sms, c’est moi qui gère mes
          envois !»
        </p>

        <div class="sixty__container">
          <h3>NOS MOYENS DE PAIEMENT</h3>
          <p>
           <span class="first__word"> SERVICE-SMS </span> vous propose plusieurs moyens de paiement pour régler
            votre pack de SMS ou votre commande. Optez pour le paiement par
            (WARI, VITFÈ, ORANGE MONEY, MASTERCARD, POSTE CASH, VISA), chèque
            (validation à réception du chèque), virement bancaire, ou
            prélèvement automatique.
          </p>

       
        </div>
           <div class="partners">
            <img class="img__responsive partner__image" src="/../images/logo-wari2.jpg" alt="wari">
            <img  class="img__responsive partner__image"  src="/../images/MasterCard_Logo.svg.png" alt="mastercard">
            <img  class="img__responsive partner__image" src="/../images/orange.jpg" alt="">
              <img  class="img__responsive partner__image" src="/../images/logojonijoniori.png" alt="">
              <img  class="img__responsive partner__image" src="/../images/Visa_Logo.png" alt="">
              <img  class="img__responsive partner__image" src="/../images/logo-poste-cash ori.png" alt="">
              <img  class="img__responsive partner__image" src="/../images/paiement-cheque-logo-servicesms.png" alt="">
              <img  class="img__responsive partner__image" src="/../images/virement-bancaire-logo-services-ms.png" alt="">
              <img  class="img__responsive partner__image" src="/../images/prelevement-automatique-logo-servicesms.png" alt="">
              <img  class="img__responsive partner__image" src="/../images/fin-mois-logo-servicesms.png" alt="">
          
          </div>
      </section>

      
    </div>

    <section class="revolution spacer-1 ">
      <div class="section__container sms__revolution">
        <img
          class="img container revolution__img"
          src="/../images/LOGO-en-fond-vert.png"
          alt="revolution"
        />
        <div class="container revolution__description">
          <h2 class="revolution__title center__text">
            La révolution SMS
            à votre portée
          </h2>
          <div class="center__button">
            <button class="revolution__btn btn spacer-1">TESTEZ GRATUITEMENT</button>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from './Footer';
import Vue from "vue";
import VueTypeJs from "vue-typed-js";
Vue.use(VueTypeJs);
export default {
    name:"Tarif",
  data() {
    return {
        price:1,
        click:true
    };
  },
  computed:{
      calculatePrice(){
          return this.price * 28.24;
      },
      
  },
  methods:{
    onlyNumber ($event) {
   //console.log($event.keyCode); //keyCodes value
   let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
   if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
      $event.preventDefault();
   }
}
  }
 ,
  components: {
    Navigation,
    Footer
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.terif__info{
     background-image: url("/../images/arriere-plan-eclairci.jpg");
        background-repeat: no-repeat;
      
        background-attachment: fixed;
        background-size: cover;
    
        background-position: bottom;
}
.first__table{
        display: none;
    }
    .second__table{
        width:100%;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
      

    }

    .price{
        display: block;
        padding-top: 1rem;
    }
    th {


        text-align: center;
        border-width: 1px;
        background: #0074D9;
        border-style: none;
        padding-top: .5rem;
        color: white;

    }

    tr {
        font-size: .9rem;
    }

    .transparent {
        width: 1%;
        background-color: rgba(0, 0, 0, 0);
        border: 0px;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    td {
        vertical-align: middle;

        font-weight: bold;
        border-style: none;

        padding: 1rem;
        text-align: center;
        border-width: 1px;
    }
 .svg__image{
     width: 50px;
     padding-top: 1rem;
 
 }
 path{
    fill: blue;
  }
    .tri_oran {
        background: url(/../images/new-triangle-orange.gif) center -2px no-repeat !important;
        background-size: cover !important;
        padding-top: 1.5rem;
    }

    .tri-blanc-fin {
        background: url(/../images/triangle-blanc.png) center -2px no-repeat !important;
        background-size: contain !important;
    }

   .next__arrow{
       display: none;
   }
    .tarif__subtext{
        text-align: center;
       font-size: 12px;
      color: #606060;
    }

    .lead {
        background: white;
    }

    .sms {
        font-weight: normal;
        display: block;
        padding-top: .5rem;
    }

    .white {
        background: white;
    }

    .tarif__description {
        padding: 1rem;
    }
   
    .input{
        border: none;
        height: 40px;
        border-radius: 4px;
        width: 90%;
     

    }
    .input:focus{
      outline: none !important;
         border-color:#0074D9;
          box-shadow: 0 0 10px #719ECE;
    }

    .tarif__result{
        background: #0074D9;
        color: white;
        padding: 1.5rem;
        font-weight: bold;
    }
    
    @media(min-width: 40rem) {
        
       .next__arrow{
           display: block;
           width: 50px;
           margin: 4rem auto;
       }
       .svg__image{
           display: none;
       }
        .second__table{
            display: none;
        }
        .first__table{
            display: block;
        }
    }

   

    .center__text {
        text-align: center;
    }
.revolution{
    background:$color-tertiary;
}
.head {
  background: $color-grey;
  padding:1rem;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  padding-bottom: 1rem;
}

.partner__image{
    width:300px;
    height:190px;
    margin-top: 1rem;
     border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
}
.header__title {
  padding: 1.5rem;
  background: $color-tertiary;
  color: $color-white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
}
.sub__paragraph {
  font-size: 1.5rem;
}

::placeholder{
    text-align:center;
}
.tarif__price {
  background: $color-tertiary;
  color: $color-white;
  padding: 0.5rem;
  font-size: 2rem;
}


.first__word{
    font-weight: bolder;
    background: $color-tertiary;
    color: $color-white;
}
.card {
  background: $color-grey;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
}
@media (min-width: 65rem) {
  .center__head {
    width: 50%;
    margin: 0 auto;
  }
  .tarif__header{
      padding-top:2rem;
  }
  .partners{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
  .header__title {
    text-transform: uppercase;
    font-size: 2.4rem;
  }
  .tarif__details {
    width: 50%;
    margin: 0 auto;
  }
  
   .calculate__price{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }

  
}
</style>
