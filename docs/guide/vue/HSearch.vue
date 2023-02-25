<template>
  <div class="relative w-fit">
    <input type="text" class="bg-black w-full" v-model="text" @input="find(text)" />
    <div class="absolute top-2 left-0 w-full h-0  ">
      <transition-group name="search" tag="p">
        <span v-for="(value, index) in result" :key="index" class="flex flex-col text-center bg-white bg-opacity-10 text-sm px-2 py-1 w-full">
          {{ value }}
        </span>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type {Ref} from 'vue'

const {items = []} = defineProps<{
  items: any[],
}>();


const result: Ref<any> = ref([]);
const text: Ref<string> = ref("");

console.log(items)

function find(input) {
  // check, if input is empty
  if (text.value !== "") {
    result.value = items.filter(
      (el) => el.name.toLowerCase().indexOf(input.toLowerCase()) !== -1
    );
  } else {
    result.value = items;
  }
}
</script>

<style>
.search-move,
.search-enter-active,
.search-leave-active {
  transition: all 200ms ease-out;
}

.search-enter-from,
.search-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
