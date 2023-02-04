<template>
  <div class="w-fit h-fit">
    <button
      v-if="flat"
      class="lowercase tracking-wider px-8 py-1 text-white hover:text-black active:text-black select-none transition-all duration-300 hover:bg-green-300 active:bg-green-400 rounded-full"
    >
      <slot />
    </button>
    <button
      v-else
      class="lowercase tracking-wider px-8 py-1 bg-green-200 text-black select-none transition-all duration-300 hover:bg-green-300 active:bg-green-400 rounded-full"
    >
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
const { flat = false } = defineProps<{
  flat?: boolean
}>();
</script>
