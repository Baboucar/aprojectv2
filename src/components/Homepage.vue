<template>
  <div>
    <Navigation />
    <section class="sms__pro section__container spacer-2">
      <div>
        <!-- <p class="solution spacer-1">SOLUTION PRO</p> -->
        <h1 class="title home__title">Nos services SMS</h1>

         <p class="sms__description">
               Toutes nos solutions sur-mesure
        </p>
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

            <div class="services__card spacer-1">
                <img class="card__image" src="/../images/icone-bulle-petit-1.png" alt="sms">
                   <p class="card__title">SMS Low Cost</p>
                   <p class="card__description">
                      Le moins cher du marché, pour des campagnes publicitaires réussies et économiques
                   </p>
            </div>

               <div class="services__card spacer-1">
                <img class="card__image" src="/../images/icone-sms-long-petit.png" alt="sms">
                   <p class="card__title">SMS Pro</p>
                   <p class="card__description">
                     Outil de communication performant avec: Personnalisation de l’émetteur, Statistiques avancées et Sms long de + 160 caractères
                   </p>
            </div>

              <div class="services__card spacer-1">
                <img class="card__image" src="/../images/icone-son-petit-1.png" alt="sms">
                   <p class="card__title">SMS Vocal</p>
                   <p class="card__description">
                     Convertir un SMS en message Audio puis envoyer sur ligne fixe et mobile , c’est suivre la tendance des meilleurs outils de communication
                   </p>
            </div>

              <div class="services__card spacer-1">
                <img class="card__image" src="/../images/icone-ecran-petit-1.png" alt="sms">
                   <p class="card__title">SMS 2.0</p>
                   <p class="card__description">
                   Créer et envoyer un Rich SMS ou mini site mobile à vos contacts, pour une expérience utilisateur toujours renouvelée
                   </p>
            </div>

              <div class="services__card spacer-1">
                <img class="card__image" src="/../images/icone-bdd-petit.png" alt="sms">
                   <p class="card__title">Numéro virtuel</p>
                   <p class="card__description">
                   Location de Numero virtuel dédié. Renforcez le lien avec vos contacts en communiquant sur une ligne unique. Disponible pour plus de 40 pays.
                   </p>
           
            </div>

              <div class="services__card spacer-1">
                <img class="card__image" src="/../images/icone-bulle-petit-1.png" alt="sms">
                   <p class="card__title">Location de bases de données</p>
                   <p class="card__description">
              Agrandissez vos listes de contacts, Louez des listes de numéros de mobiles qualifiés en fonction de critères choisis selon vos besoins
                   </p>
            </div>

              <div class="services__card spacer-1">
                <img class="card__image" src="/../images/icone-bulle-petit-1.png" alt="sms">
                   <p class="card__title">HLR Lookup</p>
                   <p class="card__description">
                    Nettoyez vos listes de contacts, réalisez des campagnes mieux ciblées et réduisez vos coûts de messagerie
                   </p>
            </div>


              <div class="services__card spacer-1">
                <img class="card__image" src="/../images/icone_whatsapp.png" alt="sms">
                   <p class="card__title">Whatsapp</p>
                   <p class="card__description">
                    Facilitez les échanges avec vos clients en proposant une expérience multimédia avec  Whatsapp for Business
                   </p>
            </div>
        </div>
   
    </section>

     <section class="revolution spacer-1">
       <div class="section__container sms__revolution">

    
         <img class="img container revolution__img" src="/../images/octopush-sms-pro.png" alt="revolution">
          <div class="container revolution__description">
             <h2 class="title revolution__title">La révolution SMS
à votre portée</h2>
               
               <button class="revolution__btn btn spacer-1">ESSAYER GRATUITEMENT</button>
          </div>
             </div>
     </section>
   <Footer/>



  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from './Footer';
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

.revolution{
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

.revolution__btn{
      display: block;
    margin: 0 auto;
}

.card__image{
    display: block;
    margin: 0 auto;
}
.card__title{
    text-align: center;
    font-weight: bold;

}

.sms__revolution{
  background: $color-tertiary;


}

.revolution__img{
  display: block;


}

@media (min-width: 64rem) {
  .sms__pro {
    display: grid;
    grid-template-columns: 2fr 1fr;
    background: #fafafa;
  }
.sms__description{
      font-weight: bold;
    font-size: 1.5rem;
}

.home__title {
  font-size: 3rem;
}

  .services__cards{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
.card__title{
  text-align: left;
}
  .card__image{
    display: inline-block;
  }
.revolution__img{
  width: 400px;
   margin-left: 0;
}
  .sms__revolution{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .revolution__description{
    margin: auto;
  }
  .revolution__btn{
    margin: 0;
  }
}
</style>