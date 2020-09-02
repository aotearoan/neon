<template>
  <div v-if="examples" class="examples">
    <h2 :class="{ 'examples__title--no-card': examples[0].noCard }">
      {{ examples.length > 1 ? 'Examples' : 'Example' }}
    </h2>
    <div v-for="example in examples" :key="example.title" class="example" :full-width="example.fullWidth">
      <example :example="example" />
    </div>
  </div>
</template>

<script lang="ts" src="./Examples.ts"></script>
