<template>
  <div v-if="examples" class="examples">
    <h2 v-if="!(examples[0] && examples[0].noCard)" class="neon-h3">
      {{ examples.length > 1 ? 'Examples' : 'Example' }}
    </h2>
    <div v-for="example in examples" :key="example.title" class="example">
      <example :example="example" />
    </div>
  </div>
</template>

<script lang="ts" src="./Examples.ts"></script>
