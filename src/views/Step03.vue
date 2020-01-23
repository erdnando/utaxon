 <template>
 <v-container id="dropdown-example">
    <v-row>
      <v-col cols="12" sm="8">
        <p>Seleccione su estado del pais</p>

        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          label="Seleccionar..."
          editable
          background-color="white"
          item-value="text"
        ></v-overflow-btn>
      </v-col>
    </v-row>
  </v-container>


</template>

<script>
  export default {
    data: () => ({
      dropdown_edit: [
        { text: 'AGUASCALIENTES', callback: () => console.log('delete') },
        { text: 'BAJA CALIFORNIA', callback: () => console.log('delete') },
        { text: 'BAJA CALIFORNIA SUR', callback: () => console.log('delete') },
        { text: 'CAMPECHE', callback: () => console.log('delete') },
        { text: 'COAHUILA DE ZARAGOZA', callback: () => console.log('delete') },
        { text: 'COLIMA', callback: () => console.log('delete') },
        { text: 'CHIAPAS', callback: () => console.log('delete') },
        { text: 'CHIHUAHUA', callback: () => console.log('delete') },
        { text: 'CIUDAD DE MÉXICO', callback: () => console.log('delete') },
        { text: 'DURANGO', callback: () => console.log('delete') },
        { text: 'GUANAJUATO', callback: () => console.log('delete') },
        { text: 'GUERRERO', callback: () => console.log('delete') },
        { text: 'HIDALGO', callback: () => console.log('delete') },
        { text: 'JALISCO', callback: () => console.log('delete') },
        { text: 'MÉXICO', callback: () => console.log('delete') },
        { text: 'MICHOACÁN DE OCAMPO', callback: () => console.log('delete') },
        { text: 'MORELOS', callback: () => console.log('delete') },
        { text: 'NAYARIT', callback: () => console.log('delete') },
        { text: 'NUEVO LEÓN', callback: () => console.log('delete') },
        { text: 'OAXACA', callback: () => console.log('delete') },
        { text: 'PUEBLA', callback: () => console.log('delete') },
        { text: 'QUERÉTARO', callback: () => console.log('delete') },
        { text: 'QUINTANA ROO', callback: () => console.log('delete') },
        { text: 'SAN LUIS POTOSÍ', callback: () => console.log('delete') },
        { text: 'SINALOA', callback: () => console.log('delete') },
        { text: 'SONORA', callback: () => console.log('delete') },
        { text: 'TABASCO', callback: () => console.log('delete') },
        { text: 'TAMAULIPAS', callback: () => console.log('delete') },
        { text: 'TLAXCALA', callback: () => console.log('delete') },
        { text: 'VERACRUZ DE IGNACIO DE LA LLAVE', callback: () => console.log('delete') },
        { text: 'YUCATÁN', callback: () => console.log('delete') },
        { text: 'ZACATECAS', callback: () => console.log('delete') },
      ],
    }),
  }
</script>