<template>
    <div class="v-main-wrapper">
        <v-catalog/>
        <v-cart
         v-if="CART.length"/>
    </div>
</template>

<script>
import vCart from './v-cart.vue';
import vCatalog from './v-catalog.vue';
// import store from '../vuex/store';
import { mapGetters } from 'vuex';
export default{
    name: "v-main-wrapper",
    components:{vCart, vCatalog },
    props:{},
    computed:{
        ...mapGetters(['CART'])
    },
    data(){return{

    }},
}
</script>

<style>
.v-main-wrapper{
    max-width: 900px;
    margin: 0 auto;
}
</style>