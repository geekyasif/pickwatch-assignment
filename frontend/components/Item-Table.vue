<script setup lang="ts">
import type { IColumn } from "~/types";

const { items, loading, error, params } = defineProps<{
  items: IItems;
  loading: boolean;
  error: Error | null;
  params: IParams;
}>();
const emit = defineEmits(["paginate", "delete-item"]);

const router = useRouter();
const columns: IColumn[] = [
  {
    id: 1,
    key: "id",
    name: "Id",
  },
  {
    id: 2,
    key: "title",
    name: "Title",
  },
  {
    id: 3,
    key: "action",
    name: "Action",
  },
];

function handlePagination(direction: string) {
  emit("paginate", direction);
}

function handleDeleteItem(id: number | string) {
  emit("delete-item", id);
}

function navigate(id: number | string) {
  router.push(`/items/${id}`);
}
</script>

<template>
  <b-div>
    <b-table bordered rounded hover>
      <b-thead>
        <b-tr>
          <b-th v-for="col in columns" :key="col.id" scope="col">
            {{ col.name }}
          </b-th>
        </b-tr>
      </b-thead>

      <b-tbody>
        <b-tr v-if="loading">
          <b-td :colspan="columns.length" class="text-center p-5">
            <b-div flex justify-content="center" align-items="center">
              <Spinner />
            </b-div>
          </b-td>
        </b-tr>

        <b-tr v-else-if="error">
          <b-td :colspan="columns.length" class="text-center">
            Something went wrong!
          </b-td>
        </b-tr>

        <b-tr v-else-if="items.list.length === 0">
          <b-td :colspan="columns.length" class="text-center">
            No items found!
          </b-td>
        </b-tr>

        <b-tr v-for="item in items.list" v-else :key="item.id">
          <b-th scope="row">{{ item.id }}</b-th>
          <b-td class="hover" @click="navigate(item.id)">{{ item.title }}</b-td>
          <b-td>
            <BIcon
              class="hover"
              icon="bi:trash"
              margin="2"
              @click="() => handleDeleteItem(item.id)"
          /></b-td>
        </b-tr>
      </b-tbody>
    </b-table>

    <b-div flex justify-content="center">
      <Item-Table-Pagination
        :params="params"
        :totalPages="items.totalPages"
        @paginate="handlePagination"
      />
    </b-div>
  </b-div>
</template>

<style>
.hover {
  cursor: pointer;
}
</style>
