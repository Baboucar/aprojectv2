<template>
   <section class="tarrif">
        <h2 class="tarif__price">Des packs adaptés à vos besoins</h2>
       <div class="terif__info">
       <h1 class="center__text tarif__header">NOS FORMULES D'ENVOIS DE SMS</h1>
    <p class="center__text tarif__description">Découvrez la formule de SMS adaptée à vos besoins, quelle que soit la
        fréquence et la récurrence de vos envois.</p>
    
        <table class="table first__table sixty__container">
        <thead>
            <tr>
                <th class="transparent"></th>
                <th class="transparent"></th>
                <th><span class="text">1 à 4.999 </span> <br> <span class="sms">SMS</span></th>
                <th><span class="text">5.000 à 9.999 </span> <br> <span class="sms">SMS</span></th>
                <th><span class="text">10.000 à 24.999 </span> <br> <span class="sms">SMS</span></th>
                <th><span class="text">25.000 à 49.999 </span> <br><span class="sms">SMS</span></th>
                <th><span class="text">50.000 à 99.999</span> <br> <span class="sms">SMS</span></th>
                <th><span class="text">100.000 à 250.000</span> <br> <span class="sms">SMS</span></th>

            </tr>

        </thead>
        <tbody>
            <tr>
                <td class="white"></td>
                <td class="lead"><span>Tarif</span> <br> <span>HT/SMS</span></td>
                <td class="tri_oran">28,24 F</td>
                <td class="tri_oran">27,58 F</td>
                <td class="tri_oran">26,93 F</td>
                <td class="tri_oran">26,27 F</td>
                <td class="tri_oran">25,58 F</td>
                <td class="tri_oran">24,30 F</td>
            </tr>
            <tr>
                <td style="background:transparent"></td>
                <td></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
            </tr>
        </tbody>

    </table>

    <table class="table second__table">
        <thead>
            <tr>
               
                <th><span class="text">1 à 4.999 </span> <br> <span class="sms">SMS</span></th>
                <th><span class="text">5.000 à 9.999 </span> <br> <span class="sms">SMS</span></th>
                <th><span class="text">10.000 à 24.999 </span> <br> <span class="sms">SMS</span></th>
              

            </tr>

        </thead>
        <tbody>
            <tr>
              
                <td class="tri_oran"><span class="price">28,24 F</span></td>
                <td class="tri_oran"><span  class="price">27,58 F</span></td>
                <td class="tri_oran"><span  class="price">26,93 F</span></td>
              
            </tr>
            <tr>
              
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
                <td class="tri-blanc-fin"></td>
               
                 
            </tr>
        </tbody>

    </table>


    <p class="center__text tarif__subtext">(*) Ces tarifs concernent un usage vers la France Métropolitaine, pour une
        utilisation vers d'autres destinations, merci de nous contacter.</p>

        <div class="calculate__price center__text sixty__container" >
            
            <div>
                <h3>Indiquez le nombre de SMS souhaités</h3>
                
                <input  class="input" v-model="price" name id > 
              
            </div>
       
            <div>
                <img class="svg__image" src="/../images/down-arrow.png" alt="">
                <img class="next__arrow" src="/../images/next.svg" alt="" srcset="">
            </div>

            <div>
                <h3>Notre Tarif (HT)</h3>
                <div class="tarif__result">
                    <span>{{calculatePrice}} €   (28,24 F €/SMS)</span>
                    
                </div>
            </div>
        </div>
        <p class="center__text">N'hésitez pas à nous contacter si vous désirez un nombre plus important de SMS.
            Je commande</p>
           
       
       </div>

        <div class="tarif__details">
          <h3>Besoin d’envoyer + de sms ?</h3>
          <ul>
            <li>
              Prix dégressif selon le nombre de SMS achetés au-delà de 250 000
              SMS/an, nous contacter
            </li>
            <li>Devis et factures établis sur demande</li>
            <li>Quantité       <input type="text" name="" placeholder="enter text heree" id="">
s supérieures ou besoins spécifiques</li>
          </ul>
        </div>
      </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>