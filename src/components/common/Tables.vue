<template>
  <table class="table table-striped table-responsive table-hover Warning">
    <thead>
      <tr>
        <th
          v-for="(key, index) in columns"
          :key="index"
          :class="{ active: sortKey == key }"
          @click="sortBy(key)"
        >
          {{ key }}
          <span
            class="arrow"
            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(entry, index) in filteredData"
        :key="index"
      >
        <td
          v-for="(key, index) in columns"
          :key="index"
        >
          {{ entry[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: Array,
    columns: Array,
    filterKey: String,
  },
  data: function () {
    var sortOrders = {};
    this.columns.forEach(function (key) {
      sortOrders[key] = 1;
    });
    return {
      sortKey: "",
      sortOrders: sortOrders,
    };
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey;
      var filterKey = this.filterKey && this.filterKey.toLowerCase();
      var order = this.sortOrders[sortKey] || 1;
      var data = this.data;
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
          });
        });
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return data;
    },
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
  },
};
</script>

<style>
 .arrow.asc::after{
    content: "▲";
    color: #00bcd4;
  }
  .arrow.dsc::after{
    content: "▼";
    color: #00bcd4;
  }
 
</style>