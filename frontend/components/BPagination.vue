<script setup lang="ts">
import type { IItem } from "~/types";

const props = defineProps<{
  data: IItem[];
}>();

const { pagination, totalPages, handlePagination } = usePagination(props.data);
</script>

<template>
  <nav aria-label="Page navigation example">
    <Pagination>
      <PageItem>
        <PageLink
          :disabled="pagination.currentPage === 1"
          @click="handlePagination('prev')"
          >Previous</PageLink
        >
      </PageItem>
      <PageItem>
        <PageLink>{{ pagination.currentPage }}</PageLink>
      </PageItem>
      <PageItem>
        <PageLink
          :disabled="pagination.currentPage === totalPages"
          @click="handlePagination('next')"
          >Next</PageLink
        >
      </PageItem>
    </Pagination>
  </nav>
</template>
