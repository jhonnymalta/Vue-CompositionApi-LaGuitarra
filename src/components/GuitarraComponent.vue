<template>
    
    <div class=" ">
        <div>
            <div>OFF</div>
            <div>Favorito</div>
        </div>
        <div>
            <router-link :to="`/guitar/${guitarra.id}`" >           
            <img :src="`/images/${guitarra.image}.jpg`" alt=" Imagem guitarra" style="max-height: 40vh;">
        </router-link>
        </div>
        <div>{{guitarra.title}}</div>
        <p class="truncate">{{guitarra.description}}</p>
        <div>${{guitarra.price}}</div>
        <div>
            <button @click="$emit('sendToCart',guitarra)" class="bg-blue-500 text-white px-4 py-2 rounded-[6px]">Adicionar</button>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    guitarra:{
        type: Object,
        required: true
    }
})

defineEmits(['sendToCart'])
</script>