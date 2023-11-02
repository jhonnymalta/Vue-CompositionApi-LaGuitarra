<template>
    <h2>Cart View</h2>
    <div class="container mx-auto grid grid-cols-3 gap-4">
        <div v-if="cartShop.length != 0" class="col-span-2">
            <div>banner</div>
            <div>
                <ItemCart v-for="item in cartShop" :key="item.id"
                @delete-item="deleteItem"
                @increase-item="increaseItem"
                @decrease-item="decreaseItem"
                :guitarra="item"
                />
            </div>
        </div>
        <div  v-else class="col-span-2">
            <h2>Cart is Empty!</h2>
        </div>
        <div class="bg-gray-800 h-[70vh] p-4">
            <div>
                teste
            </div>
            <div class="h-[90%]">
                
            </div>
            <div>
                <div class="border-t-2 mb-2"></div>
                <div class="flex justify-between">
                    <h2 class="text-white text-3xl ">Total:</h2>
                    <span class="text-2xl text-white">${{ totalCartprice }}</span>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import ItemCart from '../components/ItemCartComponent.vue'
import { useCartStore } from './../stores/Cart.js'

const store = useCartStore()

let { cartShop, decreaseQTD ,increaseQTD} = store 

const totalCartprice = computed(()=>{
    return cartShop.reduce((total,produto)=>total + produto.price  * produto.qtd,0)
})

const deleteItem = (id) =>{
    console.log('deletar item '+id)
}

const increaseItem = (id) =>{    
    increaseQTD(id)
}
const decreaseItem = (id) =>{   
    decreaseQTD(id)
}
const sendToCart = (guitar) => {  
  addGuitarras(guitar)
    
 }



</script>