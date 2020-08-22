<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="center__text">
        Envoi SMS PRO pour les collectivités locales, mairies
      </h1>
      <h2>La fonctionnalité révolutionnaire pour le service public</h2>
      <p>
        Vous êtes acteur de la fonction publique ? Grâce à notre plate-forme
        service-sms, ne perdez plus de temps pour l’envoi de vos sms en masse
        pour rappeler vos rendez-vous. L’organisation de votre accueil public se
        trouvera améliorée et simplifiée grâce à notre plate-forme. Vous pourrez
        optimiser la gestion de votre agenda d’accueil du public par rendez-vous
        et diminuer jusqu’à 75% le taux de rendez-vous reportés ou manqués pour
        cause d’absentéisme. La plate-forme servicesms.sn vous permet d’envoyer
        directement des SMS en masse en un simple clic à vos contacts.
      </p>
      <p>
        Votre administré reçoit une alerte SMS qui lui indique de ne pas oublier
        qu’il a rendez-vous dans votre service à la date indiquée.
      </p>
      <p>
        Les avantages du rappel de rendez-vous avec servicesms.sn :
      </p>
      <p>
        Le SMS, le rappel le plus efficace en un simple clic, dans 95% des cas
        il sera ouvert et retenu, surtout si vous prévoyez de le faire la veille
        à une heure programmée tel que le début de soirée. Il sera lu dans les 5
        minutes qui suivent son envoi effectif grâce à nos solutions SMS PRO.
      </p>
      <h2>Comment être proche de vos administrés ?</h2>
      <p>
        De nombreux sondages montrent qu’un service public de qualité passe par
        une communication de proximité claire, simple, rapide et moderne.
        Informer ses administrés de la vie de sa commune, de son département ou
        de sa région renforce le sentiment de dépense publique bien gérée, utile
        à tous.
      </p>
      <h2>
        Il existe différentes situations pour lesquelles l’envoi de SMS serait
        utile dans le secteur public. En voici quelques exemples :
      </h2>
      <p>
        la diffusion d’informations pratiques, des alertes :
      </p>
      <p>
        météo, <br />
        d’ordre sanitaire, <br />
        de modifications de circulation, <br />
        de travaux temporaires…
      </p>
      <p>
        des notifications de remise de pièces administratives en attente, <br />
        des rencontres sportives, <br />
        d’événements culturels …
      </p>
      <h2>Exemples de campagnes SMS dans le secteur public :</h2>
      <div class="cards">
        <div class="card">
          <p class="card__details">
            « Alerte info : Des coupures d’eau sont prévues ce jeudi à partir de
            7h. Retour à la normale vers 20H. Prévoyez des réserves d’eau
            suffisantes pour vous hydrater. <br />
            Les services techniques de la mairie. »
          </p>
        </div>
        <div class="card">
          <p class="card__details">
            « Bonjour M. Sow <br />
            Vous avez commandé une nouvelle poubelle pour vos déchets
            recyclables. Les services techniques de la commune vous la livreront
            ce mercredi entre 8H et 12H. »
          </p>
        </div>
        <div class="card">
          <p class="card__details">
            « Monsieur Sarr, <br> Nous avons bien reçu votre demande de permis de
            construire F24C3678. Les services du cadastre vous proposent un
            rendez le 16/06/2021 pour compléter votre dossier. L’urbanisme tél :
            01234567890″ »
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

.card{
    background: $color-grey;
}
</style>
