import {defineStore} from "pinia";

interface Book {
    title: string,
    id: string,
    description: string
}

export const useStore = defineStore('book', () => {
    const currentBook = ref(null);
    const getCurrentBook = computed(() => {
        return currentBook;
    });
    function setCurrent(book) {
        currentBook.value = book;
    }

    return { currentBook, getCurrentBook, setCurrent }
})