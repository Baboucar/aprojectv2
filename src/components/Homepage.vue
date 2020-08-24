<template>
  <div>
    <Navigation />
    <section class="sms__pro section__container spacer-2">
      <div class="service__title">
        <!-- <p class="solution spacer-1">SOLUTION PRO</p> -->
        <h1 class="home__title">Nos solutions SMS</h1>

        <p class="sms__description">Toutes nos solutions sur-mesure</p>
        <button class="btn">TESTEZ GRATUITEMENT</button>
      </div>
      <div class="phone spacer-2">
        <img
          class="img"
          src="/../images/servicesms-fonctionnalites-services-petit 500x500.gif"
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
          <img class="card__image" src="/../images/icon-sms-pro.png" alt="smspro" />
          <div class="card__details">
            <a class="card__title" href="#">SMS Pro</a>
            <p class="card__description">
              Outil de communication performant vous permettra
              également de bénéficier de fonctions telles que la
              personnalisation du nom d’émetteur, de publipostage,
              du taux d’ouverture de votre campagne ou bien de
              la réception de réponses SMS.
            </p>
          </div>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icone-vocal-sms.png" alt="smsvocal" />
          <div class="card__details">
            <a
              class="card__title sms__vocal"
              href="https://www.capitolemobile.com/vocal/sms-vocal"
            >SMS Vocal</a>
            <p class="card__description">
              Facilitez la vie de vos clients en leur
              envoyant des messages vocaux de
              rappels ou confirmations de rendezvous.
            </p>
          </div>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icone-sms-20.png" alt="sms" />
          <div class="card__details">
            <a
              class="card__title"
              href="https://www.capitolemobile.com/sms/rich-message"
            >La fonction "SMS Enrichi</a>
            <p class="card__description">
              Vos campagnes de SMS publicitaires une
              interactivité grâce à un message « enrichi » et «
              cliquable » ...
            </p>
          </div>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/loca-bdd-sms.png" alt="bdd" />
          <div class="card__details">
            <a href class="card__title">Location BDD SMS</a>
            <p class="card__description">
              Nous proposons des solutions de locations des fichiers
              de Prospection pour agrandir votre réseau de prospects
              et augmenter vos sources de revenus potentiels dans
              toute le Senegal.
              Nous garantissons également d’être
              en conformité avec la réglementation RGPD.
            </p>
            
            
          
          </div>
        </div>


        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/emailing-icon-.png" alt="smsmailing" />
          <div class="card__details">
            <a href="http://" class="card__title">SMS MAILING</a>
            <p class="card__description">
              Envoyez un mailing SMS à autant de
              destinataires que vous le souhaitez.
            </p>
          </div>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/sondage-par-sms.png" alt="sms" />
          <div class="card__details">
            <a
              class="card__title"
              href="https://www.capitolemobile.com/fr/produits/wap-push-clic-to-call"
            >Sondages par SMS</a>
            <p class="card__description">
              Automatisez vos sondages par SMS et restez à l'écoute
              de vos clients
              Récoltez les avis de vos clients avec un sondage par
              SMS et améliorez votre offre. Automatisez vos enquêtes
              de satisfaction par SMS pour être toujours à l'écoute
              de vos clients.
            </p>
          </div>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/vote-par-sms.png" alt="vote" />
          <div class="card__details">
            <a href="http://" class="card__title">Votre par SMS</a>
            <p class="card__description">
              Boostez vos événements avec le Vote par SMS
              Organisez des événements inoubliables grâce à notre
              plateforme de vote par SMS en ligne.
              Dynamisez vos soirées en mettant en place un vote
              en direct par SMS.
            </p>
          </div>
        </div>

     
        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/mobile-Tiketing.png" alt="ticketing" />
          <div class="card__details">
            <p class="card__title">Mobile Ticketing</p>
            <p class="card__description">
              Acheter et recevez vos tickets de TER,
              Bus par SMS
            </p>
          </div>
        </div>
        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/-bus-icon-blue-bus-png.png" alt="bus" />
          <div class="card__details">
            <p class="card__title">Rate’ Pas Votre Bus</p>
            <p class="card__description">
              Une solution qui vous permette de prendre le contrôle
              en main de vos informations horaires en temps réel
              partout au Sénégal par un simple SMS.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="revolution spacer-1">
      <div class="section__container sms__revolution">
        <img
          class="img container revolution__img"
          src="/../images/LOGO-en-fond-vert.png"
          alt="revolution"
        />
        <div class="container revolution__description">
          <h2 class="revolution__title center__text">
            La révolution SMS
            à votre portée
          </h2>
          <div class="center__button">
            <button class="revolution__btn btn spacer-1">TESTEZ GRATUITEMENT</button>
          </div>
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
  data() {
    return {
      hover: false
    };
  },
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

.services__cards{
  background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    padding: 2rem;
}
.services__card{
  background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
     transition: transform .3s;

  &:hover{
    transform: scale(1.1); 
  }
}
.center__button {
  display: flex;
  align-items: center;
  justify-content: center;
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


.card__description {
  height: 170px;
  overflow: hidden;
}

.card__details{
  padding: 1rem;
}
@media (min-width: 64rem) {
  .sms__pro {
    display: grid;
    grid-template-columns: 2fr 1fr;
    background: #fafafa;
    position: relative;
    margin-top: 17rem;
    z-index: -1;
  }
  .sms__description {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .home__title {
    font-size: 3rem;
    color: $color-tertiary;
  }

  .services__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  .card__title {
    text-align: left;
    border-bottom: 2px solid $color-tertiary;
  }

  .card__image {
    display: inline-block;
    padding: 1rem;
  }
  

 
  
  .service__title {
    padding: 2rem;
  }
 
}
</style>