<template>
  <div v-if="example.noCard" class="example--no-card">
    <h3>{{ example.title }}</h3>
    <neon-note v-if="example.tip" color="info">
      <span><strong>Tip:</strong>{{ ` ${example.tip}` }}</span>
    </neon-note>
    <br v-if="example.tip" />
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
    <neon-card-body :full-width="example.fixedContent">
      <neon-note v-if="example.tip" color="info">
        <span><strong>Tip:</strong>{{ ` ${example.tip}` }}</span>
      </neon-note>
      <br v-if="example.tip" />
      <div class="example__output" :class="{ 'example__output--fixed-content': example.fixedContent }">
        <v-runtime-template :template-props="example.data || {}" :template="example.template" />
      </div>
      <div class="example__code" :class="{ 'example__code--fixed-content': example.fixedContent }">
        <editor v-if="example.template" v-model="example.template" />
      </div>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Example.ts"></script>
