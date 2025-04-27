import type { IItem, IItemResponse } from "~/types"

type TUseItemProps = string

export default function useItem(id: TUseItemProps) {
    const isLoading = ref<boolean>(false)
    const item = ref<IItem>()

    async function handleFetchItem() {
        try {
            isLoading.value = true
            const data: IItemResponse = await $fetch(`http://localhost:5001/items/${id}`)
            item.value = data?.data?.item
        } catch (error) {
            console.log("Something went wrong!", error)
        } finally {
            isLoading.value = false
        }
    }
    onMounted(() => {
        if (id) {
            handleFetchItem()
        }
    })

    return { item, isLoading }
}