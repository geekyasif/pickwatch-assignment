<script setup lang="ts">
import type { IColumn } from "~/types";

const { items, loading, error, params, handlePagination } = defineProps<{
  items: IItems;
  loading: boolean;
  error: Error | null;
  params: IParams;
  handlePagination: (direction: string) => void;
}>();

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
];

function navigate(id: number | string) {
  console.log(id);
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

        <b-tr
          v-for="item in items.list"
          v-else
          :key="item.id"
          @click="navigate(item.id)"
        >
          <b-th scope="row">{{ item.id }}</b-th>
          <b-td>{{ item.title }}</b-td>
        </b-tr>
      </b-tbody>
    </b-table>

    <b-div flex justify-content="center">
      <Item-Table-Pagination
        :params="params"
        :handlePagination="handlePagination"
        :totalPages="items.totalPages"
      />
    </b-div>
  </b-div>
</template>
