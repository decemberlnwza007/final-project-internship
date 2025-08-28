<template>
    <div class="min-h-screen bg-gradient-to-b from-white via-red-50 to-white p-6">
        <div class="max-w-12xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-red-200 p-10
        overflow-hidden relative">
            <div class="max-h-[85vh] overflow-y-auto pr-6 scroll-style pb-6">
                <h1
                    class="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent drop-shadow">
                    ข้อมูลนักศึกษา
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
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ปีการศึกษา</label>
                        <input type="text" :value="currentYearTH" readonly
                            class="input-style bg-gray-100 cursor-not-allowed w-12/12" />
                    </div>
                </div>

                <h2
                    class="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent">
                    ใบสมัครงานระบบทวิภาคี
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ชื่อสถานศึกษา</label>
                        <input type="text" value="วิทยาลัยเทคนิคสมุทรสาคร" readonly
                            class="input-style bg-gray-100 cursor-not-allowed" />
                    </div>

                    <div>
                        <label
                            class="block text-lg font-semibold text-gray-800 mb-2">ชื่อสถานประกอบการที่ต้องการสมัคร</label>
                        <input type="text" placeholder="กรอกชื่อสถานประกอบการ" class="input-style" />
                    </div>

                    <div class="md:col-span-2">
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ระยะเวลาปฏิบัติงาน</label>
                        <input type="text" placeholder="เช่น 1 ม.ค. 2568 - 8 มี.ค. 2569" class="input-style" />
                    </div>
                </div>

                <h2
                    class="text-3xl font-bold text-center bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent">
                    ข้อมูลส่วนตัวนักเรียน นักศึกษา
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-6">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ชื่อจริง</label>
                        <input v-model="firstname" type="text" placeholder="กรอกชื่อ" class="input-style" />
                    </div>

                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">นามสกุล</label>
                        <input v-model="lastname" type="text" placeholder="กรอกนามสกุล" class="input-style" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ชื่อจริง (ภาษาอังกฤษ)</label>
                        <input type="text" placeholder="กรอกชื่อจริง (อังกฤษ)" v-model="firstnameEn" class="input-style" />
                    </div>

                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">นามสกุล (ภาษาอังกฤษ)</label>
                        <input type="text" placeholder="กรอกนามสกุล (อังกฤษ)" v-model="lastnameEn" class="input-style" />
                    </div>

                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">สาขาวิชา</label>
                        <input type="text" placeholder="กรอกสาขาวิชา" v-model="department" class="input-style" />
                    </div>

                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ภาควิชา</label>
                        <input type="text" placeholder="กรอกภาควิชา" class="input-style" />
                    </div>

                </div>

                <div class="layout-1">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ชั้นปีที่</label>
                        <input type="text" placeholder="กรอกชั้นปี" class="input-style" />
                    </div>

                    <div>
                        <label
                            class="block text-lg font-semibold text-gray-800 mb-2">เกรดเฉลี่ยของภาคการศึกษาที่ผ่านมา</label>
                        <input type="text" placeholder="กรอกเกรดเฉลี่ยของภาคการศึกษาที่ผ่านมา" class="input-style" />
                    </div>

                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">เกรดเฉลี่ยรวม</label>
                        <input type="text" placeholder="กรอกเกรดเฉลี่ยรวม" v-model="cumulative_gpa" class="input-style" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">บัตรประจำตัวประชาชนเลขที่</label>
                        <input type="text" placeholder="กรอกเลขบัตรประจำตัวประชาชน" v-model="citizenId" class="input-style" />
                    </div>

                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ออกให้ ณ</label>
                        <input type="text" placeholder="กรอก" v-model="idcard_issued_at" class="input-style" />
                    </div>

                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">วันที่ออกบัตร</label>
                        <input type="text" placeholder="กรอกวันที่ออกบัตร" v-model="idcard_issued_date" class="input-style" />
                    </div>

                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">เมื่อวันที่หมดอายุ</label>
                        <input type="text" placeholder="กรอกวันที่หมดอายุ" v-model="idcardExpiryDate" class="input-style" />
                    </div>
                </div>

                <div class="layout-1">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">เชื้อชาติ</label>
                        <input type="text" placeholder="กรอกเชื้อชาติ" v-model="ethnicity" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">สัญชาติ</label>
                        <input type="text" placeholder="กรอกสัญชาติ" v-model="nationality" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ศาสนา</label>
                        <input type="text" placeholder="กรอกศาสนา" v-model="religion" class="input-style" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">โรคประจำตัว</label>
                        <input type="text" placeholder="กรอกโรคประจำตัว" v-model="congenitalDisease" class="input-style" />
                    </div>

                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ยารักษาที่ใช้เป็นประจำ</label>
                        <input type="text" placeholder="กรอกยารักษาที่ใช้เป็นประจำ" v-model="regularMedication" class="input-style" />
                    </div>
                </div>

                <h2
                    class="text-3xl font-bold mt-10 text-center mb-6 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent">
                    ที่อยู่ปัจจุบัน
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">โทรศัพท์</label>
                        <input type="text" placeholder="กรอกเบอร์โทรศัพท์"  class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">โทรศัพท์เคลื่อนที่</label>
                        <input type="text" placeholder="กรอกเบอร์โทรศัพท์เคลื่อนที่" v-model="phone" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">โทรสาร</label>
                        <input type="text" placeholder="กรอกโทรสาร" v-model="fax" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">E-Mail</label>
                        <input type="text" placeholder="กรอกอีเมล" v-model="email" class="input-style" />
                    </div>
                </div>

                <h2
                    class="text-3xl font-bold mt-10 text-center mb-6 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent">
                    บุคคลที่สามารถติดต่อได้ในกรณีฉุกเฉิน
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ชื่อ-นามสกุล</label>
                        <input type="text" placeholder="กรอกชื่อนามสกุลบุคคลที่สามารถติดต่อได้ในกรณีฉุกเฉิน"
                            class="input-style" />
                    </div>

                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ความเกี่ยวข้องกับนักศึกษา</label>
                        <input type="text" placeholder="กรอกความเกี่ยวข้องกับนักศึกษา" class="input-style" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-1 gap-8 mt-6">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ที่อยู่</label>
                        <input type="text" placeholder="กรอกที่อยู่บุคคลที่สามารถติดต่อ" class="input-style" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
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

                <h2
                    class="text-2xl sm:text-3xl font-bold mt-10 text-center mb-6 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent">
                    ข้อมูลครอบครัว
                </h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-6">
                    <div>
                        <label class="block text-base sm:text-lg font-semibold text-gray-800 mb-2">
                            ชื่อบิดา
                        </label>
                        <input type="text" placeholder="กรอกชื่อบิดา" v-model="fatherName" class="input-style w-full" />
                    </div>
                    <div>
                        <label class="block text-base sm:text-lg font-semibold text-gray-800 mb-2">
                            อายุบิดา
                        </label>
                        <input type="text" placeholder="กรอกอายุบิดา" v-model="fatherAge" class="input-style w-full" />
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-6">
                    <div>
                        <label class="block text-base sm:text-lg font-semibold text-gray-800 mb-2">
                            อาชีพบิดา
                        </label>
                        <input type="text" placeholder="กรอกอาชีพบิดา" v-model="fatherJob" class="input-style w-full" />
                    </div>
                    <div>
                        <label class="block text-base sm:text-lg font-semibold text-gray-800 mb-2">
                            โทรศัพท์
                        </label>
                        <input type="text" placeholder="กรอกเบอร์โทรศัพท์" v-model="fatherPhone" class="input-style w-full" />
                    </div>
                </div>

                <div class="mt-6">
                    <label class="block text-base sm:text-lg font-semibold text-gray-800 mb-2">
                        ที่อยู่บิดา
                    </label>
                    <input type="text" placeholder="กรอกที่อยู่บิดา" v-model="fatherAddress" class="input-style w-full" />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-6">
                    <div>
                        <label class="block text-base sm:text-lg font-semibold text-gray-800 mb-2">
                            ชื่อมารดา
                        </label>
                        <input type="text" placeholder="กรอกชื่อมารดา" v-model="motherName" class="input-style w-full" />
                    </div>
                    <div>
                        <label class="block text-base sm:text-lg font-semibold text-gray-800 mb-2">
                            อายุมารดา
                        </label>
                        <input type="text" placeholder="กรอกอายุมารดา" v-model="motherAge" class="input-style w-full" />
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-6">
                    <div>
                        <label class="block text-base sm:text-lg font-semibold text-gray-800 mb-2">
                            อาชีพมารดา
                        </label>
                        <input type="text" placeholder="กรอกอาชีพมารดา" v-model="motherJob" class="input-style w-full" />
                    </div>
                    <div>
                        <label class="block text-base sm:text-lg font-semibold text-gray-800 mb-2">
                            โทรศัพท์
                        </label>
                        <input type="text" placeholder="กรอกเบอร์โทรศัพท์" v-model="motherPhone" class="input-style w-full" />
                    </div>
                </div>

                <div class="mt-6">
                    <label class="block text-base sm:text-lg font-semibold text-gray-800 mb-2">
                        ที่อยู่มารดา
                    </label>
                    <input type="text" placeholder="กรอกที่อยู่มารดา" v-model="motherAddress" class="input-style w-full" />
                </div>


                <h2
                    class="text-3xl font-bold mt-10 text-center mb-6 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent">
                    ประวัติการศึกษา
                </h2>

                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div class="text-sm text-gray-600">
                        <!-- <kbd class="px-1 py-0.5 border rounded">|</kbd> -->
                    </div>
                    <div class="flex gap-2">
                        <button @click="addRow()"
                            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer bg-gradient-to-br from-red-600 to-red-800 text-white shadow hover:opacity-90">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v16m8-8H4" />
                            </svg>
                            เพิ่มแถว
                        </button>
                        <button v-if="educationList.length > 1" @click="clearAll()"
                            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer bg-gray-100 text-gray-700 hover:bg-gray-200">
                            เคลียร์ทั้งหมด
                        </button>
                    </div>
                </div>

                <div class="overflow-x-auto rounded-2xl shadow-lg bg-white mt-4">
                    <table class="min-w-full text-xs sm:text-sm text-left text-gray-700">
                        <thead
                            class="sticky top-0 z-10 bg-gradient-to-br from-red-600 to-red-800 text-white uppercase tracking-wider">
                            <tr>
                                <th class="px-3 sm:px-4 py-2 sm:py-3 w-12">#</th>
                                <th class="px-3 sm:px-4 py-2 sm:py-3">ระดับ</th>
                                <th class="px-3 sm:px-4 py-2 sm:py-3">สถานศึกษา</th>
                                <th class="px-3 sm:px-4 py-2 sm:py-3">ปีที่เริ่ม</th>
                                <th class="px-3 sm:px-4 py-2 sm:py-3">ปีที่จบ</th>
                                <th class="px-3 sm:px-4 py-2 sm:py-3">วุฒิ</th>
                                <th class="px-3 sm:px-4 py-2 sm:py-3">วิชาเอก</th>
                                <th class="px-3 sm:px-4 py-2 sm:py-3 text-center">จัดการ</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="(edu, index) in educationList" :key="edu.id"
                                class="border-b hover:bg-red-50/40 transition">
                                <td class="px-3 sm:px-4 py-2 sm:py-3 text-gray-500">{{ index + 1 }}</td>

                                <td class="px-3 sm:px-4 py-2 sm:py-3 min-w-[140px] sm:min-w-[160px]">
                                    <select v-model="edu.level"
                                        class="w-full rounded-xl border-gray-300 px-2 py-1.5 sm:px-3 sm:py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                                        <option v-for="opt in levelOptions" :key="opt.id" :value="opt.id">
                                            {{ opt.name }}
                                        </option>
                                    </select>
                                </td>

                                <td class="px-3 sm:px-4 py-2 sm:py-3 min-w-[200px] sm:min-w-[220px]">
                                    <input v-model.trim="edu.school" type="text" placeholder="เช่น โรงเรียน/มหาวิทยาลัย"
                                        class="w-full rounded-xl border border-gray-300 px-2 py-1.5 sm:px-3 sm:py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
                                </td>

                                <td class="px-3 sm:px-4 py-2 sm:py-3 min-w-[110px] sm:min-w-[130px]">
                                    <select v-model="edu.startYear"
                                        class="w-full rounded-xl border-gray-300 px-2 py-1.5 sm:px-3 sm:py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                                        <option :value="''" disabled>เลือกปี</option>
                                        <option v-for="y in yearOptions" :key="'s' + y" :value="String(y)">
                                            {{ y }}
                                        </option>
                                    </select>
                                </td>

                                <td class="px-3 sm:px-4 py-2 sm:py-3 min-w-[110px] sm:min-w-[130px]">
                                    <select v-model="edu.endYear"
                                        class="w-full rounded-xl border-gray-300 px-2 py-1.5 sm:px-3 sm:py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                                        <option :value="''">ยังเรียนอยู่</option>
                                        <option v-for="y in yearOptions" :key="'e' + y" :value="String(y)">
                                            {{ y }}
                                        </option>
                                    </select>
                                </td>

                                <td class="px-3 sm:px-4 py-2 sm:py-3 min-w-[140px] sm:min-w-[160px]">
                                    <input v-model.trim="edu.degree" type="text" placeholder="เช่น ม.6, ปวช., ป.ตรี"
                                        class="w-full rounded-xl border border-gray-300 px-2 py-1.5 sm:px-3 sm:py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
                                </td>

                                <td class="px-3 sm:px-4 py-2 sm:py-3 min-w-[140px] sm:min-w-[160px]">
                                    <input v-model.trim="edu.major" type="text" placeholder="เช่น วิทยาการคอมพิวเตอร์"
                                        class="w-full rounded-xl border border-gray-300 px-2 py-1.5 sm:px-3 sm:py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
                                </td>

                                <td class="px-3 sm:px-4 py-2 sm:py-3 min-w-[150px]">
                                    <div class="flex flex-col sm:flex-row items-center justify-center gap-2">
                                        <button @click="moveRow(index, -1)" :disabled="index === 0" class="icon-btn"
                                            :class="{ 'opacity-40 cursor-not-allowed': index === 0 }" title="ย้ายขึ้น">
                                            <arrow-up class="hover:text-blue-500 cursor-pointer" />
                                        </button>
                                        <button @click="moveRow(index, +1)"
                                            :disabled="index === educationList.length - 1" class="icon-btn"
                                            :class="{ 'opacity-40 cursor-not-allowed': index === educationList.length - 1 }"
                                            title="ย้ายลง">
                                            <arrow-down class="hover:text-blue-500 cursor-pointer" />
                                        </button>
                                        <button @click="duplicateRow(index)" class="icon-btn" title="คัดลอกแถว">
                                            <copy class="hover:text-green-500 cursor-pointer" />
                                        </button>
                                        <button @click="removeRow(index)" v-if="educationList.length > 1"
                                            class="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 cursor-pointer rounded-full bg-white/80 backdrop-blur-md text-red-600 border border-red-200 shadow hover:bg-red-600 hover:text-white transition"
                                            title="ลบแถวนี้">
                                            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span class="hidden sm:inline">ลบ</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <!-- <button @click="addRow()"
                    class="sm:hidden fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white shadow-xl grid place-items-center">
                    +
                </button> -->



                <h2
                    class="text-2xl sm:text-3xl font-bold mt-10 text-center mb-6 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent">
                    ความสามารถด้านภาษา
                </h2>

                <div v-for="(lang, index) in languages" :key="index"
                    class="mb-6 p-4 sm:p-0 border sm:border-0 rounded-xl sm:rounded-none">
                    <h3 class="text-lg sm:text-xl font-semibold text-red-800 mb-3">
                        {{ lang.name }}
                    </h3>

                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                        <label v-for="(skill, idx) in skills" :key="idx"
                            class="flex items-center space-x-3 cursor-pointer group">
                            <div class="relative">
                                <input type="checkbox" :value="skill" v-model="lang.selectedSkills"
                                    class="sr-only peer" />
                                <div
                                    class="w-5 h-5 sm:w-6 sm:h-6 rounded-md border-2 border-red-700 peer-checked:bg-red-700 transition-all duration-200">
                                </div>
                                <svg class="absolute top-0 left-0 w-5 h-5 sm:w-6 sm:h-6 text-white scale-0 peer-checked:scale-100 transition-transform duration-200"
                                    fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span class="text-sm sm:text-base text-gray-700 group-hover:text-red-700 transition-colors">
                                {{ skill }}
                            </span>
                        </label>
                    </div>
                </div>


                <h2
                    class="text-2xl sm:text-3xl font-bold mt-10 text-center mb-6 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent">
                    ชื่อสถานประกอบการและตำแหน่งนักเรียน นักศึกษาต้องการปฏิบัติงานระบบทวิภาคี
                </h2>

                <div class="overflow-x-auto rounded-2xl shadow-lg bg-white mt-6">
                    <table class="min-w-full text-sm text-left text-gray-600">
                        <thead
                            class="bg-gradient-to-br from-red-600 to-red-800 text-white uppercase text-xs tracking-wider">
                            <tr>
                                <th class="px-4 sm:px-6 py-3 sm:py-4">ชื่อ</th>
                                <th class="px-4 sm:px-6 py-3 sm:py-4">ตำแหน่ง</th>
                                <th class="px-4 sm:px-6 py-3 sm:py-4">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b hover:bg-gray-50 transition">
                                <td class="px-4 sm:px-6 py-3 sm:py-4">
                                    <input type="text" placeholder="กรอกชื่อ"
                                        class="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm" />
                                </td>
                                <td class="px-4 sm:px-6 py-3 sm:py-4">
                                    <input type="text" placeholder="กรอกตำแหน่ง"
                                        class="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm" />
                                </td>
                                <td class="px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row gap-2">
                                    <button
                                        class="flex-1 sm:flex-none px-3 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600">
                                        <plus-icon />
                                    </button>
                                    <button
                                        class="flex-1 sm:flex-none px-3 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600">
                                        <trash-icon />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div class="bg-white rounded-2xl shadow-xl p-4 sm:p-8 mt-4">
                    <div class="relative border-2 border-dashed border-gray-300 rounded-xl p-6 sm:p-8 text-center cursor-pointer transition-all duration-300 hover:border-red-400 hover:bg-red-50 min-h-[300px] sm:min-h-96"
                        @click="$refs.fileInput.click()">
                        <input ref="fileInput" type="file" accept="image/*" class="hidden" multiple
                            @change="handleFileUpload" />

                        <div v-if="!images.length" class="space-y-6">
                            <div
                                class="mx-auto w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center">
                                <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>

                            <div class="space-y-2">
                                <h3 class="text-lg sm:text-xl font-semibold text-gray-700">
                                    Upload รูปนักศึกษาระหว่างปฏิบัติงาน
                                </h3>
                            </div>

                            <button
                                class="bg-gradient-to-br from-red-600 cursor-pointer to-red-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                                เลือกรูปภาพ
                            </button>
                        </div>

                        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            <div v-for="(img, index) in images" :key="index" class="relative group w-full">
                                <img :src="img"
                                    class="rounded-lg shadow-lg w-full h-48 sm:h-60 object-cover transition-transform duration-300 group-hover:scale-105" />
                                <button @click.stop="removeImage(index)"
                                    class="absolute top-2 right-2 bg-white/80 backdrop-blur-md text-red-600 rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-red-600 hover:text-white cursor-pointer transition">
                                    <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <button
            @click="submitStudent"
                class="bg-gradient-to-br w-full from-red-600 cursor-pointer to-red-800 text-white px-8 py-4 rounded-lg font-medium hover:from-red-600 hover:to-red-800 transition-all duration-300 transform shadow-lg">บันทึก</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, reactive, computed } from 'vue';
import { PlusIcon, TrashIcon, ArrowUp, ArrowDown, Copy } from 'lucide-vue-next';

const studentId = ref("");
const firstname = ref("");
const lastname = ref("");
const firstnameEn = ref("");
const lastnameEn = ref("");
const major = ref("");
const department = ref("");
const classYear = ref("");
const lastTermGpa = ref("");
const cumulativeGpa = ref("");
const citizenId = ref("");
const idcardIssuedAt = ref("");
const idcardIssuedDate = ref("");
const idcardExpiryDate = ref("");
const ethnicity = ref("");
const nationality = ref("");
const religion = ref("");
const congenitalDisease = ref("");
const regularMedication = ref("");
const phone = ref("");
const mobile = ref("");
const fax = ref("");
const email = ref("");
const emergencyName = ref("");
const emergencyRelation = ref("");
const emergencyAddress = ref("");
const emergencyPhone = ref("");
const emergencyMobile = ref("");
const emergencyFax = ref("");
const emergencyEmail = ref("");
const fatherName = ref("");
const fatherAge = ref("");
const fatherJob = ref("");
const fatherPhone = ref("");
const fatherAddress = ref("");
const motherName = ref("");
const motherAge = ref("");
const motherJob = ref("");
const motherPhone = ref("");
const motherAddress = ref("");

const currentYearEn = new Date().getFullYear();

const images = ref([]);

const currentYearTH = new Date().getFullYear() + 543;

const levelOptions = [
    { id: 'primary', name: 'ประถมศึกษา' },
    { id: 'lower-sec', name: 'มัธยมศึกษาตอนต้น' },
    { id: 'upper-sec', name: 'มัธยมศึกษาตอนปลาย/ปวช.' },
    { id: 'vocational', name: 'ปวส.' },
    { id: 'bachelor', name: 'ปริญญาตรี' },
    { id: 'master', name: 'ปริญญาโท' },
    { id: 'phd', name: 'ปริญญาเอก' }
]

const currentYear = new Date().getFullYear()
const yearOptions = computed(() => {
    const arr = []
    for (let y = currentYear + 1; y >= currentYear - 40; y--) arr.push(y)
    return arr
})

const newEdu = () => ({
    id: crypto.randomUUID?.() ?? String(Math.random()),
    level: 'upper-sec',
    school: '',
    startYear: '',
    endYear: '',
    degree: '',
    major: ''
})

const educationList = ref([newEdu()])

const addRow = () => {
    educationList.value.push(newEdu())
}

const removeRow = (index) => {
    educationList.value.splice(index, 1)
}

const duplicateRow = (index) => {
    const copy = { ...educationList.value[index], id: crypto.randomUUID?.() ?? String(Math.random()) }
    educationList.value.splice(index + 1, 0, copy)
}

const moveRow = (index, dir) => {
    const target = index + dir
    if (target < 0 || target >= educationList.value.length) return
    const rows = educationList.value
    const [row] = rows.splice(index, 1)
    rows.splice(target, 0, row)
}

const clearAll = () => {
    educationList.value = [newEdu()]
}

const skills = ['อ่าน', 'เขียน', 'พูด'];

const languages = reactive([
    { name: 'ภาษาไทย', selectedSkills: [] },
    { name: 'ภาษาอังกฤษ', selectedSkills: [] },
])

const handleFileUpload = (event) => {
  const files = Array.from(event.target.files);
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      images.value.push(e.target.result);
    }
    reader.readAsDataURL(file);
  })
}


const removeImage = (index) => {
    images.value.splice(index, 1)
}

const submitStudent = async () => {
  try {
    const payload = {
      student_code: studentId.value,
      academic_year_th: currentYearTH,
      firstname_th: firstname.value,
      lastname_th: lastname.value,
      firstname_en: firstnameEn.value || null,
      lastname_en: lastnameEn.value || null,
      major: major.value,
      department: department.value,
      class_year: classYear.value,
      last_term_gpa: lastTermGpa.value,
      cumulative_gpa: cumulativeGpa.value,
      citizen_id: citizenId.value,
      idcard_issued_at: idcardIssuedAt.value || null,

      idcard_issued_date: idcardIssuedDate.value || null,
      idcard_expiry_date: idcardExpiryDate.value || null,

      ethnicity: ethnicity.value,
      nationality: nationality.value,
      religion: religion.value,
      congenital_disease: congenitalDisease.value,
      regular_medication: regularMedication.value,
      phone: phone.value,
      mobile: mobile.value,
      fax: fax.value,
      email: email.value,
      emergency: {
        fullname: emergencyName.value,
        relationship: emergencyRelation.value,
        address: emergencyAddress.value,
        phone: emergencyPhone.value,
        mobile_phone: emergencyMobile.value,
        fax: emergencyFax.value,
        email: emergencyEmail.value
      },
      family: {
        father_name: fatherName.value,
        father_age: fatherAge.value,
        father_job: fatherJob.value,
        father_phone: fatherPhone.value,
        father_address: fatherAddress.value,
        mother_name: motherName.value,
        mother_age: motherAge.value,
        mother_job: motherJob.value,
        mother_phone: motherPhone.value,
        mother_address: motherAddress.value
      },
      school_name: "วิทยาลัยเทคนิคสมุทรสาคร",

      internship_start: "2025-01-01" || null,
      internship_end: "2025-03-01" || null
    };

    const res = await fetch("http://localhost:3001/users/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error("❌ insert ไม่สำเร็จ");
    const data = await res.json();
    alert("✅ บันทึกเรียบร้อยแล้ว!");
    console.log("response:", data);
  } catch (err) {
    console.error("insert error:", err);
  }
};


onMounted(() => {
    firstname.value = localStorage.getItem('firstname') || '';
    lastname.value = localStorage.getItem('lastname') || '';
})

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
