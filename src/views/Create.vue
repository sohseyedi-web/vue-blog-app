<template>
    <form @submit.prevent="handleSubmit" class="lg:max-w-2xl w-[95%] mx-auto rounded-2xl space-y-6 bg-[#252525] shadow border-2 border-zinc-800 p-4">
        <h3 class="text-xl mb-3 font-semibold text-emerald-500">ایجاد بلاگ جدید</h3>
        <div class="flex gap-3 lg:flex-row flex-col">
            <AppInput v-model="formData.title" label="عنوان" place-holder="طبیعت ایران چگونه است؟" fieldName="title"/>
            <AppInput v-model="formData.subject" label="موضوع" place-holder="جغرافیا/هنر/ورزش" fieldName="subject"/>
        </div>
        <AppInput v-model="formData.author" label="نویسنده" place-holder="سهیل سیدی" fieldName="author"/>
        <AppInput v-model="formData.message" label="متن بلاگ" fieldName="message" place-holder="برای ایجاد یک بلاگ میتوان ..." :long="true"/>
        <AppBtn title="ثبت بلاگ" className="bg-emerald-700 hover:bg-green-700 w-full h-[55px]"/>
    </form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import AppBtn from '../components/base/AppBtn.vue';
import AppInput from '../components/base/AppInput.vue';
import { formData } from '../constant/initialFormValues';
import useFormstore from '../store/useStore';
import { useToast } from "vue-toastification";
import { v4 as uuidv4 } from 'uuid';

const {addItem} = useFormstore()
const router = useRouter()
const toast = useToast();

const handleSubmit = () => {
    const newItem = {id: uuidv4(),...formData,createdAt:new Date().toISOString()}
    console.log(newItem)
    addItem(newItem)
    toast.success("بلاگ ثبت شد")
    setTimeout(() => {
        router.push("/")
    },2000)
}
</script>