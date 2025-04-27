import type { IItem } from "~/types";

export default function useItems() {
    const items = ref<IItem[]>([]);
    const isLoading = ref<boolean>(false);
    const error = ref<Error | null>(null);
    async function fetchItems() {
        try {
            isLoading.value = true;
            const data = await $fetch<IItem[]>('https://jsonplaceholder.typicode.com/posts');
            items.value = data;
        } catch (err) {
            console.log("Something went wrong!", err);
            error.value = err instanceof Error ? err : new Error("Unknown error");
        } finally {
            isLoading.value = false;
        }
    }

    onMounted(fetchItems);

    return { items, isLoading, error };
}
