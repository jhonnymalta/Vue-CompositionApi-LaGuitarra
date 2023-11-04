<template>
    <div class=" grid grid-cols-3 gap-4">
        <div>
            <img :src="`/images/${guitarra.image}.jpg`" alt=" Imagem guitarra" style="max-height: 200px;">
        </div>
        <div >
            <div>
                <div >
                    <h3>{{guitarra.title}}</h3>
                    <span class="text-end">value</span>
                </div>
                <span>fabricante</span>
            </div>
           
        </div>
        <div>
            <div>
              <button  @click="$emit('decrease-item',guitarra.id)">-</button>
              <span class="text-3xl bg-[#5555] px-4">{{ guitarra.qtd }}</span>
              <button @click="$emit('increase-item',guitarra.id)">+</button>
            </div>
            <button class="bg-red-500 px-4 py-2" @click="$emit('delete-Item',guitarra.id)">Remove</button>
        </div>
    </div>
</template>
<script setup>



const props = defineProps({
    guitarra: Object,
    required: true
})

defineEmits(['delete-Item','increase-item','decrease-item'])


</script>