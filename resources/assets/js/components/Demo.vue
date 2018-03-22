<template>
<div class="container">
  <div>{{count}}</div>
  <div class="row padding-top-5">
    <div class="col-md-3">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Filter</h3>
        </div>
        <div class="panel-body">
          <div v-for="(filter,index) in filters" :key="index">
            <component v-bind:is="componentName()" :filter="filter" :demoFilter="demoFilter" :filterValue="filterValue" @filterResult="filterResult"></component>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-9">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Result</h3>
        </div>
        <div class="panel-body">
          <div class="row">
            <article class="col-md-4" style="padding:10px;" v-for="(filterResultValue,index) in filtedResults" :key="index" v-if="pagination(index) && filterResultValue.show">
                <div class="">
                  <figure class="image-box"><img src="http://tools.sixtine.system-in-motion.com/website/application/files/cache/00b255d89afd1f1510d0ce6e0e6b0625.jpeg" alt="" class="border-radius-5">
                </figure>
                <div class="content">
                    <h3>{{filterResultValue.title}}</h3>
                    <div class="text"><p style="word-wrap: break-word; max-height:70px;overflow:hidden;">{{filterResultValue.description}}</p></div>
                    <div class="text" style="color:#5e9516;">{{filterResultValue.price}}</div>
                </div>
                </div>
            </article>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <b-pagination align="center" :total-rows="6" v-model="currentPage" :per-page="3">
              </b-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import FilterLayout from './FilterLayout.vue'
  // import { mapState } from 'vuex'
  export default {
    name: 'Demo',
    data: function () {
      return {
        filters:[
          {
            id:0,
            title:'Product Category',
            key: 'category',
            values:[
              'Mobile',
              'Pant',
              'Shirt',
              'Shock',
              'Shoe'
            ]
          },
          {
            id:1,
            title:'Brand',
            key: 'brand',
            values:[
              'Haus Alkire',
              'Hermes',
              'Kane',
              'Keds'
            ]
          }
        ],
        products:[
          {
            id:0,
            title:'product',
            description:"Lorem Ipsum is simply summy text of the printing and typesetting industry. Lorem Ipsum has been the industy's",
            price:'$100',
            show:true,
            0:['Shirt','Shock'],
            1:['Hermes'],
            category: ['Shirt','Shock'],
            brand: ['Hermes']
          },
          {
            id:1,
            title:'product1',
            description:'standard dummy text ever since the 1500s,when an unknown printer took a gelley of type and scrambled it to make a',
            price:'$120',
            show:true,
            0:['Pant'],
            1:['Keds'],
            category:['Pant'],
            brand:['Keds']
          },
          {
            id:2,
            title:'product2',
            description:'specime book.It has survived not only five centuries, but also the leap into electronic typesetting remaining',
            price:'$250',
            show:true,
            0:['Mobile'],
            1:['Keds'],
            category:['Mobile'],
            brand:['Keds']
          },
          {
            id:3,
            title:'product3',
            description:'the leap into the electronic typesetting,remaining essentially unchanged. It was popularyised in the 1960s',
            price:'$25',
            show:true,
            0:['Shoe'],
            1:['Haus Alkire'],
            category:['Shoe'],
            brand:['Haus Alkire']
          },
          {
            id:4,
            title:'product4',
            description:'the leap into the electronic typesetting,remaining essentially unchanged. It was popularyised in the 1960s',
            price:'$25',
            show:true,
            0:['Shock'],
            1:['Haus Alkire'],
            category:['Shock'],
            brand:['Haus Alkire']
          },
          {
            id:5,
            title:'product5',
            description:'the leap into the electronic typesetting,remaining essentially unchanged. It was popularyised in the 1960s',
            price:'$25',
            show:true,
            0:['Shoe'],
            1:['Keds'],
            category:[' Mobile'],
            brand:['Keds']
          }
        ],
        filterValue:[
        ],
        currentPage:1,
        demoFilter: {
          category: [],
          brand: []
        }
      }
    },
    computed:{
      filtedResults:function(){
        // var result = [];
        // var size = Object.keys(this.filterValue).length;
        // var filterValue = this.filterValue;
        // this.products.forEach((product,index) => {
        //   var isAssign = [];
        //   for(var i = 0;i<size;i++){
        //     let pushResult = false;
        //     if(filterValue[i] == "" && isAssign){
        //       pushResult = true;
        //     }else{
        //       let filters = this.filterValue[i].split(',');
        //       product[i].forEach(element =>{
        //         if(filters.includes(element)){
        //           pushResult =true;
        //          }
        //       });
        //     }
        //     isAssign.push(pushResult);
        //   }
        //   if(! isAssign.includes(false)){
        //     result.push(product);
        //   }
        // });
        
        let result = this.products;

        // products is an array like object use this solution
        let demoFilter = this.demoFilter;
        let categoryLength = this.demoFilter.category.length;
        let brandLength = this.demoFilter.brand.length;
        Array.prototype.forEach.call(result, (product,index) => {

          console.log(index,this.hasOne(product.category,demoFilter.category),this.hasOne(product.brand,demoFilter.brand));
          if(this.hasOne(product.category,demoFilter.category) && this.hasOne(product.brand,demoFilter.brand)){
            product.show = true;
          }else{
            product.show = false;
          }
        });
        // for (let j = 0, jl = this.filters.length; j < jl; j++) {
        //   result = result.filter(x => {
        //     //this.demoFilter[this.filters[j].key] = ['mobile', 'pant']
        //     return this.hasOne(this.demoFilter[this.filters[j].key], x[this.filters[j].key]);
        //   });
        // }
        return result;
      },
      count (){
        return this.$store.state.count
      },
      // ... 为js中展开运算符
      ...mapState([
        'category'
      ])
    },
    components:{
      FilterLayout
    },
    methods: {
      hasOne: function(search, arr) {
        console.log(search,arr);
        if(arr.length == 0){
          return true;
        }
        return arr.some(x => {
          for (let i = 0, l = search.length; i < l; i++) {
           if(search[i] === x){
             return search[i] === x;
           }
            
          }
        });
      },
      componentName:function(){
        return 'FilterLayout';
      },
      filterResult:function(answer){
        this.filterValue=Object.assign({},answer);
      },
      pagination:function(index){
        var pagination = this.currentPage;
        // 3 mean how many products show in per page
        if((index + 1)<=pagination*3 && (index + 1) > pagination*3-3){
          return true
        }
        return false;
      }
    },
    mounted: function () {

        /*
          this part should use 
          this.$axios.get(`${url}`)
        .then((result) => {
          get the result and  use th Object.assign() to assignment value to data
        });
        */ 
        console.log('success');
        console.log(this.category);
    }
  }
</script>