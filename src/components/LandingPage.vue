<template>
  <page-header />
  <banner-component />
  <stepper-cake />
  <stock-cakes />
  <full-contact-form />
  <page-footer />
</template>
<script>
import BannerComponent from "@/components/LandingPage/Banners.vue";
import PageHeader from '@/components/common/PageHeader.vue';
import StepperCake from '@/components/LandingPage/StepperCake.vue';
import PageFooter from '@/components/common/PageFooter.vue';
import StockCakes from './LandingPage/StockCakes.vue';
import FullContactForm from './contactForms/fullContactForm.vue';

export default {
  name: "LandingPage",
  components: {
    BannerComponent,
    PageHeader,
    StepperCake,
    PageFooter,
    StockCakes,
    FullContactForm,
  },
};
</script>

<style >
.spacer {
            min-height: 15vh !important;
        }
</style>
