<template>
    <div class="flex h-screen overflow-hidden">
        <SidebarComponent />
        <div class="flex-1 relative overflow-hidden">
            <DocumentComponent />
        </div>
    </div>
</template>

<script setup>
import SidebarComponent from '../components/Sidebar/SidebarComponent.vue';
import DocumentComponent from '../components/Document/DocumentComponent.vue';
</script>

<style scoped>
.scroll-style::-webkit-scrollbar {
  width: 8px;
}

.scroll-style::-webkit-scrollbar-thumb {
  background-color: #f87171;
  border-radius: 9999px;
}

.scroll-style::-webkit-scrollbar-track {
  background-color: #ffffff;
}
</style>
