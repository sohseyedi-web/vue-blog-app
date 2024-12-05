<template>
    <div class="flex items-center justify-center h-[80vh] text-xl font-semibold text-emerald-600" v-if="getItems.length === 0">
        هنوز بلاگی ایجاد نکردید :(
    </div>
    <section v-else>
        <AppSection class="space-y-4" title="جدیدترین بلاگ ها">
            <SwiperCard/>
            <hr class="border-zinc-800 border"/>
        </AppSection>
        <AppSection title="همه بلاگ ها">
            <div class="flex items-center flex-wrap lg:gap-6 gap-3 my-5 text-zinc-100">
                <AppCard v-for="item in sortItems" :key="item.id" :item="item" class="lg:w-[32%] w-full lg:mx-0 mx-auto"/>
            </div>
        </AppSection>
    </section>
</template>

<script setup>
import AppCard from '../components/base/AppCard.vue';
import AppSection from '../components/base/AppSection.vue';
import SwiperCard from '../components/home/SwiperCard.vue';
import useFormStore from '../store/useStore';

const {getItems} = useFormStore()
const sortItems = getItems.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))

</script>
