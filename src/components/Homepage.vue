<template>
  <div>
    <Navigation />
    <section class="sms__pro section__container spacer-2">
      <div>
        <!-- <p class="solution spacer-1">SOLUTION PRO</p> -->
        <h1 class="title home__title">Nos services SMS</h1>

        <p class="sms__description">Toutes nos solutions sur-mesure</p>
        <button class="btn">ESSAYEZ GRATUITEMENT</button>
      </div>
      <div class="phone spacer-2">
        <img
          class="img"
          src="/../images/octopush-fonctionnalites-services-petit.png"
          alt="services"
        />
      </div>
    </section>

    <section class="services section__container">
      <h1 class="services__title center__text spacer-2">
        Une Gamme de Services
        <br />adaptés aux besoins de chacun
      </h1>
      
      <div class="services__cards">
        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icone-num-long-petit.png" alt="sms" />
          <a class="card__title" href="https://www.capitolemobile.com/fr/produits/wap-push-clic-to-call">SMS "Wap Push" &amp; <br> "Clic to Call"</a>
          <p
            class="card__description"
          >Dynamisez votre communication en insérant dans le cœur du SMS un lien vers un Site Mobile ! (Technique aussi connue sous le nom de Wap Push).</p>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icone-sms-long-petit.png" alt="sms" />
          <a class="card__title" href="#">SMS Mailing  (envoi de mailing SMS)</a>
          <p
            class="card__description"
          >Envoyez une mailing SMS à autant de destinataires que vous le souhaitez. Annoncer un événement, une promotion, un nouveau produit, etc.... à plusieurs contacts est réalisable en quelques clics !</p>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icone-son-petit-1.png" alt="sms" />
          <a class="card__title" href="https://www.capitolemobile.com/vocal/sms-vocal">SMS <br> Vocal</a>
          <p class="card__description">Convertir un SMS en message Audio puis envoyer sur ligne fixe et mobile , c’est suivre la tendance des meilleurs outils de communication</p>
        </div>

     

      
        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icone-bulle-petit-1.png" alt="sms" />
          <a class="card__title" href="https://www.capitolemobile.com/sms/rich-message">La fonction "Rich Message" et le SMS 2.0 ...</a>
          <p
            class="card__description" >
            La fonction "Rich Message" vous permet d’associer au message du SMS (contenu strictement textuel) un contenu "web", et ce, grâce à l’insertion d’un lien (court) "cliquable"
            </p>
        </div>

        <!-- <div class="services__card spacer-1">
                <img class="card__image" src="/../images/icone-bulle-petit-1.png" alt="sms">
                   <p class="card__title">HLR Lookup</p>
                   <p class="card__description">
                    Nettoyez vos listes de contacts, réalisez des campagnes mieux ciblées et réduisez vos coûts de messagerie
                   </p>
        </div>-->

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icone-bdd-petit.png" alt="sms" />
          <a class="card__title" href="https://www.capitolemobile.com/prospection/base-opt-in">Location Base de Prospects OPT-IN</a>
          <p class="card__description">
            Louer un fichier qualifié et réaliser une campagne de prospection multicanal (SMS, Email...)
          </p>
        </div> 
      </div>
    </section>

    <section class="revolution spacer-1">
      <div class="section__container sms__revolution">
        <img
          class="img container revolution__img"
          src="/../images/octopush-sms-pro.png"
          alt="revolution"
        />
        <div class="container revolution__description">
          <h2 class="title revolution__title center__text">
            La révolution SMS
            à votre portée
          </h2>

          <button class="revolution__btn btn spacer-1">ESSAYER GRATUITEMENT</button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";
export default {
  components: {
    Navigation,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.solution {
  font-weight: bold;
}

.revolution {
  background: $color-tertiary;
}

.btn {
  border: none;
  padding: 1.3rem;
  border-radius: 25px;
  background: $color-secondary;
  color: $color-white;
  font-weight: bold;
  font-size: 0.7rem;
}

.revolution__btn {
  display: inline-block;
  margin-bottom: 2rem;
}

.card__image {
  display: block;
  margin: 0 auto;
}
.card__title {
  text-align: center;
  font-weight: bold;
  display: block;
  text-decoration: none;
  color: $color-black;
}

.sms__revolution {
  background: $color-tertiary;
}

.revolution__img {
  display: block;
}

.card__description{
  
    height: 110px;
    overflow: hidden;
    
}

@media (min-width: 64rem) {
  .sms__pro {
    display: grid;
    grid-template-columns: 2fr 1fr;
    background: #fafafa;
  }
  .sms__description {
    font-weight: bold;
    font-size: 1.5rem;
    
  }

  .home__title {
    font-size: 3rem;
  }

  .services__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  .card__title {
    text-align: left;
  }
  .card__image {
    display: inline-block;
    
  }
  .revolution__img {
    width: 400px;
    margin-left: 0;
  }
  .sms__revolution {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .revolution__description {
    margin: auto;
    
  }
  .revolution__btn {
    margin: 0;
  }

  .revolution__title{
    text-align: left;
  }
}
</style>