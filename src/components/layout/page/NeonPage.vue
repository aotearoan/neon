<template>
  <div
    :class="[
      {
        'neon-page--with-top-nav': slots['top-nav'],
        'neon-page--with-side-nav': slots['side-nav'],
        'neon-page--with-footer': slots['footer'],
      },
      `neon-page--${pageAlign}`,
    ]"
    class="neon-page"
  >
    <!-- @slot The <strong>NeonTopNav</strong> slot. This slot is required to ensure the correct responsive page layout. -->
    <slot name="top-nav"></slot>
    <!-- @slot The <strong>NeonSideNav</strong> slot. This slot is required to ensure the correct responsive page layout. -->
    <slot name="side-nav"></slot>
    <div class="neon-page__container">
      <!-- @slot The main page content -->
      <slot name="content"></slot>
    </div>
    <!-- @slot The <strong>NeonFooter</strong> slot. This slot is required to ensure the correct responsive page layout. -->
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts" src="./NeonPage.ts"></script>
