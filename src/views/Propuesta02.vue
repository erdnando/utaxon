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


              <v-simple-table dense  light >
                <template v-slot:default>
                  <tbody>
                    <tr v-for="item in montos" :key="item.concepto">
                      <td style="font-size:10px;font-weight: bold;">{{ item.concepto }}</td>
                      <td style="font-size:10px" class="text-right">${{ item.valor }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>


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
          title: 'Apreciable, José Manuel! (Continuación)',
          artist: 'Agradecemos la oportunidad de presentar nuestra propuesta de servicios como Despacho Contable El paquete de servicio que ponemos a su disposición es:',
        }
      ],
       propuestaItems: [
        { header: '.' },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', title: 'CONFIGURACION PERSONALIZADA', subtitle: "<ul><li>PROPIEDADES EN RENTA: (1 Propiedad)</li><li>PROMEDIO DE FACTURACION A GENERAR MENSUALMENTE A <br>SUS CLIENTES: (5 CFDI)</li></ul>" },
        { divider: true, inset: true },
      ],
      montos: [
          {
            concepto: 'MONTO BASE',
            valor: 204.00,
          },
          {
            concepto: 'CLASIFICACIÓN',
            valor: 70.00,
          },
          {
            concepto: 'SUBTOTAL',
            valor: 274.00,
          },
          {
            concepto: 'IVA',
            valor: 43.84,
          },
          {
            concepto: 'COMISIÓN COBRO',
            valor: 11.12,
          },
          {
            concepto: 'TOTAL',
            valor: 329.96,
          },
          {
            concepto: 'COMISIONES',
            valor: 54.96,
          },
          {
            concepto: 'TOTAL S/COMI',
            valor: 274.00,
          },
          {
            concepto: 'DESDE',
            valor: 255.00,
          },
        ],
    }),

  }
</script>
