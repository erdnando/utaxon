<template>
  <v-card
    class="mx-auto"
    height="537"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <Step01></Step01>
      </v-window-item>

      <v-window-item :value="2">
       <Step02></Step02>
      </v-window-item>

      <v-window-item :value="3">
        <Step03></Step03>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Anterior
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 3"
        color="primary"
        depressed
        @click="step++"
      >
        Sguiente
      </v-btn>
    </v-card-actions>
  </v-card>
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
import stepPropuesta from './StepPropuesta'

  export default {
    components: {
     Step01,Step02,Step03,Step04,Step05,Step06,Step07,Step08,Step09,Step10,Step11,Step12,Step13,Step14,stepPropuesta
    },
    data: () => ({
       step: 1,
      e6: '1',
      dialog: true,
      items: [
        {
          color: '#FB8C00',
          src: 'https://www.youtravel.com.au/wp-content/uploads/2017/05/airbnb.jpg',
          title: 'Bienvenido, José Manuel!',
          artist: 'Clasificaremos sus ingresos que percibe para validar los impuestos que debe reportar al SAT',
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
    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return '¿Ganó algún otro ingreso además de Airbnb el año pasado?'
          case 2: return '¿Cuál es el pais de residencia actual?'
          default: return '¿Cuál es el estado de la republica mexicana?'
        }
      },
    },

  }
</script>
