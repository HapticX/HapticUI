<template>
  <div :class="`tag ${type}`"><slot /></div>
</template>

<script setup lang="ts">
const { type = "success" } = defineProps<{
  type?: string;
}>();
</script>

<style>
.tag {
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-align: center;

  padding-left: 10px;
  padding-right: 10px;
  padding-top: 1px;
  padding-bottom: 1px;
  border-radius: 5px;

  cursor: default;
  user-select: none;
  transition: all 100ms ease-out;
}

.success {
  border: rgb(122, 249, 133) solid 1px;
  background-color: rgba(122, 249, 133, 0.1);
}

.warning {
  background-color: rgb(249, 232, 122, 0.1);
  border: rgb(249, 232, 122) solid 1px;
}

.error {
  background-color: rgb(249, 122, 122, 0.1);
  border: rgb(249, 122, 122) solid 1px;
}

.success:hover {
  border: rgb(122, 249, 133) solid 1px;
  background-color: rgba(122, 249, 133, 0.3);
}

.warning:hover {
  background-color: rgb(249, 232, 122, 0.3);
  border: rgb(249, 232, 122) solid 1px;
}

.error:hover {
  background-color: rgb(249, 122, 122, 0.3);
  border: rgb(249, 122, 122) solid 1px;
}
</style>
