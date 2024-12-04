<template>
    <section class="w-full space-y-4 my-5">
        <h5 class="text-xl font-bold text-emerald-500">جدیدترین بلاگ ها</h5>
        <SwiperCard/>
        <hr class="border-zinc-800 border"/>
    </section>
    <section class="w-full my-5">
        <h5 class="text-xl font-bold text-emerald-500">همه بلاگ ها</h5>
        <div class="flex items-center flex-wrap lg:gap-6 gap-3 my-5 text-zinc-100">
            <AppCard v-for="item in sortItems" :key="item.id" :item="item" class="lg:w-[32%] w-[95%] lg:mx-0 mx-auto"/>
        </div>
    </section>
</template>

<script setup>
import AppCard from '../components/base/AppCard.vue';
import SwiperCard from '../components/home/SwiperCard.vue';
import useFormStore from '../store/useStore';

const {getItems} = useFormStore()
const sortItems = getItems.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))

</script>
