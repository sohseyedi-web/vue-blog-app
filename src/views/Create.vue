<template>
    <form @submit.prevent="handleSubmit" class="lg:max-w-2xl w-[95%] mx-auto rounded-2xl space-y-6 bg-[#252525] shadow border-2 border-zinc-800 p-4">
        <h3 class="text-xl mb-3 font-semibold text-emerald-500">ایجاد بلاگ جدید</h3>
        <div class="flex gap-3 lg:flex-row flex-col">
            <AppInput
                v-model="values.title"
                label="عنوان"
                :error="errors.title"
                place-holder="طبیعت ایران چگونه است؟"
                fieldName="title"
             />
            <AppInput
                v-model="values.subject"
                label="موضوع"
                :error="errors.subject"
                place-holder="جغرافیا/هنر/ورزش"
                fieldName="subject"
             />
        </div>
        <AppInput
            v-model="formData.author"
            :error="errors.author"
            label="نویسنده"
            place-holder="سهیل سیدی"
            fieldName="author"
        />
        <AppInput
            v-model="formData.message"
            :error="errors.message"
            label="متن بلاگ"
            fieldName="message"
            place-holder="برای ایجاد یک بلاگ میتوان ..."
            :long="true"
        />
        <AppTagInput
            fieldName="#مردم #هنر #دلار"
            label="#هشتگ"
            v-model="formData.tags"
            :error="errors.tags"
        />
        <AppBtn title="ثبت بلاگ" className="bg-emerald-700 hover:bg-green-700 w-full h-[55px]"/>
    </form>
</template>

<script setup>
import { useRouter } from 'vue-router';
import AppBtn from '../components/base/AppBtn.vue';
import AppInput from '../components/base/AppInput.vue';
import { formData } from '../constant/initialFormValues';
import useFormstore from '../store/useStore';
import { useToast } from "vue-toastification";
import { v4 as uuidv4 } from 'uuid';
import useValid, { formSchema } from '../composables/useValid';
import { provide, ref } from 'vue';
import AppTagInput from '../components/base/AppTagInput.vue';

const {addItem} = useFormstore()
const {values,errors,validateForm} = useValid(formData, formSchema)
const router = useRouter()
const toast = useToast();
const isSubmitted = ref(false)

const handleSubmit = () => {
    if(!validateForm()){
        isSubmitted.value = true
    }else{
        const newItem = {id: uuidv4(),...formData,createdAt:new Date().toISOString()}
        console.log(newItem)
        addItem(newItem)
        toast.success("بلاگ ثبت شد")
        setTimeout(() => {
        router.push("/")
        },2000)
    }
}

provide('isSubmitted', isSubmitted)

</script>
