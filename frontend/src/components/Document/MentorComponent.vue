<template>
  <div class="min-h-screen bg-gradient-to-b from-white via-red-50 to-white p-6">
    <div
      class="max-w-12xl mx-auto bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-red-200 p-10"
    >
      <h1
        class="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent drop-shadow-lg"
      >
        รายชื่อผู้ดูแล / พี่เลี้ยง
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="mentor in mentors"
          :key="mentor.id"
          class="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden duration-500"
        >
          <div class="h-40 bg-gradient-to-r from-red-500 to-red-700"></div>
          <div class="flex justify-center -mt-16">
            <img
              :src="mentor.image"
              class="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
            />
          </div>
          <div class="p-6 text-center">
            <h2 class="text-xl font-bold text-gray-800">{{ mentor.name }}</h2>
            <p class="text-gray-500">{{ mentor.role }}</p>

            <div class="mt-4 text-sm text-gray-600 space-y-1">
              <p>{{ mentor.phone }}</p>
              <p>{{ mentor.email }}</p>
            </div>

            <div class="mt-6 flex justify-center gap-4">
              <button
                class="px-4 py-2 bg-gradient-to-r cursor-pointer from-red-600 to-red-800 text-white rounded-xl shadow hover:from-red-500 hover:to-red-700 transition"
              >
                ติดต่อ
              </button>
              <button
                class="px-4 py-2 cursor-pointer bg-gray-100 text-gray-700 rounded-xl shadow hover:bg-gray-200 transition"
              >
                ดูโปรไฟล์
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const mentors = ref([
  {
    id: 1,
    name: "Test",
    role: "Test",
    phone: "081-234-5678",
    email: "somchai@example.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Test",
    role: "Test",
    phone: "089-987-6543",
    email: "supaporn@example.com",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Test",
    role: "Test",
    phone: "082-345-6789",
    email: "thunwa@example.com",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
]);
</script>
