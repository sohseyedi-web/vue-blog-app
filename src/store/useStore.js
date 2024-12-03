import { ref } from 'vue'
import { defineStore } from 'pinia'

const useFormstore = defineStore('formStore', {
    state: () => ({
        items: ref([])
    }),

    getters: {
        getItems: (state) => state.items
    },

    actions: {
        addItem(newItem) {
            state.items.push(newItem)
            localStorage.setItem('items', JSON.stringify(state.items))
        },

        updateItem(updatedItem) {
            const index = state.items.findIndex((form) => form.id === updatedItem.id)
            if (index !== -1) {
                state.items[index] = updatedItem
                localStorage.setItem('items', JSON.stringify(state.items))
            }
        },

        removeItem(id) {
            state.items = state.items.filter((form) => form.id !== id)
            localStorage.setItem('items', JSON.stringify(state.items))
        }
    }
})

export default useFormstore