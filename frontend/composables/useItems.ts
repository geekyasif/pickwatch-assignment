import type { IItemListResponse, IItems, IParams } from "~/types";

export default function useItems() {

    const isLoading = ref<boolean>(false);
    const error = ref<Error | null>(null);

    const items = ref<IItems>({
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
            items.value.total = Number(data?.data?.total);
            items.value.totalPages = Number(data?.data?.totalPages);
            params.value.page = Number(data?.data?.page);
            params.value.pageSize = Number(data?.data?.pageSize);
        } catch (err) {
            console.log(err);
            error.value = err instanceof Error ? err : new Error("Unknown error");
        } finally {
            isLoading.value = false;
        }
    }

    function handlePagination(direction: string) {
        if (direction === "next" && Number(params.value.page) <= Number(items.value.totalPages)) {
            params.value.page++;
        }

        if (direction === "prev" && params.value.page > 1) {
            params.value.page--;
        }
    }
    async function handleDeleteItem(id: string | number) {
        try {
            console.log(id)
            handleFetchItems()
        } catch (error) {
            console.log(error)
        }
    }

    watch(params, () => {
        handleFetchItems();
    }, { deep: true, immediate: true });

    return {
        items,
        isLoading,
        error,
        params,
        handlePagination,
        handleFetchItems,
        handleDeleteItem
    };
}
