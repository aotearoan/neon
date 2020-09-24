<template>
  <div class="neon-alert__wrapper">
    <neon-alert-container placement="top-left" v-model="topLeft" />
    <neon-alert-container placement="top-right" v-model="topRight" />
    <neon-alert-container placement="bottom-left" v-model="bottomLeft" />
    <neon-alert-container placement="bottom-right" v-model="bottomRight" />
  </div>
</template>

<script lang="ts" src="./NeonAlert.ts"></script>
