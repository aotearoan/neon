<template>
  <div v-if="example.noCard" class="example--no-card">
    <h3>{{ example.title }}</h3>
    <div class="example__output">
      <v-runtime-template :template-props="example.data || {}" :template="example.template" />
    </div>
    <div class="example__code">
      <editor v-if="example.template" v-model="example.template" />
    </div>
  </div>
  <neon-card v-else>
    <neon-card-header v-if="example.title" class="example__title">
      <h3>{{ example.title }}</h3>
    </neon-card-header>
    <neon-card-body>
      <div class="example__output">
        <v-runtime-template :template-props="example.data || {}" :template="example.template" />
      </div>
      <div class="example__code">
        <editor v-if="example.template" v-model="example.template" />
      </div>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Example.ts"></script>
