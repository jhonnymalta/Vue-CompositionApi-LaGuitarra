<template>
    <h2>home view</h2>
   
    <GuitarraComponent v-for="guitar in guitarras" :key="guitar.id"
    :guitarra="guitar"
    @sendToCart="sendToCart"
    />
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {db} from '../data/guitarras.js'
import GuitarraComponent from '../components/GuitarraComponent.vue';

const guitarras = ref([])

onMounted(()=>{
  guitarras.value = db;
  console.log(guitarras.value)
})

const sendToCart = (guitar) => {
    console.log(guitar)
    alert('Product add to cart!')
}
</script>