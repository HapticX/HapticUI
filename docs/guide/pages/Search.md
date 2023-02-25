
<script setup>
import HSearch from '../vue/HSearch.vue'
import HTag from '../vue/HTag.vue'

const items = [
  {
    name: "vadim",
    age: 4
  },
  {
    name: "nikita",
    age: 44
  },
  {
    name: "lorem",
    age: 1
  },
  {
    name: "ipsum",
    age: 2
  },
  {
    name: "haptic",
    age: 999
  },
  {
    name: "unknown",
    age: 42
  },
]
</script>

# Component: HSearch

::: danger
Please, add information about this component.
:::

Description

<HTag type="warning" style="width: 150px; margin-top:10px;">In development</HTag>

## Props

| Name | Type        | Default | Description   |
|------|------------------------|---------|--------------------------|
| type | <code>Type here</code> | false   | Here is Description      |

- Code

```vue
<template>
  <HSearch></HSearch>
</template>
```

- Result

<HSearch :items="items" findBy="name"></HSearch>
