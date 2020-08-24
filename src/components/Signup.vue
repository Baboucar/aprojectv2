<template>
  <div>
    <Navigation />
    <section class="top__container section__containe">
      <form action="" class="form">
        <h2 class="center__text">INSCRIPTION RAPIDE</h2>
        <p class="center__text"
          >Seulement quelques secondes pour vous inscrire : <br>
           un mot de passe vous
          sera envoyé par e-mail.</p>

          <div>
          <label for="">Email</label>
          <input type="email" name="" id="" placeholder="Votre email">
          </div>
          <div>
             <vue-tel-input v-model="phone" class="text"> </vue-tel-input>
          </div>
                  <button class="form__btn">Valider</button>

      </form>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";
import Vue from 'vue';
import VueTelInput from 'vue-tel-input';
Vue.use(VueTelInput)
export default {
  components: {
    Navigation,
    Footer,
    VueTelInput
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
input[type="email"]{
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

.text{
    height: 50px;
    margin-top: 1rem;
}
::placeholder{
    padding-left: 1rem;
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
