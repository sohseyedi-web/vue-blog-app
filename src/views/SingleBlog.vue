<template>
    <div class="flex items-center justify-between mb-8" :key="item.id">
        <div class="flex items-center gap-x-4">
            <img src="/defaultUser.png" alt="" class="lg:size-14 size-12 rounded-xl object-cover">
            <div class="text-zinc-100">
                <h6 class="lg:text-xl text-lg font-semibold mb-2">{{ item.author }}</h6>
                <span class="lg:text-base text-sm">{{ toTimeDifference(item.createdAt) }}</span>
            </div>
        </div>
        <div class="flex items-center gap-x-2">
            <Icon icon="heroicons-outline:share" class="size-8 text-emerald-500 cursor-pointer" />
            <Icon icon="mage:bookmark" class="size-8 text-emerald-500 cursor-pointer" />
        </div>
    </div>
    <div class="text-zinc-100">
        <h3 class="text-2xl font-bold mb-5">{{item.title}}</h3>
        <p class="text-lg leading-9">{{item.message}}</p>
        <div  class="mt-5 flex items-center gap-x-3 text-emerald-500 font-semibold">
            <span v-for="tag in item.tags" :key="tag">#{{ tag }}</span>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router'
import useFormStore from '../store/useStore';
import toTimeDifference from '../utils/toTimeDiff';

const route = useRoute()
const {id} = route.params


const {getItems} = useFormStore()
const item = getItems.find((it) => it.id === id)

</script>
