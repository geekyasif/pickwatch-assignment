<script setup lang="ts">
import { defineProps } from "vue";
import type { IColumn, IItem } from "~/types";

const props = defineProps<{
  data: IItem[];
}>();

const columns: IColumn[] = [
  {
    id: 1,
    key: "id",
    name: "Id",
    type: "link",
  },
  {
    id: 2,
    key: "title",
    name: "Title",
    type: "text",
  },
];
</script>

<template>
  <b-table>
    <b-thead>
      <b-tr>
        <b-th v-for="col in columns" :key="col.id" scope="col">
          {{ col.name }}
        </b-th>
      </b-tr>
    </b-thead>

    <b-tbody>
      <b-tr v-for="item in props.data" :key="item.id">
        <b-td v-for="col in columns" :key="col.key">
          <template v-if="col.type === 'link'">
            <NuxtLink :to="`/items/${item.id}`">{{
              item[col.key as keyof IItem]
            }}</NuxtLink>
          </template>
          <template v-else>
            {{ item[col.key as keyof IItem] }}
          </template>
        </b-td>
      </b-tr>
    </b-tbody>
  </b-table>
</template>
