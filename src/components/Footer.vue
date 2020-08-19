<template>
  <div class="footer__background">
    <footer class="footer section__container">
      <div>
        <h3 class="footer__title footer__line">Produits</h3>

        <router-link to="/smspro" class="footer__navlinks">SMS Pro</router-link>

        <router-link to="/smsvocal" class="footer__navlinks"
          >SMS Vocal</router-link
        >
        <router-link to="/location" class="footer__navlinks"
          >Location BDD</router-link
        >

        <router-link to="/enrich" class="footer__navlinks"
          >SMS Enrichi</router-link
        >

        <li class="footer__listings"></li>
        <router-link to="/mailing" class="footer__navlinks"
          >Mailing SMS</router-link
        >
       <router-link to="/sondage" class="footer__navlinks"
          >Sondage par SMS</router-link
        >
        <router-link to="/votre" class="footer__navlinks"
          >Vote par SMS</router-link
        >

     
        <li class="footer__listings">Mobile Ticketing</li>
        <router-link to="/rap" class="footer__navlinks"
          >Rate'Pas votre Bus</router-link
        >
      </div>

      <nav class="footer__nav">
        <h3 class=""><span class="footer__line">Notre </span> société</h3>
        <router-link class="footer__navlinks" to="/sommes"
          >Qui sommes nous?</router-link
        >
        <router-link class="footer__navlinks" to="/marche"
          >Comment ça marche</router-link
        >
        <router-link class="footer__navlinks" to="/reference"
          >Nos Références
        </router-link>
        <router-link class="footer__navlinks" to="/recruitment">
          Nous recrutons</router-link
        >
        <router-link class="footer__navlinks" to="/faq"> FAQ</router-link>
      </nav>

      <nav class="footer__nav">
        <h3 class="footer__line">Légal</h3>
        <router-link class="footer__navlinks" to="/legal"
          >Mentions légales</router-link
        >
        <router-link class="footer__navlinks" to="/cgu">CGU</router-link>
        <router-link class="footer__navlinks" to="/cgv">CGV</router-link>
        <router-link class="footer__navlinks" to="/politique"
          >Politique de confidentialité</router-link
        >
        <router-link class="footer__navlinks" to="/cookie">
          Nos cookies</router-link
        >
      </nav>
      <nav class="footer__nav">
        <h3 class="footer__line">Contact</h3>
        <router-link class="footer__navlinks" to="/contact">Contactez-nous</router-link>
        <router-link class="footer__navlinks" to="/blog">Blog</router-link>
        <router-link class="footer__navlinks" to="/plan">Plan du site</router-link>
        <router-link class="footer__navlinks" to="">
          <img src="/../images/linkedin.png" alt="link" /> LinkedIn</router-link
        >
        <router-link class="footer__navlinks" to="">
          <img src="/../images/facebook.png" alt="link" /> Facebook</router-link
        >
        <router-link class="footer__navlinks" to="">
          <img src="/../images/twitter.png" alt="" srcset="" />
          Twitter</router-link
        >
      </nav>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../assets/base.scss";

.footer__background {
  background: #f8f8f8;
}
.footer__navlinks {
  display: block;
  text-decoration: none;
  color: #333;
}

.flex__image {
  display: flex;
}
.footer__line {
  border-bottom: 2px solid #0092ff;
  width: 40px;
}
.image__certificate {
  padding-left: 2rem;
}
.footer__listings {
  list-style-type: none;
}

@media (min-width: 64rem) {
  .footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .footer__title {
    text-align: left;
  }
}
</style>
