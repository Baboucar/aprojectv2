<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="title">Envoi SMS Pro Evénementiel</h1>
      <p>
        La communication est un enjeu crucial dans l’événementiel. ServiceSms.sn
        vous offre les outils idéaux pour améliorer votre stratégie marketing et
        ainsi assurer la bienséance de vos événements.
      </p>
      <p>
        Grâce à l’envoi automatique de SMS, gagnez du temps en transmettant une
        invitation, une information ou un formulaire d’inscription à vos
        contacts ciblés! Nous vous offrons l’opportunité de communiquer sur vos
        événements rapidement, efficacement et à moindres coûts.
      </p>
      <p>
        L’envoi de SMS en masse vous permet également de comptabiliser
        rapidement qui sera présent, ce qui facilite donc l’organisation
        générale. En effet, de par notre plate-forme, vous pouvez consulter les
        réponses à vos messages ainsi que toutes les statistiques relatives à
        l’ouverture du SMS ou même le nombre de « clics » sur votre lien.
      </p>
      <p>
        Grâce à ServiceSms.sn, faites la promotion de vos événements en toute
        autonomie et simplement! Nos solutions vous permettent aussi d’être
        efficace d’un point de vue organisationnel et de minimiser vos efforts
        pour un maximum de résultats.
      </p>
      <h2>
        Il existe différentes situations pour lesquelles l’envoi de SMS serait
        utile dans l’événementiel. En voici quelques exemples :
      </h2>
      <p>
        Invitations (soirées, salons, séminaires) <br />
        Invitations (Mariages, baptêmes, anniversaires) <br />
        Relance des visiteurs préinscrits <br />
        Relance des inscrits aux conférences <br />
        Remerciement visiteurs / exposants post salon <br />
        Prospection pour de la location de salle ou autres lieux <br />
        Communication avec les fournisseurs
      </p>
      <h2>Quelques exemples de SMS :</h2>
      <div class="cards">
       <div class="card">
        <p class="card__details">
        « Monsieur Diop, Directeur BWTECH est heureux de vous inviter lundi 24
        avril, lors de sa soirée de l’entrepreneuriat. Nous vous attendons
        impatiemment ! »
      </p>
       </div>
       <div class="card">
       <p class="card__details">
        « Madame, Monsieur, nous vous rappelons votre inscription au concert de
        Youssou Ndour organisé demain soir au grand théâtre. Nous vous y
        attendons à partir de 19h30. »
      </p>
       </div>
       <div class="card">
         <p class="card__details">
        « Nous remercions tous nos invités pour cette agréable soirée. Nous
        espérons que ous avez passé un moment inoubliable ! Retrouvez nous sur :
        www.senevent.sn pour d’autres évènement dans la région. »
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
