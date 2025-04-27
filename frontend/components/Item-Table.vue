<script setup lang="ts">
import type { IColumn, IItem } from "~/types";

const props = defineProps<{
  data: IItem[];
  loading: boolean;
  error: Error | null;
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
  router.push(`/items/${id}`);
}
</script>

<template>
  <div>
    <b-table>
      <b-thead>
        <b-tr>
          <b-th v-for="col in columns" :key="col.id" scope="col">
            {{ col.name }}
          </b-th>
        </b-tr>
      </b-thead>

      <b-tbody>
        <template v-if="props.loading"> <Page-Loader /></template>
        <template v-else-if="props.error"> Something went wrong!</template>
        <template v-else-if="!props.loading && props.data.length === 0">
          No items found!</template
        >
        <template v-else>
          <b-tr
            v-for="item in props.data"
            :key="item.id"
            @click="navigate(item.id)"
          >
            <b-th scope="row"> {{ item.id }} </b-th>
            <b-td>{{ item.title }}</b-td>
          </b-tr>
        </template>
      </b-tbody>
    </b-table>
    <div>
      <Item-Table-Pagination />
    </div>
  </div>
</template>
