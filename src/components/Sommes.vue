<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details blogs">
      <h1 class="about__title ">Qui sommes-nous ?</h1>
      <p>Service-sms, votre plateforme SMS 100% Sénégalaise !</p>
      <p>
        SERVICE-SMS est, depuis 2018, l’un des leaders sénégalais incontesté en
        matière de communication mobile. Spécialisée dans l’envoi de SMS en
        masse pour les professionnels et particuliers, leader des solutions de
        mobile messaging, accompagne les entreprises dans leur quête de
        performance, grâce à des solutions de communications puissantes,
        innovants et cherche à toujours vous offrir le meilleur de la
        technologie pour vos campagnes SMS et vos opérations de marketing
        mobile.
      </p>
      <h1 class="about__title">
        Vos messages délivrés sur tous les canaux, partout au Sénégal. Nos
        <br />
        solutions de communication vont vous simplifier la vie.
      </h1>

      <p>
        Nous proposons une offre transversale qui permet à nos clients de
        bénéficier des meilleurs outils de marketing mobiles existants
        (plateforme professionnelle d’envoi de SMS en masse, SMS enrichi,
        messages vocaux, mailing SMS, location de bases de données qualifies,
        vote par SMS, sondage par SMS…)
      </p>
      <vue-modaltor :visible="open" @hide="hideModal">
        <template slot="close-icon">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            width="20"
            height="20"
            xml:space="preserve"
          >
            <path
              class="st0"
              fill="#0074D9"
              d="M8.7,7.6c-0.4-0.4-1-0.4-1.4,0C6.9,8,6.9,8.6,7.3,9l11,11l-11,11c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0 l11-11l11,11c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-11-11L32,9c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-11,11L8.7,7.6z"
            />
          </svg>
        </template>
        <p class="center__text">
          Deux jeunes start-up Sénégalais chevronnés et diplômés comme <br />
          Technicien spécialisé en Administration Système et Réseaux <br />
          Informatique au Maroc. Voulant créer leur propre entreprise, qu’ils
          <br />
          décident de se lancer dans leur propre aventure en créant Service-sms,
          <br />
          fort de ses expériences techniques.
        </p>
        <p class="center__text">
          Notre motivation, répondre aux attentes de chaque client, dans le
          <br />
          souci du détail. Au cœur toujours plus loin pour offrir le meilleur de
          <br />
          la technologie et de la relation client.
        </p>
      </vue-modaltor>
      <div class="engagement">
        <h1 class="about__title center__text">Nos engagements</h1>
        <div class="grid__engagement">
          <div>
            <h3>Une plate-forme performante:</h3>
            <ul>
              <li>Disponible 24h/24</li>
              <li>Facile d’utilisation</li>
              <li>Une gamme de solution proposée</li>
            </ul>
          </div>

          <div>
            <h3>Une équipe incroyable :</h3>
            <ul>
              <li>Account Manager dédié</li>
              <li>Support durant votre campagne</li>
              <li>Conseils Personnalisés</li>
            </ul>
          </div>
          <div>
            <h3>Une solution sûre :</h3>
            <ul>
              <li>Plate-forme (SaaS) sécurisée</li>
              <li>Respect des règles PDCP</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="team">
        <h2 class="about__title center__text">Nos équipes</h2>
        <h2 class="center__text">Rencontrez l&#39;équipe Service-SMS</h2>
        <p class="center__text">
          Nous sommes une équipe composée de membres hautement compétents. Nous
          <br />
          sommes des individus passionnés et déterminés avec un grand esprit
          d&#39;équipe.
        </p>

        <div class="profiles">
          <div class="profile__president">
            <img
              src="/../images/profile/sylla-2.jpg"
              alt=""
              class="profile__image"
            />
            <p to="" class="profile__name" @click="open = true">
              Sylla Harouna
            </p>
            <p class="profile__title">Président Fondateur</p>
          </div>
          <div class="other__profile">
            <h2 class="about__title center__text spacer-2 catogery__header">
              Equipe commerciale
            </h2>
            <div class="two__grid">
              <div class="profile">
                <img
                  src="/../images/profile/sylla-2.jpg"
                  alt=""
                  class="profile__image"
                />
                <router-link to="" class="profile__name"
                  >Nom et Prénom</router-link
                >
                <p class="profile__title">Responsable communication Digitale</p>
                <router-link to=""
                  ><img src="/../images/profile/linkedin.png" alt="" srcset=""
                /></router-link>
              </div>

              <div class="profile">
                <img
                  src="/../images/profile/sylla-2.jpg"
                  alt=""
                  class="profile__image"
                />
                <router-link to="" class="profile__name"
                  >Nom et Prénom</router-link
                >
                <p class="profile__title">Responsable commerciale</p>
              </div>
            </div>
          </div>

          <div class="other__profile">
            <h2 class="about__title center__text spacer-2 catogery__header">
              Equipe Marketing &amp; Communication
            </h2>
            <div class="two__grid">
              <div class="profile">
                <img
                  src="/../images/profile/sylla-2.jpg"
                  alt=""
                  class="profile__image"
                />
                <router-link to="" class="profile__name"
                  >Nom et Prénom</router-link
                >
                <p class="profile__title">Responsable Marketing</p>
                <router-link to=""
                  ><img src="/../images/profile/linkedin.png" alt="" srcset=""
                /></router-link>
              </div>

              <div class="profile">
                <img
                  src="/../images/profile/sylla-2.jpg"
                  alt=""
                  class="profile__image"
                />
                <router-link to="" class="profile__name"
                  >Nom et Prénom</router-link
                >
                <p class="profile__title">Assistante Marketing</p>
              </div>
            </div>
          </div>
          <div class="profile__president spacer-2">
            <h2 class="about__title center__text spacer-2 catogery__header">
              Equipe Service Clients
            </h2>

            <img
              src="/../images/profile/sylla-2.jpg"
              alt=""
              class="profile__image"
            />
            <router-link to="" class="profile__name">Nom et Prénom</router-link>
            <p class="profile__title">Responsable Service Clients</p>
          </div>

          <div class="other__profile">
            <h2 class="about__title center__text spacer-2 catogery__header">
              Equipe Technique
            </h2>
            <div class="two__grid">
              <div class="profile">
                <img
                  src="/../images/profile/ba2.png"
                  alt=""
                  class="profile__image"
                />
                <router-link to="" class="profile__name"
                  >Hamady Dit <br />
                  El Hadj Banoumou Ba</router-link
                >
                <p class="profile__title">Co-fondateur Technicien Support</p>
                <router-link to=""
                  ><img src="/../images/profile/linkedin.png" alt="" srcset=""
                /></router-link>
              </div>

              <div class="profile">
                <img
                  src="/../images/profile/BABU.png"
                  alt=""
                  class="profile__image"
                />
                <router-link to="" class="profile__name"
                  >Baboucarr Drammeh</router-link
                >
                <p class="profile__title">Développeur d’applications</p>
                <router-link to=""
                  ><img src="/../images/profile/linkedin.png" alt="" srcset=""
                /></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navigation from "./Navigation";
import Footer from "./Footer";
import VueModalTor from "vue-modaltor";
Vue.use(VueModalTor);
export default {
  data() {
    return {
      open: false,
    };
  },
  components: {
    Navigation,
    Footer,
  },
  methods: {
    hideModal() {
      this.open = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.about__title {
  color: $color-tertiary;
}
.profile__president,
.other__profile {
  text-align: center;
}
.profile__image {
  display: block;
  margin: 0 auto;
  transition: transform .2s;

  &:hover{
    transform: scale(1.1); 
  }
}
.catogery__header {
  border-bottom: 2px solid $color-tertiary;
  margin-top: 2rem;
}

.profile__name {
  display: block;
  text-decoration: none;
  font-weight: bold;
  color: $color-tertiary;
  font-size: 1.2rem;
  cursor: pointer;
}

.profile__title {
  font-weight: bolder;
  color: #7a7a7a;
}

@media (min-width: 64rem) {
  .grid__engagement {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
  .catogery__header {
    width: 40%;
    margin: 0 auto;
  }
  .two__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid: 2rem;
    margin-top: 3rem;
  }
}
</style>
