 <template>
 <v-container id="dropdown-example">
    <v-row>
      <v-col cols="12" sm="8">
        <p>Seleccione la cantidad de propiedades</p>

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
      ],
    }),
  }
</script>