<template>
  <div class="neon-page" :class="{ 'neon-page--with-top-nav': withTopNav, 'neon-page--with-side-nav': withSideNav }">
    <div class="neon-page__container">
      <!-- @slot The main page content -->
      <slot name="content"></slot>
    </div>
    <!-- @slot The <strong>NeonTopNav</strong> slot. This slot is required to ensure the correct responsive page layout. -->
    <slot name="top-nav"></slot>
    <!-- @slot The <strong>NeonSideNav</strong> slot. This slot is required to ensure the correct responsive page layout. -->
    <slot name="side-nav"></slot>
  </div>
</template>

<script lang="ts" src="./NeonPage.ts"></script>
