 <template>
  <v-container class="p-4" >

    <v-row>
     <v-col cols="12">
         <v-row align="start" justify="space-around" class="blie lighten-5" >
        <v-card  :color="s1_color" dark max-width="320"  style=" width:320px;height:150px"  elevation="10">
            <div class="d-flex justify">
              <v-avatar class="ma-2" size="70" tile>
                <v-img :src="s1_src"></v-img>
              </v-avatar>
              <div>
                <v-card-title class="title black--text" v-text="s1_titulo"></v-card-title>
                <v-card-subtitle class=" grey--text" v-text="s1_mensaje"></v-card-subtitle>
              </div>
            </div>
           <v-card-actions>
               
              <v-btn style="margin-top:-20px"  small :color="select1 ? 'green lighten-1' : 'grey lighten-1'" 
              v-on:click="select1 = !select1" >Agregar
              </v-btn>
               
            </v-card-actions>
          </v-card>

          <v-card  :color="s2_color" dark max-width="320"  style=" width:320px;height:150px" elevation="10">
            <div class="d-flex justify">
              <v-avatar class="ma-2" size="70" tile>
                <v-img :src="s2_src"></v-img>
              </v-avatar>
              <div>
                <v-card-title class="title black--text" v-text="s2_titulo"></v-card-title>
                <v-card-subtitle class=" grey--text" v-text="s2_mensaje"></v-card-subtitle>
              </div>
            </div>
           <v-card-actions>
              <v-btn  small :color="select2 ? 'green lighten-1' : 'grey lighten-1'" v-on:click="select2 = !select2">Agregar</v-btn>
            </v-card-actions>
          </v-card>

           <v-card  :color="s3_color" dark max-width="320"  style=" width:320px;height:150px" elevation="10">
            <div class="d-flex justify">
              <v-avatar class="ma-2" size="70" tile>
                <v-img :src="s3_src"></v-img>
              </v-avatar>
              <div>
                <v-card-title class="title black--text" v-text="s3_titulo"></v-card-title>
                <v-card-subtitle class=" grey--text" v-text="s3_mensaje"></v-card-subtitle>
              </div>
            </div>
           <v-card-actions>
              <v-btn  small :color="select3 ? 'green lighten-1' : 'grey lighten-1'" v-on:click="select3 = !select3">Agregar</v-btn>
            </v-card-actions>
          </v-card>

         </v-row>
     </v-col>
    </v-row>  

    <v-row>
      <v-col cols="12">
        <v-row align="start" justify="space-around" class="blue lighten-5" >
        


          <v-card  :color="s4_color" dark max-width="320"  style=" width:320px;height:150px" elevation="10">
            <div class="d-flex justify">
              <v-avatar class="ma-2" size="70" tile>
                <v-img :src="s4_src"></v-img>
              </v-avatar>
              <div>
                <v-card-title class="title black--text" v-text="s4_titulo"></v-card-title>
                <v-card-subtitle class=" grey--text" v-text="s4_mensaje"></v-card-subtitle>
              </div>
            </div>
           <v-card-actions>
              <v-btn  small :color="select4 ? 'green lighten-1' : 'grey lighten-1'" v-on:click="select4 = !select4">Agregar</v-btn>
            </v-card-actions>
          </v-card>

          <v-card  :color="s5_color" dark max-width="320"  style=" width:320px;height:150px" elevation="10">
            <div class="d-flex justify">
              <v-avatar class="ma-2" size="70" tile>
                <v-img :src="s5_src"></v-img>
              </v-avatar>
              <div>
                <v-card-title class="title black--text" v-text="s5_titulo"></v-card-title>
                <v-card-subtitle class=" grey--text" v-text="s5_mensaje"></v-card-subtitle>
              </div>
            </div>
           <v-card-actions>
              <v-btn  small :color="select5 ? 'green lighten-1' : 'grey lighten-1'" v-on:click="select5 = !select5">Agregar</v-btn>
            </v-card-actions>
          </v-card>

          <v-card  :color="s6_color" dark max-width="320" style=" width:320px;height:150px" elevation="10">
            <div class="d-flex justify">
              <v-avatar class="ma-2" size="70" tile>
                <v-img :src="s6_src"></v-img>
              </v-avatar>
              <div>
                <v-card-title class="title black--text" v-text="s6_titulo"></v-card-title>
                <v-card-subtitle class=" grey--text" v-text="s6_mensaje"></v-card-subtitle>
              </div>
            </div>
           <v-card-actions>
              <v-btn  small :color="select6 ? 'green lighten-1' : 'grey lighten-1'" v-on:click="select6 = !select6">Agregar</v-btn>
            </v-card-actions>
          </v-card>

         



        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row justify="center">
          <v-col
            cols="6"
            md="2"
          >
          
          </v-col>

          <v-col
            cols="6"
            md="2"
          >
           
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>


</template>

<script>



  export default {
    components: {
    },
    data: () => ({
          select1 : false,
          select2 : false,
          select3 : false,
          select4 : false,
          select5 : false,
          select6 : false,
          s1_color: 'white',
          s1_src: 'https://www.youtravel.com.au/wp-content/uploads/2017/05/airbnb.jpg',
          s1_titulo: 'Autoempleo',
          s1_mensaje: 'Ganancias como comerciante, profesional independiente,contratista.',

          s2_color: 'white',
          s2_src: 'https://www.youtravel.com.au/wp-content/uploads/2017/05/airbnb.jpg',
          s2_titulo: 'Empleado',
          s2_mensaje: 'Ganancias como empleado asalariado.',

          s3_color: 'white',
          s3_src: 'https://www.youtravel.com.au/wp-content/uploads/2017/05/airbnb.jpg',
          s3_titulo: 'Pensionado',
          s3_mensaje: 'Obtienes ganancias como pensionado.',

          s4_color: 'white',
          s4_src: 'https://www.youtravel.com.au/wp-content/uploads/2017/05/airbnb.jpg',
          s4_titulo: 'Inversiones',
          s4_mensaje: 'Ganancias o perdidas de inversiones financieras.',

          s5_color: 'white',
          s5_src: 'https://www.youtravel.com.au/wp-content/uploads/2017/05/airbnb.jpg',
          s5_titulo: 'Ingresos extranjeros',
          s5_mensaje: 'Cualquier ingreso recibo del extranjero.',

          s6_color: 'white',
          s6_src: 'https://www.youtravel.com.au/wp-content/uploads/2017/05/airbnb.jpg',
          s6_titulo: 'Otros ingresos',
          s6_mensaje: 'Obtienes cualquier otro ingreso.',
    }),

  }
</script>
