<template>
  <div>
    <Navigation />

    <section class="top__container section__containe">
      <form action="" class="form">
        <h1 class="center__text heading">CONNEXION</h1>

        <div class="form__group">
          <input type="email" name="" id="" placeholder="Vote Email" />
        </div>
        <div class="form__group">
          <input
            type="password"
            name=""
            id=""
            placeholder="Votre mot de passe"
          />
        </div>
        <div class="center__button">
          <button class="form__btn">Connexion</button>
        </div>

        <p class="center__text title">mot de passe oublié <br>
        Vous avez déjà un compte : <router-link to="/signup" class="connection">Connexion</router-link>

        
        </p>
       
      </form>
    </section>
    <Footer />
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
input[type="password"],
input[type="email"] {
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
  margin: 1rem auto;
}

.text {
  height: 50px;
  margin-top: 1rem;
  width: 90%;
  margin: 1rem auto;
}
.connection{
  text-decoration: none;
  color: $color-secondary;
}
::placeholder {
  padding-left: 1rem;
}

.center__button {
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
@media (min-width: 64rem) {
  .form {
    width: 50%;
    margin: 4rem auto;
    padding: 4rem;
  }
}
</style>
