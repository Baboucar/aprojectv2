<template>
  <div>
    <Navigation />
    <section class="sms__pro section__container spacer-2">
      <div>
        <p class="solution spacer-1">SOLUTION PRO</p>
        <h1 class="title home__title">Nos services SMS</h1>

        <!-- <p class="sms__description">
               La solution simple et rapide pour envoyer vos messages dans le monde entier en quelques secondes.
        </p>-->
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
        Une Gamme de Services <br>
        adaptés aux besoins de chacun
         </h1>
        <div class="services__cards">

            <div class="services__card">
                <img class="card__image" src="/../images/icone-bulle-petit-1.png" alt="sms">
                   <p class="card__title">SMS Low Cost</p>
                   <p class="card__description">
                      Le moins cher du marché, pour des campagnes publicitaires réussies et économiques
                   </p>
            </div>

               <div class="services__card spacer-1">
                <img class="card__image" src="/../images/icone-sms-long-petit.png" alt="sms">
                   <p class="card__title">SMS Low Cost</p>
                   <p class="card__description">
                      Le moins cher du marché, pour des campagnes publicitaires réussies et économiques
                   </p>
            </div>

              <div class="services__card spacer-1">
                <img class="card__image" src="/../images/icone-son-petit-1.png" alt="sms">
                   <p class="card__title">SMS Low Cost</p>
                   <p class="card__description">
                      Le moins cher du marché, pour des campagnes publicitaires réussies et économiques
                   </p>
            </div>

              <div class="services__card spacer-1">
                <img class="card__image" src="/../images/icone-ecran-petit-1.png" alt="sms">
                   <p class="card__title">SMS Low Cost</p>
                   <p class="card__description">
                      Le moins cher du marché, pour des campagnes publicitaires réussies et économiques
                   </p>
            </div>

              <div class="services__card spacer-1">
                <img class="card__image" src="/../images/icone-bdd-petit.png" alt="sms">
                   <p class="card__title">SMS Low Cost</p>
                   <p class="card__description">
                      Le moins cher du marché, pour des campagnes publicitaires réussies et économiques
                   </p>
           
            </div>

              <div class="services__card spacer-1">
                <img class="card__image" src="/../images/icone-bulle-petit-1.png" alt="sms">
                   <p class="card__title">SMS Low Cost</p>
                   <p class="card__description">
                      Le moins cher du marché, pour des campagnes publicitaires réussies et économiques
                   </p>
            </div>

              <div class="services__card spacer-1">
                <img class="card__image" src="/../images/icone-bulle-petit-1.png" alt="sms">
                   <p class="card__title">SMS Low Cost</p>
                   <p class="card__description">
                      Le moins cher du marché, pour des campagnes publicitaires réussies et économiques
                   </p>
            </div>


              <div class="services__card spacer-1">
                <img class="card__image" src="/../images/icone-son-petit-1.png" alt="sms">
                   <p class="card__title">SMS Low Cost</p>
                   <p class="card__description">
                      Le moins cher du marché, pour des campagnes publicitaires réussies et économiques
                   </p>
            </div>
        </div>
   
    </section>
  </div>
</template>

<script>
import Navigation from "./Navigation";
export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.solution {
  font-weight: bold;
}

.home__title {
  font-size: 3rem;
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


.card__image{
    display: block;
    margin: 0 auto;
}
.card__title{
    text-align: center;
    font-weight: bold;

}
@media (min-width: 64rem) {
  .sms__pro {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  .services__cards{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
.card__title{
  text-align: left;
}
  .card__image{
    display: inline-block;
  }
}
</style>