<template>
  <div>
    <Navigation />
    <section class="section__container top__container center__text">
      <h1 class="spacer-2 ">
        Métiers : les professionnels et les particulier <br />
        utilisent Service-SMS pour leur activité SMS pro au quotidien
      </h1>

      <h3>
        Découvrez le modèle de SMS professionnel parfait pour votre entreprise
      </h3>

      <h3>
        Inspirez-vous d'exemples de SMS professionnel pour atteindre vos
        objectifs
      </h3>

      <div class="model__card">
        <div class="card">
          <img class="card__image" src="/../images/teach-80x80.gif" alt="" />
          <p class="card__description">SMS pour le milieu scolaire</p>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/group-80x80.gif" alt="" />
          
          <router-link to="/association" class="card__description">Asso, organisations professionnelles</router-link>
        </div>
        <div class="card">
          <img
            class="card__image"
            src="/../images/icone_transport-logistique.gif"
            alt=""
          />
         
          <router-link to="/logistique" class="card__description">Logistique et transports</router-link>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/boutique.gif" alt="" />
          <router-link to="/commerce" class="card__description">Commerces, boutiques</router-link>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/marketing.gif" alt="" />
          <p class="card__description">Marketing et communication</p>
        </div>

        
        <div class="card">
          <img class="card__image" src="/../images/cafe.gif" alt="" />
          <router-link to="/cafe" class="card__description">Cafés, Hôtels, Restaurants</router-link>
        </div>

        <div class="card">
          <img class="card__image" src="/../images/local.gif" alt="" />
       
           <router-link class="card__description" to="/collective"> Collectivités locales, mairies, régions</router-link>
          
        </div>
        <div class="card">
          <img class="card__image" src="/../images/car.gif" alt="" />
          <p class="card__description">Professionnels de l’automobile</p>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/sante.gif" alt="" />
          <p class="card__description">Professions de santé</p>
        </div>

        <div class="card">
          <img class="card__image" src="/../images/tourist.gif" alt="" />
          <p class="card__description">SMS pour le Tourisme</p>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/recruit.gif" alt="" />
          <p class="card__description">SMS pour le recrutement</p>
        </div>
         <div class="card">
          <img class="card__image" src="/../images/immoble.gif" alt="" />
          <p class="card__description">SMS pour l'immobilier</p>
        </div>
         <div class="card">
          <img class="card__image" src="/../images/vote.gif" alt="" />
          <p class="card__description">SMS Parti Politique</p>
        </div>
         <div class="card">
          <img class="card__image" src="/../images/environment.gif" alt="" />
          <p class="card__description">SMS Evènementiel</p>
        </div>
        
         <div class="card last__card">
          <img class="card__image" src="/../images/porter.gif" alt="" />
          <p class="card__description">SMS pour prêt-à-porter</p>
        </div>
      </div>
    </section>
    <Revolution/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Revolution from './Revolution';
import Footer from './Footer';
export default {
  components: {
    Navigation,
    Revolution,
    Footer
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.card {
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  margin-top: 2rem;
}
.card__description{
     border-bottom: 4px solid $color-tertiary;
     border-width: 10px;
     text-align: center;
     font-weight: bolder;
     display:inline-block;
     text-decoration: none;
     color: #000;
}
@media (min-width: 64rem) {
  .metres__head {
    top: 2rem;
  }
  .model__card{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
      
  }

  .last__card{
      margin-bottom: 2rem;

  }
}
</style>
