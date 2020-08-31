<template>
  <div class="neon-page">
    <slot name="top-nav"></slot>
    <div class="neon-page__container">
      <!-- @slot the page contents -->
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./NeonPage.ts"></script>
