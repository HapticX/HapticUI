<script setup>
import HTag from '../vue/HTag.vue'
</script>


# Component: Tag

Tag marking any information, that you write in <code>{{ '<slot />' }}</code>

## Props

| Name | Type                                                   | Default | Description |
|------|--------------------------------------------------------|---------|------------|
| type | <code>'success' &#x7c; 'warning' &#x7c; 'error' </code> | success | Changes the color |

- Code

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 10px; max-width: 200px;">
    <div style="display: flex; gap: 10px;">
      Some info
      <HTag type="success">Success tag</HTag>
    </div>
    <div style="display: flex; gap: 10px;">
      Some info
      <HTag type="warning">Warning tag</HTag>
    </div>
    <div style="display: flex; gap: 10px;">
      Some info
      <HTag type="error">Error tag</HTag>
    </div>
  </div>
</template>
```

- Result
<div style="display: flex; flex-direction: column; gap: 10px; max-width: 200px;">
    <div style="display: flex; gap: 10px;">
      Some info
      <HTag type="success">Success tag</HTag>
    </div>
    <div style="display: flex; gap: 10px;">
      Some info
      <HTag type="warning">Warning tag</HTag>
    </div>
    <div style="display: flex; gap: 10px;">
      Some info
      <HTag type="error">Error tag</HTag>
    </div>
</div>


