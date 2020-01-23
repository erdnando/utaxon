<template >



<div :style="{ backgroundImage: 'url(' + require('@/assets/fondo.png') + ')' }"   >
<v-container fluid >

<v-row justify="center">
  
  <v-col cols="12" style="text-align: center;">
    <v-container class="mb-2" display-1>
      Comencemos creando tu cuenta...
      </v-container>
    </v-col>
    
</v-row>
  <v-row justify="center">
   
    <v-col cols="12" >
      <div style="text-align: -webkit-center;">
    <v-form  style="width:400px"
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
    <v-container >
        <v-text-field
          v-model="name"
          :counter="20"
          :rules="nameRules"
          label="Nombre"
          solo
          required
        ></v-text-field>

         <v-text-field
          v-model="apellidos"
          :counter="50"
          :rules="apellidoRules"
          label="Apellidos"
          solo
          required
        ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        :counter="50"
        :prepend-inner-icon="'email'"
        label="E-mail"
        solo
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Contraseña"
        hint="Al menos 8 carácteres"
        :prepend-inner-icon="'lock'"
        counter="8"
        solo
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-text-field
              v-mask="'(##) #### ####'"
              v-model="telefono"
              :prepend-inner-icon="'contact_phone'"
              solo
              label="Télefono">
      </v-text-field>

       

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || '!Debe estar de acuerdo para continuar!']"
        label="Terminos y condiciones"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate">
        Continuar
      </v-btn>

      </v-container>

    </v-form>
    </div>
    </v-col>
    
  </v-row>
</v-container>

</div>

</template>

<script>
import router from '../router';
import { VueMaskDirective   } from 'v-mask'


  export default {
     directives: {
      'mask': 
      VueMaskDirective
    },
    data: () => ({
      telefono: '',
      show1: false,
      password: 'Password',
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'El nombre es requerido',
        v => (v && v.length >= 3) || 'El nombre debe ser  mayor a 3 caracteres',
      ],
      apellidos: '',
      apellidoRules: [
        v => !!v || 'Los apellidos son requeridos',
        v => (v && v.length >= 3) || 'Los apellidos deben ser mayor a 3 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'El correo es requerido',
        v => /.+@.+\..+/.test(v) || 'El correo debe ser válido',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'El password es requerido',
        v => (v && v.length >= 3) || 'El password deben ser mayor a 3 caracteres',
      ],
      telefono: '',
      telefonoRules: [
        v => !!v || 'El teléfono es requerido',
        v => (v && v.length >= 3) || 'El teléfono debe ser de 10 dígitos',
      ],
      checkbox: false,
      lazy: false,
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
          router.push('proceso')
        }
      },
    },
  }
</script>