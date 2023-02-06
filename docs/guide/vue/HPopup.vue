<template>
  <div>
    <!--  Background  -->
    <div
      :class="`top-0 left-0 absolute w-screen h-screen ${
        shown ? 'bg-black/25' : '-z-10'
      } transition-colors duration-300 select-none`"
      @click="isHovered && $emit('update:shown', false) && (isHovered = false)"
    >
      <!--  Absolute && Center content  -->
      <div
        v-if="shown && absolutePosition && absoluteCenter"
        class="flex w-full h-full justify-center items-center z-50"
      >
        <div
          class="h-fit w-fit"
          @mouseover="isHovered = false"
          @mouseout="isHovered = true"
        >
          <slot />
        </div>
      </div>
      <!--  Absolute content  -->
      <div
        v-else-if="shown && absolutePosition"
        class="flex w-full h-full z-50"
      >
        <div
          class="h-fit w-fit"
          @mouseover="isHovered = false"
          @mouseout="isHovered = true"
        >
          <slot />
        </div>
      </div>
    </div>
    <!--  Content  -->
    <div
      v-show="shown && !absolutePosition"
      :class="`z-10 absolute transition-all duration-700`"
      @mouseover="isHovered = false"
      @mouseout="isHovered = true"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const {
  absolutePosition = false,
  absoluteCenter = false,
  shown = false,
} = defineProps<{
  absolutePosition?: boolean;
  absoluteCenter?: boolean;
  shown?: boolean;
}>();

defineEmits<{
  (e: "update:shown", val: boolean): void;
}>();

const isHovered = ref(false);
</script>
