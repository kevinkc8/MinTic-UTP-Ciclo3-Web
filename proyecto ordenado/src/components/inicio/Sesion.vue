<template>
  <v-app id="inspire">
    
    <v-container class="cont" >
      <v-row class="row-login" align="center" justify="end">
        <v-col cols="12" sm="6" md="6" lg="6" class="col-login">
          <v-card class="elevation-40">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col class="login-marg" cols="8" md="7" lg="7">
                    <v-card-text class="mt-7">
                      
                      <div class="d-flex flex-column justify-space-between align-center">
    

    <v-img max-height="200" max-width="200" src="../../assets/logo1.png"></v-img>
    </div>
                        
      <v-form>
        <v-text-field label="Email" name="Email" type="text" color="orange" />

        <v-text-field id="password" label="Password" name="password" type="password" color="orange" />
      </v-form>
      <h7 class="text-center mt-10">Olvidó su contraseña?</h7>
      </v-card-text>
      <div class="text-center mt-3">
        <v-btn rounded color="#044970" dark @click="ingresar()">Iniciar Sesion</v-btn>
      </div>
                  </v-col>
  <v-col class="login-marg" cols="4" md="5" lg="5">
    
    <div class="text-center">
    
      <v-img height="509" min-width="265" src="../../assets/ff.png"></v-img>
    </div>      
                   
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1
  }),
  props: {
    source: String
  },
  methods: {
ingresar(){
  this.$router.push("/Paginaayuda");
}
  }
};
</script>

<style scoped>
@media (max-width: 1024px) {
  html .row-login{
    flex: 0 0 auto;
    justify-content: center;
    width: 100%;
  }

  html .row-login .col-login{
    flex-basis: 100%;
    width: 100%;
  }

  html .login-marg{
    min-width: 100%;
  }
}
.cont{
  display: flex;
  padding-top: 90px;
}

#inspire{
  
  background-image: linear-gradient(
      rgba(7, 7, 7, 0.5), 
      rgba(4, 73, 112, 0.60)
    ),
 url("../../assets/fondo.png"); 

 
background-size: cover;
   
}

a {
  color:white;
}
</style>