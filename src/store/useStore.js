import { defineStore } from 'pinia';

const useFormStore = defineStore('formStore', {
    state: () => ({
        items: JSON.parse(localStorage.getItem('items')) || [],
    }),

    getters: {
        getItems: (state) => state.items,
    },

    actions: {
        addItem(newItem) {
            this.items.push(newItem);
            localStorage.setItem('items', JSON.stringify(this.items));
        },

        updateItem(updatedItem) {
            const index = this.items.findIndex((form) => form.id === updatedItem.id);
            if (index !== -1) {
                this.items[index] = updatedItem;
                localStorage.setItem('items', JSON.stringify(this.items));
            }
        },

        removeItem(id) {
            this.items = this.items.filter((form) => form.id !== id);
            localStorage.setItem('items', JSON.stringify(this.items));
        },
    },
});

export default useFormStore;
