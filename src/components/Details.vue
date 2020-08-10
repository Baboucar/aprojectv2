<template>
  <div>
    <Navigation />

    <section class="section__container top__container blog__details">
      <h1>{{blog.title}}</h1>
        <img :src="blog.image" alt="marketing" />
        <p>{{blog.description}}</p>
        <div v-for="(item, index) in blog.detailDescription" :key="index">
          <p>{{item}}</p>
        </div>
        <div v-for="(item, index) in blog.content" :key="index">
         <h2>{{index}}</h2>
         <p>
         {{item}}
         </p>
        </div>
         <div v-for="(item, index) in blog.detailContent" :key="index">
         <h2>{{index}}</h2>
       
         <p v-for="(item,index) in blog.detailContent[index]" :key="index">
             {{item}}
         </p>
        </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Footer from "./Footer";
import blogs from '../assets/blogs.json';

export default {
    data(){
     return{
         id:this.$route.params.id,
         blog:{},
         date: "this is the date"
         
     }

    },
    created(){
        
         this.blog = blogs.blog.find(item =>item.id == this.id);
         
          console.log(this.blog)
      
    },
    
    mounted(){
       
      
     },
  components: {
    Navigation,
    Footer
  },
  mounted(){
      
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";


@media(min-width: 64rem){

}

</style>
