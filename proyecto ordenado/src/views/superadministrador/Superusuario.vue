<template>
<div style="background-color:antiquewhite;  height: 1200px;">
 <Nav></Nav>

    <listaadministradores></listaadministradores>
    <registroadmin></registroadmin>

  <Footer></Footer>
  
</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Nav from '@/components/Nav.vue'
import Listaadministradores from '../../components/superadministrador/Listaadministradores.vue'
import  Registroadmin from '../../components/superadministrador/Registroadmin.vue'


export default {
    components: {Listaadministradores, Registroadmin, Footer, Nav},
   
        
}
</script>

<style scoped>

.footer1 {
   top:174px;
 
}

</style>
