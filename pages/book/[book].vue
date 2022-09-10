<template>
 <h1>
   {{ book.title }}
 </h1>
  <p>
    {{ book.description }}
  </p>
</template>

<script setup lang="ts">
  import {useStore} from "~/store/pinia";
  import Book from "~/domain/Book";

  const route = useRoute();
  const store = useStore();
  const id = route.params.book;
  const {data: book} = await useFetch(`http://localhost:8080/book/${id}`) ;
  store.setCurrent(book.value);

</script>

<style scoped>

</style>