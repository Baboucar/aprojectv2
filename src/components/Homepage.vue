<template>
  <div>
    <Navigation />
    <section class="sms__pro section__container spacer-2">
      <div class="service__title">
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
          <img class="card__image" src="/../images/icone-bulle-petit-1.png" alt="sms" />
          <a
            class="card__title"
            href="https://www.capitolemobile.com/fr/produits/wap-push-clic-to-call"
          >SMS Low Cost</a>
          <p
            class="card__description"
          >Le moins cher du marché, pour des campagnes publicitaires réussies et économiques</p>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icone-sms-long-petit.png" alt="sms" />
          <a class="card__title" href="#">SMS Pro</a>
          <p
            class="card__description"
          >Outil de communication performant avec: Personnalisation de l’émetteur, Statistiques avancées et Sms long de + 160 caractères</p>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icone-son-petit-1.png" alt="sms" />
          <a class="card__title" href="https://www.capitolemobile.com/vocal/sms-vocal">SMS Vocal</a>
          <p
            class="card__description"
          >Convertir un SMS en message Audio puis envoyer sur ligne fixe et mobile , c’est suivre la tendance des meilleurs outils de communication</p>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icone-ecran-petit-1.png" alt="sms" />
          <a
            class="card__title"
            href="https://www.capitolemobile.com/sms/rich-message"
          >La fonction "Rich Message" et le SMS 2.0 ...</a>
          <p
            class="card__description"
          >Vous rêvez peut-être de proposer aux destinataires de vos campagnes de SMS publicitaires une interactivité grâce à un message « enrichi » et « cliquable » ...</p>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icone-bdd-petit.png" alt="sms" />
          <a
            class="card__title"
            href="https://www.capitolemobile.com/prospection/base-opt-in"
          >Location Base de Prospects OPT-IN</a>
          <p
            class="card__description"
          >Louer un fichier qualifié et réaliser une campagne de prospection multicanal (SMS, Email...)</p>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icone-num-long-petit.png" alt="sms" />
          <p class="card__title">SMS *wap push* et *clic to call*</p>
          <p
            class="card__description"
          >Le SMS Wap Push et le Clic to Call Dynamisez votre communication en insérant dans le cœur du SMS un lien vers un Site Mobile ! (Technique aussi connue sous le nom de Wap Push). Afin de rendre votre opération SMS interactive et aussi mieux quantifier les retombées d'une telle campagne, nous vous recommandons d'insérer dans votre publicité SMS un n° de téléphone de contact à appeler dans le cas où le prospect souhaiterait avoir plus d'informations concernant l'offre. Cette technique communément appelée "Clic to Call" est disponible dans le cadre de notre Offre SMS Pro.</p>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icone-qr-code-petit.png" alt="sms" />
          <p class="card__title"> QR "Web" : un lien vers l'internet mobile

</p>
          <p
            class="card__description">Une connexion au Web Mobile et aux réseaux sociaux via un simple "Flash" de code ! "Flashcode"). Rendez votre communication "papier" Web 2.0 compatible ! Notre Logiciel de Gestion de QR code vous permet de personnaliser en toute simplicité la redirection que vous souhaitez appliquer à votre code...
</p>
        </div>

        <div class="services__card spacer-1">
          <img class="card__image" src="/../images/icone-prospect-petit.png" alt="sms" />
          <p class="card__title">LOCATION DE FICHIERS DE PROSPECTS
</p>
          <p
            class="card__description"
          >La Base de Prospects OPT-IN. Louer un fichier qualifié et réaliser une campagne de prospection multicanal (SMS, Email...). La réussite d'une campagne de Marketing Direct est généralement en partie liée à la qualité du Fichier de Prospection utilisé ainsi qu'à la pertinence du ciblage. Ciblez votre prospection pour optimiser votre campagne de marketing direct !
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
  cursor: pointer;

  &:hover {
    background: #fb057c;
  }
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

.card__description {
  height: 80px;
  overflow: hidden;
}

@media (min-width: 64rem) {
  .sms__pro {
    display: grid;
    grid-template-columns: 2fr 1fr;
    background: #fafafa;
    position: relative;
    margin-top: 12rem;
    z-index: -1;
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

  .revolution__title {
    text-align: left;
  }
  .service__title{
    padding: 2rem;
  }
}
</style>