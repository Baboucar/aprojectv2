<template>
  <div>
    <Navigation />
    <section class="section__container top__container blog__details">
      <h1>Gestion des contacts</h1>
      <h2>
        ENVOYEZ DES SMS EN MASSE À VOS LISTES DE CLIENTS EXCEL, ACCESS, TEXTE
        ETC…
      </h2>
      <p>
        L’envoi depuis une liste de contacts est la solution professionnelle la
        plus adaptée aux envois de SMS en masse. Une fois vos listes traitées
        automatiquement, celles-ci sont formatées afin d’apparaître directement
        dans votre espace client.
      </p>
      <p>
        Il ne vous reste ensuite qu’à utiliser vos critères de sélection pour
        effectuer votre envoi sur une partie ciblée de vos contacts, et ce
        depuis n’importe quel accès internet.
      </p>
      <p>
        Vous n’avez pas besoin d’être en possession de vos fichiers clients pour
        effectuer un envoi. En déplacement, une simple connexion au site
        servicesms.sn avec vos codes d’accès vous donnera accès à un espace
        client privatif et sécurisé où vous pourrez composer votre message,
        sélectionner vos contacts et programmer vos envois.
      </p>

      <h2>LES AVANTAGES DE CETTE SOLUTION</h2>
      <p>
        Notre système accepte, tri et dédoublonne tous les formats de fichier
        afin de pouvoir intégrer tous vos fichiers client directement dans votre
        espace client sur servicesms.sn
      </p>
    
    </section>
      <div class="two__cards sixty__container">
        <div class="card">
          <img class="card__image" src="/../images/gestion/FORMAT-FICHIER.png" alt="" />
          <div class="card__details">
            <h2>FORMAT DES FICHIERS</h2>
            <p>
              Vous pouvez importer n’importe quel type de fichier notre système
              le prendra en charge, nous vous conseillons cependant d’utiliser
              Excel pour formater vos fichiers client.
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/gestion/DÉDOUBLONNAGE.png" alt="" />
          <div class="card__details">
            <h2>DÉDOUBLONNAGE</h2>
            <p>
              Notre système intelligent trouve automatiquement toutes les
              colonnes contenant des numéros de mobile et se charge de
              dédoublonner tous les numéros dupliqués dans vos listes, quelque
              soit leur format.
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/gestion/NETTOYAGE-FORMATAGE.png" alt="" />
          <div class="card__details">
            <h2>NETTOYAGE & FORMATAGE</h2>
            <p>
              Notre système se charge de supprimer tous les numéros erronés.
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card__image" src="/../images/gestion/Exporter.png" alt="" />
          <div class="card__details">
            <h2>EXPORTER</h2>
            <p>
              Vous pourrez à tout moment exporter vos listes pour les
              retravailler ou les mettre à jour avec votre système informatique.
            </p>
          </div>
        </div>
      </div>
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

<style lang="scss" scoped></style>
