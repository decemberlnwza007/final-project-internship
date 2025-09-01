<script setup>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { ref, onMounted } from "vue";
import axios from "axios";

import SarabunRegular from "../../assets/fonts/Sarabun-Regular.js";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.vfs = {
  ...pdfFonts.pdfMake.vfs,
  "Sarabun-Regular.ttf": SarabunRegular
};

pdfMake.fonts = {
  THSarabunNew: {
    normal: "Sarabun-Regular.ttf"
  }
};

const student = ref({});

onMounted(async () => {
  const userId = 5;
  const response = await axios.get(`http://localhost:3001/users/${userId}`);
  student.value = response.data;

  console.log(response.data)
});

const generatePDF = () => {
  const docDefinition = {
    content: [{ text: "สวัสดีครับ ธันวา ✨", style: "header" }],
    defaultStyle: { font: "THSarabunNew", fontSize: 14 }
  };
  pdfMake.createPdf(docDefinition).open();
};
</script>

<template>
  <div class="p-6">
    <button @click="generatePDF" class="bg-red-600 text-white px-4 py-2 rounded-lg">
      สร้างไฟล์ PDF
    </button>
  </div>
</template>
