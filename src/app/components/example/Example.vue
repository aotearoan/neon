<template>
  <neon-card-body class="example">
    <h3 v-if="model.title">{{ model.title }}</h3>
    <div class="example__output">
      <v-runtime-template :template-props="model.data || {}" :template="model.template" />
    </div>
    <div class="example__code">
      <codemirror v-model="model.template" :options="options"></codemirror>
    </div>
  </neon-card-body>
</template>

<script lang="ts" src="./Example.ts"></script>
