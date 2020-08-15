<template>
    <div>
   <Navigation/>
   <section class="top__container section__container">
   <h1 class="center__text heading">Postuler</h1>
   <h3 class="center__text"> N'hésitez pas à nous transmettre votre candidature</h3>

   <form class="seventy__container form" @submit.prevent="sendEmail">
     <div class="two__grid radio__buttons">
       <div>
       <input type="radio" name="user_name" value="male" id="m" v-model="picked">
       <label for="m" class="form__radio man" 
       v-bind:class="{ 'i-am-active':  first_button_active_state }"
    v-on:click="changeColor"
       >Monsieur</label>
       </div>
       
        <div>
        <input type="radio" name="user_name" value="female" id="f" v-model="picked" >
        <label for="f" class="form__radio woman"
          v-bind:class="{ 'i-am-active':second_button_active_state }"
    v-on:click="changeColor"
        
         >Madame</label>
      
        
        </div>
         </div>

        <div class="two__grid">
          <div>
           <input type="text"  name="user_firstname" placeholder="Nom" required>
          </div>
          <div>
           <input type="text" name="user_secondname" id="" placeholder="Prenom" required>
          </div>
        </div>
        <h2 class="center__text">Votre addresse</h2>
        <div class="address__input">
          <input name="user_address" type="text" placeholder="Numero, rue" required>
        </div>
        <div  class="two__grid">
        <div>
           <input name="postalcode" type="text" id="" placeholder="Votre code postal" required>
        </div>
        <div>
          <input type="text" name="ville" id="" placeholder="Votre Ville" required>
        </div>
        </div>
           <h2 class="center__text">Vos coordonnées</h2>
           <div class="two__grid">
           <div>
           <input type="text" name="user_telephone" id="" placeholder="Votre telephone" required>
           </div>
           <div>
             <input  type="email" name="user_address" id="" placeholder="Votre adress email">
           </div>
           </div>

            <h2 class="center__text">Votre message</h2>
            <div class="file">
            <label for="file" class="custom-file-input"></label>
           <input type="file" name="my_file" id="file" class="hide__file" title="  " required>
           </div>
           <div class="textarea">
           <textarea name="message" id="" cols="30" rows="10" placeholder="Saissez votre message"></textarea>
           </div>
           <h2 class="center__text">Poste souhaité</h2>
            <div class="address__input">
          <input name="interese"  type="text" placeholder="qui vous intéresse">
        </div>
         <div class="btn__wrapper">
         <input type="submit" value="Envoyer" class="btn submit__btn">
         </div>
   
   </form>
   
   </section>
   <Footer/>
    </div>
</template>

<script>
import Navigation from './Navigation';
import Footer from './Footer';
import emailjs from 'emailjs-com';

    export default {
        data(){
          return{
             picked:null,
               first_button_active_state: false,
               second_button_active_state:false,
             

          }
        },
        methods:{
          selectGender(){
              console.log("I picked"+this.picked)
          },
          changeColor(){

              if(this.first_button_active_state==false){
                  this.first_button_active_state =true;
                  this.second_button_active_state =false;
                  
             // this.button_active_state = !this.button_active_state
              }
            else if(this.second_button_active_state == false){
                 this.second_button_active_state = true;
                 this.first_button_active_state= false;
            }
          },
          sendEmail:(e)=>{
              
              emailjs.sendForm('default_service','template_emzSbIOn',e.target,'user_kiAam0FeNfjJF70Eq6t1S',this)
              .then((result)=>{
                  console.log('Success',result.status,result.text)
              },(error)=>{
                console.log(error)
              })
          }
        },
        components:{
            Navigation,
            Footer
        }

    }
</script>

<style lang="scss" scoped>
@import '../assets/base.scss';
.form{
   
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  margin: 2rem auto;
}
.i-am-active {
  
color:$color-white;
  background:$color-tertiary ! important;
}
.hide__file{
    display: none;
}

input[type="radio"]{
    display: none;
}
input[type='file'] {
  color: transparent;
}
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.form__radio{
        background-color: #eee;
        font-size: 1.2rem;
        margin-top: 2rem;

        display: block;
    font-weight: 400;
    padding: 7px 5px;
    border-radius: 5px;
   
    text-align: center;


}
textarea{
    width: 100%;
     border: 2px solid ;
    border-color: #bbb;
}

.custom-file-input::before {
  content: 'Déposez votre CV ';
  
  display: block;
  margin: 1rem auto;
  background: $color-tertiary;
  text-align: center;
  border-radius: 3px;
  padding: 1rem;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: 700;
 color: $color-white;
}


input::placeholder{
    padding-left: 1rem;
    font-weight: bold;
}


input[type="text"], input[type="email"]{
    width: 100%;
    border:none;
    
    border: 2px solid ;
    border-color: #bbb;
    height: 60px;
    font-size: 1.2rem;
    color: #222;
    border-radius: 10px;
    margin-top: 1rem;
    
    box-sizing: border-box;
    
    box-shadow: none;
}
.submit__btn{
    background: $color-tertiary;
    width: 10rem;
    margin: 2rem auto;
    border-radius: 5px;
    font-weight: bold;

}
.btn__wrapper{
    width: 10rem;
    margin: 0 auto;  
}
@media(min-width:64rem){
    .form__radio{
         width: 10rem;
    }
    .two__grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        width:70%;
        margin: 0 auto;
      
    }
    .radio__buttons{
        width: 50%;
        margin: 0 auto;
        
    }
   .address__input{
       width: 70%;
       margin: 0 auto;
   }
   .file{
       width: 20rem;
       margin: 0 auto;
   }
   .textarea{
       width: 80%;
       margin: 0 auto;
   }

}
</style>