<template>
    <div class="text-white">

    
    <div class="flex mr-2">
        <div class="mr-2">
            <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
            <span class="font-bold text-teal-500">{{ cartShop.length }}</span>
        </div>
        <div >
            <div>
                <span >My Cart</span>
            </div>
             <span class="text-center"><span class="text-[1.2rem] mr-1">$</span>{{totalCartprice.toFixed(2)}}</span>
        </div>
    </div>
    
</div>

</template>
<script setup>
import {computed} from 'vue'
import { useCartStore } from './../stores/Cart.js'

const store = useCartStore()

const { totalCart,cartShop } = store 

const totalCartprice = computed(()=>{
    return cartShop.reduce((total,produto)=>total + produto.price,0)
})

</script>