<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h2 class="center__text">MOBIL TICKETING</h2>
      <p>
        Ce service permet d’acheter et de recevoir des tickets de TER, Bus par
        SMS.
      </p>
      <p>
        En effet, les sociétés du transport pourraient créer une nouvelle
        application de billetterie par SMS, pour faciliter le déplacement à des
        milliers d’usagers.
      </p>
      <p>
        Pour se rapprocher davantage de leur clientèle, les compagnies de
        transports pourront offrir une meilleure qualité de service. SERVICE-SMS
        veut se lancer sa toute nouvelle application Mobile Ticketing
        téléchargeable à partir de notre plateforme.
      </p>
      <p>
        Mobile Ticketing est une application qui permettra aux usagers d’acheter
        et de recevoir leurs billets ou tickets de bus et TER par SMS par les
        compagnies de transport. Ces derniers voient en cette solution, la fin
        des tracasseries quotidiennes pour les voyageurs : longues attentes au
        guichet, précipitation d’acheter son ticket pour prendre une place libre
        dans le bus, pertes et vols, etc.
      </p>
      <p>
        Mobile Ticketing n’est pas née par hasard. « Un jour, j’étais en
        week-end à banlieue, je devais aller à un entretien le lendemain matin à
        Dakar, et j’ai décidé de prendre le dernier bus de 22h à Guédiawaye, à
        ce moment je n’ai pas d’argent liquide avec moi. Pourtant, dans mon
        compte Orange money y avait de l’argent mais le pire encore les guichets
        de mon quartier sont fermés, et je devrai rentrer chez moi à Fass
        Delorme le même jour afin de préparer mon entretien ».
      </p>
      <p>
        «Cela m’a causé beaucoup de désagréments. Je me suis dit qu’avec le
        mobile money et l’évolution de l’écosystème numérique, on devrait plus
        forcément avoir l’accès à nos tickets de bus partout au Sénégal sans
        argent liquide. On devrait pouvoir le faire en ligne et payer avec les
        portefeuilles électroniques dont nous disposons. C’est de là qu’est
        venue l’idée de création de Mobile Ticketing », (Harouna Sylla).
      </p>
      <h3>NB :</h3>
      <p>
        Le numéro de téléphone portable doit être enregistré sur son compte
        Orange Money ou un autre compte bancaire ;
      </p>
      <p>
        L’argent sera directement déduit du compte et sera aussi automatiquement
        déposé sur le compte de la compagnie du transport ;
      </p>
      <p>
        Possibilité d’acheter des billets de bus, BRT ou TER à un membre de
        famille ou amis ou collègues par son propre compte coincer quelque part
        et le transférer directement à la personne via SMS.
      </p>
    </section>
    <h2 class="center__text spacer-2">NOUS VOUS FACILITONS LA TÂCHE</h2>
   
    <div class="section__container">
      
      <form-wizard color="#0092ff">
           <h2 slot="title">Mode d’utilisation du service</h2> 

        <tab-content title="Saisir les informations d’achat de votre ticket">
             <form action="">
              <div>
           <label for="compange">Compagnie</label>
            <select name="" id="compange">
            <option value="">AFTU</option>
            <option value="">DDD</option>
            </select>
           </div>
           <div>
            <label for="">Numero de Bus</label>
            <input type="text" name="" id="">
           </div>
           <div>
            <label for="">Lieu de Départ</label>
            <input type="date" name="" id="">
           </div>
           <div>
            <label for="">Lieur de Destination</label>
            <input type="date" name="" id="">
           </div>
           <div>
           <label for="">Date d’achat</label>
           <input type="date" name="" id="">
           </div>
           <div>
             <label for="">Nombre de Ticket</label>
             <input type="text" name="" id="">
           </div>

           <div>
           
           </div>
             </form>
        </tab-content>
        <tab-content title="Identification">
          <form action="">
           <div>
           <label for="">Nom</label>
           <input type="text" name="" id="">
           </div>
           <div>
            <label for="">Prénom</label>
            <input type="text" name="" id="">
           </div>
           <div>
           <label for="">E-mail</label>
           <input type="email" name="" id="">
           </div>
          </form>
        </tab-content>
        <tab-content title="Suivant">
         <form action="">
          <div>
          <label for="">Montant à payer</label>
          <input type="text" name="" value="CFA" id="">
          </div>
          <div>
          <label for="">Mode de paiement</label>
          <select name="" id="">
          <option value="">Orange Money</option>
          </select>
          </div>
          <div>
           <label for="">No tél Compte orange money</label>
           <input type="text" name="" id="">
          </div>
          <div>
          <label for="">Code mmid</label>
          <input type="text" name="" id="">
          </div>
         </form>
        </tab-content>
      </form-wizard>
    </div>

    <div class="section__container">
     <form-wizard color="#0092ff">
           <h2 slot="title">Mode d’utilisation du service</h2> 

        <tab-content title="Saisir les informations d’achat de votre ticket">
             <form action="">
              <div>
           <label for="compange">Compagnie</label>
            <select name="" id="compange">
            <option value="">TER</option>
           >
            </select>
           </div>
         
           <div>
            <label for="">Lieu de Départ</label>
            <input type="date" name="" id="">
           </div>
           <div>
            <label for="">Lieur de Destination</label>
            <input type="date" name="" id="">
           </div>
           <div>
            <label for="">Classe</label>
            <select name="" id="">
            <option value="">1e classe</option>
            <option value="">2e classe</option>
            </select>
           </div>
           <div>
           <label for="">Date d’achat</label>
           <input type="date" name="" id="">
           </div>
           <div>
             <label for="">Nombre de Ticket</label>
             <input type="text" name="" id="">
           </div>

           <div>
           
           </div>
             </form>
        </tab-content>
        <tab-content title="Identification">
          <form action="">
           <div>
           <label for="">Nom</label>
           <input type="text" name="" id="">
           </div>
           <div>
            <label for="">Prénom</label>
            <input type="text" name="" id="">
           </div>
           <div>
           <label for="">E-mail</label>
           <input type="email" name="" id="">
           </div>
          </form>
        </tab-content>
        <tab-content title="Suivant">
         <form action="">
          <div>
          <label for="">Montant à payer</label>
          <input type="text" name="" value="CFA" id="">
          </div>
          <div>
          <label for="">Mode de paiement</label>
          <select name="" id="">
          <option value="">Orange Money</option>
          </select>
          </div>
          <div>
           <label for="">No tél Compte orange money</label>
           <input type="text" name="" id="">
          </div>
          <div>
          <label for="">Code mmid</label>
          <input type="text" name="" id="">
          </div>
         </form>
        </tab-content>
      </form-wizard>
    </div>
    <h2 class="center__text">
      Nous facilitons l'achat de vos billets Bus et TER <br />
      Economisez plus, voyagez plus !
    </h2>
    <div class="cards sixty__container">
      <div class="card">
        <img
          class="card__image"
          src="/../images/ticketing/bus-ter.png"
          alt=""
        />
        <div class="card__details">
          <h3>Obtenez Votre ticket de bus, TER depuis chez vous par SMS</h3>
          <p>
            Désormais possible depuis la maison d'obtenir votre ticket de Bus et
            TER
          </p>
        </div>
      </div>
      <div class="card">
        <img
          class="card__image"
          src="/../images/ticketing/Ticket-instantane.png"
          alt=""
        />
        <div class="card__details">
          <h3>Payer avec votre Compte Mobile Money</h3>
          <p>
            Finir les problèmes de monnaie. Payer avec votre Compte Mobile :
            Orange Money et obtenir votre ticket par SMS. Le moyen le plus
            simple et le moins
          </p>
        </div>
      </div>

      <div class="card">
        <img
          class="card__image"
          src="/../images/ticketing/Gag-temp.png"
          alt=""
        />
        <div class="card__details">
          <h3>Gagner du temps</h3>
          <p>
            Gagner plus de temps, acheter votre ticket à l'avance et juste en
            quelques secondes !
          </p>
        </div>
      </div>

      <div class="card">
        <img
          class="card__image"
          src="/../images/ticketing/Ticket-instantane.png"
          alt=""
        />
        <div class="card__details">
          <h3>Ticket délivré instantanément</h3>
          <p>
            Votre ticket par SMS recevez le instantanément
          </p>
        </div>
      </div>

      <div class="card">
        <img
          class="card__image"
          src="/../images/ticketing/icone-garantie.png"
          alt=""
        />
        <div class="card__details">
          <h3>Paiement 100% Garantie</h3>
          <p>
            Tout achat de billet acheté sur notre plateforme garantie votre
            voyage avec la compagnie choisie.
          </p>
        </div>
      </div>

      <div class="card">
        <img
          class="card__image"
          src="/../images/ticketing/sur-securite.png"
          alt=""
        />
        <div class="card__details">
          <h3>Sûr et sécurisé</h3>
          <p>
            Tous les paiements sont sécurisés via votre portefeuille
            électronique mobile.
          </p>
        </div>
      </div>
    </div>
    <h2 class="section__container center__text spacer-2">
      Bientôt disponible sur Google Play Store (Android ou Ios)
    </h2>

    <h2 class="center__text section__container">
      Mobile Ticketing, c’est vraiment une autre façon de voyager. <br />
      Facile et Pratique ce produit vous amènera où vous voudrez en quelques
      clics. <br />
      N’attendez pas pour le mettre dans vos favoris. <br />
      La Ponctualité. Nous y travaillons chaque minute.
    </h2>
    <section class="sixty__container ">
      <h1 class="center__text">Nos partenaires</h1>
      <div class="partners">
        <img
          class="img__responsive partner__image"
          src="/../images/ticketing/ddd-200x200.png"
          alt="ddk"
        />
        <img
          class="img__responsive partner__image"
          src="/../images/ticketing/aftu-logo-200x200.png"
          alt="afu"
        />
        <img
          class="img__responsive partner__image"
          src="/../images/ticketing/orange-logo-200x200.png"
          alt="orange"
        />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

export default {
  components: {
    Navigation,
    Footer,
    FormWizard,
    TabContent,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.partner__image {
  display: block;
  margin: 2rem auto;
}
label{
  
   display: block;
  font-weight: bold;
  margin-top: 1rem;
}

input,select{
  width: 100%;
  display: block;

  box-sizing: border-box;
  border: none;
  color: #555;
  height: 50px;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  margin-top: 1rem;
}
@media (min-width: 64rem) {
  .partners {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  form{
    width: 50%;
    margin: 0 auto;
  }
}
</style>
