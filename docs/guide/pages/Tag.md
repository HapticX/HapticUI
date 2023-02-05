<script setup>
import HTag from '../vue/HTag.vue'
</script>

# Component: Tag

Tag marking any information, that you write in <code>{{ '<slot />' }}</code>

<HTag type="success" style="width: 150px; margin-top:10px;">Finished</HTag>

## Props

| Name | Type                                                    | Default | Description       |
| ---- | ------------------------------------------------------- | ------- | ----------------- |
| type | <code>'success' &#x7c; 'warning' &#x7c; 'error' </code> | success | Changes the color |

- Code

```vue{4,5,8,9,12,13}
<template>
  <div style="display: flex; flex-direction: column; gap: 10px; max-width: 250px;">
    <div style="display: flex; gap: 10px;">
      Success info // [!code focus:2]
      <HTag type="success">Success tag</HTag>
    </div>
    <div style="display: flex; gap: 10px;">
      Warning info // [!code focus:2]
      <HTag type="warning">Warning tag</HTag>
    </div>
    <div style="display: flex; gap: 10px;">
      Error info // [!code focus:2]
      <HTag type="error">Error tag</HTag>
    </div>
  </div>
</template>
```

- Result
<div style="display: flex; flex-direction: column; gap: 10px; max-width: 250px;">
    <div style="display: flex; gap: 10px;">
      Success info
      <HTag type="success">Success tag</HTag>
    </div>
    <div style="display: flex; gap: 10px;">
      Warning info
      <HTag type="warning">Warning tag</HTag>
    </div>
    <div style="display: flex; gap: 10px;">
      Error info
      <HTag type="error">Error tag</HTag>
    </div>
</div>
