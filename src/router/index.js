import { createRouter, createWebHistory } from 'vue-router'
import UsuariosView   from '../views/UsuariosView.vue'
import UsuarioListarView   from '../views/UsuarioListarView.vue'
import UsuarioCreateView  from '../views/UsuarioCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'usuarioHome',
      redirect: '/usuario/listar',
      meta: { requiresAuth: true },
      children: [
        {
          path: 'usuario',
          name: 'Usuario',
          component: UsuariosView,
          children: [
            {
              path: 'listar',
              name: 'UsuarioList',
              component: UsuarioListarView,
            },
            {
              path:'crear',
              name: 'UsuarioCreate',
              component: UsuarioCreateView
            }
          ]  
        }
     ]
    },


  ]
}) 

export default router
