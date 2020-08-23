<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="center__text">
        Vote par SMS
      </h1>
      <p>
        <strong
          >Un service innovant à la pointe de la technologie qui permet de
          révolutionner le monde du vote !
        </strong>
      </p>
      <p>Le vote par SMS est une modalité de vote électronique à distance.</p>
      <h2>PRINCIPE DU VOTE PAR SMS</h2>
      <p>L’électeur est invité à voter en envoyant simplement un SMS.</p>
      <p>
        Il existe deux techniques pour différencier les candidats ou les choix
        proposés : soit il est réservé un numéro de téléphone par choix et
        l’électeur envoie son SMS au numéro correspondant, soit il est utilisé
        un seul numéro de téléphone et l’électeur saisit un mot clé dans son SMS
        pour indiquer son intention de vote.
      </p>
      <p>
        L’unicité du vote, si elle est souhaitée, est assurée par le fait que
        l’ordinateur réceptionnant les SMS n’accepte qu’un seul vote par numéro
        de téléphone émetteur ou, de manière plus sécurisée, demande à
        l’électeur de saisir dans son SMS un code personnel qui lui aura été
        communiqué avant le scrutin.
      </p>
      <p>
        Il est aussi important de noter que chaque téléphone, à l’instar d’une
        carte vitale, a un identifiant appelé IMEI, qui est un numéro unique
        d’identification composée de 15 à 17 chiffres, qui lui est propre. Il
        est donc bien plus fiable qu’un ordinateur portable et bien plus
        compliqué à pirater.
      </p>
      <h2>MAIS POURQUOI RÉALISER MON VOTE PAR SMS ?</h2>
      <p>
        Mais quel est donc l’intérêt de réaliser mon vote par SMS plutôt que de
        le réaliser en ligne, à mains levées ou encore en utilisant une urne ?
        La réponse à cette question est assez simple : avec le SMS vous évitez
        aussi bien les problèmes d’oubli qui touchent bon nombre de nos
        compatriotes quand il s’agit de se déplacer ! De plus, avec le vote par
        SMS aucun de vos votants n’a besoin d’une bonne connexion pour y
        participer, il lui suffit simplement d’avoir un mobile pour que cela
        fonctionne.
      </p>
      <p>
        En réalisant votre vote par SMS vous alliez simplicité, sécurité et
        efficacité !
      </p>
      <p>
        SERVICE-SMS ayant à cœur de toujours répondre aux besoins de ses
        clients, nous avons donc créé une solution inédite de vote par SMS en
        temps réel !
      </p>

      <p><strong>Quelques exemples d’utilisation du vote par SMS :</strong></p>
      <li>
        –Les jeux concours ou les jeux télévisés avec des numéros surtaxés
      </li>
      <li>–Les assemblées en remplacement des boitiers de vote interactif</li>
      <li>– Election du délégué du personnel, d’un chef de parti…</li>
      <li>– Vote interne sur un sujet important pour votre société</li>
      <li>– Vote en live durant une conférence avec vos participants</li>
      <li>– Vote entre deux nouveautés auprès de vos clients</li>
      <li>– Vote pour élire un président du collège/lycée</li>
      <li>– Vote pour élire un président de l’amicale/association</li>
      <li>– Vote pour élire président d’une faculté à l’université</li>
      <h2>Offre de Service-SMS concernant le vote par SMS</h2>
      <p>
        Service-SMS vous accompagne dans l’organisation de vos votes par SMS
        pour vos assemblées de 20 à 500 votants. Pour plus de renseignements,
        nous vous invitons à nous contacter.
      </p>
    </section>
    <section class="section__detail">
      <p>Pour en savoir plus sur l’utilisation du sondage par SMS ? Nous sommes là si vous avez la moindre question. </p>
       <div class="btn__wrapper">
       <router-link class="btn" to="/contact"
              >CONTACTEZ-NOUS</router-link
            > 
       </div>
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

<style lang="scss" scoped>
@import '../assets/base.scss';
.section__detail{
    background: $color-tertiary;
    padding: 4rem;
    width: 55%;
    margin: 0 auto;
    color:$color-white;
    
}
.connect__btn{
    padding: 1rem;
    border: none;
    color: $color-white;
    background: $color-secondary;
    border-radius: 5px;
    font-weight: bold;
     cursor: pointer;
     text-align: center;

}
@media(min-width:64rem){
    .section__detail{
        font-size: 1.2rem;
        font-weight: bold;
    }
    .btn__wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
