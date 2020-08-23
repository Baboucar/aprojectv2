<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="title center__text">Envoi SMS Pro immobilier</h1>
      <h2>
        L’utilisation du SMS professionnel dans le secteur de l’immobilier
      </h2>
      <p>
        Le secteur de l’immobilier est un secteur où réactivité et communication
        sont de mise. Les agences immobilières sont nombreuses et cherchent à se
        démarquer les unes des autres par l’utilisation de canaux de
        communication originaux et efficaces. L’arrivée des nouvelles
        technologies de communication dans ce secteur a été plus que salutaire
        car cela a permis une digitalisation de l’immobilier, une meilleure
        compréhension du marché et une adaptabilité face aux nouvelles attentes
        des acquéreurs, vendeurs et locataires. Le sms professionnel est l’un
        des moyens de communication qui permet aux agences immobilières, quelle
        que soit leur spécialité (transaction de biens ou gestion locative), de
        communiquer rapidement et efficacement. Avec un rapport efficacité/prix
        indétrônable, le sms pro est l’un des seuls outils capables d’allier
        parfaitement prix bas, rapidité, mémorisation et pertinence.
      </p>
      <h2>
        Il existe différentes situations pour lesquelles l’envoi de SMS serait
        utile dans l’immobilier. En voici quelques exemples :
      </h2>
      <p>
        Campagnes promotionnelles <br />
        Rappel de rendez-vous (visites) <br />
        Rappel d’installations/paiements <br />
        Rappel aux locataires de payer le loyer <br />
        Nouvelles propriétés en vente <br />
        Nouveau projet immobilier <br />
        Envoi de newsletter grâce à nos SMS enrichis (lien)
      </p>
      <h2>Quelques exemples de SMS :</h2>
      <p>
        « Monsieur Diop, la villa que vous avez louée l’été dernier est
        disponible dès le mois de juin cette année ! Merci de nous contacter
        pour une nouvelle location. »
      </p>
      <p>
        « Madame, nous vous informons que votre appartement sera visité par de
        potentiels acheteurs à demain à 1Oh »
      </p>
      <p>
        « Monsieur, le loyer du mois de juin n’a toujours pas été réglé. Merci
        de nous faire parvenir un chèque au plus vite. »
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
