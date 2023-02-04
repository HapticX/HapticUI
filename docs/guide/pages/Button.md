<script setup>
import HButton from '../vue/HButton.vue';
import HTag from '../vue/HTag.vue';
</script>

# Component: Button

Button that support two styles.

<HTag type="warning" style="width: 150px; margin-top:10px;">In progress</HTag>

## Props

| Name | Type                 | Default | Description              |
|------|----------------------|---------|--------------------------|
| type | <code>boolean</code> | false   | Changing style of button |

- Code

```vue
<template>
  <HButton :flat="true">With flat: true</HButton>
  <HButton :flat="false">With flat: false</HButton>
</template>
```

- Result

<div style="display: flex; flex-direction: column; gap: 5px;">
    <HButton :flat="true">With flat</HButton>
    <HButton :flat="false">Without flat</HButton>
</div>