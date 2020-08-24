<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="title center__text">
        Envoi SMS Pro pour les agences de recrutement
      </h1>
      <h2>Recruter et gérer son personnel via une plate-forme SMS</h2>
      <p>
        Le domaine des ressources humaines est en pleine évolution numérique,
        notamment en ce qui concerne le recrutement. Les moyens de communication
        sont de plus en plus nombreux et offrent de nouvelles possibilités pour
        gérer le personnel et les embauches. Le SMS professionnel, de masse ou
        unitaire, est aujourd’hui un véritable atout, autant pour les agences
        intérim que pour les services RH des grandes et petites entreprises.
        Avec un taux de lecture de 97%, le SMS professionnel est sans aucun
        doute le canal le plus rentable, permettant de réaliser des campagnes
        sms en quelques minutes seulement, de rappeler les entretiens aux
        candidats grâce aux alertes SMS ou de promouvoir des offres d’emplois…
        C’est un outil simple, universel et rapide.
      </p>

      <h2>
        Il existe différentes situations pour lesquelles l’envoi de SMS serait
        utile dans le domaine du recrutement. En voici quelques exemples:
      </h2>
      <p>
      Alertes offres d’emploi <br>
      Envoyer un message d’admissibilité à un candidat <br>
      Rappel de rendez-vous <br>
      Rappel de dates de mission <br>
     Conseils de préparation pour un entretien ou trouver un emploi
      </p>
      <h2>Quelques exemples de SMS :</h2>
      <div class="cards">
      <div class="card">
        <p class="card__details">
      « Nous cherchons un consultant junior pour agrandir notre Equipe. RDV sur notre site internet pour plus d’informations : https://recrutement.sn »
      </p>
      </div>
      <div class="card">
        <p class="card__details">
      « Bonjour Khadija votre mission commerciale reprend le 26 Janvier à 8h30. Votre chef d’équipe va vous contactez pour plus d’informations » 
      </p>
      </div>
      <div class="card">
       <p class="card__details">
      « Bonjour Fatima, nous avons une mission pour vous du lundi 13 au vendredi 17h juin. Merci de nous contacter au 1 23 45 67 890 pour plus de renseignements. »
      </p>
      </div>
      </div>
    
    
     
    </section>
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
