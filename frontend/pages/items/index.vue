<script setup lang="ts">
const { items, isLoading } = useItems();
</script>

<template>
  <div>
    <template v-if="isLoading">Loading...</template>
    <template v-else>
      <BTable :data="items" />
      <BPagination :data="items" />
    </template>
  </div>
</template>
