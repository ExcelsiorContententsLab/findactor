<script setup>
import ActorProfile from '@/components/actor/ActorProfile.vue';
import ApplyDashboard from '@/components/actor/ApplyDashboard.vue';
import ActorPortfolio from '@/components/actor/ActorPortfolio.vue';
import BaseFooter from '@/components/base/BaseFooter.vue';
</script>

<template>

  <div class="layout-content__main">
    <div class="content content--left">
      <ActorProfile></ActorProfile>
    </div>
    <div class="content content--right">
      <!-- <div class="content__child">
        <ApplyDashboard></ApplyDashboard>
      </div> -->
      <div class="content__child">
        <ActorPortfolio></ActorPortfolio>
      </div>
    </div>
  </div>

</template>