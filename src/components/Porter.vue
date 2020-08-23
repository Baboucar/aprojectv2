<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="card__title center__text">
        Envoi SMS PRO pour les boutiques prêt-à-porter
      </h1>
      <h2>
        L’utilisation des campagnes SMS pour les magasins de prêt-à-porter
      </h2>
      <p>
        Les magasins de prêt-à-porter connaissent aujourd’hui une véritable
        transformation numérique. L’utilisation de nouveaux moyens de
        communication tels que les réseaux sociaux ou l’email se fait de plus en
        plus. Cela leur permet de diffuser plus largement leurs offres et donc
        d’accroître leur chiffre d’affaires. L’envoi de campagnes SMS est
        utilisé fréquemment par les magasins de prêt-à-porter. Cet outil ne
        cesse d’évoluer et possède des avantages que peu de moyens de
        communication ont à ce jour. Les magasins de prêt-à-porter l’utilisent
        pour sa rapidité et son efficacité, notamment en utilisant le sms
        marketing pour diffuser leurs offres en masse.
      </p>
      <h2>
        Il existe différentes situations pour lesquelles l’envoi de SMS serait
        utile dans le prêt à porter. Voici quelques exemples de SMS mode / prêt
        à porter :
      </h2>
      <p>
        Ventes privées <br />
        Soldes <br />
        Nouvelles collections <br />
        Programme de fidélité <br />
        Ouverture exceptionnelle
      </p>
      <h2>Quelques exemples de SMS :</h2>
      <p>
        « Votre Boutique gold swiss vous attend dès le lundi 10 juin pour les
        soldes privées et profitez ainsi de promotions jusqu’à -50%. Offre
        valable sur présentation de ce SMS. »
      </p>
      <p>
        « Madame Diop, nous vous informons que les nouveaux Bazin Riche sont
        bien arrivés. Vous pouvez venir les récupérer du lundi au samedi de 10h
        à 19h. »
      </p>
      <p>
        « La 2éme démarque a commencé dans votre Boutique gold. Profitez de
        promotions allant jusqu’à -60%. »
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

<style lang="scss" scoped>
@import "../assets/base.scss";
</style>
