<template>
  <v-container fluid>
   

    <v-radio-group v-model="radios">
      <template v-slot:label>
        <div>Su <strong>respuesta</strong></div>
      </template>
      <v-radio value="Google" color="white">
        <template v-slot:label>
          <div>Si tengo acceso a mi <strong class="yellow--text">FIEL</strong></div>
        </template>
      </v-radio>
      <v-radio value="Duckduckgo" color="white">
        <template v-slot:label>
          <div>No,  <strong class="orange--text">no tengo acceso a mi FIEL</strong></div>
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