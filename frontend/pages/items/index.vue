<script setup lang="ts">
const { items, isLoading, error, params, handlePagination, handleDeleteItem } =
  useItems();
</script>

<template>
  <Item-Table
    :items="items"
    :loading="isLoading"
    :error="error"
    :params="params"
    @paginate="handlePagination"
    @delete-item="handleDeleteItem"
  />
</template>
