<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ActorLayout from './components/layout/ActorLayout.vue';
import DefaultLayout from './components/layout/DefaultLayout.vue';
import ProductionLayout from './components/layout/ProductionLayout.vue';
import koKR from 'ant-design-vue/es/locale/ko_KR';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');
export default {
  name: 'App',
  components: { ActorLayout, ProductionLayout },
  data() {
    return {
      locale: koKR,
    };
  },
  computed: {
    layout() {
      return this.$root.$route.meta.layout || 'DefaultLayout';
    }
  }
}

</script>

<template>
  <a-config-provider :locale="locale">
    <component :is="layout">
      <router-view />
    </component>
  </a-config-provider>
</template>

<style>

</style>
