<template>
  <div class="min-h-screen">
    <div class="lg:hidden fixed top-[max(theme(spacing.4),env(safe-area-inset-top))] left-4 z-50">
      <button @click="toggleMobileMenu"
        class="p-3 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-slate-200/60 transition-all duration-300 hover:shadow-xl active:scale-95"
        aria-label="เปิดเมนู">
        <XIcon v-if="isMobileMenuOpen" class="h-6 w-6 text-slate-700" />
        <MenuIcon v-else class="h-6 w-6 text-slate-700" />
      </button>
    </div>

    <div v-if="isMobileMenuOpen" @click="closeMobileMenu"
      class="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-[2px] z-40 transition-opacity" role="button"
      aria-label="ปิดเมนู" tabindex="0" @keyup.esc="closeMobileMenu" />

    <aside :class="[
      'fixed lg:static inset-y-0 left-0 z-40',
      'w-[82vw] sm:w-72 md:w-80 xl:w-88',
      'flex flex-col h-full', 
      'bg-white/90 backdrop-blur-xl border-r border-slate-200/60',
      'shadow-2xl shadow-slate-200/30 transform transition-transform duration-300 ease-out',
      isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]" aria-label="เมนูหลัก">
      <div
        class="px-4 sm:px-6 py-6 border-b border-slate-200/40 bg-red-700 relative shrink-0 overflow-hidden pt-[max(theme(spacing.6),env(safe-area-inset-top))]">
        <div class="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800" />
        <div class="flex items-center gap-4 relative z-10">
          <div class="p-3 bg-white/20 rounded-2xl backdrop-blur-md border border-white/30 shadow-lg shrink-0">
            <img src="../../assets/logo/skntc_logo.png" class="w-10" alt="โลโก้">
          </div>
          <div class="min-w-0 flex-1">
            <h1 class="text-xl font-bold text-white leading-tight">ระบบทวิภาคี</h1>
            <p class="text-red-100 text-sm mt-1 font-medium truncate">วิทยาลัยเทคนิคสมุทรสาคร</p>
          </div>
        </div>
      </div>

      <nav class="flex-1 px-3 sm:px-4 py-4 sm:py-6 space-y-2 overflow-y-auto scroll-smooth">
        <div v-for="item in menuItems" :key="item.label" @click="handleItemClick(item.label)" :class="[
          'group relative flex items-center px-3 sm:px-4 py-3 sm:py-4 rounded-2xl cursor-pointer',
          'transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-red-200',
          activeItem === item.label
            ? `${item.bg} border-0 shadow-lg translate-x-0 sm:translate-x-1`
            : 'hover:bg-slate-50 hover:shadow-md'
        ]">
          <div v-if="activeItem === item.label"
            class="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 sm:h-12 bg-red-600 rounded-r-full" />
          <div :class="[
            'flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl mr-3 sm:mr-4',
            'transition-all duration-300 shrink-0',
            activeItem === item.label
              ? 'bg-white shadow-lg border border-slate-200'
              : 'bg-slate-100 group-hover:bg-white group-hover:shadow-md'
          ]">
            <component :is="item.icon" :class="[
              'h-5 w-5 transition-all duration-300',
              activeItem === item.label ? item.color : 'text-slate-600 group-hover:text-slate-800'
            ]" />
          </div>

          <span :class="[
            'flex-1 font-semibold text-sm leading-relaxed transition-colors min-w-0 truncate',
            activeItem === item.label ? 'text-slate-800' : 'text-slate-700 group-hover:text-slate-900'
          ]">
            {{ item.label }}
          </span>

          <div v-if="item.badge"
            class="flex items-center justify-center min-w-[26px] h-7 px-2.5 bg-red-600 text-white text-[11px] font-bold rounded-full border border-red-500 ml-2 sm:ml-3 shrink-0">
            {{ item.badge }}
          </div>

          <ChevronRightIcon v-if="activeItem === item.label"
            class="h-4 w-4 text-slate-500 ml-2 sm:ml-3 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
        </div>
      </nav>

      <div class="px-3 sm:px-4 py-3 sm:py-4 border-t border-slate-200/50 bg-slate-50 shrink-0">
        <div
          class="flex items-center gap-4 px-4 py-4 rounded-2xl bg-white border border-slate-200 shadow-lg transition-all duration-300">
          <div
            class="w-11 h-11 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center shadow-md shrink-0">
            <img :src="defaultImage" class="rounded-full">
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-bold text-slate-800 truncate">
              {{ firstname }} {{ lastname }}
            </p>
            <p class="text-xs text-slate-600 mt-1 font-medium">{{ studentId }}</p>
          </div>
        </div>
      </div>

      <div class="px-3 sm:px-4 pb-[max(theme(spacing.4),env(safe-area-inset-bottom))] shrink-0">
        <button @click="Logout"
          class="w-full flex items-center px-4 py-4 text-red-600 cursor-pointer hover:text-red-700 hover:bg-red-200 rounded-2xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-red-200">
          <LogOutIcon class="h-5 w-5 mr-3 sm:mr-4 group-hover:translate-x-1 transition-transform shrink-0" />
          <span class="font-semibold text-sm">ออกจากระบบ</span>
        </button>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import {
  Home as HomeIcon,
  FileText as FileTextIcon,
  Users as UsersIcon,
  Settings as SettingsIcon,
  LogOut as LogOutIcon,
  ChevronRight as ChevronRightIcon,
  Building2 as BuildingIcon,
  Clock as ClockIcon,
  User as UserIcon,
  Menu as MenuIcon,
  X as XIcon
} from 'lucide-vue-next'

const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY4JUP8oxMxK-jSspp2bRgfWB0AFY8F9zGg&s";

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const firstname = ref('')
const lastname = ref('')
const studentId = ref('');

const Logout = () => router.push('/')

const activeItem = ref('')
const isMobileMenuOpen = ref(false)

const menuItems = [
  { label: 'หน้าแรก', icon: HomeIcon, color: 'text-red-600', bg: 'bg-red-50', href: '/home' },
  { label: 'เอกสารฝึกงาน', icon: FileTextIcon, color: 'text-red-600', bg: 'bg-red-50', href: '/document' },
  { label: 'สถานประกอบการ', icon: BuildingIcon, color: 'text-red-600', bg: 'bg-red-50', href: '/organization' },
  { label: 'แบบรายงานผลการปฏิบัติงาน', icon: UserIcon, color: 'text-red-600', bg: 'bg-red-50', href: '/report' },
  { label: 'ตารางเวลา', icon: ClockIcon, color: 'text-red-600', bg: 'bg-red-50', href: '/schedule' },
  { label: 'ผู้ดูแล/พี่เลี้ยง', icon: UsersIcon, color: 'text-red-600', bg: 'bg-red-50', href: '/mentors' },
  { label: 'ตั้งค่า', icon: SettingsIcon, color: 'text-red-600', bg: 'bg-red-50', href: '/setting' }
]

const toggleMobileMenu = () => { isMobileMenuOpen.value = !isMobileMenuOpen.value }
const closeMobileMenu = () => { isMobileMenuOpen.value = false }

const handleItemClick = (label) => {
  const item = menuItems.find((i) => i.label === label)
  if (item?.href) router.push(item.href)
  activeItem.value = label
  closeMobileMenu()
}

watch(
  () => route.path,
  (newPath) => {
    const matchedItem = menuItems.find((item) => item.href === newPath)
    activeItem.value = matchedItem ? matchedItem.label : 'หน้าแรก'
  },
  { immediate: true }
)

const mq = window.matchMedia('(min-width: 1024px)')
const handleMQ = (e) => { if (e.matches) closeMobileMenu() }

watch(isMobileMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  firstname.value = localStorage.getItem('firstname') || ''
  lastname.value = localStorage.getItem('lastname') || ''
  studentId.value = localStorage.getItem('studentId') || ''
  mq.addEventListener('change', handleMQ)
})

onBeforeUnmount(() => {
  mq.removeEventListener('change', handleMQ)
  document.body.style.overflow = ''
})
</script>
