<template>
  <h1>Hello</h1>
  {{store.count}}
  <ul>
    <li v-for="book in books">
      <NuxtLink :to="bookLink(book)">
        {{book.title}}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {useStore} from "~/store/pinia";
import Book from "../domain/Book";


const { data: books } = await useFetch('http://localhost:8080/books');
const store = useStore();

const bookLink = (book: Book) => {
    return `/book/${book.id}`
};
</script>