<template>
  <div>
    <Navigation />
    <div class="top__container section__container">
      <section class="head">
        <div class="">
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

          <p class="sub__paragraph">
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
            <p class="typing sub__paragraph"></p>
          </vue-typed-js>
        </div>
      </section>

      <section class="tarrif">
        <h2 class="tarif__price sub__paragraph">Des packs adaptés à vos besoins</h2>
        <div class="terif__info">
          <h1 class="center__text tarif__header">
            NOS FORMULES D'ENVOIS DE SMS
          </h1>
          <p class="center__text tarif__description">
            Découvrez la formule de SMS adaptée à vos besoins, quelle que soit
            la fréquence et la récurrence de vos envois.
          </p>

          <table class="table first__table sixty__container">
            <thead>
              <tr>
                <th class="transparent"></th>
                <th class="transparent"></th>
                <th>
                  <span class="text">1 à 4.999 </span> <br />
                  <span class="sms">SMS</span>
                </th>
                <th>
                  <span class="text">5.000 à 9.999 </span> <br />
                  <span class="sms">SMS</span>
                </th>
                <th>
                  <span class="text">10.000 à 24.999 </span> <br />
                  <span class="sms">SMS</span>
                </th>
                <th>
                  <span class="text">25.000 à 49.999 </span> <br /><span
                    class="sms"
                    >SMS</span
                  >
                </th>
                <th>
                  <span class="text">50.000 à 99.999</span> <br />
                  <span class="sms">SMS</span>
                </th>
                <th>
                  <span class="text">100.000 à 250.000</span> <br />
                  <span class="sms">SMS</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="white"></td>
                <td class="lead">
                  <span>Tarif</span> <br />
                  <span>HT/SMS</span>
                </td>
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
                <th>
                  <span class="text">1 à 4.999 </span> <br />
                  <span class="sms">SMS</span>
                </th>
                <th>
                  <span class="text">5.000 à 9.999 </span> <br />
                  <span class="sms">SMS</span>
                </th>
                <th>
                  <span class="text">10.000 à 24.999 </span> <br />
                  <span class="sms">SMS</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tri_oran"><span class="price">28,24 F</span></td>
                <td class="tri_oran"><span class="price">27,58 F</span></td>
                <td class="tri_oran"><span class="price">26,93 F</span></td>
              </tr>
              <tr>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
              </tr>
            </tbody>
          </table>

          <div class="calculate__price center__text sixty__container">
            <div>
              <h3>Indiquez le nombre de SMS souhaités</h3>

              <input class="input" v-model="price" @keypress="onlyNumber" />
            </div>

            <div>
              <img class="svg__image" src="/../images/down-arrow.png" alt="" />
              <img
                class="next__arrow"
                src="/../images/next.svg"
                alt=""
                srcset=""
              />
            </div>

            <div>
              <h3>Notre Tarif (HT)</h3>
              <div class="tarif__result">
                <span>{{ calculatePrice }} F ({{intervalPrice}} F /SMS)</span>
              </div>
            </div>
          </div>

          <button class="tarif__btn">JE COMMANDE</button>
        </div>

        <div class="tarif__details">
          <h3 class="spacer-2">Besoin d’envoyer + de sms ?</h3>
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
            <span class="first__word"> SERVICE-SMS </span> vous propose
            plusieurs moyens de paiement pour régler votre pack de SMS ou votre
            commande. Optez pour le paiement par (WARI, VITFÈ, ORANGE MONEY,
            MASTERCARD, POSTE CASH, VISA), chèque (validation à réception du
            chèque), virement bancaire, ou prélèvement automatique.
          </p>
        </div>
        <div class="partners">
          <img
            class="img__responsive partner__image"
            src="/../images/logo-wari.gif"
            alt="wari"
          />
          <img
            class="img__responsive partner__image"
            src="/../images/mastercard.png"
            alt="mastercard"
          />
          <img
            class="img__responsive partner__image"
            src="/../images/logo-orangemoney.gif"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/logo-vite-fe.gif"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/logo-visa.gif"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/logo-postecach.gif"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/logo-cheque.png"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/logo-virement.png"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/logo-pre-auto.gif"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/logo-finmois.gif"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/logo-yup.gif"
            alt=""
          />
          <img
            class="img__responsive partner__image"
            src="/../images/wizal.gif"
            alt=""
          />
        </div>
        <div class="service__list">
          <h3>TOUS NOS PACKS SMS COMPRENNENT</h3>
          <ul class="grid__listing">
            <li>
              <img
                class="check__icon"
                src="/../images/checkicon.gif"
                alt=""
              />Gestion des contacts
            </li>
            <li>
              <img class="check__icon" src="/../images/checkicon.gif" alt="" />
              Gestion des stops
            </li>
            <li>
              <img class="check__icon" src="/../images/checkicon.gif" alt="" />
              Gestion des réponses
            </li>
            <li>
              <img
                class="check__icon"
                src="/../images/checkicon.gif"
                alt=""
              />Accusés en temps
            </li>
            <li>
              <img
                class="check__icon"
                src="/../images/checkicon.gif"
                alt=""
              />Publipostage
            </li>
            <li>
              <img
                class="check__icon"
                src="/../images/checkicon.gif"
                alt=""
              />Programmation, anniversaires
            </li>
            <li>
              <img
                class="check__icon"
                src="/../images/checkicon.gif"
                alt=""
              />Statistiques détaillées
            </li>
          </ul>
        </div>
      </section>
    </div>

   <Revolution/>

    <Footer />
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Revolution from './Revolution';
import Footer from "./Footer";
import Vue from "vue";
import VueTypeJs from "vue-typed-js";
Vue.use(VueTypeJs);
export default {
  name: "Tarif",
  data() {
    return {
      price: 1,
      click: true,
      intervalPrice: 28.24
    };
  },
  computed: {
    calculatePrice() {
      //  return (this.price *28.24).toFixed(2);
      if (this.price <= 4999) {
         this.intervalPrice = 28.24;
        return (this.price * 28.24).toFixed(2);
      } else if (this.price == 5000 || this.price <= 9999) {
         this.intervalPrice = 27.58;
        return (this.price * 27.58).toFixed(2);
      } else if (this.price == 10000 || this.price <= 24999) {
            this.intervalPrice = 26.93;
        return (this.price * 26.93).toFixed(2);
      } else if (this.price == 25000 || this.price <= 49999) {
           this.intervalPrice = 26.27;
        return (this.price * 26.27).toFixed(2);
      } else if (this.price == 50.0 || this.price <= 99999) {
            this.intervalPrice =25.58;
        return (this.price * 25.58).toFixed(2);
      } else if (this.price == 100000 || this.price <= 250000) {
         this.intervalPrice = 24.30;
        return (this.price * 24.3).toFixed(2);
      }
    },
  },
  methods: {
    onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
  },
  components: {
    Navigation,
    Footer,
    Revolution
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.terif__info {
  background-image: url("/../images/arriere-plan-eclairci.jpg");
  background-repeat: no-repeat;

  background-attachment: fixed;
  background-size: cover;

  background-position: bottom;
}
.first__table {
  display: none;
}
.second__table {
  width: 100%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

.service__list {
  li {
    list-style-type: none;
    font-weight: bold;
    font-size: 1.2rem;
    margin-left: 1rem;
  }
}
.check__icon {
  display: inline-block;
  margin-right: 0.5rem;
  margin-top: 2rem;
}

.price {
  display: block;
  padding-top: 1rem;
}
th {
  text-align: center;
  border-width: 1px;
  background: #0074d9;
  border-style: none;
  padding-top: 0.5rem;
  color: white;
}

tr {
  font-size: 0.9rem;
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
.svg__image {
  width: 50px;
  padding-top: 1rem;
}

.tarif__btn {
  border: none;
  padding: 1.3rem;
  display: block;
  margin: 0 auto;
  position: relative;
  top: 15px;
  border-radius: 2px;

  background: $color-tertiary;
  color: $color-white;
  font-weight: bold;
  font-size: 0.7rem;
  cursor: pointer;

  &:hover {
    background: #5a5cda;
    cursor: pointer;
  }
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

.next__arrow {
  display: none;
}
.tarif__subtext {
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
  padding-top: 0.5rem;
}

.white {
  background: white;
}

.tarif__description {
  padding: 1rem;
}

.input {
  border: none;
  height: 40px;
  border-radius: 4px;
  width: 90%;
}
.input:focus {
  outline: none !important;
  border-color: #0074d9;
  box-shadow: 0 0 10px #719ece;
}

.tarif__result {
  background: #0074d9;
  color: white;
  padding: 1.5rem;
  font-weight: bold;
}

@media (min-width: 40rem) {
  .next__arrow {
    display: block;
    width: 50px;
    margin: 4rem auto;
  }
  .svg__image {
    display: none;
  }
  .second__table {
    display: none;
  }
  .first__table {
    display: block;
  }
}

.center__text {
  text-align: center;
}

.head {
  background: $color-grey;
  
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
 
}

.partner__image {
  display: block;
  margin: 1rem auto;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
}

.sub__paragraph {
  font-size: 1.2rem;
  
  padding:0 1rem;
}

::placeholder {
  text-align: center;
}
.tarif__price {
  background: $color-tertiary;
  color: $color-white;
  padding: 0.5rem;
  font-size: 2rem;
}

.first__word {
  font-weight: bolder;
  background: $color-tertiary;
  color: $color-white;
}
.card {
  background: $color-grey;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
}
@media (min-width: 64rem) {
  .center__head {
    width: 50%;
    margin: 0 auto;
  }
  .tarif__header {
    padding-top: 2rem;
  }
  .partners {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
  }
  .grid__listing {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  .tarif__details {
    width: 50%;
    margin: 0 auto;
  }

  .tarif__btn {
    width: 20rem;
    padding: 1rem;
    top: 25px;
    font-size: 1.5rem;
  }
  .calculate__price {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
