<template>
  <v-container fluid>
   

    <v-radio-group v-model="radios">
      <template v-slot:label>
        <div>Su <strong>respuesta</strong></div>
      </template>
      <v-radio value="Google" color="white">
        <template v-slot:label>
          <div>Claro que si tengo <strong class="orange--text">RFC</strong></div>
        </template>
      </v-radio>
      <v-radio value="Duckduckgo" color="white">
        <template v-slot:label>
          <div>No he tenido la necesidad de  <strong class="yellow--text">solicitarlo</strong></div>
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