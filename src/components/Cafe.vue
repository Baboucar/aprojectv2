<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="title">Envoi campagne SMS PRO pour les (cafés, hôtels, restaurants)</h1>
      <p>
        Les entreprises dans le secteur des cafés, hôtels et restaurants sont de
        plus en plus nombreuses à faire appel au SMS et ce à juste titre !
      </p>
      <p>
        L’objectif étant de communiquer rapidement et efficacement avec vos
        clients afin d’établir une relation de proximité, de confiance et d’en
        attirer de nouveaux.
      </p>
      <p>
        De plus, grâce aux statistiques vous pourrez facilement connaître la
        délivrabilité de vos SMS (envoyés, reçus, lus) et suivre votre ROI
        (Retour sur Investissement) en fonction de la fréquentation et du nombre
        de réservations de votre établissement.
      </p>
      <p>
        Pour les CHR, l’usage du SMS peut se faire au quotidien de
        façon régulière, ainsi qu’à titre événementiel et donc de façon
        plus ponctuelle.
      </p>
      <h2>Au quotidien</h2>
      <p>
        Vous pouvez envoyer chaque matin les plats du jour, une fois par semaine
        vos offres promotionnelles… Ces actions récurrentes renforceront
        l’attachement de vos clients à votre restaurant et ne vous prendra que
        quelques minutes.
      </p>
      <p>
        Aussi, il est également très apprécié par les consommateurs de recevoir
        une confirmation de leur réservation. Cela leur permet d’être assurés
        que leur réservation a bien été prise en compte et ils peuvent avoir
        accès à tous les détails en un instant seulement (ex : ajout du lien
        plan dans votre SMS).
      </p>
      <p>
        Également, le SMS est un allié pour tous les imprévus entrainant la
        fermeture de votre établissement (évènement météorologique, grève…).
      </p>
      <h2>A titre évènementiel</h2>
      <p>
        Vous avez prévu une soirée spéciale dans votre établissement comme un
        concert, ou bien un cocktail ? Envoyez un SMS marketing précisant le
        jour et l’heure de l’événement à vos clients.
      </p>
      <p>
        Ainsi, terminé les évènements ratés et les clients déçus de ne pas avoir
        été informés et ce malgré vos autres supports de communication (ex
        flyers…) !
      </p>
      <p>
        Le SMS peut également être opportun pour informer : du lancement d’une
        nouvelle carte ou lors des fêtes (St-Valentin, Fête des Mères, Noël…).
      </p>
      <h2>Exemples de campagnes SMS :</h2>
     
     
    
      <div class="cards">
       <div class="card">
         <p class="card__details">
        « Chers clients, nous avons le plaisir de vous inviter à un cocktail
        pour découvrir nos nouveaux locaux ! Voici le lien du plan : Https :
        plan.wf /Rtf »
      </p>
       </div>
       <div class="card">
        <p class="card__details">
        « Monsieur Diop, nous vous confirmons votre réservation numéro AFG1245.
        Votre chambre sera disponible le 23juillet dès 10h du matin. Merci de
        faire confiance à notre hôtel. »
      </p>
       </div>
       <div class="card">
        <p class="card__details">
          <p>
        « Bonjour Mr Ousmane, Nous vous invitons à venir découvrir de nouvelles
        saveurs, suite à la mise en place de notre nouvelle carte. -10% sur
        votre repas sur présentation de ce SMS avant la fin du mois. Restaurant
        Senthieboudjien. »
      
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
