<template>
  <div>
    <Navigation />

    <section class="top__container section__containe">
      <form action=""  class="form">
            <h1 class="center__text heading">CONNEXION</h1>

        <div class="form__group">
          <label for="" class="">Votre E-mail:</label>
          <input type="email" name="" id="" placeholder="Vote Email" />
        </div>
        <div class="form__group">
          <label for="">Votre mot de passe:</label>
          <input type="password" name="" id="" placeholder="Votre mot de passe"/>
        </div>
        <button class="form__btn">Connexion</button>
        <p class="center__text title">mot de passe oublié
</p>
      </form>
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
@import  "../assets/base.scss";
label {
  display: block;
  font-weight: bold;
  margin-top: 1rem;
}
.form__group {
    width: 90%;
    margin: 0 auto;
}

    .form{
   
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  margin: 2rem auto;
  padding: 4rem;
  
}

@import "../assets/base.scss";
input[type="password"],
input[type="email"] {
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

.form__btn {
  
  width: 50%;
  display: block;
  margin: 2rem  auto;
  padding: 1rem;
  background: $color-tertiary;
  border: none;
  box-sizing: border-box;
  color: $color-white;
  font-weight: bold;
  margin-bottom: 2rem;
  cursor: pointer;
  &:hover {
    background: rgb(32, 32, 133);
  }
}
@media (min-width: 64rem) {
  .form{
   width: 50%;
   margin: 4rem auto;
  }
}
</style>
