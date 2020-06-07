<template>
  <neon-card>
    <neon-card-header>
      <h1>{{ title }}</h1>
    </neon-card-header>
    <neon-card-body>
      <div class="example__output">
        <v-runtime-template :template-props="data || {}" :template="template" />
      </div>
      <div class="example__code">
        <codemirror v-model="template" :options="options"></codemirror>
      </div>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Example.ts"></script>
