<template>
  <div class="flex flex-col w-full h-full p-4 gap-4">
    <PrettyButton>Hello!</PrettyButton>
    <PrettyButton :flat="true" @click="popupShown = true">
      show popup
    </PrettyButton>
    <PrettyButton :flat="true" @click="popupAbsShown = true">
      show absolute popup
    </PrettyButton>
    <PrettyButton :flat="true" @click="popupAbsCenterShown = true">
      show absolute centered popup
    </PrettyButton>

    <PrettyCheckBox>Check box</PrettyCheckBox>

    <PrettyPopup ref="popup" v-model:shown="popupShown">
      <PrettyButton @click="popupShown = false">
        Hide popup
      </PrettyButton>
    </PrettyPopup>

    <PrettyPopup ref="popup_abs" v-model:shown="popupAbsShown" absolute-position>
      <PrettyButton @click="popupAbsShown = false">
        Hide absolute popup
      </PrettyButton>
    </PrettyPopup>

    <PrettyPopup ref="popup_abs_center" v-model:shown="popupAbsCenterShown" absolute-position absolute-center>
      <div class="flex flex-col items-center gap-2 rounded-md bg-neutral-700 p-8">
        <div class="text-5xl">
          Popup dialog
        </div>
        <PrettyButton @click="popupAbsCenterShown = false">
          Hide absolute center popup
        </PrettyButton>
      </div>
    </PrettyPopup>

    <PrettySpinner :items="['Apple', 'Kiwi', 'Melon']">
      Fruits
    </PrettySpinner>

    <PrettySpinner :flat="true" :items="['Apple', 'Kiwi', 'Melon']">
      Fruits
    </PrettySpinner>

    <PrettyInputField>
      text
    </PrettyInputField>

    <PrettyInputField :min-length="6" :outlined="true" :input-type="'password'">
      password
    </PrettyInputField>

    <PrettyInputField :validation-pattern="/^([a-z][a-z_]*|)$/i" :outlined="true" :required="true">
      Variable name
    </PrettyInputField>
  </div>
</template>

<script setup lang="ts">
import PrettyButton from "../components/ui/prettyButton.vue";
import PrettyPopup from "../components/ui/prettyPopup.vue";
import PrettyCheckBox from "../components/ui/prettyCheckBox.vue";
import PrettySpinner from "../components/ui/prettySpinner.vue";
import PrettyInputField from "../components/ui/prettyInputField.vue";
import {ref} from "vue";

const popupShown = ref(false);
const popupAbsShown = ref(false);
const popupAbsCenterShown = ref(false);

</script>
