<template>
    <div class="min-h-screen bg-gradient-to-b from-white via-red-50 to-white p-6">
        <div class="max-w-12xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-red-200 p-10
        overflow-hidden relative">
            <div class="max-h-[85vh] overflow-y-auto pr-6 scroll-style pb-6">
                <h1
                    class="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent drop-shadow">
                    แบบแจ้งรายละเอียดที่พัก
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
                        <label class="block text-lg font-semibold text-gray-800 mb-2">สาขาวิชา</label>
                        <input type="text" placeholder="กรอกสาขาวิชา" class="input-style" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ชื่อสถานประกอบการ (ชื่อไทย หรือ
                            อังกฤษ)</label>
                        <input type="text" placeholder="ชื่อสถานประกอบการ" class="input-style" />
                    </div>
                </div>

                <h1
                    class="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent drop-shadow">
                    รายละเอียดเกี่่ยวกับที่พักระหว่างปฏิบัติงานระบบทวิภาคี
                </h1>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">เลขที่</label>
                        <input v-model="lastname" type="text" placeholder="กรอกเลขที่" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ถนน</label>
                        <input v-model="lastname" type="text" placeholder="กรอกถนน" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ซอย</label>
                        <input v-model="lastname" type="text" placeholder="กรอกซอย" class="input-style" />
                    </div>

                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ตำบล</label>
                        <input v-model="lastname" type="text" placeholder="กรอกตำบล" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">อำเภอ</label>
                        <input v-model="lastname" type="text" placeholder="กรอกอำเภอ" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">จังหวัด</label>
                        <input v-model="lastname" type="text" placeholder="กรอกจังหวัด" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">รหัสไปรษณีย์</label>
                        <input v-model="lastname" type="text" placeholder="กรอกรหัสไปรษณีย์" class="input-style" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6 mb-12">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">โทรศัพท์</label>
                        <input type="text" placeholder="กรอกเบอร์โทรศัพท์" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">โทรศัพท์เคลื่อนที่</label>
                        <input type="text" placeholder="กรอกเบอร์โทรศัพท์เคลื่อนที่" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">โทรสาร</label>
                        <input type="text" placeholder="กรอกโทรสาร" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">E-Mail</label>
                        <input type="text" placeholder="กรอกอีเมล" class="input-style" />
                    </div>
                </div>

                <h1
                    class="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent drop-shadow">
                    ชื่อที่อยู่ผู้ที่สามารถติดต่อได้ในกรณีฉุกเฉิน
                </h1>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">เลขที่</label>
                        <input v-model="lastname" type="text" placeholder="กรอกเลขที่" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ถนน</label>
                        <input v-model="lastname" type="text" placeholder="กรอกถนน" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ซอย</label>
                        <input v-model="lastname" type="text" placeholder="กรอกซอย" class="input-style" />
                    </div>

                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ตำบล</label>
                        <input v-model="lastname" type="text" placeholder="กรอกตำบล" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">อำเภอ</label>
                        <input v-model="lastname" type="text" placeholder="กรอกอำเภอ" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">จังหวัด</label>
                        <input v-model="lastname" type="text" placeholder="กรอกจังหวัด" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">รหัสไปรษณีย์</label>
                        <input v-model="lastname" type="text" placeholder="กรอกรหัสไปรษณีย์" class="input-style" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6 mb-12">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">โทรศัพท์</label>
                        <input type="text" placeholder="กรอกเบอร์โทรศัพท์" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">โทรศัพท์เคลื่อนที่</label>
                        <input type="text" placeholder="กรอกเบอร์โทรศัพท์เคลื่อนที่" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">โทรสาร</label>
                        <input type="text" placeholder="กรอกโทรสาร" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">E-Mail</label>
                        <input type="text" placeholder="กรอกอีเมล" class="input-style" />
                    </div>
                </div>

                <h1
                    class="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent drop-shadow">
                    แผนที่แสดงตำแหน่งสถานประกอบการ
                </h1>

                <div class="flex gap-2 mb-3">
                    <input id="searchBox" type="text" placeholder="ค้นหาสถานประกอบการ" class="input-style"
                        @keyup.enter="handleSearch" />
                    <button @click="handleSearch"
                        class="px-6 py-3 bg-red-600 text-white cursor-pointer font-semibold rounded-2xl hover:bg-red-700 active:scale-95 transition">
                        ค้นหา
                    </button>
                </div>

                <div id="map" class="w-full h-[500px] rounded-2xl shadow-lg mb-6"></div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6 mb-12">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">สถานที่ใกล้เคียง</label>
                        <input type="text" placeholder="กรอกสถานที่ใกล้เคียง" class="input-style" />
                    </div>
                    
                </div>
                <a :href="markerPos ? `https://www.google.com/maps/dir/?api=1&destination=${markerPos.lat},${markerPos.lng}` : '#'"
                    target="_blank"
                    class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-green-500 hover:to-green-700 transition-all duration-300 ease-in-out">
                    <Map class="w-6 h-6" />
                    <span>เส้นทาง</span>
                </a>

                <!-- <div>
                    <h2 class="text-lg font-bold mb-2">พิกัดที่เลือก</h2>
                    <p v-if="markerPos">
                        Lat: {{ markerPos.lat }}, Lng: {{ markerPos.lng }}
                    </p>
                    <p v-else class="text-gray-500">ยังไม่ได้เลือกตำแหน่ง</p>
                </div> -->

                

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import L from "leaflet";
import "leaflet-control-geocoder";

import { Map } from "lucide-vue-next";

let map;
let activeMarker = null;

const firstname = ref("");
const lastname = ref("");
const markerPos = ref(null);

const geocoder = L.Control.Geocoder.nominatim({
    geocodingQueryParams: {
        countrycodes: 'th'
    }
});

const handleSearch = () => {
    const searchBox = document.getElementById("searchBox");
    if (!searchBox.value) return;

    geocoder.geocode(searchBox.value, (results) => {
        if (results.length > 0) {
            const pos = results[0].center;
            markerPos.value = { lat: pos.lat, lng: pos.lng };

            if (activeMarker) map.removeLayer(activeMarker);
            activeMarker = L.marker(pos).addTo(map);
            map.setView(pos, 16);

            localStorage.setItem("leafletMarker", JSON.stringify(markerPos.value));
        }
    });
};

onMounted(() => {
    firstname.value = localStorage.getItem("firstname");
    lastname.value = localStorage.getItem("lastname");

    map = L.map("map").setView([13.7563, 100.5018], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const saved = localStorage.getItem("leafletMarker");
    if (saved) {
        markerPos.value = JSON.parse(saved);
        activeMarker = L.marker([markerPos.value.lat, markerPos.value.lng]).addTo(
            map
        );
        map.setView([markerPos.value.lat, markerPos.value.lng], 16);
    }

    map.on("click", (e) => {
        const pos = { lat: e.latlng.lat, lng: e.latlng.lng };
        markerPos.value = pos;

        if (activeMarker) {
            map.removeLayer(activeMarker);
        }

        activeMarker = L.marker([pos.lat, pos.lng]).addTo(map);

        localStorage.setItem("leafletMarker", JSON.stringify(pos));
    });
});
</script>

<style scoped>
#map {
    width: 100%;
    height: 500px;
}

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

.leaflet-control-geocoder {
    width: 300px;
    max-width: 80%;
}

.leaflet-control-geocoder-form input {
    height: 40px;
    font-size: 16px;
    padding: 5px 10px;
}
</style>