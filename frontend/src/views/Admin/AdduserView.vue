<template>
    <div class="flex h-screen home">
        <AdminSidebarComponent />

        <div class="flex-1 relative overflow-hidden">
            <div
                class="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-red-200/50 p-12 ml-6 mt-6 mb-10 mr-6 min-h-[calc(100vh-5rem)] overflow-hidden">

                <AdduserComponent />

            </div>
        </div>
    </div>
</template>

<script setup>
import AdminSidebarComponent from '../../components/Sidebar/AdminSidebarComponent.vue';
import AdduserComponent from '../../components/Admin/AdduserComponent.vue';
</script>