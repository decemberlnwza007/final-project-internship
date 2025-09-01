import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import "@/assets/fonts/Sarabun-Regular-normal.js"; 

pdfMake.vfs = {
  ...pdfFonts.pdfMake.vfs,
  ...pdfMake.vfs
};

pdfMake.fonts = {
  THSarabunNew: {
    normal: "Sarabun-Regular-normal.ttf",
  }
};
