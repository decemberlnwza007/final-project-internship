<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">รายงานผลการปฏิบัติงาน</h1>

    <button @click="downloadPDF" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      ดาวน์โหลด PDF
    </button>

    <button @click="showPDF" class="mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
      แสดงเอกสาร
    </button>

    <button @click="printPDF" class="mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
      ปริ้น
    </button>

    <div v-if="pdfUrl" class="mt-6">
      <iframe :src="pdfUrl" width="100%" height="800px" style="border:1px solid #ccc;"></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "../../assets/fonts/Sarabun-Regular-normal.js"; // ฟอนต์ไทย

const pdfUrl = ref(null);

const generatePDF = () => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  doc.setFont("Sarabun-Regular");

  doc.setFontSize(18);
  doc.text("เอกสารระหว่างการปฏิบัติงาน", 105, 140, { align: "center" });
  doc.setTextColor(200, 0, 0); // สีแดง
  doc.text("เดือน พฤษภาคม พ.ศ. 2568", 105, 150, { align: "center" });
  doc.setTextColor(0, 0, 0);

  doc.addPage();

  doc.setFontSize(12);
  const text = "สถาบันการอาชีวศึกษาภาคกลาง 5";
  doc.setFontSize(12);

  doc.text(text, 105, 20, { align: "center" });

  const textWidth = doc.getTextWidth(text);

  const startX = 105 - textWidth / 2;
  const endX = 105 + textWidth / 2;

  doc.line(startX, 21, endX, 21);

  doc.text("แบบรายงานผลการปฏิบัติงานระบบทวิภาคี", 105, 28, { align: "center" });
  doc.text("(สำหรับนักศึกษา)", 105, 36, { align: "center" });

  autoTable(doc, {
    startY: 40,
    head: [["รายวิชาในสถานประกอบการ"]],
    body: [
      [
        `1. รหัสวิชา 19-40901-3001 ชื่อวิชา การออกแบบประสบการณ์ผู้ใช้และส่วนติดต่อผู้ใช้
สมรรถนะรายวิชา:
1) แสดงความรู้เกี่ยวกับการออกแบบ
2) วิเคราะห์ออกแบบตามความต้องการ
3) ปฏิบัติตามขั้นตอนการออกแบบ
4) มีคุณธรรม จริยธรรม ซื่อสัตย์สุจริต`
      ],
      [
        `2. รหัสวิชา 19-40901-2110 ชื่อวิชา เทคโนโลยีแพลตฟอร์มคอมพิวเตอร์
สมรรถนะรายวิชา:
1) แสดงความรู้เกี่ยวกับระบบปฏิบัติการ
2) ประยุกต์และติดตั้งโปรแกรม
3) วิเคราะห์การปรับแต่งระบบ
4) แก้ไขปัญหาคอมพิวเตอร์เบื้องต้น`
      ],
      [
        `3. รหัสวิชา 19-40901-2102 ชื่อวิชา กระบวนการเฝ้าสังเกตสำหรับธุรกิจ
สมรรถนะรายวิชา:
1) แสดงความรู้เกี่ยวกับการสังเกต
2) วางแผนวัตถุประสงค์การเฝ้าสังเกต
3) สรุปแผนการเฝ้าสังเกต
4) มีคุณธรรม จริยธรรม ซื่อสัตย์สุจริต`
      ]
    ],
    styles: { font: "Sarabun-Regular", fontSize: 11, cellPadding: 4 },
  });

  // หน้าถัดไป
  doc.addPage();

  doc.text("สถาบันการอาชีวศึกษาภาคกลาง 5", 105, 15, { align: "center" });
  doc.text("แบบรายงานผลการปฏิบัติงานระบบทวิภาคี (สำหรับนักศึกษา)", 105, 22, { align: "center" });

  autoTable(doc, {
    startY: 35,
    body: [
      [
        { content: "รายงานผลการปฏิบัติงานระบบทวิภาคี ประจำเดือน พฤษภาคม พ.ศ. 2568\nระหว่างวันที่ 19 ถึง 25 พฤษภาคม พ.ศ. 2568", colSpan: 2 }
      ],
      ["1. ชื่อนักศึกษา\nนายภัทรพล เสมอภาค", "2. รหัสนักศึกษา\n66xxxxxxxx"],
      ["3. ชื่อสถานประกอบการ\nวิทยาลัยเทคนิคสมุทรสาคร", ""],
      ["4. ตำแหน่งงาน (ระบุหน้าที่)\nตำแหน่ง: IT SUPPORT\nหน้าที่: ดูแลเครือข่าย คอมพิวเตอร์ เครื่องปริ้น และ CCTV", ""],
      ["5. งานที่ได้ปฏิบัติ\n- ใช้ Advanced IP Scanner ตรวจสอบ IP Address\n- ใช้ Zenmap สแกนหา Port", "6. งานอื่นๆ\n- ออกแบบป้ายต้อนรับพนักงานใหม่"],
      ["7. ปัญหาที่พบและวิธีแก้\n- ปัญหา: เชื่อมต่อแม่ข่ายไม่ได้\n- วิธีแก้: ใช้ Zenmap ตรวจสอบ พบว่าปิด Port", ""],
      ["8. สิ่งที่ได้เรียนรู้\n- แก้ปัญหา Port ไม่ได้\n- ใช้ Advanced IP Scanner ตรวจสอบ IP Address", ""],
      ["9. รูปภาพปฏิบัติงาน (2 รูป)", ""],
      ["10. ข้อคิดเห็นครูฝึก\n(ลงชื่อ)....................", "11. นักศึกษาลงนาม\n(นายภัทรพล เสมอภาค)"]
    ],
    styles: { font: "Sarabun-Regular", fontSize: 11, cellPadding: 3, minCellHeight: 20 },
  });

  return doc;
};

const downloadPDF = () => {
  const doc = generatePDF();
  doc.save("รายงานผลการปฏิบัติงาน.pdf");
};

const showPDF = () => {
  const doc = generatePDF();
  const blob = doc.output("blob");
  pdfUrl.value = URL.createObjectURL(blob);
};

const printPDF = () => {
  const doc = generatePDF();
  window.open(doc.output("bloburl"), "_blank");
};
</script>
