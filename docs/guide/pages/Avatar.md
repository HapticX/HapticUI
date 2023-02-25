
<script setup>
import HAvatar from '../vue/HAvatar.vue'
import HTag from '../vue/HTag.vue'
</script>

# Component: HAvatar

<HTag type="success" style="width: 150px; margin-top:10px;">Finished</HTag>

## Props

| Name  | Type                 | Default   | Description                                                       |
|-------|----------------------|-----------|-------------------------------------------------------------------|
| src   | <code>string</code>  | undefined | Here is link to image                                             |
| size  | <code>number</code>  | 36        | Here is size of image by width and height: <code>h-36 w-36</code> |
| scale | <code>boolean</code> | false     | Scaling element on hover                                          |
| cut   | <code>boolean</code> | false     | Using <code>object-cover</code> class into img (cutting image)    |

- Code

```vue{3}
<template>
  <div class="w-1/2 bg-black bg-opacity-30 flex gap-10 p-2 rounded-lg">
    <HAvatar src="IMAGE.JPG" :scale="true" :cut="true" :size="16" />
    <p>Alexander Loparev</p>
  </div>
</template>
```

- Result

<div class="w-1/2 bg-black bg-opacity-30 flex gap-10 p-2 rounded-lg">
  <HAvatar src="https://sun9-50.userapi.com/impf/c840537/v840537888/45505/FWBH3oSX0NM.jpg?size=2048x1536&quality=96&sign=347e4bc4a5c4c2ef561880be5ee87282&type=album" :cut="true" :scale="true" :size="16" />
  <p>Alexander Loparev</p>
</div>
