<template>
    <p 
    :class="[isError ? 'bg-red-400' : 'bg-green-400' ]"
    class= "text-white font-bold text-2xl rounded-md px-4 py-2 text-center shadow-md">{{alerta.message}}</p>
</template>
<script setup>
import { computed } from "vue"


const isError = computed(()=>{
    return props.alerta.type === 'Error'
})
const props = defineProps({
    alerta:{
        type:Object,
        required:true
    }
})
</script>