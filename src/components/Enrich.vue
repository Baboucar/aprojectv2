<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="center__text">Envoi de SMS Enrichi</h1>
      <p class="center__text">
        <strong
          >Vous rêvez peut-être de proposer aux destinataires de vos <br />
          campagnes de SMS publicitaires une interactivité grâce à un<br />
          message « enrichi » et « cliquable » ...</strong
        >
      </p>
      <p>
        Le SMS Enrichi est un outil complémentaire du message SMS : il permet
        d’insérer un lien court "cliquable" dans le corps même de votre SMS un
        contenu "web", et renvoie directement vers une page mobile.
        L'association SMS et Web (lien "cliquable") est communément appelée :
        SMS 2.0
      </p>
      <p>
        L’insertion d’un lien dans votre message permettra de surprendre votre
        audience et de dynamiser votre campagne SMS. Le côté “plus interactif”
        du message enrichi vous permettra également de booster vos conversions !
      </p>
      <h2 class="center__text">Quand et comment utiliser le SMS Enrichi ?</h2>
      <p>
        Le SMS enrichi se révélera être un outil indispensable lors de vos
        opérations commerciales. L’insertion d’un lien dans le corps du message
        SMS vous permettra de rediriger votre cible sur votre site internet.
      </p>
      <p class="center__text">
        Quelques cas d'applications du " SMS enrichi "
      </p>
      <p class="center__text">
        Voici quelques exemples d’applications possibles du « SMS enrichi » :
      </p>
    </section>
    <div class="cards sixty__container">
      <div class="card">
        <img class="card__image"
          src="/../images/enrich/icone-codepromo.png"
          alt=""
          srcset=""
        />
        <div class="card__details">
          <h3 class="title">Code Promo</h3>
          <p>
            Envoi d’un code promo par SMS utilisable en ligne, directement sur
            son smartphone, après « clic » sur le lien « SMS enrichi »
          </p>
        </div>
        </div>
        <div class="card">
          <img
          class="card__image"
            src="/../images/enrich/icone-formulaire.png"
            alt=""
            srcset=""
          />
          <div class="card__details">
            <h3 class="title">Formulaire</h3>
            <p>
              L’envoi de formulaires via le SMS enrichi vous permettra de
              connaître rapidement et simplement l’avis de vos clients (par
              exemple après un achat).
            </p>
          </div>
        </div>
        <div class="card">
          <img
          class="card__image"
            src="/../images/enrich/icone-video.png"
            alt=""
            srcset=""
          />
          <div class="card__details">
            <h3 class="title">Présentation d’un produit</h3>
            <p>
              Faire la promotion d’un nouveau produit est possible rapidement et
              à moindre coût avec le SMS enrichi. Mettez en avant toutes les
              fonctionnalités d’un produit à l’aide d’une vidéo.
            </p>
          </div>
        </div>
        <div class="card">
          <img
          class="card__image"
            src="/../images/enrich/icone-facebook.png"
            alt=""
            srcset=""
          />
         <div class="card__details">
          <h3 class="title">Réseaux sociaux</h3>
          <p>
            Renvoyez votre cible vers votre page Facebook, Twitter ou Instagram
            pour une opération spéciale ou simplement pour augmenter votre
            nombre de followers.
          </p>
         </div>
        </div>
        <div class="card">
          <img  class="card__image" src="/../images/enrich/icone-stat-campagne.png" alt="" />
          <div class="card__details">
            <h3 class="title">Statistiques de campagne</h3>
            <p>
              Grâce au SMS Enrichi, vous pourrez également avoir les
              statistiques de retour de votre campagne SMS Marketing telles que
              le taux de clic réalisé, l’endroit d’où proviennent les clics, les
              numéros qui ont cliqué sur votre lien… Ainsi il sera plus facile
              d’adapter les résultats de vos campagnes et d’optimiser vos
              prochains envois de SMS.
            </p>
          </div>
        </div>
      </div>
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

.card {
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
}
.cards{
    margin-bottom: 2rem;
}
</style>
