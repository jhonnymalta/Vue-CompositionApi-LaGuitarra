<template>
  
  
  <div class="container mx-auto grid grid-cols-4 gap-4"> 
   
   
    <GuitarraComponent v-for="guitar in guitarras" :key="guitar.id"
    :guitarra="guitar"
    @sendToCart="sendToCart"
    class="mx-2 p-2 rounded-[6px] shadow"

    />
  </div>
  <div class="container mx-auto">
    <img src="../../public/images/BACKGROUN_GUITAR001.jpg" alt="guitar image" class="w-full">
  </div>
</template>

<script setup>
import { ref} from 'vue'

import GuitarraComponent from '../components/GuitarraComponent.vue';
import { useCartStore } from './../stores/Cart.js'

const store = useCartStore()

let { guitarras,addGuitarras } = store 





const sendToCart = (guitar) => {  
  addGuitarras(guitar)
    
 }

</script>