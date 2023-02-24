<template>
    <div class="v-catalog-item">
        <img class="v-catalog-item__image" v-bind:src="require('../assets/images/' + product_data.image)" alt="img">
        <p class="v-catalog-item__name">{{product_data.name }}</p>
        <p class = "v-catalog-item__price">Price : {{product_data.price}}</p>
        <button class = "v-catalog-item__add_to_card_btn btn" @click="sendDataToParent">Add to cart</button>
    </div>
</template>

<script>
// import { assert } from 'console';

export default{
    name: "v-catalog-item",
    components:{ },
    props:{
        product_data:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    data(){return{

    }},
    methods:{
        sendDataToParent(){
            this.$emit("sendArticle", this.product_data.article)
        }
    }
}
</script>

<style lang="scss">
.v-catalog-item{
    flex-basis: 25%;
    box-shadow: 0 0 8px 0;
    padding: 16px;
    margin-bottom:16px;
    &__image{
        width: 100px;
    }
}
</style>