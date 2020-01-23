<template>
  <v-container fluid>
   

    <v-radio-group v-model="radios">
      <template v-slot:label>
        <div>Su <strong>respuesta</strong></div>
      </template>
      <v-radio value="Google">
        <template v-slot:label>
          <div>Si tengo certificados del SAT <strong class="success--text">para emitir facturas</strong></div>
        </template>
      </v-radio>
      <v-radio value="Duckduckgo">
        <template v-slot:label>
          <div>No tengo,  <strong class="primary--text">no puedo facturar</strong></div>
        </template>
      </v-radio>
    </v-radio-group>


  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        checkbox: false,
        radios: 'Duckduckgo',
        switchMe: false,
      }
    },
  }
</script>