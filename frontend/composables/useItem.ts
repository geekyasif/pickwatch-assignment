import type { IItem } from "~/types"

type TUseItemProps = string

export default function useItem(id: TUseItemProps) {
    const isLoading = useState<boolean>("isLoading", () => false)
    const item = useState<IItem>('item', () => ({
        id: 0,
        title: '',
        body: '',
        userId: 0
    }))

    async function handleFetchItem() {
        try {
            isLoading.value = true
            const data: IItem = await $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            item.value = data
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