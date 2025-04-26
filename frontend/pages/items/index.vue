<script setup lang="ts">
const { items, isLoading, error } = useItems(); // Destructure to use in the template
</script>

<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">{{ error.message }}</div>
    <div v-else>
      <BTable :data="items" />
    </div>
  </div>
</template>
