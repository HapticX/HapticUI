<script setup>
import HInput from '../vue/HInput.vue';
import HTag from '../vue/HTag.vue';
</script>

# Component: Input

Input with specific styles, validation and hints.

<HTag type="warning" style="width: 150px; margin-top:10px;">In development</HTag>

## Props

| Name              | Type                 | Default   | Description                                |
| ----------------- | -------------------- | --------- | ------------------------------------------ |
| required          | <code>boolean</code> | false     | Makes the input is required                |
| outlined          | <code>boolean</code> | false     | Changes the input style                    |
| minLength         | <code>number</code>  | undefined | Set minimum length of symbols in the input |
| maxLength         | <code>number</code>  | undefined | Set maximum length of symbols in the input |
| inputType         | <code>String</code>  | "text"    | Set the type of input                      |
| validationPattern | <code>RegExp</code>  | undefined | Set the validation pattern in RegExp       |

- Code

```vue{4-20}
<template>
  <div class="flex flex-col items-center">
    <div class="p-5 flex flex-col gap-2 bg-black bg-opacity-10 rounded-md">
      <p class="text-xl text-center">Form</p> // [!code focus:17]
      <HInput
        :min-length="2"
        :max-length="8"
        :validation-pattern="/^([a-z][a-z_]*|)$/i"
        required
        outlined
        >Login</HInput
      >
      <HInput
        :min-length="3"
        :max-length="8"
        :input-type="'password'"
        :outlined="false"
        required
        >Password</HInput
      >
    </div>
  </div>
</template>
```

- Result

<div class="flex flex-col items-center">
    <div class="p-5 flex flex-col gap-2 bg-black bg-opacity-10 rounded-md">
        <p class="text-xl text-center">Form</p>
        <HInput :min-length="2" :max-length="8" :validation-pattern="/^([a-z][a-z_]*|)$/i" required outlined>Login</HInput>
        <HInput :input-type="'password'" :min-length="3" :max-length="8" :outlined="false" required>Password</HInput>
    </div>
</div>
