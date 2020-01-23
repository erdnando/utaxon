<template>
  <v-container fluid>
   

    <v-radio-group v-model="radios">
      <template v-slot:label>
        <div>Su <strong>respuesta</strong></div>
      </template>
      <v-radio value="Google">
        <template v-slot:label>
          <div>Si tengo mi firma electronica avanzada <strong class="success--text">FIEL</strong></div>
        </template>
      </v-radio>
      <v-radio value="Duckduckgo">
        <template v-slot:label>
          <div>No,  <strong class="primary--text">no tengo</strong></div>
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