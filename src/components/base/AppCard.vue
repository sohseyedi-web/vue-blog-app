<script setup>
import toTimeDifference from '../../utils/toTimeDiff';
defineProps(['item'])
</script>

<template>
    <div :key="item.id" class="hover:border-zinc-700 transition-all duration-300 cursor-pointer w-full text-zinc-100 rounded-2xl bg-[#252525] shadow border-2 border-zinc-800 p-3">
        <div class="flex items-center justify-between">
            <h6>{{ item.title }}</h6>
            <span>{{ toTimeDifference(item.createdAt) }}</span>
        </div>
        <p class="my-4 text-sm opacity-90">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, ipsa accusamus neque necessitatibus eos suscipit!</p>
        <span class="text-emerald-500">نویسنده : {{item.author}}</span>
    </div>
</template>