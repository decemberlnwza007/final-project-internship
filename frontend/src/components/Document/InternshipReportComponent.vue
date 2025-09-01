<template>
  <div class="min-h-screen p-6">
    <div class="max-w-12xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-red-200 p-10
        overflow-hidden relative">

      <div v-if="alreadySubmitted" class="text-center p-10">
        <h2 class="text-2xl font-bold text-green-600">คุณได้กรอกข้อมูลแล้ว</h2>
        <p class="text-gray-600 mt-4">ไม่สามารถบันทึกข้อมูลซ้ำได้</p>
      </div>
      <div class="max-h-[85vh] overflow-y-auto pr-6 scroll-style pb-6" v-else>
        <h1
          class="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent drop-shadow">
          แบบรายงานผลการปฏิบัติงานระบบทวิภาคี
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
          <div>
            <label class="block text-lg font-semibold text-gray-800 mb-2">รหัสนักศึกษา</label>
            <input v-model="studentId" type="text" placeholder="กรอกรหัสนักศึกษา" class="input-style" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <label class="block text-lg font-semibold text-gray-800 mb-2">ชื่อจริง</label>
            <input v-model="firstname" type="text" placeholder="กรอกชื่อ" class="input-style" />
          </div>

          <div>
            <label class="block text-lg font-semibold text-gray-800 mb-2">นามสกุล</label>
            <input v-model="lastname" type="text" placeholder="กรอกนามสกุล" class="input-style" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
          <div>
            <label class="block text-lg font-semibold text-gray-800 mb-2">ชื่อสถานประกอบการ</label>
            <input type="text" v-model="company_name" placeholder="ชื่อสถานประกอบการ" class="input-style" />
          </div>
        </div>

        <h1
          class="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent drop-shadow">
          ตำแหน่งงาน
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <label class="block text-lg font-semibold text-gray-800 mb-2">ตำแหน่ง</label>
            <input v-model="position_title" type="text" placeholder="กรอกตำแหน่ง" class="input-style" />
          </div>
          <div>
            <label class="block text-lg font-semibold text-gray-800 mb-2">หน้าที่ (ระบุพอสังเขป)</label>
            <input v-model="position_duties" type="text" placeholder="กรอกหน้าที่" class="input-style" />
          </div>

        </div>

        <div class="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
          <label class="block text-lg font-semibold text-gray-800 mb-2">งานที่ได้ปฏิบัติและตรงกับสมรรถนะรายวิชา</label>
          <textarea name="" v-model="work_matching_course" class="input-style" id="" rows="8"
            placeholder="งานที่ได้ปฏิบัติและตรงกับสมรรถนะรายวิชา"></textarea>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-1 gap-8 mt-6 mb-12">
          <div>
            <label class="block text-lg font-semibold text-gray-800 mb-2">งานอื่นๆที่ได้ปฏิบัติ</label>
            <input type="text" v-model="other_work" placeholder="กรอกงานอื่นๆที่ได้ปฏิบัติ" class="input-style" />
          </div>
        </div>

        <h1
          class="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent drop-shadow">
          ปัญหาที่พบระหว่างการปฏิบัติและวิธีการแก้ไข
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <label class="block text-lg font-semibold text-gray-800 mb-2">ปัญหา</label>
            <input v-model="problem_found" type="text" placeholder="กรอกปัญหา" class="input-style" />
          </div>
          <div>
            <label class="block text-lg font-semibold text-gray-800 mb-2">วิธีการแก้ไข</label>
            <input v-model="solution_method" type="text" placeholder="กรอวิธีการแก้ไข" class="input-style" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
          <label class="block text-lg font-semibold text-gray-800 mb-2">สิ่งที่ได้เรียนรู้จากการปฏิบัติ</label>
          <textarea name="" class="input-style" id="" rows="4" placeholder="กรอกสิ่งที่ได้เรียนรู้จากการปฏิบัติ"
            v-model="lessons_learned"></textarea>
        </div>

        <div class="bg-white rounded-2xl shadow-xl p-8 mt-4">
          <div
            class="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-red-400 hover:bg-red-50 min-h-96"
            @click="$refs.fileInput1.click()">
            <input ref="fileInput1" type="file" accept="image/*" class="hidden" multiple @change="handleFile1" />

            <div v-if="!image1.length" class="space-y-6">
              <div
                class="mx-auto w-24 h-24 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <div class="space-y-2">
                <h3 class="text-xl font-semibold text-gray-700">
                  Upload รูปนักศึกษาระหว่างปฏิบัติงาน
                </h3>
              </div>

              <button
                class="bg-gradient-to-br from-red-600 cursor-pointer to-red-800 text-white px-8 py-3 rounded-lg font-medium hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                เลือกรูปภาพ
              </button>
            </div>

            <div v-else class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
              <div v-for="(img, index) in image1" :key="index" class="relative group">
                <img :src="img.work_photo_1" alt="work photo 1"
                  class="rounded-lg shadow-lg w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />

                <button @click.stop="removeImage1(index)"
                  class="absolute top-2 right-2 bg-white/80 backdrop-blur-md text-red-600 rounded-full p-2 shadow-lg hover:bg-red-600 hover:text-white cursor-pointer transition">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-xl p-8 mt-4">
          <div
            class="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-red-400 hover:bg-red-50 min-h-96"
            @click="$refs.fileInput2.click()">
            <input ref="fileInput2" type="file" accept="image/*" class="hidden" multiple @change="handleFile2" />

            <div v-if="!image2.length" class="space-y-6">
              <div
                class="mx-auto w-24 h-24 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <div class="space-y-2">
                <h3 class="text-xl font-semibold text-gray-700">
                  Upload รูปนักศึกษาระหว่างปฏิบัติงาน
                </h3>
              </div>

              <button
                class="bg-gradient-to-br from-red-600 cursor-pointer to-red-800 text-white px-8 py-3 rounded-lg font-medium hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                เลือกรูปภาพ
              </button>
            </div>

            <div v-else class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
              <div v-for="(img, index) in image2" :key="index" class="relative group">
                <img :src="img" alt="work photo 2"
                  class="rounded-lg shadow-lg w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />

                <button @click.stop="removeImage2(index)"
                  class="absolute top-2 right-2 bg-white/80 backdrop-blur-md text-red-600 rounded-full p-2 shadow-lg hover:bg-red-600 hover:text-white cursor-pointer transition">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-8">
          <div>
            <label class="block text-lg font-semibold text-gray-800 mb-2">ชื่อครูพี่เลี้ยง</label>
            <input v-model="mentor_firstname" type="text" placeholder="กรอกชื่อครูพี่เลี้ยง" class="input-style" />
          </div>
          <div>
            <label class="block text-lg font-semibold text-gray-800 mb-2">นามสกุลครูพี่เลี้ยง</label>
            <input v-model="mentor_lastname" type="text" placeholder="กรอกนามสกุลครูพี่เลี้ยง" class="input-style" />
          </div>
        </div>


        <button @click="submitForm" v-if="!alreadySubmitted"
          class="bg-gradient-to-br w-full from-red-600 cursor-pointer to-red-800 text-white px-8 py-4 rounded-lg font-medium hover:from-red-600 hover:to-red-800 transition-all duration-300 transform shadow-lg">บันทึก</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";
import { useToastService } from '../../lib/toastService';

const { showSuccess } = useToastService();
const showSuccessToast = (message) => showSuccess(message);

const alreadySubmitted = ref(false);

const studentId = ref("");
const firstname = ref("");
const lastname = ref("");
const company_name = ref("");
const position_title = ref("");
const position_duties = ref("");
const work_matching_course = ref("");
const other_work = ref("");
const problem_found = ref("");
const solution_method = ref("");
const lessons_learned = ref("");
const mentor_firstname = ref("");
const mentor_lastname = ref("");

const image1 = ref([]);
const image2 = ref([]);
const work_photo_1 = ref(null);
const work_photo_2 = ref(null);

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });
};

const handleFile1 = async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  work_photo_1.value = await fileToBase64(file);
  image1.value = [work_photo_1.value];
};

const handleFile2 = async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  work_photo_2.value = await fileToBase64(file);
  image2.value = [work_photo_2.value];
};

const removeImage1 = () => {
  image1.value = [];
  work_photo_1.value = null;
};

const removeImage2 = () => {
  image2.value = [];
  work_photo_2.value = null;
};

const submitForm = async () => {
  try {
    const payload = {
      student_id_code: studentId.value,
      firstname: firstname.value,
      lastname: lastname.value,
      company_name: company_name.value,
      position_title: position_title.value,
      position_duties: position_duties.value,
      work_matching_course: work_matching_course.value,
      other_work: other_work.value,
      problem_found: problem_found.value,
      solution_method: solution_method.value,
      lessons_learned: lessons_learned.value,
      mentor_firstname: mentor_firstname.value,
      mentor_lastname: mentor_lastname.value,
      work_photo_1: work_photo_1.value,
      work_photo_2: work_photo_2.value
    };

    console.log("🚀 payload ส่งไป backend:", {
      work_photo_1: payload.work_photo_1 ? payload.work_photo_1.substring(0, 100) : null,
      work_photo_2: payload.work_photo_2 ? payload.work_photo_2.substring(0, 100) : null
    });

    const res = await fetch("http://localhost:3001/work/report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error("ส่งข้อมูลไม่สำเร็จ");
    await res.json();

    showSuccessToast("บันทึกข้อมูลสำเร็จ");
  } catch (err) {
    console.error(err);
  }
};


const fetchData = async () => {
  if (!studentId.value) return;
  try {
    const res = await fetch(`http://localhost:3001/work/get_id/${studentId.value}`);
    if (!res.ok) throw new Error("ไม่สามารถดึงข้อมูลได้");
    const data = await res.json();

    if (data && data.firstname) {
      alreadySubmitted.value = true;
    }

    firstname.value = data.firstname || "";
    lastname.value = data.lastname || "";
    company_name.value = data.company_name || "";
    position_title.value = data.position_title || "";
    position_duties.value = data.position_duties || "";
    work_matching_course.value = data.work_matching_course || "";
    other_work.value = data.other_work || "";
    problem_found.value = data.problem_found || "";
    solution_method.value = data.solution_method || "";
    lessons_learned.value = data.lessons_learned || "";
    mentor_firstname.value = data.mentor_firstname || "";
    mentor_lastname.value = data.mentor_lastname || "";

    image1.value = data.work_photo_1 ? [data.work_photo_1] : [];
    image2.value = data.work_photo_2 ? [data.work_photo_2] : [];
  } catch (err) {
    console.error(err);
  }
};


onMounted(() => {
  studentId.value = localStorage.getItem("studentId") || "";
  fetchData();
});
</script>


<style scoped>
.scroll-style::-webkit-scrollbar {
  width: 10px;
}

.scroll-style::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #f87171, #dc2626);
  border-radius: 9999px;
}

.scroll-style::-webkit-scrollbar-track {
  background: transparent;
}
</style>
