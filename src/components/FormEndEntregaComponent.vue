<template>
    
    <div class="md:w-1/2">
        
        <h2>Delivery address</h2>
        <alerta v-if="alerta.message"
        :alerta="alerta"/>

        <form class="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            @submit.prevent="validate">
            <div>
                <label for="tag" class="uppercase font-bold block text-gray-700">Tag</label>
                <input type="text" class="border-2 w-full p-2 mt-2"
                v-model="addressToSend.tag"
                placeholder="work"
                id="tag">
            </div>
            <div class="mt-4">
                <label for="receive" class="uppercase font-bold block text-gray-700">
            Who would receive</label>
                <input type="text" class="border-2 w-full  p-2 mt-2"
                v-model="addressToSend.receiver"
                placeholder="Signara Twuing"
                id="receive">
            </div>
            <div class="md:flex justify-between gap-3">
                <div class="mt-4 w-1/2">
                    <label for="street" class="uppercase font-bold block text-gray-700">
                        Street Name</label>
                    <input type="text" class="border-2 w-full  p-2 mt-2"
                    v-model="addressToSend.street"
                    placeholder="Indianapolis"
                    id="street">
                </div>

                <div class="mt-4">
                <label for="number" class="uppercase font-bold block text-gray-700">
                    Number</label>
                <input type="text" class="border-2 w-25  p-2 mt-2"
                v-model="addressToSend.number"
                placeholder="3000"
                id="number">
                </div>

                <div class="mt-4">
                <label for="complement" class="uppercase font-bold block text-gray-700">
                    Comp.</label>
                <input type="text" class="border-2 w-25  p-2  mt-2"
                v-model="addressToSend.comp"
                placeholder="floor"
                id="complement">
                </div>
            </div>


            <div class="md:flex justify-between gap-3">
                <div class="mt-4 w-1/2 ">
                    <label for="postal" class="uppercase font-bold block text-gray-700">
                        Postal Code</label>
                    <input type="text" class="border-2 w-full  p-2 mt-2"
                    v-model="addressToSend.postal"
                    placeholder="30320-100"
                    id="postal">
                </div>

                <div class="mt-4 w-1/2">
                    <label for="city" class="uppercase font-bold block text-gray-700">
                        City</label>
                    <input type="text" class=" w-full border-2   p-2 mt-2"
                    v-model="addressToSend.city"
                    placeholder="Belo Horizonte"
                    id="city">
                </div>

                
            </div>



            <div class="md:flex justify-between gap-3">
                <div class="mt-4 w-1/2 ">
                    <label for="state" class="uppercase font-bold block text-gray-700">
                        State</label>
                    <input type="text" class="border-2 w-full  p-2 mt-2"
                    v-model="addressToSend.state"
                    placeholder="30320-100"
                    id="state">
                </div>

                <div class="mt-4 w-1/2">
                    <label for="country" class="uppercase font-bold block text-gray-700">
                        Country</label>
                    <input type="text" class=" w-full border-2   p-2 mt-2"
                    v-model="addressToSend.country"
                    placeholder="Belo Horizonte"
                    id="country">
                </div>

                
            </div>


            <div>
                <input type="submit" class=" mt-4 bg-teal-400 w-full p-3 text-white uppercase font-bold hover:bg-teal-700 transition-colors cursor-pointer"
                value="Add Address">
            </div>
        </form>
    </div>
    
    
    
</template>

<script setup>
import {reactive} from  'vue'

//components
import Alerta from '../components/Alerta.vue'

const alerta = reactive({
    message:'',
    type:''
})

const addressToSend = reactive({
    tag:'',
    receiver:'',
    street:'',
    number:'',
    comp:'',
    postal:'',
    city:'',
    state:'',
    country:''


});

const validate = () =>{
    if(Object.values(addressToSend).includes('')){
        alerta.message= "there are empty fields!"
        alerta.type="Error"
        console.log('empty input found!')
    }else{
        alerta.message= "Address saved successfully!"
        alerta.type="Success"
    }
}

</script>