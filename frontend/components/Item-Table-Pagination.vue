<script setup lang="ts">
const { params, totalPages } = defineProps<{
  params: IParams;
  totalPages: number;
}>();
const emit = defineEmits(["paginate"]);
</script>

<template>
  <nav aria-label="Page navigation example">
    <Pagination>
      <PageItem>
        <PageLink
          :disabled="params.page === 1"
          @click="() => emit('paginate', 'prev')"
          >Previous</PageLink
        >
      </PageItem>
      <PageItem>
        <PageLink>{{ params.page }}</PageLink>
      </PageItem>
      <PageItem>
        <PageLink
          :disabled="params.page === totalPages"
          @click="() => emit('paginate', 'next')"
          >Next</PageLink
        >
      </PageItem>
    </Pagination>
  </nav>
</template>
