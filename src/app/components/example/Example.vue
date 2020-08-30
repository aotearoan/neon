<template>
  <div>
    <div v-if="example.title" class="example__title">
      <h3>{{ example.title }}</h3>
    </div>
    <div class="example__output">
      <v-runtime-template :template-props="example.data || {}" :template="example.template" />
    </div>
    <div class="example__code">
      <codemirror v-model="example.template" :options="options"></codemirror>
    </div>
  </div>
</template>

<script lang="ts" src="./Example.ts"></script>
