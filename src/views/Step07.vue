 <template>
 <v-container id="dropdown-example">
    <v-row>
      <v-col cols="12" sm="8">
        <p>Seleccione la cantidad de usuarios promedio al mes</p>

        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          label="Seleccionar..."
          editable
          item-value="text"
          background-color="white"
        ></v-overflow-btn>
      </v-col>
    </v-row>
  </v-container>


</template>

<script>
  export default {
    data: () => ({
      dropdown_edit: [
        { text: '1', callback: () => console.log('delete') },
        { text: '2', callback: () => console.log('delete') },
        { text: '3', callback: () => console.log('delete') },
        { text: '4', callback: () => console.log('delete') },
        { text: '5', callback: () => console.log('delete') },
        { text: '6', callback: () => console.log('delete') },
        { text: '7', callback: () => console.log('delete') },
        { text: '8', callback: () => console.log('delete') },
        { text: '9', callback: () => console.log('delete') },
        { text: '10', callback: () => console.log('delete') },
        { text: '11', callback: () => console.log('delete') },
        { text: '12', callback: () => console.log('delete') },
        { text: '13', callback: () => console.log('delete') },
        { text: '14', callback: () => console.log('delete') },
        { text: '15', callback: () => console.log('delete') },
        { text: '16', callback: () => console.log('delete') },
        { text: '17', callback: () => console.log('delete') },
        { text: '18', callback: () => console.log('delete') },
        { text: '19', callback: () => console.log('delete') },
        { text: '20', callback: () => console.log('delete') },
        { text: '21', callback: () => console.log('delete') },
        { text: '22', callback: () => console.log('delete') },
        { text: '23', callback: () => console.log('delete') },
        { text: '24', callback: () => console.log('delete') },
        { text: '25', callback: () => console.log('delete') },
        { text: '26', callback: () => console.log('delete') },
        { text: '27', callback: () => console.log('delete') },
        { text: '28', callback: () => console.log('delete') },
        { text: '29', callback: () => console.log('delete') },
        { text: '30', callback: () => console.log('delete') },
      ],
    }),
  }
</script>