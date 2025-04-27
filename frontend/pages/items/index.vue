<script setup lang="ts">
import type { IItem, IParams, IItemListResponse } from "~/types";

const isLoading = ref<boolean>(false);
const error = ref<Error | null>(null);

const items = ref<{
  list: IItem[];
  total: number;
  totalPages: number;
}>({
  list: [],
  total: 0,
  totalPages: 0,
});

const params = ref<IParams>({
  page: 1,
  pageSize: 10,
});

async function handleFetchItems() {
  try {
    isLoading.value = true;
    const data: IItemListResponse = await $fetch(
      `http://localhost:5001/items?page=${params.value.page}&pageSize=${params.value.pageSize}`
    );

    items.value.list = data?.data?.items;
    items.value.total = data?.total;
    items.value.totalPages = data?.totalPages;
    params.value.page = data?.page;
    params.value.pageSize = data?.pageSize;
  } catch (err) {
    console.log(err);
    error.value = err instanceof Error ? err : new Error("Unknown error");
  } finally {
    isLoading.value = false;
  }
}

onMounted(handleFetchItems);
</script>

<template>
  <div>
    <Item-Table :data="items.list" :isLoading="isLoading" :error="error" />
  </div>
</template>
