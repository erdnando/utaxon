<template>
  <v-container fluid>
   

    <v-radio-group v-model="radios">
      <template v-slot:label>
        <div>Su <strong>respuesta</strong></div>
      </template>
      <v-radio value="Google">
        <template v-slot:label>
          <div>Si me se la <strong class="success--text">contraseña</strong></div>
        </template>
      </v-radio>
      <v-radio value="Duckduckgo">
        <template v-slot:label>
          <div>No,  <strong class="primary--text">ni idea</strong></div>
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