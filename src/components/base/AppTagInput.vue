<script setup>
import { inject, ref } from 'vue'
import { TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot } from 'radix-vue'
import { Icon } from '@iconify/vue'

defineProps(['label',"fieldName","error"])
const model = defineModel()
const tagValues = ref([])
model.value = tagValues
const isSubmitted = inject("isSubmitted",false)
</script>

<template>
  <div class="w-full">
    <label :for="fieldName" class="cursor-pointer mb-2 block text-right text-lg text-zinc-100 font-semibold">
    {{ label }}
  </label>
  <TagsInputRoot
    dir="rtl"
    v-model="tagValues"
    class="flex items-center text-right bg-[#141414] px-2 placeholder:text-[#777] rounded-2xl text-zinc-100 font-medium h-[55px] transition-all duration-300"
  >
    <TagsInputItem
      v-for="item in tagValues"
      :key="item"
      :value="item"
      class="text-white flex ml-2 items-center p-2 rounded-2xl bg-emerald-500 justify-center gap-2"
    >
    <TagsInputItemDelete class="p-0.5 rounded-2xl  hover:bg-black">
        <Icon icon="lucide:x" />
    </TagsInputItemDelete>
    <TagsInputItemText class="text-sm pr-1" />
    </TagsInputItem>

    <TagsInputInput
      placeholder="هشتگ بلاگ"
      class="text-sm bg-transparent w-full h-full  outline-none flex-1 rounded-2xl"
    />
  </TagsInputRoot>
  <p v-if="error && isSubmitted" class="text-red-600 text-right text-xs mt-2 mr-2 font-semibold">
      {{ error }}
  </p>
  </div>
</template>
