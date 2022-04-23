<template>
  <page-header :propitems="propitems" />
  <div
    id="stepper-cake"
    class="spacer"
  />
 
  <section
    class="vh-85 container d-flex flex-column justify-content-center pastelcolor pt-10vh"
  >
    <h1>
      {{ currentView }} Stock  <button class="btn btn-primary"
                                       @click="changeView()">
        Change to <span class="text-white">{{ currentView == 'Toppings' ? 'Flavors' :'Toppings' }}</span>
      </button>
    </h1>
    <h4 class="text-start h4">
      Search
    </h4>
    <div class="d-flex">
      <input
        id="myInput"
        type="text"
        class="w-75"
        placeholder="Search for names.."
        title="Type in a name"
      >
      <select class="w-25">
        <option value="1">
          Name
        </option>
        <option value="2">
          Phone
        </option>
        <option value="3">
          Email
        </option>
      </select>
    </div>
    <div class=" table-responsive">
      <stock-table  
        :data="currentView == 'Toppings' ? gettoppings : getflavors"
        :columns="columns"
        :filter-key="filterKey" 
      />
    </div>
  </section> 
</template>

<script>
import PageHeader from "../common/PageHeader.vue";
import StockTable from "../common/StockTable.vue";
export default {
  components: {  StockTable,PageHeader },
  data() {
    return {
      currentView: "Toppings",
      propitems: [
        {
          title: "Stock",
          link: "Stock",
        },
        {
          title: "Orders",
          link: "Orders",
        }

      ],
      columns: [ "name","price", "stock","image"],
    };
  },
  computed:{
    getflavors(){
        return this.$store.getters.getflavors
    },
    gettoppings(){
        return this.$store.getters.gettoppings
    },
},
  methods: {
    changeView() {
      if(this.currentView  != "Toppings"){
        this.currentView = "Toppings";
      }else{
        this.currentView = "Flavors";
      }

    },
  },

};
</script>

<style>
.vh-85 {
  height: 100%;
  min-height: 85vh;
}
</style>