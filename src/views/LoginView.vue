<script setup>
import LoginForm from '../components/login/LoginForm.vue';
import LoginFooter from '../components/login/LoginFooter.vue';
</script>
<template>
  <div class="container">
    <main>
      <LoginForm />
    </main>
    <LoginFooter />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0;
  background: #F5F8FF;
  border-radius: 0;
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
