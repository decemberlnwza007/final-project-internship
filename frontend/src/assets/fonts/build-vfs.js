import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fontPath = path.resolve(__dirname, "Sarabun-Regular.ttf");
const fontData = fs.readFileSync(fontPath).toString("base64");

const outPath = path.resolve(__dirname, "Sarabun-Regular.js");
fs.writeFileSync(
  outPath,
  `export default "${fontData}";`
);

console.log("✅ แปลงฟอนต์เสร็จแล้ว -> สร้างไฟล์ Sarabun-Regular.js");
