<template>
  <div>
    <Navigation />

    <section class="section__container top__container blog__details">
      <h1>Le SMS marketing</h1>
      <img src="/../images/blog/marketing.jpg" alt="" />
      <p>
        Le SMS marketing sert à la fois d’outil en interne au sein d’une
        entreprise pour la direction ou le service RH par exemple, ou en externe
        pour communiquer avec ses clients des messages à caractère informatif et
        bien sûr commercial.
      </p>
      <p>
        Il  date de 1992 soit plus de 25ans et il n’a pas évolué ou presque
        depuis sa création. Alors est-il toujours d’actualité à l’ère de
        l’Internet 3.0 ?
      </p>
      <h1>Le SMS marketing est-il toujours performant ?</h1>
      <p>
        Oui et les raisons sont simples.<br />
        Notre téléphone est toujours avec nous et nous lisons nos SMS en moyenne
        seulement quelques minutes après leur réception. Aussi, avez-vous déjà
        remarqué qu’on n’efface jamais un SMS d’un proche ou d’une marque sans
        l’avoir lu ?
      </p>
      <h1>Les messageries instantanées tuent le SMS ?</h1>
      <p>
        Il est vrai qu’entre particuliers les usages ont évolué au profit des
        messageries telles que Facebook Messenger, WhatsApp, ou encore Viber…
        Mais le SMS reste toutefois incontournable dans le marketing mobile,
        c’est-à-dire pour un usage professionnel.
      </p>
      <h1>Le SMS, c’est trop simple ?</h1>
      <p>
        Comme le dit la célèbre expression ironique « Pourquoi faire compliqué
        quand on peut faire simple » ?
      </p>

      <p>
        Il fonctionne aussi bien sur le célèbre Nokia 3310 que sur l’ensemble
        des smartphones dernier cri du marché.
      </p>
      <p>
        En choisissant le SMS, vous n’avez pas à vous soucier de sa
        délivrabilité. Vous avez la certitude de couvrir et de toucher 100% du
        parc mobile.
      </p>
      <h1>Le SMS, c’est trop court pour communiquer ?</h1>
      <p>
        Aujourd’hui il faut être percutant dans sa communication ! Nous sommes
        envahis d’informations, on parle même de data obésité et nos capacités
        mémorielles sont limitées… Savoir résumer son offre en 160 caractères
        oblige à transmettre les informations essentielles, c’est-à-dire celles
        que devront retenir vos destinataires !
        <strong>Soyez clair, court, concis !</strong>
      </p>
      <h1>Le SMS marketing c’est payant ?</h1>
      <p>
        Oui, l’usage du SMS professionnel n’est pas gratuit et c’est une bonne
        chose car cela permet de se prémunir du phénomène des spams, constatés
        dans les boites mails.
      </p>
      <p>
        Cependant, il demeure très accessible car facturé seulement quelques
        francs à l’émetteur et son tarif est dégressif en fonction du volume
        d’envoi.
      </p>
      <h1>Le SMS, c’est trop intrusif !</h1>
      <p>
        C’est une idée reçue car contrairement aux 4×4, bannières web, spots tv…
        le SMS ne peut être envoyé que si la personne a au préalable donné son
        consentement. Aussi, toute personne a la possibilité d’être retirée de
        la base client par le simple envoi d’un stop SMS.
      </p>
      <p>
       Enfin, il est à noter
        que notre plateforme est conforme au RGPD à caractère personnel. Vous
        l’aurez compris, la fin de l’ère du SMS n’est donc pas pour tout de
        suite ! Le SMS reste un outil simple, pratique et qui a su démontrer son
        efficacité au fil des années. 

      </p>
      <p>
      A son image, la plateforme de SMS
        Service-SMS est très intuitive, si bien que vous pouvez réaliser vos
        campagnes de SMS marketing en totale autonomie. Notre équipe reste bien
        sûr à votre écoute pour toute question ou pour des demandes nécessitant
        des développements spécifiques.
      </p>
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
    Footer
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.blog__details{
    border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  width: 60%;
  margin-bottom:2rem;
}

</style>
