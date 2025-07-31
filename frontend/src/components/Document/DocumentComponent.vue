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
                        <input type="text" placeholder="กรอกชื่อจริง (อังกฤษ)" class="input-style" />
                    </div>

                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">นามสกุล (ภาษาอังกฤษ)</label>
                        <input type="text" placeholder="กรอกนามสกุล (อังกฤษ)" class="input-style" />
                    </div>

                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">สาขาวิชา</label>
                        <input type="text" placeholder="กรอกสาขาวิชา" class="input-style" />
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
                        <input type="text" placeholder="กรอกเกรดเฉลี่ยรวม" class="input-style" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">บัตรประจำตัวประชาชนเลขที่</label>
                        <input type="text" placeholder="กรอกเลขบัตรประจำตัวประชาชน" class="input-style" />
                    </div>

                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ออกให้ ณ</label>
                        <input type="text" placeholder="กรอก" class="input-style" />
                    </div>

                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">วันที่ออกบัตร</label>
                        <input type="text" placeholder="กรอกวันที่ออกบัตร" class="input-style" />
                    </div>

                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">เมื่อวันที่หมดอายุ</label>
                        <input type="text" placeholder="กรอกวันที่หมดอายุ" class="input-style" />
                    </div>
                </div>

                <div class="layout-1">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">เชื้อชาติ</label>
                        <input type="text" placeholder="กรอกเชื้อชาติ" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">สัญชาติ</label>
                        <input type="text" placeholder="กรอกสัญชาติ" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ศาสนา</label>
                        <input type="text" placeholder="กรอกศาสนา" class="input-style" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">โรคประจำตัว</label>
                        <input type="text" placeholder="กรอกโรคประจำตัว" class="input-style" />
                    </div>

                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ยารักษาที่ใช้เป็นประจำ</label>
                        <input type="text" placeholder="กรอกยารักษาที่ใช้เป็นประจำ" class="input-style" />
                    </div>
                </div>

                <h2
                    class="text-3xl font-bold mt-10 text-center mb-6 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent">
                    ที่อยู่ปัจจุบัน
                </h2>

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
                    class="text-3xl font-bold mt-10 text-center mb-6 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent">
                    ข้อมูลครอบครัว
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ชื่อบิดา</label>
                        <input type="text" placeholder="กรอกชื่อบิดา" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">อายุบิดา</label>
                        <input type="text" placeholder="กรอกอายุบิดา" class="input-style" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">อาชีพบิดา</label>
                        <input type="text" placeholder="กรอกอาชีพบิดา" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">โทรศัพท์</label>
                        <input type="text" placeholder="กรอกเบอร์โทรศัพท์" class="input-style" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-1 gap-8 mt-6">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ที่อยู่บิดา</label>
                        <input type="text" placeholder="กรอกที่อยู่บิดา" class="input-style" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ชื่อมารดา</label>
                        <input type="text" placeholder="กรอกชื่อมารดา" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">อายุมารดา</label>
                        <input type="text" placeholder="กรอกอายุมารดา" class="input-style" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">อาชีพมารดา</label>
                        <input type="text" placeholder="กรอกอาชีพมารดา" class="input-style" />
                    </div>
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">โทรศัพท์</label>
                        <input type="text" placeholder="กรอกเบอร์โทรศัพท์" class="input-style" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-1 gap-8 mt-6">
                    <div>
                        <label class="block text-lg font-semibold text-gray-800 mb-2">ที่อยู่มารดา</label>
                        <input type="text" placeholder="กรอกที่อยู่มารดา" class="input-style" />
                    </div>
                </div>

                <h2
                    class="text-3xl font-bold mt-10 text-center mb-6 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent">
                    ประวัติการศึกษา
                </h2>

                <div class="overflow-x-auto rounded-2xl shadow-lg bg-white mt-6">
                    <table class="min-w-full text-sm text-left text-gray-600">
                        <thead
                            class="bg-gradient-to-br from-red-600 to-red-800 text-white uppercase text-xs tracking-wider">
                            <tr>
                                <th class="px-6 py-4">ระดับ</th>
                                <th class="px-6 py-4">สถานศึกษา</th>
                                <th class="px-6 py-4">ปีที่เริ่ม</th>
                                <th class="px-6 py-4">ปีที่จบ</th>
                                <th class="px-6 py-4">วุฒิการศึกษา</th>
                                <th class="px-6 py-4">วิชาเอก</th>
                                <th class="px-6 py-4">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(edu, index) in educationList" :key="index"
                                class="border-b hover:bg-gray-50 transition">
                                <td class="px-6 py-4">
                                    <select v-model="edu.level"
                                        class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm">
                                        <option v-for="(i, idx) in levelValue" :key="i.id" :value="i.id">
                                            {{ i.name }}
                                        </option>
                                    </select>
                                </td>
                                <td class="px-6 py-4">
                                    <input v-model="edu.school" type="text" placeholder="กรอกชื่อสถานศึกษา"
                                        class="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm">
                                </td>
                                <td class="px-6 py-4">
                                    <input v-model="edu.startYear" type="text" placeholder="กรอกปีที่เริ่ม"
                                        class="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm">
                                </td>
                                <td class="px-6 py-4">
                                    <input v-model="edu.endYear" type="text" placeholder="กรอกปีที่จบ"
                                        class="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm">
                                </td>
                                <td class="px-6 py-4">
                                    <input v-model="edu.degree" type="text" placeholder="กรอกวุฒิการศึกษา"
                                        class="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm">
                                </td>
                                <td class="px-6 py-4">
                                    <input v-model="edu.major" type="text" placeholder="กรอกวิชาเอก"
                                        class="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm">
                                </td>
                                <td class="px-6 py-4 flex gap-2">
                                    <button @click="addRow"
                                        class="px-3 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600"><plus-icon /></button>
                                    <button @click="removeRow(index)"
                                        class="px-3 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
                                        v-if="educationList.length > 1"><trash-icon /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>



                <h2
                    class="text-3xl font-bold mt-10 text-center mb-6 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent">
                    ความสามารถด้านภาษา
                </h2>

                <div v-for="(lang, index) in languages" :key="index" class="mb-6">
                    <h3 class="text-xl font-semibold text-red-800 mb-3">{{ lang.name }}</h3>
                    <div class="grid grid-cols-3 gap-4">
                        <label v-for="(skill, idx) in skills" :key="idx"
                            class="flex items-center space-x-3 cursor-pointer group">
                            <div class="relative">
                                <input type="checkbox" :value="skill" v-model="lang.selectedSkills"
                                    class="sr-only peer" />
                                <div
                                    class="w-5 h-5 rounded-md border-2 border-red-700 peer-checked:bg-red-700 transition-all duration-200">
                                </div>
                                <svg class="absolute top-0 left-0 w-5 h-5 text-white scale-0 peer-checked:scale-100 transition-transform duration-200"
                                    fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span class="text-gray-700 group-hover:text-red-700 transition-colors">{{ skill }}</span>
                        </label>
                    </div>
                </div>

                <h2
                    class="text-3xl font-bold mt-10 text-center mb-6 bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent">
                    ชื่อสถานประกอบการและตำแหน่งนักเรียน นักศึกษาต้องการปฏิบัติงานระบบทวิภาคี
                </h2>

                <div class="overflow-x-auto rounded-2xl shadow-lg bg-white mt-6">
                    <table class="min-w-full text-sm text-left text-gray-600">
                        <thead
                            class="bg-gradient-to-br from-red-600 to-red-800 text-white uppercase text-xs tracking-wider">
                            <tr>
                                <th class="px-6 py-4">ชื่อ</th>
                                <th class="px-6 py-4">ตำแหน่ง</th>
                                <th class="px-6 py-4">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                class="border-b hover:bg-gray-50 transition">
                                <td class="px-6 py-4">
                                    <input  type="text" placeholder="กรอกชื่อ"
                                        class="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm">
                                </td>
                                <td class="px-6 py-4">
                                    <input  type="text" placeholder="กรอกตำแหน่ง"
                                        class="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm">
                                </td>
                                <td class="px-6 py-4 flex gap-2">
                                    <button
                                        class="px-3 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600">
                                        <plus-icon />
                                    </button>
                                    <button 
                                        class="px-3 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
                                        >
                                        <trash-icon />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

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
                                    Upload รูปนักศึกษาระหว่างปฏิบัติงาน
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

<script setup>
import { ref, onMounted, watch, reactive } from 'vue';
import { PlusIcon, TrashIcon } from 'lucide-vue-next';

const name = ref('');
const firstname = ref('');
const lastname = ref('');
const studentId = ref('');

const level = ref('');

const currentYearEn = new Date().getFullYear();

const currentYearTH = currentYearEn + 543;

const levelValue = [
    {
        id: 1,
        name: 'ประถม'
    },
    {
        id: 2,
        name: 'มัธยมต้น'
    },
    {
        id: 3,
        name: 'มัธยมปลาย'
    },
    {
        id: 4,
        name: 'อนุปริญญา'
    },
    {
        id: 4,
        name: 'ปริญญา'
    }
]

const educationList = ref([
    {
        level: '',
        school: '',
        startYear: '',
        endYear: '',
        degree: '',
        major: ''
    }
])

const addRow = () => {
    educationList.value.push({
        level: '',
        school: '',
        startYear: '',
        endYear: '',
        degree: '',
        major: ''
    })
}

const removeRow = (index) => {
    educationList.value.splice(index, 1)
}

const skills = ['อ่าน', 'เขียน', 'พูด'];

const languages = reactive([
    { name: 'ภาษาไทย', selectedSkills: [] },
    { name: 'ภาษาอังกฤษ', selectedSkills: [] },
])

// onMounted(() => {
//     const saved = localStorage.getItem('name');
//     if(saved) {
//         name.value = saved;
//     }
// });

// watch(name, (newVal) => {
//     localStorage.setItem('name', newVal);
// });

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
