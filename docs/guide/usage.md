# Usage

## How to install HapticUI?

First of all, you should to install package into your project, using your favorite package manager.

```shell
npm i hapticUI
```

or

```shell
yarn add hapticUI
```

or

```shell
pnpm add hapticUI
```

## How to use components in my project?

You just need to import UI component into your component and register ...

- Using composition API:

```vue
<script setup>
import HButton from "hapticUI"; // [!code focus]
// ...
</script>
```

- Or using options API:

```vue
<script>
import HButton from "hapticUI"; // [!code focus]

export default {
  // ...
  components: { HButton }, // [!code focus]
  // ...
};
</script>
```

... and you can use it in your template, without importing extra styles or libraries!

```vue
<template>
  <HButton flat>Hello world!</HButton>
</template>
```

<p class="text-center">And here is result!</p>

<div class="flex justify-center">
    <HButton flat>Hello world!</HButton>
</div>

<style>
:root {
  --vp-c-green: #9868BF;
  --vp-c-green-light: #B179DF;
  --vp-c-green-lighter: #CA8AFF;
  --vp-c-green-dark: #7E569F;
  --vp-c-green-darker: #654580;
  --vp-c-green-dimm-1: rgba(152, 104, 191, 0.05);
  --vp-c-green-dimm-2: rgba(152, 104, 191, 0.2);
  --vp-c-green-dimm-3: rgba(152, 104, 191, 0.5);
}
</style>

<script setup>
import HButton from './vue/HButton.vue'
</script>
