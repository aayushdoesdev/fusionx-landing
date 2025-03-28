<template>
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center px-4 bg-black bg-opacity-50 z-50" @click.self="close">
        <div class="p-6 rounded-xl shadow-lg relative max-h-[95vh] bg-gradient-to-b from-[#040810] to-[#021717]" :class="[overflow ? 'overflow-y-auto' : 'overflow-y-auto lg:overflow-y-visible overflow-x-hidden']">

          <!-- <button class="absolute top-6 right-6 pi pi-times text-gray-500 hover:text-gray-700" @click="close">
          </button> -->
          <slot></slot> <!-- Slot for dynamic content -->
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from "vue";
  
  const props = defineProps({
    isOpen: Boolean,
    overflow: {
      type: Boolean,
      default: false
    }, 

  });
  const emit = defineEmits(["close"]);
  
  const close = () => {
    emit("close");
  };
  </script>
  
  <style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  