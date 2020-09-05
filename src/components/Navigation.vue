<template>
    <div class="fix__navigation">
       <header class="header">
            <div>
            <a href="/"><img class="logo__image" src="/../images/logoservicesms.png" alt="logo">   </a>    
            </div>
            <div class="contact">
                <span><img class="contact__icon" src="/../images/phone.png" alt="phone"></span>
                <span class="contact__detail">Contact: 77.710.23.57</span>
                <span><img class="contact__icon" src="/../images/mail.png" alt="phone"></span>
                <span class="contact__detail" >contact@servicesms.com</span>


            </div>

            <div class="header__links">
                <router-link class="header__link" to="/login"> <img class="link__icon" src="/../images/lock.png" alt=""> Se connecter</router-link>
                <router-link class="header__link" to="/signup"> <img class="link__icon" src="/../images/writing.png" alt=""> S'inscrire</router-link>
            </div>
            <div class="menu">
                    <span class="menu__button" v-on:click="item1Visible = !item1Visible ">&#9776;</span>
            </div>
       </header>
       <nav class="section__container nav" v-show="!item1Visible">

           <div class="sub__nav">
      
           <router-link class="nav__links" to="" @mouseover.native="hover=true" @mouseleave.native="hover=false" @click.native="togglenav"  >SOLUTIONS <img class="drop_downicon" src="/../images/menu.png" alt="" >
           
            <div  class="toggle__nav"  v-if="hover"  
             >
                <div>
                 <router-link to="/smspro" class="sub__nav--links"  >SMS Pro</router-link>
                 <router-link to="/smsvocal" class="sub__nav--links">SMS Vocal</router-link>
                 <router-link to="/enrich" class="sub__nav--links" >SMS Enrichi</router-link>
                 <router-link to="/location" class="sub__nav--links" >Location BDD SMS</router-link>
                 <router-link to="/mailing" class="sub__nav--links" >SMS MAILING</router-link>
                 <router-link to="/sondage" class="sub__nav--links">Sondages par SMS</router-link>
                <router-link to="/mobileticketing" class="sub__nav--links">Mobile Ticketing</router-link>
                <router-link to="/rap" class="sub__nav--links"  @mouseleave.native="hover=false">Rate'Pas Votre Bus</router-link>
                </div>
            

             </div>
           </router-link>
            

           <router-link class="nav__links" to="/functionalities">FONCTIONNALITES</router-link>
           <router-link class="nav__links" to="/tarif">NOS TARIFS</router-link>
           <router-link class="nav__links" to="/metires" >METIERS</router-link>
         
           <router-link class="nav__links" to="/api">API</router-link>
           <router-link class="nav__links" to="/blog">BLOG</router-link>
           </div>

         <router-link to="" class=" link__btn "><p class="desc">Entrez votre numéro et recevez <br> immédiatement un message de test</p> <div class="flex__two">  <img src="/../images/left-arrow.png" class="btn__icon " alt="">  <input type="text"> <img src="/../images/icone.png" class=" send__btn" alt="">  </div> </router-link>
       </nav>
    </div>
</template>

<script>

    export default {

        data(){
          return{
             hover:false,
             sub:false,
             nav:'vis',
            
             seenp:false,
              item1Visible: 'vis',
      item2Visible: false
              
          }

          
        },
        methods:{
            // bad code fix it later
            togglenav(){
               if(this.hover == false){
                   this.hover = true;
               }
               else{
                   this.hover = false;
               }
             
            },
            // really crappy code fix it later
            // togglenavp(){
            //    if(this.seenp == false){
            //        this.seenp = true;
            //    }
            //    else{
            //        this.seenp = false;
            //    }
            // },
            // open(){
               
            //     let item =  document.querySelector('.nav');
            //       if(item.style.display == 'none'){
            //           item.style.display = 'block';
            //       }
            //       else{
            //           item.style.display = 'none';
            //       }
            // },
            changenavbarcolor(){
    
             
                window.onscroll = () =>{
                       const navi = document.querySelector(".sub__nav");
                       const n = document.querySelector(".nav");

                   
                  if(this.scrollY <= 10){
                       navi.style.background = 'red';
                  }
                  else{
                       navi.style.background = "#FFFFFF";
                       n.style.background = "#FFFFFF";
                       
                  }
                }
            },
            
        },

        created:function(){
            //window.alert("Hello mounted is working ");
             this.changenavbarcolor();
        }
    }
</script>

<style lang="scss" scoped>
@import  '../assets/base.scss';
  .vis{
      display: none;
  }
   .logo__image{
       width:200px;
    
   }
   .link__btn{
       display: block;
    
   }
   .header{
       width: 90%;
       margin: 0 auto;
       display: flex;
       align-items: center;
       
   }
.send__btn{
   
    margin-top: 10px;
    height: 39px;
}
   input[type="text"]{
       height: 35px;
       border-radius: 2px;;

       border: none;
       border-color: rgba(255, 255, 255, 0.3);
    outline: none;
   
      
   }
   input:focus{
      outline: none !important;
    border-color: #0074d9;
    box-shadow: 0 0 10px #719ece;
   }

  
.link__btn{
 
    box-shadow: 0 22px 33px 0 rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(to bottom, #ff54c4, #fe2a91);
    text-decoration: none;
    color: #FFFFFF;
  
    

    
}
   .menu{
       margin-left: auto;

       &__button{
           color:$color-tertiary;   
           display: block;
           width: 3rem;
          font-size: 2rem;
          cursor: pointer;


           
       }
   }

   .contact, .header__links{
       display: none;
   }

   .nav{
        
           margin: 0 auto;
           
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
 .sub__message{
        display: contents;
        font-size: .8rem;
    }
    .flex__two{
       display: flex;
       align-items: center;
       justify-content: center;
    }
    .desc{
       text-align: center;
    }

   @media(min-width: 64rem){
       .btn__icon{
           margin-top: 1rem;
       }
    input[type="text"]{
        width:15rem;
        margin-top: 1rem;
    }
        .nav__links{
        margin-left: 1.5rem;
       font-weight: bold; 
    
    }
      .drop_downicon{
              margin-bottom: -.1rem;
      }
    .contact__icon{
        margin-left:1rem;
     
    }
    .contact__detail{
        display: inline-block;
        margin-left: .5rem;
        font-size: 1.2rem;
    }
       .logo__image{
           width: 300px;
       }
       .menu{
           display: none;
       }
       .contact{
           display: flex;
           align-items: center;
           justify-content: center;
         
         
           
       }

       .header{
           width: 90%;
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
     
        margin-left: auto;
        flex-basis: 30%;
          height: 70px;
      

          
        
     }
     .desc{
         margin: -15px;
     }
     .nav{
         display: flex;
         
        align-items: center;
         justify-content: center;

     }
       .nav__links{
           display: inline-block;
           border: none;
          

          
       }
       .link__btn{
           padding: 1rem;
       }
       .nav__links{
           &:hover{
               color: $color-secondary;
           }
       }

       .fix__navigation{
           position: fixed;
           width: 100%;
           top: -40px;
           z-index: 1;
       }

       .toggle__nav{
          position:fixed;
          background:$color-white;
          padding: 1rem;
       
       }
     .sub__nav{
         flex-basis: 70%;
        box-shadow: 0 9px 20px 2px rgba(0, 0, 0, 0.24);
        padding: 2rem;

         
     }

     .proqui{
        left: 420px;
        padding: 1.5rem;
     }
    
   }

</style>