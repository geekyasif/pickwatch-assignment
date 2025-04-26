<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
const { isLoading, item } = useItem(id as string);
</script>

<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <p>{{ item.title }}</p>
      <p>{{ item.body }}</p>
    </div>
  </div>
</template>
;
