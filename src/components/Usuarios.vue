
<script setup>
import { reactive, ref} from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const laux = ref(null);
const lusuarios = reactive({
  usuarios: []
});

function concatenarNombre (nombreResp,apellidosResp) {
  const nombre = nombreResp || '';//en caso de que sea null o indefinido se coloca cadena vacia
  const apellidos = apellidosResp || '';

  return `${nombre.toLowerCase()}${apellidos.toLowerCase()}`;
};

async function getUsers() {
  const response = await axios.get('https://25e84a4a-731d-4696-bb92-2ef3ed055314.mock.pstmn.io/api/usuario/listar');

  laux.value = response.data;
  for(var i=0; i<laux.value.length;i++){
  
    const data = {
        nombreCompleto:  concatenarNombre(laux.value[i].nombre,laux.value[i].apellidos),
        nombre: laux.value[i].nombre,
        apellido: laux.value[i].apellido,
        fechaNacimiento: laux.value[i].fechaNacimiento,
        edad: calcularEdad(laux.value[i].fechaNacimiento)
      };
      lusuarios.usuarios.push(data);
  }
}

function calcularEdad (fechaNac) {
    const hoy = new Date();
    const fechaNacimiento = new Date(fechaNac);
    let edad = Math.abs(hoy.getFullYear() - fechaNacimiento.getFullYear());

    if (hoy < new Date(hoy.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate())) {
      edad=edad-1;
      }
      return edad;
    };
getUsers();



</script>

<template>
        <div class="table-responsive p-0">
          <table class="">
            <thead>
              <tr>
                <th class="text-center"> Nombre Completo </th>
                <th class="text-center "> Nombres </th>
                <th class="text-center "> Apellidos </th>
                <th class="text-center "> Fecha de nacimiento </th>
                <th class="text-center "> Edad </th>
                <th class="text-secondary"></th>
              </tr>
            </thead>
            <tbody>
              <tr  v-for="(l,index) in lusuarios.usuarios" v-bind:key="index">
                <td class="align-middle text-center">
                  <span class="text-secondary">{{l.nombreCompleto}}</span>
                </td>
                <td class="align-middle text-center">
                  <span class="text-secondary">{{l.nombre}}</span>
                </td>
                <td class="align-middle text-center">
                  <span class="text-secondary">{{l.apellido}}</span>
                </td>
                <td class="align-middle text-center">
                  <span class="text-secondary">{{l.fechaNacimiento}}</span>
                </td>
                <td class="align-middle text-center">
                  <span class="text-secondary">{{l.edad}} años</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>



</template>

<style>
    h3 {
    margin-bottom:5%;
    }
</style>