<template>
  <div class="home">
    <admin-stock-page />
  </div>
</template>

<script>
// @ is an alias to /src
import AdminStockPage from '../components/Admin/AdminStock.vue'

export default {
  name: 'Admin',
  components: {
    AdminStockPage
  }
}
</script>