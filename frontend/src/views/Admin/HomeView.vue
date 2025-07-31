<template>
    <div class="flex h-screen home">
        <AdminSidebarComponent />

        <div class="flex-1 relative overflow-hidden">

            <div
                class="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-red-200/50 p-12 ml-6 mt-6 mb-10 mr-6 min-h-[calc(100vh-5rem)] overflow-hidden">
                <div class="absolute inset-0 opacity-5">
                    <div
                        class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600 to-red-800 pattern-dots">
                    </div>
                </div>

                <div class="relative flex justify-center mb-8">
                    <div class="w-32 h-1.5 bg-gradient-to-r from-red-500 to-red-700 rounded-full shadow-lg"></div>
                </div>

                <div class="relative text-center space-y-8">
                    <h1
                        class="text-7xl font-bold bg-gradient-to-r from--700 via-red-800 to-red-900 bg-clip-text text-transparent drop-shadow-sm">
                        ยินดีต้อนรับ
                    </h1>

                    <div class="relative">
                        <p class="text-2xl text-red-700 max-w-3xl mx-auto leading-relaxed font-medium">
                            ระบบปฏิบัติงานระบบทวิภาคี สำหรับนักศึกษาปริญญาตรี
                        </p>
                        <div
                            class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent">
                        </div>
                    </div>
                </div>

                <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <div class="flex space-x-3 items-center">
                        <div class="w-10 h-2.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-md"></div>
                        <div class="w-14 h-2.5 bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-md"></div>
                        <div class="w-10 h-2.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-md"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import AdminSidebarComponent from '../../components/Sidebar/AdminSidebarComponent.vue';
</script>

<style scoped>
.home {
    overflow: hidden;
}

.animation-delay-500ms {
    animation-delay: 0.5s;
}

.animation-delay-1s {
    animation-delay: 1s;
}

.animation-delay-1500ms {
    animation-delay: 1.5s;
}

.animation-delay-2s {
    animation-delay: 2s;
}

.animation-delay-3s {
    animation-delay: 3s;
}

.pattern-dots {
    background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0);
    background-size: 20px 20px;
}
</style>