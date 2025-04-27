<script setup lang="ts">
const { items, isLoading, error, params, handlePagination } = useItems();
</script>

<template>
  <Item-Table
    :items="items"
    :loading="isLoading"
    :error="error"
    :params="params"
    :handlePagination="handlePagination"
  />
</template>
