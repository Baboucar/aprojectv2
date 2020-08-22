<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="center__text">COMPOSITION SMS</h1>
      <h2 class="center__text">
        Composez vos SMS sur une interface simple et intuitive, mise à jour
        régulièrement
      </h2>
      <p>
        Grâce à notre interface web sécurisée, vous pouvez envoyer vos SMS de
        manière simple et intuitive sans connaissance technique préalable. Grâce
        à notre certificat SSL et notre connexion en HTTPS, vos données sont
        protégées et sécurisées.
      </p>
      <h2 class="center__text">
        CHANGER L’EXPÉDITEUR PERSONNALISATION DE L’ÉMETTEUR DU SMS
      </h2>
      <p>
        Changer l’expéditeur pour chaque envoi, vous pouvez envoyer vos SMS avec
        le nom de votre amicale, association, école, restaurant, entreprise etc…
        En changeant l’émetteur du message vous rassurez vos clients qui liront
        plus facilement un message si votre nom apparaît plutôt qu’un numéro
        court.
      </p>
      <h2>PUBLIPOSTAGE</h2>
      <p>PERSONNALISATION AVANCÉE DU MESSAGE SMS</p>
      <p>
        Envoyez des messages personnalisés pour chaque contact, pour se faire il
        vous faut une liste de contacts avec les colonnes contenant les
        informations associées. Ensuite vous pourrez par le biais de notre
        interface sécurisée écrire le message avec un balisage spécial. (Ex:
        "Bonjour #PRENOM#,  nous vous rappelons votre inscription au concert de
        Youssou Ndour organisé demain soir au grand théâtre. Nous vous y
        attendons à partir de 19h30. ")
      </p>
      <h2>MODELES DE SMS</h2>
      <p>SAUVEGARDEZ VOS MESSAGES</p>
      <p>
      Gagnez du temps sur vos prochains envois en sauvegardant depuis notre espace client sécurisé vos modèles de SMS.
      </p>
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

<style lang="scss" scoped></style>
