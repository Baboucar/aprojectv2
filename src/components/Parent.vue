<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1 class="title center__text">
        Envoi sms aux parents d’élèves. Écoles, collèges, lycées, Formation,
        Universités
      </h1>
      <p>
        Notre plateforme va vous permettre de diffuser de l’information vers vos
        parents d’élèves et ce en temps réel grâce à la rapidité, la simplicité
        et l’universalité du SMS.
      </p>
      <p>
        Cette solution est très utile pour les établissements scolaires. Que ce
        soit pour une école maternelle, primaire, un collège, un lycée ou encore
        une école privée, un institut de formation, université, ou toute autre
        structure recevant des élèves, vos contraintes sont sensiblement les
        mêmes.
      </p>
      <p>
        La diffusion d’informations telles que des alertes SMS pour des
        évènements météo entrainant des perturbations ou encore des SMS en cas
        de mouvement de grève, de réunion parents professeurs, rappel de
        paiement, remise des builtin de notes, calendrier d’examen, rattrapages,
        ouverture d’une formation, acceptation dans un nouveau cursus …
      </p>
      <p>
        Les applications ne manquent pas et nombreux sont les établissements
        scolaires à utiliser une de nos solutions SMS Scolaire.
      </p>
      <h2>Quelques exemples de SMS :</h2>
      <p>
        « Chers Etudiants de la FAC droit, la période des examens commencera le
        lundi 8 décembre et terminera le samedi 12 décembre. Bonnes révisions
        ! »
      </p>
      <p>
        « Votre enfant Marième Sow ne s’est pas présenté en cours ce jour à
        8h00. Merci de prendre contact rapidement avec l’établissement scolaire
        au 01234567890″ »
      </p>
      <p>
        « Chers parents, nous vous rappelons que la réunion parent/profs aura
        lieu demain soir à partir de 18h. »
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
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
</style>
