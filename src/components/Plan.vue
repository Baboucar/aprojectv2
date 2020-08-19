<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="center__text">Plan du site</h1>
      <h2>Accueil  </h2>
      <h2>Découvrir</h2>
       <li>  Solutions</li>
       <li>Fonctionnalités</li>
       <li>Tarifs</li>
       <li>Métiers </li>
       <li>API ?</li>
     

     <h2>Produits </h2>
     <li>SMS Pro</li>
     <li>SMS Enrichi</li>
     <li>Location BDD</li>
     <li>Mailing SMS</li>
     <li>Sondage par SMS</li>
     <li>Vote par SMS</li>
     <li>Mobile Ticketing</li>
     <li>Rate'Pas votre Bus</li>
<h2>Notre société</h2>
<li>Qui sommes-nous ?</li>
<li>Comment ça marche</li>
<li>Nos Références</li>
<li>Nous recrutons !</li>
<li>FAQ</li>

<h2>Légal</h2>
<li>Mentions légales</li>
<li>CGU-CGV</li>
<li>Politique de confidentialité</li>
<li>Nos cookies</li>

<h2>Contact</h2>
<li>Contactez-nous</li>
<li>BLOG</li>
<li>Plan du site</li>
<li>LinkedIn</li>
<li>Facebook</li>
<li>Twitter</li>

<h2>Connexion</h2>
  <li> InscriptionMentions légales</li>
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
