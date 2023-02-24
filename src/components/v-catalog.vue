<template>
    <div class="v-catalog">
        <v-catalog-item
        v-for="product in products"
        :key="product.article"
        v-bind:product_data="product"
        @sendArticle = "show"
        />
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
export default{
    name: "v-catalog",
    components:{
        vCatalogItem,
     },
    props:{},
    data(){
        return{
            
        products: [
    {
      "image": "1.jpg",
      "name": "T-shirt 1",
      "price": 210,
      "article": "T1",
      "available": true,
      "category": "Male"
    },
    {
      "image": "2.jpg",
      "name": "T-shirt 2",
      "price": 315,
      "article": "T2",
      "available": true,
      "category": "Female"
    },
    {
      "image": "3.jpg",
      "name": "T-shirt 3",
      "price": 420,
      "article": "T3",
      "available": false,
      "category": "Female"
    },
    {
      "image": "4.jpg",
      "name": "T-shirt 4",
      "price": 530,
      "article": "T4",
      "available": true,
      "category": "Male"
    },
    {
      "image": "5.jpg",
      "name": "T-shirt 5",
      "price": 650,
      "article": "T5",
      "available": false,
      "category": "Female"
    },
    {
      "image": "6.jpg",
      "name": "T-shirt 6",
      "price": 870,
      "article": "T6",
      "available": true,
      "category": "Female"
    }
  ]
    }},
    methods:{
        show(data){
console.log(data);
        }
    }
}
</script>

<style>
.v-catalog{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
</style>