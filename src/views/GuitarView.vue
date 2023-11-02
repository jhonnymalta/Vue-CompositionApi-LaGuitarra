<template>
    <h2>guitar : {{ $route.params.id }}</h2>
    <div>
        <button @click="back" class="bg-blue-500 px-4 py-2 rounded text-white">Back</button>
    </div>
</template>

<script setup>
import {useRoute,useRouter} from 'vue-router'
import { useCartStore } from './../stores/Cart.js'

const route = useRoute();
const router = useRouter();

const back = () => router.push('/')
const cartStore =  useCartStore()
const getGuitar = async () =>{
    try{
        const {guitarras} = await cartStore; 
        console.log(guitarras[route.params.id - 1])
    }catch(error){
        console.log(error)
    }
}
getGuitar()
</script>