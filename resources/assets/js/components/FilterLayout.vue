<template>
<div>
  <div class="question-text">{{filter.title}}</div>
  <div class="row">
    <div class="col-md-12" v-for="(value,index) in filter.values" :key="index">
      <label>
        <!-- <input type="checkbox"  :value="value" v-model="answers" /> {{ value }} -->
        <input type="checkbox"  :value="value" v-model="demoFilter[filter.key]" /> {{ value }} 
      </label>
    </div>
  </div>
  
</div>
</template>

<script>
export default {
  data:function(){
    return{
      answers:[],
    }
  },
  props: ['filter','filterValue', 'demoFilter'],
  watch:{
    answers:function(val){
      this.filterValue[this.filter.id] = val.join(',');
      this.$emit('filterResult',this.filterValue);
    }
  },
  mounted:function(){
    this.filterValue[this.filter.id] = this.filterValue[this.filter.id] || '';
  }
}
</script>