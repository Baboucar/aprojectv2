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
          <input type="email" name="" id="" placeholder="Votre email">
          </div>
          <div>
             <vue-tel-input v-model="phone" class="text"> </vue-tel-input>
          </div>
                  <div class="center__button">
                  <button class="form__btn">Valider</button>
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

import VueTelInput from 'vue-tel-input';
Vue.use(VueTelInput)
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
    width: 95%;
    margin: 0 auto;
}

    .form{
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  margin: 2rem auto;
  
  
}

@import "../assets/base.scss";
input[type="password"],
input[type="email"]{
 width: 90%;
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
  margin: 0 auto;
}

.text{
    height: 50px;
    margin-top: 1rem;
    width: 90%;
    margin: 1rem auto;
}
::placeholder{
    padding-left: 1rem;
}

.center__button{
   display: flex;
   align-items: center;
   justify-content: center;
}
.form__btn {
  width: 50%;
  margin-bottom: 1rem;
  padding: 1rem;
  background: $color-tertiary;
  border: none;
  box-sizing: border-box;
  color: $color-white;
  font-weight: bold;
 
  cursor: pointer;
  &:hover {
    background: rgb(32, 32, 133);
  }
}
 input:focus{
  outline: none !important;
  border-color: #0074d9;
  box-shadow: 0 0 10px #719ece;
 }
@media (min-width: 64rem) {
  .form{
   width: 50%;
   margin: 4rem auto;
     padding: 4rem;
  }
}
</style>
