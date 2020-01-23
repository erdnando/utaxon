<template>
  <v-container fluid>
   

   <v-text-field class="text-uppercase"
              v-mask="'XXXX ###### XXX'"
              v-model="rfc"
              :prepend-inner-icon="'folder_shared'"
              solo
              label="RFC">
      </v-text-field>


  </v-container>
</template>

<script>
import { VueMaskDirective   } from 'v-mask'

  export default {
     directives: {
      'mask': 
      VueMaskDirective
    },
    data () {
      return {
        rfc:'',
        checkbox: false,
        radios: 'Duckduckgo',
        switchMe: false,
      }
    },
  }
</script>