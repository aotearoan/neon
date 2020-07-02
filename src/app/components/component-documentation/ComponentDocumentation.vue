<template>
  <div>
    <api-description v-if="apiModel" :api-model="apiModel" :component-title="componentTitle">
      <slot></slot>
    </api-description>
    <neon-card v-if="examples" class="examples">
      <neon-card-header>
        <h1>{{ examples.length > 1 ? 'Examples' : 'Example' }}</h1>
      </neon-card-header>
      <example v-for="example in examples" :key="example.title" :model="example" />
    </neon-card>
    <api-docs v-if="apiModel" :api-model="apiModel" :path="path" :component-name="componentName">
      <slot></slot>
    </api-docs>
  </div>
</template>

<script lang="ts" src="./ComponentDocumentation.ts"></script>
