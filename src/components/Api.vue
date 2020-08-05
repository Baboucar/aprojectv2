<template>
  <div>
    <Navigation />
    <section class="section__container seventy__container ">
      <h1 class="metres__head center__text fix__position">SMS via API</h1>
      <p class="spacer-1">
        Vous êtes développeur web pour une entreprise ou représentez une agence
        de communication ou marketing ? Intégrez le
        <strong> marketing SMS </strong> à la liste de vos services !
      </p>
      <p>
        Notre interface API est utilisée pour intégrer les capacités du service
        de distribution de Servicesms.sn aux projets personnels des clients.
      </p>

      <p>
        L'API est conçue pour les développeurs et est accompagnée d&#39;une
        documentation détaillée.
      </p>
      <p>
        Notre <strong>API SMS </strong> permet d'effectuer des actions SMS à un
        système informatique existant. Que ce soit pour envoyer des campagnes
        depuis un logiciel de caisse, ou des notifications pour les clients d'un
        site internet de vente en ligne, nos techniciens vous assisteront dans
        la mise en place des fonctionnalités de l'API.
      </p>
    </section>
    <section class="section__container seventy__container ">
      <h1 class="center__text">
        Comment automatiser les SMS à votre logiciel ?
      </h1>
      <div class="cards">
        <div class="card">
          <img class="card__image" src="/../images/one.png" alt="" />
          <p class="card__details">
            Choisissez l’API adaptée à vos besoins.
          </p>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/two.png" alt="" />
          <p class="card__details">
            Inscrivez-vous gratuitement sur servicesms.sn
          </p>
        </div>

        <div class="card">
          <img class="card__image" src="/../images/three.png" alt="" />
          <p class="card__details">
            Connectez-vous sur notre plateforme.
          </p>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/four.png" alt="" />
          <p class="card__details">
            Choisissez l’API adaptée à vos besoins.
          </p>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/five.png" alt="" />
          <p class="card__details">
            Vos SMS sont désormais automatisés !
          </p>
        </div>
      </div>
      <div class="band spacer-1">
        <p class="band__text">
          Pour en savoir plus et discuter de comment nous pourrions travailler
          ensemble
        </p>
        <div class="center__button band__text">
          <button class="revolution__btn btn spacer-1">
            Contactez-nous !
          </button>
        </div>
      </div>
      <div>
        <h2 class="center__text">
          Vous souhaitez découvrir notre document API ? <br />
          Cliquez sur le bouton ci-dessous
        </h2>
         <div class="center__button band__text">
            <button class="revolution__btn btn spacer-1">
              VOIR LA DOCUMENTATION
            </button>
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
}
.card__details {
  font-weight: bold;
}
.band {
  background: $color-tertiary;
  color: $color-white;
  font-weight: bolder;
  padding: 4rem;
  &__text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (min-width: 64rem) {
}
</style>
