<template>
  <div>
    <Navigation />
    <section class="section__container fix__position">
      <h1 class="center__text header__title">
        Actualités et conseils sur la communication par SMS
      </h1>
    </section>

    <section class="section__container sixty__container blog__section">
      <h2 class="blog__head">Landing page et SMS pro</h2>
      <div class="blogs">
        <div class="blog">
          <h3 class="blog__title">Le SMS marketing</h3>
          <div class="grid__blog">
            <figure>
              <img src="/..//images/blog/marketing.jpg" alt="marketing" />
              <figcaption>Publice le 05/12/2020</figcaption>
            </figure>

            <p>
              Le SMS marketing sert à la fois d’outil en interne au sein d’une
              entreprise pour la direction ou le service RH par exemple, ou en
              externe pour communiquer avec ses clients des messages à caractère
              informatif et bien sûr commercial.

              <a href="/details" class="blog__details"
                >En savoir plus sur "le SMS marketing"</a
              >
            </p>
          </div>
        </div>

        <div class="blog">
          <h3 class="blog__title">
            Pourquoi & comment personnaliser vos SMS ?
          </h3>
          <div class="grid__blog">
            <figure>
              <img
                src="/..//images/blog/personnaliser-ses-sms.jpg"
                alt="marketing"
              />
              <figcaption>Publice le 05/12/2020</figcaption>
            </figure>

            <p>
              De nos jours les consommateurs sont de plus en plus exigeants. Les
              personnes souhaitent avoir une relation personnalisée avec les
              entreprises, les marques… ce qui n’est pas toujours aisé et
              évident à mettre en place.

              <a href="" class="blog__details"
                >En savoir plus sur "le SMS marketing"</a
              >
            </p>
          </div>
        </div>
      </div>

      <div></div>
    </section>
  </div>
</template>

<script>
import Navigation from "./Navigation";

export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.blog {
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  padding: 1rem;
}
.blog__details {
  display: block;
  text-decoration: none;
  color: $color-tertiary;
}

.blog__title {
  border-bottom: 2px solid $color-tertiary;
  color: $color-tertiary;
  font-weight: bolder;
}

@media (min-width: 64rem) {
  .grid__blog {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  .blog__details {
    padding-top: 2rem;
  }
}
</style>
