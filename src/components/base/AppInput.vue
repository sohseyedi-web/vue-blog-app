<template>
    <div className="w-full">
        <label :for="fieldName" class="cursor-pointer block mb-2 text-right text-lg text-zinc-100 font-semibold">
          {{ label }}
        </label>
        <input
          :id="fieldName"
          :name="fieldName"
          v-if="!long"
          autoComplete="off"
          class="bg-[#141414] px-2 placeholder:text-[#777] rounded-2xl border-none outline-none focus:bg-[#16161a] text-zinc-100 font-medium w-full h-[55px] transition-all duration-300"
          :type="type"
          :placeholder="placeHolder"
        />
        <textarea 
          :id="fieldName"
          :name="fieldName"
          v-else 
          autoComplete="off"
          class="bg-[#141414] resize-none p-2 py-4 placeholder:text-[#777] rounded-2xl border-none outline-none focus:bg-[#16161a] text-zinc-100 font-medium w-full h-[145px] transition-all duration-300"
          :type="type"
          :placeholder="placeHolder"
        />
        <p v-if="errors" class="text-red-600 text-right text-xs mt-2 mr-2 font-semibold">{{ errors }}</p>
      </div>
</template>

<script setup>
    
  const {fieldName} = defineProps(['placeHolder','type','label','long','fieldName'])

</script>
