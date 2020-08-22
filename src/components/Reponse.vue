<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="center__text">Réponses SMS</h1>
      <h2 class="center__text">
        Recevoir les réponses SMS de vos destinataires lors d’une campagne SMS
      </h2>
      <p>
        Recevez directement sur votre « boîte de réception » dans votre espace
        client les réponses SMS de vos clients au SMS que vous venez de leur
        envoyer. Vous pouvez directement répondre, exporter, « blacklister »
        (ajouter dans votre liste noire) les contacts depuis votre boîte de
        réception des SMS. Comme toutes les autres options, la réception de SMS
        est incluse sans surcoût lors de l’utilisation de votre espace client
        SMS, et les réponses sont actives pour tous vos envois.
      </p>
      <h2>Dotez-vous d’un outil de communication interactif</h2>
      <p>
        Grâce au SMS Réponse, vous êtes en mesure de solliciter une réponse de
        vos clients et ainsi créer une interactivité avec eux. Qu’il s’agisse
        d’obtenir une information en retour, de faire des statistiques etc…
      </p>
      <h2>Gestion spécifique pour les réponses STOP</h2>
      <p>
        Conformément à la législation, la plateforme servicesms.sn gère de façon
        totalement automatisée les réponses STOP, afin qu’un destinataire ayant
        répondu STOP soit automatiquement ajouté à votre liste noire et ne
        puisse plus recevoir de SMS de votre part.
      </p>
      <h2>Réponses disponibles même avec un émetteur personnalisé</h2>
      <p>Lorsque vous personnalisez l’émetteur de vos SMS, il est obligatoire d’ajouter la mention STOP au… car il n’est pas possible de répondre directement.
Dans le cas d’une personnalisation d’émetteur, notre plateforme gère quand même les réponses. </p>
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
