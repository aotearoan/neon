<script lang="ts" setup>
import NeonInput from './NeonInput.vue';

const someValue = 'something';
</script>
<template>
  <neon-input id="inputWrapperId" v-model="someValue" data-testid="neonInputWrapperTestId" />
</template>
