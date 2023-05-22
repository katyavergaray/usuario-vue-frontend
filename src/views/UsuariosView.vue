<script setup>
import Usuarios from '../components/Usuarios.vue'  // importamos el nuevo componente
import * as bootstrap from 'bootstrap';
import { useRouter } from 'vue-router';

const router = useRouter();
window.bootstrap = bootstrap;


const goToUsuarioCreate = () => {
  router.push({ name: 'UsuarioCreate' });
  // router.push('/usuario/crear');
};

</script>

<template>
 <div class="card p-4">
      <div class="card-header pb-3">
        <div class="row">
          <div class="col-6 d-flex align-items-center">
            <h6>Usuarios</h6>
          </div>
          <div class="col-6 text-end">
            <!-- <button class="button blue-button" @click="openModal">Registrar</button> -->
           
            <button class="button blue-button" @click="goToUsuarioCreate">Registrar</button>
 
          </div>
          
        </div>
      </div>
      
      <div class="card-body px-0 pt-0 pb-0">
        <router-view></router-view>
      </div>

 
  </div>
 
</template>
