<script lang="ts" setup>
import NeonNumber from './NeonNumber.vue';

const someValue = 123;
</script>
<template>
  <neon-number id="numberWrapperId" v-model="someValue" data-testid="numberWrapperTestId" />
</template>
