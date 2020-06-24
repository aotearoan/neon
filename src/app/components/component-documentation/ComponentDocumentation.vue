<template>
  <div>
    <api-docs :path="path" :component-name="componentName" :component-title="componentTitle">
      <slot></slot>
    </api-docs>
    <neon-card v-if="examples" class="examples">
      <neon-card-header>
        <h1>{{ examples.length > 1 ? 'Examples' : 'Example' }}</h1>
      </neon-card-header>
      <example v-for="example in examples" :key="example.title" :model="example" />
    </neon-card>
  </div>
</template>

<script lang="ts" src="./ComponentDocumentation.ts"></script>
