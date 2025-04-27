<script setup lang="ts">
import type { IColumn, IItem } from "~/types";

const props = defineProps<{
  data: IItem[];
}>();

const router = useRouter();
const { items } = usePagination(props.data);
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

function navigate(id: string) {
  router.push(`/items/${id}`);
}
</script>

<template>
  <h1>Hello</h1>
  <div>{{ JSON.stringify(items) }}</div>
  <!-- <b-table>
    <b-thead>
      <b-tr>
        <b-th v-for="col in columns" :key="col.id" scope="col">
          {{ col.name }}
        </b-th>
      </b-tr>
    </b-thead>

    <b-tbody>
      <template v-if="!items || items.length === 0"> No items found!</template>
      <template v-else>
        <b-tr
          v-for="item in items"
          :key="item.id"
          @click="navigate(item.id as string)"
        >
          <b-th scope="row"> {{ item.id }} </b-th>
          <b-td>{{ item.title }}</b-td>
        </b-tr>
      </template>
    </b-tbody>
  </b-table> -->
</template>
