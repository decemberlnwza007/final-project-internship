import * as pdfMake from "pdfmake/build/pdfmake";
import { vfs } from "@/assets/fonts/vfs_fonts"; // ไฟล์ที่ generate มา

pdfMake.vfs = vfs;
pdfMake.fonts = {
  THSarabunNew: {
    normal: "THSarabunNew.ttf",
    bold: "THSarabunNew-Bold.ttf",
    italics: "THSarabunNew-Italic.ttf",
    bolditalics: "THSarabunNew-BoldItalic.ttf",
  }
};
