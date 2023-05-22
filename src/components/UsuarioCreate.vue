<script setup>
import {computed, reactive   } from 'vue';
import axios from 'axios';
import { useVuelidate } from '@vuelidate/core'
import { required,  minLength,  maxLength,helpers   } from '@vuelidate/validators'
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

const router = useRouter();
const letrasValid = helpers.regex(/^[A-Za-z\s]+$/)

const usuarioData = reactive({
  nombres: '',
  apellidos: '',
  fechaNacimiento: ''
});


const validaciones = computed(()=>{
 return {
    nombres: { required,min: minLength(6), max: maxLength(25),letrasValid },
    apellidos: { required,letrasValid },
    fechaNacimiento: { required }
  }
}) ;

const v$ = useVuelidate(validaciones, usuarioData).value;

const crearUsuario = async (usuarioData)  =>{
  
  const result = await v$.$validate();
console.log(result)
  if(result){
    const data = {
      nombre: usuarioData.nombres,
      apellidos: usuarioData.apellidos,
      fechaNacimiento: usuarioData.fechaNacimiento
    };
    console.log(data)
      const response =  axios.post('https://25e84a4a-731d-4696-bb92-2ef3ed055314.mock.pstmn.io/api/usuario', data);
 
      const result =(await response).data;
      if(result.status==0){
        Swal.fire(
        'Ok',
        'El usuario fue registrado correctamente.',
        'success'
      )
      }
      else{ 
      Swal.fire(
      'Error',
      'Ocurrio un error al registrar.',
      'error'
    )
    }
     console.log('El formulario no contiene errores');
  }
  else{
    console.log('El formulario contiene errores');
  }
       
}
const retornar = () => {
  router.push({ name: 'UsuarioList' });
};

function ErrorMessage(message) {
  const translations = {
    required: 'Este campo es obligatorio.',
    minLength: 'El valor es demasiado corto.',
    maxLength: 'El valor es demasiado largo.',
    letrasValid: 'Este campo solo debe contener letras.',
  };

  return translations[message] || message;
}


v$.$validate();
</script>

<template>
  <div class="card p-4">
      <div class="card-header pb-3">
        <div class="row">
          <div class="col-6 d-flex align-items-center pt-3">
            <h6>Registrar Usuario</h6>
          </div>
          <div class="col-6 text-end">
          </div>
        </div>
      </div>
      <div class="card-body px-0 pt-0 pb-0">
        <div class="modal-content">

    <div class="form-group pt-3">
      <label for="nombres">Nombre</label>
      <input type="text" id="nombres" class="form-control" v-model="usuarioData.nombres" maxlength="25">
        <div class="input-errors" v-for="error of v$.nombres.$errors" :key="error.$uid">
          <div class="error-msg text-danger">{{ ErrorMessage(error.$validator) }}</div>
      </div>
    </div>

    <div class="form-group pt-3">
      <label for="apellidos">Apellidos</label>
      <input type="text" id="apellidos" class="form-control" v-model="usuarioData.apellidos" maxlength="40">
      <div class="input-errors" v-for="error of v$.apellidos.$errors" :key="error.$uid">
          <div class="error-msg text-danger">{{ ErrorMessage(error.$validator) }}</div>
      </div>
    </div>

    <div class="form-group pt-3">
      <label for="telefono">Fecha de Nacimiento</label>
      <input type="date" id="fechaNacimiento" class="form-control" v-model="usuarioData.fechaNacimiento">
      <div class="input-errors" v-for="error of v$.fechaNacimiento.$errors" :key="error.$uid">
        <div class="error-msg text-danger">{{ ErrorMessage(error.$validator) }}</div>
      </div>
    </div>
          <div class="row pt-5" style="text-align: center;">
            <div class="col-6  ">
              <button type="button" class="btn btn-secondary mb-0 null null" @click="retornar">Cerrar</button>
            </div>
            <div class="col-6 ">
              <button type="button" class="btn mb-0 btn-outline-success  null null"  @click="crearUsuario(usuarioData)">Guardar</button>
          </div>
        </div>
        
        
      
      </div>
  </div>
</div>


</template>

<style>
    h3 {
    margin-bottom:5%;
    }
</style>