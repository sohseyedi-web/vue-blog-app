<template>
    <div className="w-full">
        <label :for="fieldName" class="cursor-pointer block mb-2 text-right text-lg text-zinc-100 font-semibold">
          {{ label }}
        </label>
        <input
          :id="fieldName"
          :name="fieldName"
          v-if="!long"
          :value="modelValue"
          autoComplete="off"
          class="bg-[#141414] px-2 placeholder:text-[#777] rounded-2xl border-none outline-none focus:bg-[#16161a] text-zinc-100 font-medium w-full h-[55px] transition-all duration-300"
          :type="type"
          @input="$emit('update:modelValue', $event.target.value)"
          :placeholder="placeHolder"
        />
        <textarea 
          :id="fieldName"
          :name="fieldName"
          v-else 
          :value="modelValue"
          autoComplete="off"
          class="bg-[#141414] resize-none p-2 py-4 placeholder:text-[#777] rounded-2xl border-none outline-none focus:bg-[#16161a] text-zinc-100 font-medium w-full h-[145px] transition-all duration-300"
          @input="$emit('update:modelValue', $event.target.value)"
          :placeholder="placeHolder"
        />
    </div>
</template>

<script setup>

defineProps(['placeHolder','type','label','long','fieldName',"modelValue"])
</script>
