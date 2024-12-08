<template>
    <div className="w-full">
        <label :for="fieldName" class="cursor-pointer block mb-2 text-right text-lg text-zinc-100 font-semibold">
          {{ label }}
        </label>
        <input
          :id="fieldName"
          :name="fieldName"
          v-if="!long"
          v-model="model"
          autoComplete="off"
          class="bg-[#141414] px-2 placeholder:text-[#777] rounded-2xl border-none outline-none focus:bg-[#16161a] text-zinc-100 font-medium w-full h-[55px] transition-all duration-300"
          :type="type"
          @focus="isTouched = true"
          :placeholder="placeHolder"
        />
        <textarea
          :id="fieldName"
          :name="fieldName"
          v-else
          v-model="model"
          autoComplete="off"
          @focus="isTouched = true"
          class="bg-[#141414] resize-none p-2 py-4 placeholder:text-[#777] rounded-2xl border-none outline-none focus:bg-[#16161a] text-zinc-100 font-medium w-full h-[145px] transition-all duration-300"
          :placeholder="placeHolder"
        />
        <p v-if="error && (isTouched || isSubmitted)" class="text-red-600 text-right text-xs mt-2 mr-2 font-semibold">
          {{ error }}
        </p>
    </div>
</template>

<script setup lang="ts">
import type { TextFieldType } from '@/lib/types/AppInputTypes';
import { inject, ref } from 'vue';


const {type = "text"} = defineProps<TextFieldType>()


const model = defineModel<string>()
const isTouched = ref(false)
const isSubmitted = inject('isSubmitted',false)
</script>
