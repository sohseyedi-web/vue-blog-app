<template>
    <section class="w-full my-5">
        <h5 class="text-xl font-bold text-emerald-500">{{title}}</h5>
        <slot/>
    </section>
</template>
<script setup lang="ts">
    defineProps<{
        title:string
    }>()
</script>
