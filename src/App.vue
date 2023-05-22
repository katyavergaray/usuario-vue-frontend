<script setup>
import Navbar from './shared/Navbar/Navbar.vue'
import Footer from './shared/Footer/Footer.vue'
import { RouterLink, RouterView } from 'vue-router'
import UsuarioCreate  from '../src/components/UsuarioCreate.vue' 
</script>

<template>    
     
  <div class="container-s">
    <Navbar /> 
    <div class="content">
       
  <div class="wrapper p-4">   
    
   <router-view></router-view>
   <!-- <UsuarioCreate/> -->
  </div>  
    </div>
    <Footer/>
  </div>

  </template>  

<style scoped>

.container-s {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

</style>
