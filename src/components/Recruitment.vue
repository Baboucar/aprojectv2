<template>
  <div>
    <Navigation />
    <div class="top__container section__container">
      <section class="recruitment ">
        <h2 class="center__text recruitment__header">SERVICE-SMS RECRUTE</h2>
        <div class="sixty__container">
          <p class="bold__text">
            N’attendez pas les offres d’emploi, envoyez-nous directement votre
            candidature spontanée !
          </p>
          <h2>Rejoignez-nous</h2>
          <p>
            Vous souhaitez intégrer une entreprise pionnière et novatrice ?
            <br />
            Travailler dans un cadre dynamique et entreprendre de nouveaux
            <br />
            challenges ? Si vous êtes passionné(e) par le digital et les <br />
            nouvelles technologies, si vous êtes curieux (se) et aimez le <br />
            travail en équipe, et si vous souhaitez rejoindre l’un des leaders
            <br />
            du marché sénégalais incontesté en matière de communication mobile
            <br />
            service-sms a sûrement un poste pour vous !
          </p>
          <h2>Equipe Commerciale et Marketing :</h2>
          <ul class="recruitment__listing">
            <li class="listing">
              - Commercial Stagiaire Pré-Embauche
              <span class="equip__link" @click="open = true">
                (voir offre)</span
              >
            </li>
            <li class="listing">
              - Stagiaire en Marketing Digital Pré-Embauche
              <span class="equip__link" @click="secondopen = true"
                >(voir offre)</span
              >
            </li>
            <h3>Equipe Service clients :</h3>
            <li class="listing">
              - Customer Success Manager - Responsable relation et satisfaction
              client
              <span class="equip__link" @click="thirdopen = true"
                >(voir offre)</span
              >
            </li>
          </ul>
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
            <p>
              Stage temps plein
            </p>
            <h3>Description de la mission :</h3>
            <p>
              Vous assurez le développement commercial de SERVICE-SMS. <br />
              Pour cela, vous êtes accompagné dans votre prospection
              téléphonique par <br />
              l’entreprise (formation initiale, soutien marketing, CRM, aide à
              la prospection, etc…
            </p>
            <h3>Poste</h3>
            <p>
              Ce stage est un vrai tremplin pour intégrer à terme la société en
              CDI
            </p>
            <p>
              De formation commerciale, vous avez idéalement une première
              expérience Vous êtes :
            </p>
            <li>Rigoureux, méthodique, et très autonome</li>
            <li>A l’aise au téléphone</li>
            <li>Motivé et tenace, vous êtes force de proposition</li>
            <li>Passionné d’Internet</li>
            <li>Vous maitrisez les outils de bureautique.</li>
            <li>
              Vous recherchez une opportunité d’avoir une mission à
              responsabilité au sein d’une structure jeune et dynamique.
            </li>
            <li>Période : De 4 à 6 mois dès que possible</li>
            <li>Rémunération : Légale + repas + Primes sur objectif</li>

            <router-link class="btn__apply" to="/form"
              >Postuler à cette offre</router-link
            >
          </vue-modaltor>

          <vue-modaltor :visible="secondopen" @hide="hideModal">
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
            <p>
              Vous souhaitez intégrer une société leader des solutions de mobile
              messaging, à l'esprit jeune et dynamique. Vous souhaitez
              bénéficier d'une diversité dans vos missions, avoir une vision
              globale de votre métier et prendre des décisions stratégiques.
            </p>
            <p>
              Vous adorez votre métier et cherchez un stage pré-embauche qui
              vous fera évoluer en responsabilité et en rémunération. Si tout
              cela vous intéresse, nous aimerions tellement que vous nous
              rejoignez dans notre aventure !
            </p>
            <h3>Missions :</h3>
            <p>
              Accompagner la mise en œuvre du plan marketing d’acquisition B2C
              afin de soutenir la croissance commerciale de l'entreprise :
            </p>
            <p>
              Développer l’image de marque de l’entreprise sur internet à
              travers l’animation des communautés (Facebook, Instagram, Twitter,
              LinkedIn, etc.) ;
            </p>

            <li>
              Prendre en charge la réalisation des supports de communication ;
            </li>
            <li>
              Création de contenu pour le site Internet, blogs et les réseaux
              sociaux,
            </li>
            <li>Accompagnement de la force de vente sur les parutions media</li>
            <li>Suivi des clients et analyse de leurs attentes et besoins.</li>
            <h3>Expérience :</h3>
            <li>
              Niveau de Français ou Anglais très courant (si les 2 c'est super)
            </li>
            <li>
              Formation Bac+ 3/4, communication, marketing et/ou publicité
            </li>
            <li>Une première expérience est un atout</li>
            <li>
              Grande qualité relationnelle et bonnes notions techniques de
              l’univers web
            </li>
            <li>Maîtrise du Pack Office</li>
            <li>Aisance rédactionnelle Compétences :</li>
            <li>Organisation et rigueur sans faille</li>
            <li>Très bon relationnel</li>
            <li>Polyvalence</li>
            <li>Autonomie</li>
            <li>Esprit d’initiative</li>
            <h3>Poste :</h3>
            <li>Prise de poste : Immédiate</li>
            <li>
              Rémunération mensuelle : Base fixe + primes (Durée du stage 6
              mois)
            </li>
            <p>
              Nous offrons une réelle opportunité d’embauche si le stage a été
              concluant.
            </p>

            <router-link class="btn__apply" to="/form"
              >Postuler à cette offre</router-link
            >
          </vue-modaltor>

          <vue-modaltor :visible="thirdopen" @hide="hideModal">
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
            <p>
              Rattaché au département commercial, vous travaillerez en
              collaboration avec les équipes des commerciaux et l’équipe
              marketing afin d’accompagner au mieux les clients et d’améliorer
              leur satisfaction. Organisé, dynamique, positif et bon
              communiquant, vous assurez le suivi et l’interaction avec les
              clients dont vous êtes en charge en développant une excellente
              relation avec eux.
            </p>
            <p>Vous intervenez sur les missions suivantes :</p>
            <li>
              Être à l’écoute du client afin de comprendre, détecter et orienter
              leurs besoins
            </li>
            <li>Elaborer une stratégie de fidélisation</li>
            <li>
              Accompagner et conseiller le client sur les produits afin
              d’optimiser leur satisfaction
            </li>
            <li>
              Contribuer au développement des services apportés aux clients
            </li>
            <li>
              Proposer des pistes d’amélioration aux commerciaux en fonction des
              retours clients
            </li>
            <p>
              Profil recherché :
            </p>
            <li>
              Vous êtes diplômé d’un Bac +3 en école de communication, de
              commerce, avec une spécialité marketing, communication, digital…
            </li>
            <li>
              Vous avez 3 ans d’expérience dans le marketing ou le commerce
            </li>
            <li>Très bon relationnel, agilité, force de proposition</li>
            <li>Vous avez une très bonne communication orale et écrite</li>

            <p>
              Ce poste est à pourvoir dès que possible.<br />
              On vous attend !
            </p>
            <h3>Niveau hiérarchique</h3>
            <p>Premier emploi</p>
            <h3>Secteur</h3>
            <li>Logiciels informatiques</li>
            <li>Télécommunications</li>
            <h3>Type d’emploi</h3>
            <p>Temps plein</p>
            <h3>Fonctions</h3>

            <li>Service clients</li>
            <li>Marketing</li>
            <li>Développement commercial</li>
            <router-link class="btn__apply" to="/form"
              >Postuler à cette offre</router-link
            >

            <p class="bold__details">
              Postulez vite, nous attendons votre CV !
            </p>
          </vue-modaltor>
        </div>
      </section>
      <Footer />
    </div>
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
      secondopen: false,
      thirdopen: false,
    };
  },
  methods: {
    hideModal() {
      this.open = false;
      this.secondopen = false;
      this.thirdopen = false;
    },
  },
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.btn__apply {
  color: $color-tertiary;
  background-color: transparent;
  border: 2px solid $color-tertiary;
  text-transform: uppercase;
  padding: 10px 15px;
  display: inline-block;
  text-decoration: none;

  line-height: 24px;
  border-radius: 50px;
  font-weight: 400;
  margin: 1rem;
  cursor: pointer;
  touch-action: manipulation;
  &:hover {
    background: $color-tertiary;
    color: $color-white;
  }
}
li {
  list-style-type: none;
}
.recruitment__header {
  background: $color-tertiary;
  color: $color-white;
  padding: 2rem;
}
.listing {
  list-style-type: none;
  font-weight: bold;
  padding-left: 0.5rem;
}
.equip__link {
  color: $color-tertiary;
  text-decoration: underline;
  cursor: pointer;
}
.bold__text {
  font-weight: bold;
}
@media (min-width: 64rem) {
  .recruitment__header {
    padding: 4rem;
    font-size: 2rem;
  }
  .btn__apply {
    font-size: 20px;
  }
  .recruitment__listing {
    margin-bottom: 4rem;
    margin-top: 2rem;
  }
}
</style>
