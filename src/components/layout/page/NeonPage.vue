<template>
  <div class="neon-page">
    <!-- @slot The <strong>NeonTopNav</strong> slot. This is required to ensure the correct responsive page layout. -->
    <slot name="top-nav"></slot>
    <div class="neon-page__container">
      <!-- @slot The main page content -->
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./NeonPage.ts"></script>
