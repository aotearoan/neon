<template>
  <div v-if="example && example.noCard" class="example--no-card">
    <h3 v-if="example.title">{{ example.title }}</h3>
    <neon-note v-if="example.tip" color="info">
      <span><strong>Tip:</strong>{{ ` ${example.tip}` }}</span>
    </neon-note>
    <br v-if="example.tip" />
    <div class="example__output">
      <v-runtime-template :template="example.template" :template-props="example.data || {}" />
    </div>
    <div class="example__code">
      <editor v-if="example.template" v-model="example.template" />
    </div>
  </div>
  <div v-else class="neon-card neon-card--vertical neon-card--m neon-card--horizontal-breakpoint-mobile-l">
    <div v-if="example.title" class="neon-card-header example__title">
      <h3>{{ example.title }}</h3>
    </div>
    <div :class="{ 'neon-card-body--fullWidth': example.fixedContent }" class="neon-card-body">
      <div v-if="example.tip" class="neon-note neon-note--info" role="note">
        <div class="neon-note__container">
          <div class="neon-icon neon-icon--info neon-note__icon" v-html="infoIcon"></div>
          <span><strong>Tip:</strong>{{ ` ${example.tip}` }}</span>
        </div>
      </div>
      <br v-if="example.tip" />
      <div :class="{ 'example__output--fixed-content': example.fixedContent }" class="example__output">
        <v-runtime-template :template="example.template" :template-props="example.data || {}" />
      </div>
      <div :class="{ 'example__code--fixed-content': example.fixedContent }" class="example__code">
        <editor v-if="example.template" v-model="example.template" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Example.ts"></script>
