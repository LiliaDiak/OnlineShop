<template>
    <div class="v-cart">
        <p>Cart</p>
<v-cart-item/>
    </div>
</template>

<script>
import VCartItem from './v-cart-item.vue';
export default{
    name: "v-cart",
    components:{ VCartItem },
    props:{},
    data(){return{

    }},
}
</script>

<style>
.v-main-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
}
</style>