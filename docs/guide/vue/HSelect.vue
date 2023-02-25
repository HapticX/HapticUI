<template>
  <div class="flex flex-col gap-1">
    <div
        @click="shown = true"
        :class="`w-fit tracking-widest lowercase select-none cursor-pointer px-4 py-1 rounded-full ${flat ? 'bg-none' : 'bg-green-200 text-black'} hover:text-black active:text-black hover:bg-green-300 active:bg-green-400 transition-all duration-300`"
    >
      <slot />
    </div>
    <HPopup ref="itemsPopup" v-model:shown="shown">
      <div class="flex flex-col bg-neutral-600 rounded-md">
        <div
            v-for="(item, index) in items"
            :key="index"
            class="text-center select-none cursor-pointer px-8 py-1 hover:bg-neutral-700 active:bg-neutral-800 transition-colors duration-300"
            @click="(shown = false) && select(index)"
        >
          {{ item }}
        </div>
      </div>
    </HPopup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HPopup from "./HPopup.vue";

const {
  items = () => [],
  flat = false
} = defineProps<{
  items?: string[],
  flat?: boolean
}>();

const emits = defineEmits<{
  (e: 'onSelect', item: string, index: number): boolean
}>();

const selected = ref(0);
const shown = ref(false);

function select(index: number) {
  selected.value = index;
  emits('onSelect', items[index], index);
}
</script>