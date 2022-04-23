<template>
  <page-header :propitems="propitems" />
  <div
    id="stepper-cake"
    class="spacer"
  />
  <section class="vh-85 d-flex justify-content-center pastelcolor pt-10vh">
    <div class="container table-responsive">
      <h1>Orders</h1>

      <h6>Filter by</h6>
      <div class="d-flex">
        Status
        <select class="w-25 ms-3">
          <option value="1">
            In progress
          </option>
          <option value="2">
            Sended
          </option>
          <option value="3">
            Delivered
          </option>
          <option value="4">
            Canceled
          </option>
        </select>
      </div>
      <h6>Search</h6>
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
      <stock-table  
        :data="getpedidos"
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
      columns: [ "id","selectedflavors", "selectedToppings","message","status"
      ,"price","clientname"],
    };
  },
  computed:{
    getpedidos(){
        return this.$store.getters.getpedidos
    }
}
};
</script>

<style>
.vh-85 {
  height: 100%;
  min-height: 85vh;
}
</style>