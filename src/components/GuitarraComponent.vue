<template>
    <div>
        <div>
            <div>OFF</div>
            <div>Favorito</div>
        </div>
        <div>
            <img :src="`/images/${guitarra.image}.png`" alt=" Imagem guitarra" style="max-height: 40vh;">
        </div>
        <div>{{guitarra.title}}</div>
        <div>{{guitarra.description}}</div>
        <div>${{guitarra.price}}</div>
        <div>
            <button @click="$emit('sendToCart',guitarra)">Adicionar</button>
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