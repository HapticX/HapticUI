<template>
  <div
    class="flex cursor-text relative w-fit h-fit group"
    @click="this.$refs.inputField.focus()"
  >
    <input
      ref="inputField"
      required
      :type="inputType"
      v-model="text"
      @input="(ev) => handleInput(ev)"
      :class="`peer outline-0 ${
        outlined
          ? 'bg-transparent border-2 border-neutral-700 group-focus-within:border-neutral-600 peer-valid:border-neutral-600 duration-300 transition-all'
          : 'border-0 bg-gradient-to-tl from-neutral-700 to-neutral-600'
      } px-8 py-1 rounded-full`"
    />
    <p v-show="required" class="text-red-500 select-none text-lg">*</p>
    <!--  Placeholder  -->
    <label
      class="flex tracking-widest opacity-50 peer group-focus-within:opacity-100 items-center absolute w-full h-full top-0 left-0 px-8 py-1 text-lg group-focus-within:text-sm group-focus-within:-mt-4 transition-all peer-valid:-mt-4 peer-valid:text-sm peer-valid:opacity-100 select-none"
    >
      <slot />
    </label>
    <!--  Error text  -->
    <p
      :class="`flex tracking-widest text-red-500 items-center select-none
               absolute w-full h-full top-0 ${errorVisible ? '' : 'opacity-0'}
               left-0 px-8 py-1 ${
                 outlined ? 'mt-6' : 'mt-5'
               } text-sm transition-all duration-300`"
    >
      {{ errorText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const {
  required = false,
  outlined = false,
  minLength = undefined,
  maxLength = undefined,
  inputType = "text",
  validationPattern = undefined,
} = defineProps<{
  outlined?: boolean;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  inputType?: string;
  validationPattern?: RegExp;
}>();

let errorVisible = ref(true);
let errorText = ref("");
let text = ref("");

/**
 * Returns input's text
 */
function getText() {
  return text.value;
}
/**
 * Sets a new text
 */
function setText(newText: string) {
  text.value = newText;
}
/**
 * Hides current error
 */
function hideError() {
  errorVisible.value = false;
}
/**
 * Shows error with specified text
 * @param error error text
 */
function showError(error: string) {
  errorVisible.value = true;
  errorText.value = error;
}

/**
 * Handles input and checks for errors
 */
function handleInput(_: InputEvent) {
  hideError();
  if (minLength && text.value.length < minLength) {
    showError(`minimum ${minLength} chars!`);
  } else if (maxLength && text.value.length > maxLength) {
    showError(`maximum ${maxLength} chars!`);
  } else if (validationPattern && !validationPattern.test(text.value)) {
    showError(`not valid!`);
  }
  if (required && text.value.length === 0) {
    showError(`field is required!`);
  }
}
</script>
