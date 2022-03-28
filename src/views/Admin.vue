<template>
  <div class="home">
    <admin-page />
  </div>
</template>

<script>
// @ is an alias to /src
import AdminPage from '../components/Admin/AdminPage.vue'

export default {
  name: 'Admin',
  components: {
    AdminPage
  }
}
</script>