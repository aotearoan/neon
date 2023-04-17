<template>
  <div class="neon-alert__wrapper">
    <neon-alert-container v-model="topLeft" placement="top-left" />
    <neon-alert-container v-model="topRight" placement="top-right" />
    <neon-alert-container v-model="bottomLeft" placement="bottom-left" />
    <neon-alert-container v-model="bottomRight" placement="bottom-right" />
    <neon-toast-container v-model="top" placement="top" />
    <neon-toast-container v-model="bottom" placement="bottom" />
  </div>
</template>

<script lang="ts" src="./NeonAlert.ts"></script>
