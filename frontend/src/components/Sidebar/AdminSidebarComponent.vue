<template>
  <div class="min-h-screen">
    <div class="lg:hidden fixed top-4 left-4 z-50">
      <button
        @click="toggleMobileMenu"
        class="p-3 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-slate-200/60 hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <XIcon v-if="isMobileMenuOpen" class="h-6 w-6 text-slate-700" />
        <MenuIcon v-else class="h-6 w-6 text-slate-700" />
      </button>
    </div>

    <div
      v-if="isMobileMenuOpen"
      @click="closeMobileMenu"
      class="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300"
    />

    <div
      :class="[
        'fixed lg:static inset-y-0 left-0 z-40 w-80 sm:w-72 md:w-80 flex flex-col',
        'bg-white/90 backdrop-blur-xl border-r border-slate-200/60',
        'shadow-2xl shadow-slate-200/30 transform transition-all duration-300 ease-out',
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      ]"
    >
      <div class="px-4 sm:px-6 py-6 border-b border-slate-200/40 bg-red-700 relative shrink-0 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800" />
        
        <div class="flex items-center space-x-4 relative z-10">
          <div class="p-3 bg-white/20 rounded-2xl backdrop-blur-md border border-white/30 shadow-lg shrink-0">
            <img src="../../assets/logo/skntc_logo.png" class="w-10">
          </div>
          <div class="min-w-0 flex-1">
            <h1 class="text-xl font-bold text-white leading-tight">
              ระบบทวิภาคี
            </h1>
            <p class="text-red-100 text-sm mt-1 font-medium">วิทยาลัยเทคนิคสมุทรสาคร</p>
          </div>
        </div>
      </div>

      <nav class="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        <div
          v-for="item in menuItems"
          :key="item.label"
          @click="handleItemClick(item.label)"
          :class="[
            'group relative flex items-center px-4 py-4 rounded-2xl cursor-pointer',
            'transition-all duration-300 ease-out focus:outline-none',
            activeItem === item.label
              ? `${item.bg} border-0 shadow-lg transform scale-[1.02] translate-x-1`
              : 'hover:bg-slate-50 hover:shadow-md hover:transform hover:scale-[1.01] hover:translate-x-1'
          ]"
        >
          <div
            v-if="activeItem === item.label"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 w-1.5 h-12 bg-red-600 rounded-r-full"
          />

          <div
            :class="[
              'flex items-center justify-center w-12 h-12 rounded-xl mr-4',
              'transition-all duration-300 shrink-0',
              activeItem === item.label
                ? 'bg-white shadow-lg border border-slate-200'
                : 'bg-slate-100 group-hover:bg-white group-hover:shadow-md group-hover:scale-110'
            ]"
          >
            <component
              :is="item.icon"
              :class="[
                'h-5 w-5 transition-all duration-300',
                activeItem === item.label ? item.color : 'text-slate-600 group-hover:text-slate-800'
              ]"
            />
          </div>

          <span
            :class="[
              'flex-1 font-semibold text-sm leading-relaxed transition-all duration-300 min-w-0',
              activeItem === item.label ? 'text-slate-800' : 'text-slate-700 group-hover:text-slate-900'
            ]"
          >
            {{ item.label }}
          </span>

          <div
            v-if="item.badge"ciobns
            class="flex items-center justify-center min-w-[28px] h-7 px-3 bg-red-600 text-white text-xs font-bold rounded-full border border-red-500 ml-3 shrink-0"
          >
            {{ item.badge }}
          </div>

          <ChevronRightIcon
            v-if="activeItem === item.label"
            class="h-4 w-4 text-slate-500 ml-3 transition-transform duration-300 group-hover:translate-x-1 shrink-0"
          />
        </div>
      </nav>

      <div class="px-4 py-4 border-t border-slate-200/50 bg-slate-50 shrink-0">
        <div class="flex items-center space-x-4 px-4 py-4 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div class="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center shadow-md shrink-0">
            <span class="text-white font-bold text-sm">นศ</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-bold text-slate-800">
              นายพงศกร ทองรักษ์
            </p>
            <p class="text-xs text-slate-600 mt-1 font-medium">
              นักศึกษา
            </p>
          </div>
        </div>
      </div>

      <div class="px-4 pb-4 shrink-0">
        <button
          @click="Logout"
          class="w-full flex items-center px-4 py-4 text-red-600 cursor-pointer hover:text-red-700 hover:bg-red-50 rounded-2xl transition-all duration-300 group focus:outline-none hover:shadow-md hover:scale-[1.02]"
        >
          <LogOutIcon class="h-5 w-5 mr-4 group-hover:transform group-hover:translate-x-1 transition-all duration-300 shrink-0" />
          <span class="font-semibold text-sm">ออกจากระบบ</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import {
  Home as HomeIcon,
  FileText as FileTextIcon,
  Users as UsersIcon,
  Settings as SettingsIcon,
  LogOut as LogOutIcon,
  ChevronRight as ChevronRightIcon,
  Building2 as BuildingIcon,
  Award as AwardIcon,
  Clock as ClockIcon,
  User as UserIcon,
  Menu as MenuIcon,
  Building2 as Building2Icon,
  X as XIcon,
  User2 as User2Icon,
  Plus as PlusIcon
} from 'lucide-vue-next';

import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

const Logout = () => {
  router.push('/');
}

const activeItem = ref('');
const isMobileMenuOpen = ref(false);

const menuItems = [
  {
    label: 'หน้าแรก',
    icon: HomeIcon,
    color: 'text-red-600',
    bg: 'bg-red-50',
    href: '/homeadmin'
  },
  {
    label: 'เพิ่มผู้ใช้',
    icon: PlusIcon,
    color: 'text-red-600',
    bg: 'bg-red-50',
    href: '/adduser'
  },
  {
    label: 'ผู้ใช้',
    icon: UserIcon,
    color: 'text-red-600',
    bg: 'bg-red-50',
    href: '/user'
  },
  {
    label: 'ตารางเวลา',
    icon: ClockIcon,
    color: 'text-red-600',
    bg: 'bg-red-50',
    href: '/schedule'
  },
  {
    label: 'ข้อมูลส่วนตัว',
    icon: UserIcon,
    color: 'text-red-600',
    bg: 'bg-red-50',
    href: '/profile'
  },
  {
    label: 'ตั้งค่า',
    icon: SettingsIcon,
    color: 'text-slate-600',
    bg: 'bg-slate-50',
    href: '/settings'
  }
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
}

const handleItemClick = (label) => {
  const item = menuItems.find((i) => i.label === label);

  if(item?.href) {
    router.push(item.href);
  }

  activeItem.value = label;
  closeMobileMenu();
}

const route = useRoute();

watch(
  () => route.path,
  (newPath) => {
    const matchedItem = menuItems.find(item => item.href === newPath);
    activeItem.value = matchedItem ? matchedItem.label : 'หน้าแรก';
  },
  { immediate: true }
)
</script>