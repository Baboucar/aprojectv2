<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="title">
        Envoi SMS PRO pour les professionnels de santé,
        pharmacie, ambulances, vétérinaires
      </h1>
      <p>
        Vous êtes secrétaire médicale ? Grâce à cette plate-forme, ne perdez
        plus de temps envoyer des sms en masse à vos contacts pour rappeler vos
        rendez-vous. L’organisation de votre accueil public se trouvera
        améliorée et simplifiée grâce à cette plate-forme via SMS. Vous pourrez
        optimiser la gestion de votre agenda et diminuer jusqu’à 75% le taux de
        rendez-vous manqués pour cause d’absentéisme. Servicesms.sn unique vous
        permet d’envoyer directement des SMS en masse en un simple clic aux
        contacts de vos clients.
      </p>
      <p>
        Votre patient reçoit une alerte SMS qui lui indique de ne pas oublier
        qu’il a rendez-vous à votre cabinet à la date indiquée.
      </p>
      <h2>Les avantages du rappel de rendez-vous avec Servicesms.sn :</h2>

      <p>
        Le SMS, le rappel le plus efficace en un simple clic, dans 95% des cas
        il sera ouvert et retenu, surtout si vous prévoyez de le faire la veille
        à une heure programmée telle que le début de soirée. Il sera lu dans les
        5 minutes qui suivent son envoi effectif grâce à notre solution SMS PRO.
      </p>
      <h2>
        Médecins, laboratoires, infirmières, professionnels de l’Hospitalisation
        à Domicile (HAD)
      </h2>
      <p>
        Tous les professionnels de santé sont confrontés à la problématique de
        gestion de leur agenda au sein de leur secrétariat médical. Utiliser
        servicesms.sn pour améliorer la proximité avec vos patients.
      </p>
      <p>
        Les rappels de rendez-vous, <br />
        Les avis de passages pour des soins, <br />
        La réponse à des demandes d’interventions, <br />
        L’avis de livraison de dispositifs médicaux… <br />
        Envoi de résultats et diagnostics par SMS <br />
        SMS contenant un mot de passe unique pour accès à un extranet sécurisé
        (résultats d’analyses) <br />
        SMS prévenant d’un retard <br />
        Communication avec tous vos partenaires
      </p>
      <p>
        Autant de circonstances qui, gérées avec notre solution d’envoi SMS Pro
        en masse, vous permettra à vos partenaires de santé de réduire la
        distance et le temps d’attente des patients à domicile ou au cabinet.
      </p>
      <h2>
        Il existe différentes situations pour lesquelles l’envoi de SMS serait
        utile dans le domain médical. En voici quelques exemples :
      </h2>
      <p>Rappel de rendez-vous programmé</p>
      <h2>Quelques exemples de SMS :</h2>
      <div class="cards">
       <div class="card">
          <p class="card__details">
        « Bonjour Mme Moreau, N’oubliez pas votre RDV de demain 9h45 chez le
        Docteur Sané. En cas d’empêchement merci de nous prévenir au plus tôt
        par SMS ou appel au 1234567890. <br />
        Cabinet du Dr Sané »
      </p>
       </div>
       <div class="card">
        <p class="card__details">
        « Pharmacie du centre-ville Votre renouvellement de médicament est
        disponible. ref : 86456 <br />
        Cordialement. »
      </p>
       </div>
       <div class="card">
         <p class="card__details">
        « Bonjour, nous vous rappelons votre RDV du 13/01/2021 pour la révision
        de votre machine. Cordialement, CXG OXY. »
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
