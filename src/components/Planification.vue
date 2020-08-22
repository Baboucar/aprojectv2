<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="center__text">PLANIFICATION DE VOS CAMPAGNES SMS</h1>
      <p>
        Envoyez vos campagnes immédiatement ou planifiez vos envois à l’avance.
        L’envoi par tranches horaires permet même de diffuser votre message sur
        une période donnée, et grâce à l’option campagne anniversaire, vous
        pouvez souhaiter un anniversaire ou lancer une communication spécifique
        en fonction d’une colonne date de votre fichier client.
      </p>
    </section>
    <div class="two__cards sixty__container">
      <div class="card">
        <img
          class="card__image"
          src="/../images/planification/ENVOI-IMMEDIAT.png"
          alt="planification"
        />
        <div class="card__details">
          <h3>ENVOI IMMÉDIAT</h3>
          <p>
            Envoyez vos campagnes instantanément à vos listes de contacts. Dès
            que vous validez votre campagne SMS, les envois immédiats sont pris
            en charge par notre plateforme et les premiers SMS arrivent sur le
            téléphone de vos contacts quelques secondes après seulement.
          </p>
        </div>
      </div>

      <div class="card">
        <img
          class="card__image"
          src="/../images/planification/ENVOI-DIFFERE.png"
          alt="planification"
        />
        <div class="card__details">
          <h3>ENVOI DIFFÉRÉ</h3>
          <p>
            Programmez vos campagnes SMS à l’avance pour que l’envoi soit
            déclenché à une date et heure précise. Les campagnes programmées
            sont visibles dans un endroit dédié de votre espace client et vous
            pouvez les annuler jusqu’à 15 minutes avant l’envoi.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          class="card__image"
          src="/../images/planification/ENVOI-PAR-TRANCHES-HORAIRES.png"
          alt="planification"
        />
        <div class="card__details">
          <h3>ENVOI PAR TRANCHES HORAIRES</h3>
          <p>
            Répartissez votre envoi sur une plage horaire définie.
            Servicesmsm.sn se charge de répartir les contacts de votre fichier
            client sur la période définie, et un simulateur vous permet de
            connaître le nombre de contacts qui recevront le SMS sur chaque
            période.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          class="card__image"
          src="/../images/planification/ENVOI-ANNIVERSAIRE.png"
          alt="planification"
        />
        <div class="card__details">
          <h3>ENVOI ANNIVERSAIRE</h3>
          <p>
            En créant une campagne anniversaire, servicesms.sn se charge
            d’envoyer les SMS aux contacts dont c’est l’anniversaire de J-7 à J,
            en fonction des paramétrages que vous aurez choisis. Programmer des
            envois hebdomadaires, mensuels ou annuels.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";
export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
</style>
