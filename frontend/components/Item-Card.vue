<script setup lang="ts">
const props = defineProps<{
  item: IItem;
  loading: boolean;
}>();
</script>

<template>
  <Card>
    <template v-if="loading"><Page-Loader /></template>
    <template v-else>
      <CardBody>
        <CardTitle>{{ props.item.title }}</CardTitle>
        <CardText>
          {{ props.item.description }}
        </CardText>
      </CardBody>
    </template>
  </Card>
</template>
