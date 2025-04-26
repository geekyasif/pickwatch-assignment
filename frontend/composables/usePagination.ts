import type { IItem } from "~/types";

export default function usePagination(items: IItem[]){
    const pagination = ref({
        currentPage: 1,
        pageSize: 10,
      });

    const totalPages = computed(() => {
        return Math.ceil(items.length / pagination.value.pageSize);
      });
      

      const paginatedItems = computed(() => {
        const start = (pagination.value.currentPage - 1) * pagination.value.pageSize;
        const end = start + pagination.value.pageSize;
        return items.slice(start, end);
      });

      function handlePagination(direction: string) {
        if (direction === "next" && pagination.value.currentPage < totalPages.value) {
          pagination.value.currentPage++;
        }
      
        if (direction === "prev" && pagination.value.currentPage > 1) {
          pagination.value.currentPage--;
        }
      }

    return {
        pagination,
        totalPages,
        handlePagination,
        items: paginatedItems
    }
}