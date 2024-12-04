<template>
    <Swiper
    :modules="[Autoplay]"
    :slides-per-view="3"
    :space-between="20"
    :breakpoints="breakpoints"
    :loop="true"
    :autoplay="autoplayConfig"
  >
    <SwiperSlide v-for="item in sortItems" :key="item.id">
        <AppCard :item="item"/>
    </SwiperSlide>
    </Swiper>
</template>
<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay } from 'swiper/modules';
  import useFormStore from '../../store/useStore';
  import AppCard from '../base/AppCard.vue';

  const {getItems} = useFormStore()
  const sortItems = getItems.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0,4)
  
  
  const breakpoints = {
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  };
  
  const autoplayConfig = {
    delay: 3000,
    disableOnInteraction: false,
  };
</script>