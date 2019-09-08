<template>
    <div class="fix__navigation">
       <header class="header">
            <div>
            <img class="logo__image" src="/../images/logo.png" alt="logo">       
            </div>
            <div class="contact">
                <span>Contact: 12345677899</span>
            </div>

            <div class="header__links">
                <router-link class="header__link" to=""> <img class="link__icon" src="/../images/lock.png" alt=""> Se connecter</router-link>
                <router-link class="header__link" to=""> <img class="link__icon" src="/../images/writing.png" alt=""> S'inscrire</router-link>
            </div>
            <div class="menu">
                    <span class="menu__button" @click="open">&#9776;</span>
            </div>
       </header>
       <nav class="section__container nav">
           <div class="sub__nav">
           <router-link class="nav__links" to="" @click="togglenav">SERVICES</router-link>
             <div class="toggle__nav">
                 <router-link to="" class="sub__nav--links">SMS LOW COST</router-link>
                 <router-link to="" class="sub__nav--links">SMS PRO</router-link>
                 <router-link to="" class="sub__nav--links">SMS VOCAL</router-link>
                 <router-link to="" class="sub__nav--links">LA FONCTION "RICH MESSAGE" ET LE SMS 2.0 ...</router-link>
                 <router-link to="" class="sub__nav--links">SMS *WAP PUSH* ET *CLIC TO CALL*</router-link>
                 <router-link to="" class="sub__nav--links">QR "WEB" : UN LIEN VERS L'INTERNET MOBILE</router-link>
                 <router-link to="" class="sub__nav--links">LOCATION DE FICHIERS DE PROSPECTS</router-link>
                 <router-link to="" class="sub__nav--links">RAT' PAS TON BUS</router-link>

             </div>

           <router-link class="nav__links" to="">FONCTIONNALITES</router-link>
           <router-link class="nav__links" to="">TARIFS</router-link>
           <router-link class="nav__links" to="">UTILISATURS</router-link>
           <router-link class="nav__links" to="">UTILISATIONS</router-link>
           <router-link class="nav__links" to="">API</router-link>
           </div>
           <router-link to="" class=" link__btn"> <img src="/../images/left-arrow.png" class="btn__icon" alt="">  ESSAYEZ GRATUITMENT</router-link>
       </nav>
    </div>
</template>

<script>
    export default {
        methods:{
            open(){
               
                let item =  document.querySelector('.nav');
                  if(item.style.display == 'none'){
                      item.style.display = 'block';
                  }
                  else{
                      item.style.display = 'none';
                  }
            },
            changenavbarcolor(){
    
             
                window.onscroll = () =>{
                       const navi = document.querySelector(".sub__nav");
                       const n = document.querySelector(".nav");

                   
                  if(this.scrollY <= 10){
                       navi.style.background = 'red';
                  }
                  else{
                       navi.style.background = "#EEE";
                       n.style.background = "#EEE";
                       
                  }
                }
            },
            togglenav(){
                console.log("Button clicked !!!!")
               //window.alert("button clicked!");
            }
        },

        created:function(){
            //window.alert("Hello mounted is working ");
             this.changenavbarcolor();
        }
    }
</script>

<style lang="scss" scoped>
@import  '../assets/base.scss';

   .logo__image{
       width:200px;
   }

   .header{
       display: flex;
       align-items: center;
       padding: 1.5rem;
   }

.link__btn{
 
    box-shadow: 0 22px 33px 0 rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(to bottom, #ff54c4, #fe2a91);
    text-decoration: none;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;

    
}
   .menu{
       margin-left: auto;

       &__button{
           color:$color-primary;   
           display: block;
           width: 3rem;
          font-size: 2rem;
          cursor: pointer;


           
       }
   }

   .btn__icon{
     margin-right: 1rem;
     
   }

   .contact, .header__links{
       display: none;
   }

   .nav{
        display: none;
           margin: 0 auto;
       box-shadow: 0 9px 20px 2px rgba(0, 0, 0, 0.24);
       &__links{
           display: block;
           text-decoration: none;
           text-align: left;
           border-bottom: 0.5px solid #dbdbdb;
            padding: .5rem;
            font-size: .8rem;
           color: $color-black;
          
           
       }

   }

   .sub__nav--links{
       display: block;
       text-decoration: none;
       font-size: .7rem;
       padding: .5rem;
       color: $color-black;
   }

@media(min-width: 834px){
    
}
   @media(min-width: 64rem){
       .logo__image{
           width: 300px;
       }
       .menu{
           display: none;
       }
       .contact{
           display: block;
         
           font-weight: bold;
           
       }
       .header{
           width: 80%;
           margin: 0 auto;
           justify-content: space-between;
           background: #FFFFFF;
       }
      .header__links{
          display: block;
          font-weight: bold;
      }
       .header__link{
         text-decoration: none;
         margin-right: 1rem;
         color:$color-secondary;
       }
    
     .link__btn{
        //  margin-left: 1rem;
        //  padding: 1.5rem;
        //  margin-left: 7.9rem;
        margin-left: auto;
        flex-basis: 30%;
      

          
        
     }
     .nav{
         display: flex;
         
        align-items: center;
         justify-content: center;

     }
       .nav__links{
           display: inline-block;
           border: none;
           padding:1rem;

        
           font-size: 1rem;

          
       }
       .link__btn{
           padding: 1.5rem;
       }
       .nav__links{
           &:hover{
               color: $color-secondary;
           }
       }

       .fix__navigation{
           position: fixed;
           width: 100%;
           top: 0;
           z-index: 1;
       }

       .toggle__nav{
          position:fixed;
          background:$color-white;
          display:none;
       }
     .sub__nav{
         flex-basis: 70%;
     }
    
   }

</style>