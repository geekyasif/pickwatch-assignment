<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import type { IItem, IItemResponse } from "~/types";

const route = useRoute();
const isLoading = ref<boolean>(false);
const item = ref<IItem | undefined>();

async function handleFetchItem() {
  try {
    isLoading.value = true;
    const data: IItemResponse = await $fetch(
      `http://localhost:5001/items/${route.params.id}`
    );
    item.value = data?.data?.item;
  } catch (error) {
    console.log("Something went wrong!", error);
  } finally {
    isLoading.value = false;
  }
}

watch(
  () => route.params.id,
  () => {
    handleFetchItem();
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <Item-Card :item="item" :loading="isLoading" />
  </div>
</template>
;
