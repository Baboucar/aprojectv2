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
       
        <div class="blog" v-for="(item,index) in display" :key="index" >
          <h3 class="blog__title">{{item.title}}</h3>
          <div class="grid__blog">
            <figure>
              <img :src="item.image" alt="marketing" />
              <figcaption class="date">{{item.date}}</figcaption>
            </figure>

            <p>
              {{item.description}}

             
              <router-link class="blog__detail" :to="'/' +item.id">{{item.title}}</router-link>
            </p>
          </div>
        </div>

      
      </div>

      <div></div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from './Footer';
import blogs from '../assets/blogs.json';

export default {
    data(){
     return{
         blog:blogs.blog
     }
    },
    computed:{
     display(){
         return this.blog;
     }
    },
  components: {
    Navigation,
    Footer
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
.blog__head{
  color:$color-tertiary;
}
.blog__detail {
  display: block;
  text-decoration: none;
  color: $color-tertiary;
  font-weight: 500;
  padding-top: 1rem;
}

.blog__title {
  border-bottom: 2px solid $color-tertiary;
  color: $color-tertiary;
  font-weight: bolder;
}
.date{
  font-weight: bold;
  
}
@media (min-width: 64rem) {
  .grid__blog {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  .blog__details {
    padding-top: 2rem;
  }
  .header__title{
    padding: 4rem;
  }
}
</style>
