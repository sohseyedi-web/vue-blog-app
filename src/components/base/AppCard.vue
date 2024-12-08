<script setup>
import toTimeDifference from '../../utils/toTimeDiff';
import toTruncateText from '../../utils/toTruncateText';
defineProps(['item'])
</script>

<template>
    <router-link :to="{name:'Blog', params:{id : item.id}}" :key="item.id">
        <div class="hover:border-zinc-700 flex flex-col justify-between transition-all duration-300 h-[150px] cursor-pointer w-full text-zinc-100 rounded-2xl bg-[#252525] shadow border-2 border-zinc-800 p-3">
            <div class="flex items-center justify-between">
                <h6>{{ item.title }}</h6>
                <span class="lg:text-base text-sm">{{ toTimeDifference(item.createdAt) }}</span>
            </div>
            <p class="my-4 text-sm opacity-90 break-words leading-6">{{ toTruncateText(item.message,100) }}</p>
            <span class="text-emerald-500 lg:text-base text-sm">نویسنده : {{item.author}}</span>
        </div>
    </router-link>
</template>
