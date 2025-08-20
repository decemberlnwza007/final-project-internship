<template>
  <router-view />
</template>

<script setup>
  import { ref, provide } from 'vue';

  const showOrganization = ref(true);
  provide("showOrganization", showOrganization);
</script>