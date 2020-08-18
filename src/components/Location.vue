<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="center__text">LOCATION DE FICHIERS DE PROSPECTS</h1>
      <p>
        Louer un fichier qualifié et réaliser une campagne de prospection
        multicanal (SMS, Email...)
      </p>

      <p>
       <vue-modaltor :visible="open" @hide="hideModal">
        <template slot="close-icon">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            width="20"
            height="20"
            xml:space="preserve"
          >
            <path
              class="st0"
              fill="#0074D9"
              d="M8.7,7.6c-0.4-0.4-1-0.4-1.4,0C6.9,8,6.9,8.6,7.3,9l11,11l-11,11c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0 l11-11l11,11c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-11-11L32,9c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-11,11L8.7,7.6z"
            />
          </svg>
        </template>
         
          <h1 class="center__text message">{{message}}</h1>
       
      </vue-modaltor>
        <strong
          >La réussite d'une campagne de Marketing Direct est généralement en
          partie liée à la qualité du Fichier de Prospection utilisé ainsi qu'à
          la pertinence du ciblage.</strong
        >
      </p>
      <p>La plus grande base de données SMS opt-in au Sénégal.</p>
      <p>
        Louez des fichiers clients ciblés pour agrandir votre réseau de
        prospects et augmenter vos sources de revenus potentiels. Choix de
        critères pour meilleur ciblage, et ROI optimisé.
      </p>
      <p>
        Sélectionnez vos futurs clients grâce à la location de base de données.
      </p>
      <p>
        C’est la solution idéale pour les petites entreprises qui démarrent leur
        activité et qui ont besoin de se créer un portefeuille client ou un
        réseau.
      </p>
      <p>
        Nous collaborons avec un partenaire spécialisé dans la location de base
        de données, l'ensemble des informations sont récupérées notamment avec
        des cartes de fidélité, tels que les assureurs, mutuelles et sites de
        grande distribution d’où sa taille, des enquêtes, des salons,
        abonnements aux magazines spécialisés...
      </p>
      <p>
        De nombreux critères de cibles sont disponibles, mais vous pouvez
        également nous demander des critères plus spécifiques : sexe, âge,
        ville, région, département, Profession (Artisan, commerçant, étudiants,
        profession libérale, salarié...etc), Logement (Propriétaire / Locataire,
        Maison /Appartement...etc), Véhicule, Voyage...
      </p>
      <p>
        Nos spécialistes vous aideront à constituer votre fichier et vous
        accompagneront dans votre campagne de prospection.
      </p>
      <h2 class="center__text">Nos Tarifs</h2>
      <p>
        Nos tarifs sont dégressifs pour vos aider au mieux avec vos prochaines
        campagnes :
      </p>
      <h2>Exemple :</h2>
      <li>La location d’une base de prospection de 5 000 à 10 000 contacts coûte 98F HT / contact.</li>
      <li>La location d’une base de prospection de 10 000 à 25 000 contacts coûte 91F HT / contact.</li>
      <li>La location d’une base de prospection de Plus de 25 000 contacts coûte 85F HT / contact.</li>
      <p>Ensuite nous gérons la campagne de SMS pour vous.</p>
      <h2 class="center__text">Remplissez simplement le formulaire ci-dessous.</h2>
      <form class="form sixty__container" @submit.prevent="sendEmail">
      <div>
      <input type="email" name="email" id="" placeholder="votre email" required>
      </div>
      <div>
      <input @keypress="onlyNumber" type="text" name="number" id="" placeholder="numero" required>
      </div>
      <div>
      <textarea name="message"  id="" cols="30" rows="10" placeholder="Votre question" required></textarea>
       <button class="form__btn"  @click="open = true">ENVOYER</button>
    
      </div>
      
      </form>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Vue from 'vue';
import Navigation from "./Navigation";
import Footer from "./Footer";
import emailjs from 'emailjs-com';
import VueModalTor from "vue-modaltor";
Vue.use(VueModalTor);
export default {
    data(){
     return{
         open:false,
         message:'Success',
         errMessage:"Fail try again"
     }
    },
  components: {
    Navigation,
    Footer,
  },
  methods:{
       sendEmail:(e)=>{
              
              emailjs.sendForm('default_service','usermessage',e.target,'user_kiAam0FeNfjJF70Eq6t1S',this)
              .then((result)=>{
                  
                     return this.message;
              },(error)=>{
                  return errMessage;
                 console.log(error)
               
              })
          },
           onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
     hideModal() {
      this.open = false;
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.message{
    color:$color-primary;
}
.errMessage{
    color:red;
}
input[type="text"],input[type="email"],textarea{
    width: 80%;
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
    border: none;
   color: #555;
background-color: #fff;
background-image: none;
border: 1px solid #ccc;
border-radius: 4px;
-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
margin-top: 1rem;
}
input[type="text"],input[type="email"]{
    height: 50px;
}
::placeholder{
  padding: 1rem;
  font-weight: bold;
}
.form__btn{
    display: block;
    width: 80%;
    margin: 1rem auto;
    padding: 1rem;
    background:$color-secondary;
    border: none;
    color: $color-white;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        background: palevioletred;
    }
}


</style>
