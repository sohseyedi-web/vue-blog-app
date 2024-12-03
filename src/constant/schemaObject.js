import { z } from "zod";
const TEXT_ERROR = (val) => `وارد کردن ' ${val} ' ضروری است`
const PERSIAN_ERROR = `متن وارد شده "فارسی' نمی‌باشد.`


export const formSchema = z.object({
    title: z.string().min(1, TEXT_ERROR('عنوان')),
    author: z.string().min(1, TEXT_ERROR('نام نویسنده')).regex(/^[\u0600-\u06FF\s]+$/, { message: PERSIAN_ERROR }),
    subject: z.string().min(1, TEXT_ERROR('موضوع')),
    message: z.string().min(1, TEXT_ERROR('متن بلاگ'))
})

