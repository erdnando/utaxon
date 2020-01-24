<template>
  <v-container fluid>
   

    <v-radio-group v-model="radios">
      <template v-slot:label>
        <div>Su <strong>respuesta</strong></div>
      </template>
      <v-radio value="Google" color="white">
        <template v-slot:label>
          <div>Si me se la <strong class="orange--text">contraseña</strong></div>
        </template>
      </v-radio>
      <v-radio value="Duckduckgo" color="white">
        <template v-slot:label>
          <div>No,  <strong class="yellow--text">ni idea</strong></div>
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