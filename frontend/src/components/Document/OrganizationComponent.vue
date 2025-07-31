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
                        <input v-model="name" type="text" placeholder="กรอกชื่อ" class="input-style" />
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

                <div class="grid grid-cols-1 md:grid-cols-1 gap-8 mt-6 mb-12">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">สถานที่ใกล้เคียง</label>
                        <input type="text" placeholder="กรอกสถานที่ใกล้เคียง" class="input-style" />
                    </div>
                </div>

                <h1 class="text-3xl font-bold text-gray-800 text-center mb-8">
                    Upload รูปแผนที่ ที่ทำงานของนักศึกษา
                </h1>

                <div class="bg-white rounded-2xl shadow-xl p-8">
                    <div
                        class="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-red-400 hover:bg-red-50 min-h-96">
                        <input type="file" accept="image/*" class="hidden" multiple />

                        <div class="space-y-6">
                            <div
                                class="mx-auto w-24 h-24 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center">
                                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>

                            <div class="space-y-2">
                                <h3 class="text-xl font-semibold text-gray-700">
                                    Image
                                </h3>
                            </div>

                            <button
                                class="bg-gradient-to-br from-red-600 to-red-800 text-white px-8 py-3 rounded-lg font-medium hover:from-red-600 cursor-pointer hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                เลือกรูปภาพ
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script setup></script>

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
