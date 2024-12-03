<script setup lang="ts">
import AppBtn from '../base/AppBtn.vue';
</script>

<template>
    <nav class="py-4 border-b-2 border-zinc-800">
        <div class="flex items-center justify-between max-w-7xl lg:px-0 px-4 mx-auto">
            <router-link to="/">
                <h2 class="text-3xl font-semibold text-emerald-500">ویوبلاگ</h2>
            </router-link>
            <router-link to="/create">
                <AppBtn className="bg-emerald-500 hover:bg-green-500 lg:w-[150px] w-[130px] h-[45px]" title="ایجاد بلاگ"/>
            </router-link>
        </div>
    </nav>
</template>