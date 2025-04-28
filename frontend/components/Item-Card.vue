<script setup lang="ts">
import type { IItem } from "~/types";
const props = defineProps<{
  item: IItem | undefined;
  loading: boolean;
}>();
</script>

<template>
  <b-div>
    <Card v-if="loading" flex align-items="center" justify-items="center">
      <CardBody> <Spinner /></CardBody>
    </Card>
    <Card v-else>
      <CardBody>
        <CardTitle>
          <b-p text-alignment="center">
            {{ props?.item?.title }}
          </b-p></CardTitle
        >
        <CardText>
          {{ props?.item?.description }}
        </CardText>
      </CardBody>
    </Card>
  </b-div>
</template>
