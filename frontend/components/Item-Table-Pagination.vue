<script setup lang="ts">
const { handlePagination, params, totalPages } = defineProps<{
  handlePagination: (direction: string) => void;
  params: IParams;
  totalPages: number;
}>();
</script>

<template>
  <nav aria-label="Page navigation example">
    <Pagination>
      <PageItem>
        <PageLink
          :disabled="params.page === 1"
          @click="() => handlePagination('prev')"
          >Previous</PageLink
        >
      </PageItem>
      <PageItem>
        <PageLink>{{ params.page }}</PageLink>
      </PageItem>
      <PageItem>
        <PageLink
          :disabled="params.page === totalPages"
          @click="() => handlePagination('next')"
          >Next</PageLink
        >
      </PageItem>
    </Pagination>
  </nav>
</template>
