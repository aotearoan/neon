<template>
  <neon-card>
    <neon-card-header>
      <h1>{{ title }}</h1>
    </neon-card-header>
    <neon-card-body>
      <div class="example__output">
        <v-runtime-template :template="example" />
      </div>
      <div class="example__code">
        <codemirror v-model="example" :options="options"></codemirror>
      </div>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Example.ts"></script>
