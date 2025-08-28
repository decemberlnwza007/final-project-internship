<template>
  <div class="min-h-screen grid grid-cols-1 md:grid-cols-2">
    <div @click="handleITPage"
      class="group relative flex flex-col items-center justify-center text-white p-10 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] bg-cover bg-center"
      style="background-image: url('https://images.wallpapersden.com/image/download/programming-coding-language_bGhpbm6UmZqaraWkpJRmbmdlrWZlbWU.jpg');">
      <div class="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition duration-500"></div>
      <h1 class="text-5xl md:text-6xl font-extrabold mb-6 relative z-10 drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
        เทคโนโลยีสารสนเทศ
      </h1>

      <span
        class="absolute bottom-6 right-6 text-8xl text-blue-200/90 font-extrabold z-10 drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
        IT
      </span>
    </div>

    <div @click="handleMechaPage"
      class="group relative flex flex-col items-center justify-center text-white p-10 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] bg-cover bg-center"
      style="background-image: url('https://www.mtu.edu/mechatronics/what-is/images/shutterstock-368354981-banner2400.jpg');">
      <div class="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition duration-500"></div>

      <h1 class="text-5xl md:text-6xl font-extrabold mb-6 relative z-10 drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
        เมคคาทรอนิกส์และหุ่นยนต์
      </h1>

      <span
        class="absolute bottom-6 right-6 text-8xl text-red-200/90 font-extrabold z-10 drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
        MECHA
      </span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleITPage = () => {
  router.push('/it');
}
const handleMechaPage = () => {
  router.push('/mecha');
}


</script>
