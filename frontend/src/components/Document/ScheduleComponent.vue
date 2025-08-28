<template>
    <div class="min-h-screen bg-gradient-to-b from-white via-red-50 to-white p-6">
        <div
            class="max-w-12xl mx-auto bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-red-200 p-10 overflow-hidden relative">

            <div class="mb-10 text-center">
                <label class="block text-2xl font-bold text-gray-800 mb-4">
                    เลือกปีการศึกษา
                </label>
                <select v-model="selectedYear"
                    class="px-6 py-3 rounded-xl border border-red-300 shadow-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition w-full md:w-1/2 text-lg">
                    <option disabled value="">-- กรุณาเลือกปีการศึกษา --</option>
                    <option v-for="year in academicYears" :key="year" :value="year">
                        ปีการศึกษา {{ year }}
                    </option>
                </select>
            </div>

            <div v-if="selectedYear">
                <h1
                    class="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent drop-shadow-lg">
                    รายงานผลการปฏิบัติงาน <span class="text-gray-700"> (ปีการศึกษา {{ selectedYear }}) </span>
                </h1>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="week in 18" :key="week"
                        class="p-6 bg-gradient-to-br from-white to-red-50 rounded-2xl border border-red-200 shadow-lg hover:shadow-xl transition cursor-pointer">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4">
                            สัปดาห์ที่ {{ week }}
                        </h2>
                        <p class="text-gray-600 mb-6">เพิ่มรายงานผลการปฏิบัติงานสำหรับสัปดาห์นี้</p>
                        <button @click="openModal(week)"
                            class="w-full bg-gradient-to-r cursor-pointer from-red-600 to-red-800 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:from-red-500 hover:to-red-700 transform hover:scale-[1.02] transition-all duration-300">
                            + เพิ่มรายงาน
                        </button>
                    </div>
                </div>
            </div>

            <div v-else class="text-center text-gray-500 mt-10">
                กรุณาเลือกปีการศึกษาเพื่อเริ่มรายงาน
            </div>
        </div>

        <Transition @enter="onEnter" @leave="onLeave" appear>
            <div v-if="showModal"
                class="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
                <div class="bg-white/95 w-full max-w-3xl rounded-2xl shadow-2xl p-8 relative" ref="modal">
                    <button @click="closeModal" class="absolute top-4 right-4 w-10 h-10 flex cursor-pointer items-center justify-center 
         rounded-full bg-gradient-to-br from-red-50 to-red-100 
         text-red-600 shadow-md hover:from-red-100 hover:to-red-200 
         hover:text-red-700 transition-all duration-300 hover:scale-110" aria-label="ปิดหน้าต่าง">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>


                    <h2
                        class="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                        รายงานผลการปฏิบัติงาน (สัปดาห์ที่ {{ currentWeek }})
                    </h2>

                    <div class="space-y-8 max-h-[70vh] overflow-y-auto pr-3 scroll-style">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-lg font-semibold text-gray-800 mb-3">
                                    วันที่เริ่มต้น
                                </label>
                                <input type="date" v-model="form.startDate" class="input-style" />
                            </div>
                            <div>
                                <label class="block text-lg font-semibold text-gray-800 mb-3">
                                    วันที่สิ้นสุด
                                </label>
                                <input type="date" v-model="form.endDate" class="input-style" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-lg font-semibold text-gray-800 mb-3">
                                สิ่งที่ได้รับมอบหมาย
                            </label>
                            <textarea rows="3" placeholder="กรอกสิ่งที่ได้รับมอบหมาย" v-model="form.assigned"
                                class="input-style" />
                        </div>

                        <div>
                            <label class="block text-lg font-semibold text-gray-800 mb-3">
                                ปัญหา
                            </label>
                            <textarea rows="3" placeholder="กรอกปัญหาที่พบ" v-model="form.problem"
                                class="input-style" />
                        </div>

                        <div>
                            <label class="block text-lg font-semibold text-gray-800 mb-3">
                                วิธีการแก้ไข
                            </label>
                            <textarea rows="3" placeholder="กรอกวิธีการแก้ไข" v-model="form.solution"
                                class="input-style" />
                        </div>

                        <div>
                            <label class="block text-lg font-semibold text-gray-800 mb-3">
                                สิ่งที่ได้เรียนรู้จากการปฏิบัติ
                            </label>
                            <textarea rows="3" placeholder="กรอกสิ่งที่ได้เรียนรู้" v-model="form.learned"
                                class="input-style" />
                        </div>

                        <h3
                            class="text-xl font-bold text-gray-800 text-center mt-6 mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                            อัปโหลดรูปภาพการปฏิบัติงาน
                        </h3>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-red-400 hover:bg-red-50 min-h-[200px] flex flex-col items-center justify-center"
                                @click="$refs.file1.click()">
                                <input ref="file1" type="file" accept="image/*" class="hidden"
                                    @change="handleFile($event, 1)" />
                                <div v-if="!image1">
                                    <div
                                        class="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mb-3">
                                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p class="text-gray-600">อัปโหลดรูปภาพที่ 1</p>
                                </div>
                                <div v-else>
                                    <img :src="image1" class="rounded-lg shadow-md w-full object-cover" />
                                </div>
                            </div>

                            <div class="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-red-400 hover:bg-red-50 min-h-[200px] flex flex-col items-center justify-center"
                                @click="$refs.file2.click()">
                                <input ref="file2" type="file" accept="image/*" class="hidden"
                                    @change="handleFile($event, 2)" />
                                <div v-if="!image2">
                                    <div
                                        class="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mb-3">
                                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p class="text-gray-600">อัปโหลดรูปภาพที่ 2</p>
                                </div>
                                <div v-else>
                                    <img :src="image2" class="rounded-lg shadow-md w-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <button @click="saveReport"
                            class="w-full bg-gradient-to-r cursor-pointer from-red-600 to-red-800 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:from-red-500 hover:to-red-700 transform hover:scale-[1.02] transition-all duration-300">
                            บันทึกข้อมูลรายงาน
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from 'gsap';

const selectedYear = ref("");
const academicYears = ref([2566, 2567, 2568]);

const showModal = ref(false);
const modal = ref(null);
const currentWeek = ref(null);
const form = ref({
    startDate: "",
    endDate: "",
    assigned: "",
    problem: "",
    solution: "",
    learned: "",
});

const image1 = ref(null);
const image2 = ref(null);

const openModal = (week) => {
    currentWeek.value = week;
    showModal.value = true;
    form.value = {
        startDate: "",
        endDate: "",
        assigned: "",
        problem: "",
        solution: "",
        learned: "",
    };
    image1.value = null;
    image2.value = null;
};

const closeModal = () => {
    showModal.value = false;
};

const handleFile = (event, index) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        if (index === 1) image1.value = e.target.result;
        else image2.value = e.target.result;
    };
    reader.readAsDataURL(file);
};

const saveReport = () => {
    console.log("บันทึก:", {
        year: selectedYear.value,
        week: currentWeek.value,
        ...form.value,
        image1: image1.value,
        image2: image2.value,
    });
    closeModal();
};

const onEnter = (el, done) => {
    gsap.fromTo(
        modal.value,
        { opacity: 0, y: 100, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out", onComplete: done }
    );
};

const onLeave = (el, done) => {
    gsap.to(modal.value, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.3,
        ease: "power3.in",
        onComplete: done,
    });
};
</script>
