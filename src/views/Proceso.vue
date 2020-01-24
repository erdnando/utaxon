<template>
<div>
  <v-stepper v-model="e6" vertical>
    <!--step1-->
    <v-stepper-step style="background-color:#f0f8ff" :complete="e6 > 1" step="1" editable=true>
      ¿Ganó algún otro ingreso además de Airbnb el año pasado?
      
       <v-tooltip right color="green">
      <template v-slot:activator="{ on }">
        <small v-on="on" class="mt-1">Escoge todo lo que aplica.</small>
      </template>
      <span>Con esta información podemos brindarte una mejor atención</span>
    </v-tooltip>
    
    </v-stepper-step>
    <v-stepper-content step="1"> 
      <v-card color="primary" elevation="8" class="mb-12" >
         <step01 ></step01>
      </v-card>
       <v-btn color="primary" @click="e6 = 2">Continuar</v-btn>
         
    </v-stepper-content>
    <!--step2-->
    <v-stepper-step :complete="e6 > 2" step="2" editable=true>¿Cuál es el pais de residencia actual?
      
      <v-tooltip right color="green">
      <template v-slot:activator="{ on }">
        <small v-on="on" class="mt-1">¿Para que sirve?.</small>
      </template>
      <span>Esta Información, nos servirá para saber en qué oficina delSAT puede acudir para el tramite de la FIEL.</span>
    </v-tooltip>

    </v-stepper-step>
    <v-stepper-content step="2">
      <v-card color="primary" elevation="8" class="mb-12" >
        <step02></step02>
      </v-card>
      <v-btn color="primary" @click="e6 = 3">Continuar</v-btn>
      
    </v-stepper-content>
    <!--step3-->
    <v-stepper-step style="background-color:#f0f8ff" :complete="e6 > 3" step="3" editable=true>¿Cuál es el estado de la republica mexicana?

       <v-tooltip right color="green">
      <template v-slot:activator="{ on }">
        <small v-on="on" class="mt-1">¿Para que sirve?.</small>
      </template>
      <span>Esta Información, nos servirá para saber en qué oficina delSAT puede acudir para el tramite de la FIEL.</span>
    </v-tooltip>

    </v-stepper-step>
    <v-stepper-content step="3">
      <v-card color="primary" elevation="8" class="mb-12" >
        <step03></step03>
      </v-card>
      <v-btn color="primary" @click="e6 = 4">Continuar</v-btn>
    </v-stepper-content>
    <!--step4-->
    <v-stepper-step :complete="e6 > 4" step="4" editable=true>¿Cuál es la ciudad o municipio de la republica mexicana?
      
       <v-tooltip right color="green">
      <template v-slot:activator="{ on }">
        <small v-on="on" class="mt-1">¿Para que sirve?.</small>
      </template>
      <span>Esta Información, nos servirá para saber en qué oficina delSAT puede acudir para el tramite de la FIEL.</span>
    </v-tooltip>

    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="primary" elevation="8" class="mb-12" >
        <step04></step04>
      </v-card>
      <v-btn color="primary" @click="e6 = 5">Continuar</v-btn>
    </v-stepper-content>

 <!--step5-->
 <v-stepper-step style="background-color:#f0f8ff" :complete="e6 > 5" step="5" editable=true>¿De Cuantas propiedades recibe ingresos?
      
       <v-tooltip right color="green">
      <template v-slot:activator="{ on }">
        <small v-on="on" class="mt-1">Ver tips</small>
      </template>
      <ul>
        <li>Sabias que si generas ofertas en la ultima semana del mes ...</li>
        <li>Procura tener tus propiedades a tu nombre</li>
        <li>Recuerda que al restaurar tu casa, podras tener mas visitas :D</li>
      </ul>
    </v-tooltip>

    </v-stepper-step>
    <v-stepper-content step="5">
      <v-card color="primary" elevation="8" class="mb-12" >
        <step05></step05>
      </v-card>
      <v-btn color="primary" @click="e6 = 6">Continuar</v-btn>
    </v-stepper-content>

    <!--step6-->
     <v-stepper-step :complete="e6 > 6" step="6" editable=true>¿Cantidad de días al mes, que está rentada la propiedad?
      
        <v-tooltip right color="green">
      <template v-slot:activator="{ on }">
        <small v-on="on" class="mt-1">¿Porqué se requiere?</small>
      </template>
      <span>Esta Información, nos servirá para ...</span>
    </v-tooltip>

    </v-stepper-step>
    <v-stepper-content step="6">
      <v-card color="primary" elevation="8" class="mb-12" >
        <step06></step06>
      </v-card>
      <v-btn color="primary" @click="e6 = 7">Continuar</v-btn>
    </v-stepper-content>

    <!--step7-->
     <v-stepper-step style="background-color:#f0f8ff" :complete="e6 > 7" step="7" editable=true>¿Cantidad de usuarios al mes que rentan tu propiedad?
      
       <v-tooltip right color="green">
      <template v-slot:activator="{ on }">
        <small v-on="on" class="mt-1">Qué significa?</small>
      </template>
      <span>Esta Información, nos servirá para ...</span>
    </v-tooltip>

    </v-stepper-step>
    <v-stepper-content step="7">
      <v-card color="primary" elevation="8" class="mb-12" >
        <step07></step07>
      </v-card>
      <v-btn color="primary" @click="e6 = 8">Continuar</v-btn>
    </v-stepper-content>

    <!--step8-->
    <v-stepper-step :complete="e6 > 8" step="8" editable=true>Cualquier comentario adicional acerca de los ingresos de su propiedad
      
       <v-tooltip right color="green">
      <template v-slot:activator="{ on }">
        <small v-on="on" class="mt-1">Qué significa?</small>
      </template>
      <span>Esta Información, nos servirá para ...</span>
    </v-tooltip>

    </v-stepper-step>
    <v-stepper-content step="8">
      <v-card color="primary" elevation="8" class="mb-12" >
        <step08></step08>
      </v-card>
      <v-btn color="primary" @click="e6 = 9">Continuar</v-btn>
    </v-stepper-content>
    
    <!--step9-->
     <v-stepper-step style="background-color:#f0f8ff" :complete="e6 > 9" step="9" editable=true>¿Cuenta con Registro Federal de Contribuyente?
      
        <v-tooltip right color="green">
      <template v-slot:activator="{ on }">
        <small v-on="on" class="mt-1">Ver ejemplo de RFC</small>
      </template>
      <span>El RFC es una clave alfanumérica que se compone por 13 caracteres para las Personas Físicas y 12 caracteres para las Personas Morales</span>
      <br><br>
      <span>Ejemplo: Alejandro Rivera Carmona nació el 25 de septiembre de 1980, hacienda le asigno la homoclave: <br>PL7; entonces su RFC es: RICA-800925-PL7</span>
    </v-tooltip>

    </v-stepper-step>
    <v-stepper-content step="9">
      <v-card color="primary" elevation="8" class="mb-12" >
        <step09></step09>
      </v-card>
      <v-btn color="primary" @click="e6 = 10">Continuar</v-btn>
    </v-stepper-content>

   <!--step10-->
   <v-stepper-step :complete="e6 > 10" step="10" editable=true>Captura tu Registro Federal de Contribuyente
       
       <v-tooltip right color="green">
      <template v-slot:activator="{ on }">
        <small v-on="on" class="mt-1">Ver ejemplo de RFC</small>
      </template>
      <span>El RFC es una clave alfanumérica que se compone por 13 caracteres para las Personas Físicas y 12 caracteres para las Personas Morales</span>
      <br><br>
      <span>Ejemplo: Alejandro Rivera Carmona nació el 25 de septiembre de 1980, hacienda le asigno la homoclave: <br>PL7; entonces su RFC es: RICA-800925-PL7</span>
    </v-tooltip>

    </v-stepper-step>
    <v-stepper-content step="10">
      <v-card color="primary" elevation="8" class="mb-12" >
        <step10></step10>
      </v-card>
      <v-btn color="primary" @click="e6 = 11">Continuar</v-btn>
    </v-stepper-content>

    <!--step11-->
      <v-stepper-step style="background-color:#f0f8ff" :complete="e6 > 11" step="11" editable=true>¿Conoce su contraseña para acceder al SAT?
      
       <v-tooltip right color="green">
      <template v-slot:activator="{ on }">
        <small v-on="on" class="mt-1">Ver ejemplo</small>
      </template>
      <span>La contraseña funciona como un mecanismo de acceso en los servicios electrónicos que brinda el SAT</span>
      <br><br>
      <ul>
        <li>La longitud de la contraseña debe ser de 8 caracteres y debe contener al menos un número.</li>
        <li>Los únicos caracteres aceptados son de la “a” a la “z” y del “0” al “9”.</li>
        <li>No se permiten caracteres especiales como ñ $ % & * / # ni espacios en blanco.</li>
        <li>No se debe usar números o letras consecutivos (1111aaaa | 1111111a).</li>
        <li>No se acepta como contraseña el RFC.</li>
        <li>La nueva contraseña deberá ser diferente a las últimas tres.</li>
      </ul>

    </v-tooltip>

    </v-stepper-step>
    <v-stepper-content step="11">
      <v-card color="primary" elevation="8" class="mb-12" >
        <step11></step11>
      </v-card>
      <v-btn color="primary" @click="e6 = 12">Continuar</v-btn>
    </v-stepper-content>

     <!--step12-->
     <v-stepper-step :complete="e6 > 12" step="12" editable=true>¿Cuenta con la firma electrónica avanzada FIEL?
      
       <v-tooltip right color="green">
      <template v-slot:activator="{ on }">
        <small v-on="on" class="mt-1">Ver ejemplo FIEL</small>
      </template>
      <span>La FIEL o e.firma es una herramienta que sirve para comprobar tu identidad digitalmente y firmar electrónicamente</span>
      <br><br>
      <ul>
        <li>Sin embargo, hay que aclarar que la FIEL no es una firma como tal, es una herramienta que te permite generar firmas electrónicas.</li>
        <li>Para más información contacta a uno de nuestros asesores </li>
      </ul>

    </v-tooltip>

    </v-stepper-step>
    <v-stepper-content step="12">
      <v-card color="primary" elevation="8" class="mb-12" >
        <step12></step12>
      </v-card>
      <v-btn color="primary" @click="e6 = 13">Continuar</v-btn>
    </v-stepper-content>

     <!--step13-->
     <v-stepper-step style="background-color:#f0f8ff" :complete="e6 > 13" step="13" editable=true>¿Cuenta con los archivos de la FIEL?
      
       <v-tooltip right color="green">
      <template v-slot:activator="{ on }">
        <small v-on="on" class="mt-1">Ver ejemplo de archivos</small>
      </template>
      <span>La FIEL o e.firma es una herramienta que sirve para comprobar tu identidad digitalmente y firmar electrónicamente</span>
      <br><br>
      <ul>
        <li>Sin embargo, hay que aclarar que la FIEL no es una firma como tal, es una herramienta que te permite generar firmas electrónicas.</li>
        <li>Para más información contacta a uno de nuestros asesores </li>
      </ul>
    </v-tooltip>

    </v-stepper-step>
    <v-stepper-content step="13">
      <v-card color="primary" elevation="8" class="mb-12" >
        <step13></step13>
      </v-card>
      <v-btn color="primary" @click="e6 = 14">Continuar</v-btn>
    </v-stepper-content>

    <!--step14-->
     <v-stepper-step :complete="e6 > 14" step="14" editable=true>¿Cuenta con certificados para emitir facturas?
      
       <v-tooltip right color="green">
      <template v-slot:activator="{ on }">
        <small v-on="on" class="mt-1">Ver ejemplo</small>
      </template>
      <span>La FIEL o e.firma es una herramienta que sirve para comprobar tu identidad digitalmente y firmar electrónicamente</span>
      <br><br>
      <ul>
        <li>Sin embargo, hay que aclarar que la FIEL no es una firma como tal, es una herramienta que te permite generar firmas electrónicas.</li>
        <li>Para más información contacta a uno de nuestros asesores </li>
      </ul>
    </v-tooltip>

    </v-stepper-step>
    <v-stepper-content step="14">
      <v-card color="primary" elevation="8" class="mb-12" >
        <step14></step14>
      </v-card>
      <v-btn color="primary" @click="dialogPropuesta=true">Continue</v-btn>
    </v-stepper-content>
  </v-stepper>



   <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
     <!-- <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>-->
      <v-card
    class="mx-auto">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#0288D1"
            dark >
            <v-card-title class="headline">Tu descuento te está esperando.</v-card-title>
            <v-card-subtitle>El 10% de descuento se aplicará automáticamente al completar el registro.</v-card-subtitle>
            <v-card-actions>
              <v-btn text>Eres afortunado!</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12">
          <v-card
            :color="item.color"
            dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>
                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>
              <v-avatar
                class="ma-3"
                size="125"
                tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
    <v-col cols="12" sm="12" offset-sm="0">
      <v-card>
        <v-list two-line>
          <template v-for="(item, index) in notas.slice(0, 6)">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
            <v-list-item v-else :key="item.title" @click="">
              <v-list-item-avatar>
                <img :src="item.avatar">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
    </v-container>
     <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Continuar</v-btn>
     </v-card-actions>
  </v-card>
    </v-dialog>
  </v-row>







<!--segundo dialogo-->
  <v-row justify="center">
    <v-dialog v-model="dialogPropuesta" persistent max-width="600px">
       <v-card class="mx-auto">

    <v-window v-model="step">
      <v-window-item :value="1">
        <Propuesta></Propuesta>
      </v-window-item>

      <v-window-item :value="2">
       <Propuesta2></Propuesta2>
      </v-window-item>

      <v-window-item :value="3">
        <CreditCardForm></CreditCardForm>
      </v-window-item>

      <v-window-item :value="4">
        <Final></Final>
      </v-window-item>

    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--">
        Anterior
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        text
        @click="dialogPropuesta=false">
        Más tarde
      </v-btn>

      <v-btn
        color="primary"
        depressed
        @click="validaNext" >
        Siguiente
      </v-btn>
    </v-card-actions>
  </v-card>

     
    </v-dialog>
  </v-row>




</div>
</template>

<script>


import Step01 from './Step01';
import Step02 from './Step02';
import Step03 from './Step03';
import Step04 from './Step04';
import Step05 from './Step05';
import Step06 from './Step06';
import Step07 from './Step07';
import Step08 from './Step08';
import Step09 from './Step09';
import Step10 from './Step10';
import Step11 from './Step11';
import Step12 from './Step12';
import Step13 from './Step13';
import Step14 from './Step14';
import Propuesta from './Propuesta01';
import Propuesta2 from './Propuesta02'
import CreditCardForm from './CreditCardForm'
import Final from './Final'

  export default {
    components: {
     Step01,Step02,Step03,Step04,Step05,Step06,Step07,Step08,Step09,Step10,Step11,Step12,Step13,Step14,Propuesta,Propuesta2,CreditCardForm,Final
    },
    data: () => ({
      dialogPropuesta:false,
      step: 1,
      e6: '1',
      dialog: true,
      garantia:'https://previews.123rf.com/images/nerthuz/nerthuz1304/nerthuz130400003/18840808-satisfaction-guaranteed-label-with-gold-badge-sign.jpg',
      items: [
        {
          color: '#FB8C00',
          src: 'https://www.youtravel.com.au/wp-content/uploads/2017/05/airbnb.jpg',
          title: 'Apreciable, José Manuel!',
          artist: 'Agradecemos la oportunidad de presentar nuestra propuesta de servicios como Despacho Contable El paquete de servicio que ponemos a su disposición es:',
        }
      ],
      notas: [
        { header: 'Siguientes pasos' },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', title: 'Situación fiscal', subtitle: "<span class='text--primary'></span> &mdash; Entenderemos rápidamente tu situación fiscal ante el SAT" },
        { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', title: 'Trataremos de que pagues menos<span class="grey--text text--lighten-1"> $$</span>', subtitle: "<span class='text--primary'></span> &mdash; Verificaremos si hay alguna forma de reducir el pago de impuesto." },
        { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', title: 'Oferta de valor', subtitle: "<span class='text--primary'></span> &mdash; Te presentaremos nuestra propuesta de servicio" },
      ],
    }),
    methods: {
    validaNext() {
      this.step++;

      if(this.step>4){
        this.dialogPropuesta=false;
      }
    },
     }

  }
</script>
