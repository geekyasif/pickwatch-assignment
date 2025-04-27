<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
const isLoading = ref<boolean>(false);
const item = ref<IItem>();

async function handleFetchItem() {
  try {
    isLoading.value = true;
    const data: IItemResponse = await $fetch(
      `http://localhost:5001/items/${id}`
    );
    console.log(data?.data);
    item.value = data?.data?.item;
  } catch (error) {
    console.log("Something went wrong!", error);
  } finally {
    isLoading.value = false;
  }
}
console.log({ item: item.value, isLoading: isLoading.value });
onMounted(handleFetchItem);
</script>

<template>
  <div>
    {{ id }}
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <p>{{ item.title }}</p>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>
;
