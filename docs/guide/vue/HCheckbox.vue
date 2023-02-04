<template>
  <div
    class="flex gap-2 place-content-baseline items-center select-none cursor-pointer"
    @click="toggle()"
  >
    <div
      :class="`w-6 h-6 rounded-md border-4 ${
        isChecked ? 'border-green-600' : 'border-green-300'
      } transition-all duration-300 bg-green-300`"
    ></div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let { checked = false } = defineProps<{
  checked?: boolean;
}>();

let emits = defineEmits<{
  (e: "onCheck", value: boolean): void;
}>();

let isChecked = ref(checked);

function toggle() {
  isChecked.value = !isChecked.value;
  emits("onCheck", isChecked.value);
}
</script>
