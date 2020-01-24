<template>
     <v-card
    class="mx-auto">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card style="height:75px"
            color="green"
            dark >
            <v-card-title class="headline">!Felicidades!, has concluido el proceso de alta.</v-card-title>
            <v-card-subtitle>Con la información que reunimos tenemos lo siguiente:</v-card-subtitle>
     
          </v-card>
        </v-col>
        <v-col
          v-for="(item, i) in itemsPropuesta"
          :key="i"
          cols="12">
          <v-card 
            :color="item.color"
            dark>
            <div class="d-flex flex-no-wrap justify-space-between" style="height:128px">
              <div>
                <v-card-title
                  class="title black--text"
                  v-text="item.title"
                ></v-card-title>
                <v-card-subtitle class="black--text" v-text="item.artist"></v-card-subtitle>
              </div>
              <v-avatar style="top:-13px"
                class="ma-3"
                size="125"
                tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>

            <v-card-text style="background-color: #a9a9a93b;">
              
              
              <v-card style="background-color: white;"
                class="mx-auto"
                max-width="800"
                height="300"
                color="white"
                tile
              >
               
              <v-list two-line style="background-color:white" dense>
                <template v-for="(item, index) in propuestaItems.slice(0, 6)">
                  <v-subheader style="color:grey;height:0px" v-if="item.header" :key="item.header"></v-subheader>
                  <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
                  <v-list-item style="color:grey" v-else :key="item.title" @click="">
                    
                    <v-list-item-content>
                      <v-list-item-title style="color:grey" v-html="item.title"></v-list-item-title>
                      <v-list-item-subtitle style="color:black" v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>


              </v-card>
              
              
              
            </v-card-text>


          </v-card>
        </v-col>
      </v-row>


    </v-container>
  
  </v-card>
</template>

<script>

  export default {
    components: {
     
    },
    data: () => ({
      dialogPropuesta:true,
      e6: '1',
      dialog: false,
      garantia:'https://previews.123rf.com/images/nerthuz/nerthuz1304/nerthuz130400003/18840808-satisfaction-guaranteed-label-with-gold-badge-sign.jpg',
      items: [
        {
          color: '#FB8C00',
          src: 'https://www.youtravel.com.au/wp-content/uploads/2017/05/airbnb.jpg',
          title: 'Apreciable, José Manuel!',
          artist: 'Agradecemos la oportunidad de presentar nuestra propuesta de servicios como Despacho Contable El paquete de servicio que ponemos a su disposición es:',
        }
      ],
      itemsPropuesta: [
        {
          color: '#fff',
          src: 'https://previews.123rf.com/images/nerthuz/nerthuz1304/nerthuz130400003/18840808-satisfaction-guaranteed-label-with-gold-badge-sign.jpg',
          title: 'Apreciable, José Manuel!',
          artist: 'Agradecemos la oportunidad de presentar nuestra propuesta de servicios como Despacho Contable El paquete de servicio que ponemos a su disposición es:',
        }
      ],
       propuestaItems: [
        { header: '.' },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', title: 'Emisión de facturas', subtitle: "<ul><li>EMISION DE XX FACTURAS A TUS CLIENTES (*)</li><li>EMISION DE FACTURAS AL PUBLICO EN GENERAL</li></ul>" },
        { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', title: 'Declaraciones', subtitle: "<ul><li>CALCULO DE IMPUESTOS PARA DECLARACIONES PROVISIONALES</li><li>PRESENTACION DE DECLARACIONES INFORMATIVAS</li><li>PRESENTACION DE DECLARACION ANUAL (CUANDO APLIQUE)</li></ul>" },
        { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', title: 'Asesorias y seguimiento', subtitle: "<lu><li>ASESORIAS FISCALES</li><li>TIPS PARA MEJOR DEDUCCIONES DE IMPUESTOS</li><li>ASESORIAS PERSONALIZADAS (TELEFONO, WHATS UP, SKYPE, CORREO)</li><li>PLATFORMA WEB (CALCULOS DE IMPUESTOS, SEGUIMIENTO DECLARACIONES)</li></lu>" },
      ],
    }),

  }
</script>
