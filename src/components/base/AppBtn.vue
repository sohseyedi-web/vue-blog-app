<template>
    <button :class="cn('bg-emerald-500 transition-all duration-300 rounded-2xl text-lg font-semibold hover:bg-green-500 text-white',className)">{{title}}</button>
</template>

<script setup>
import cn from '../../utils/cn';

const {title,className} = defineProps(['title','className'])
</script>
