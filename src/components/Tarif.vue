<template>
  <div>
    <Navigation />
    <div class="fix__position section__container">
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
        <img src="/../images/IIMAGE NOS TARIFS.jpg" class="img__responsive" />
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
  data() {
    return {};
  },
  components: {
    Navigation,
    Footer
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.revolution{
    background:$color-tertiary;
}
.head {
  background: $color-grey;

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
}
</style>
