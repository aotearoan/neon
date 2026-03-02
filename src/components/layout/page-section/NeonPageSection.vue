<template>
  <section class="neon-page-section">
    <h2 class="neon-h3 neon-page-section__title">{{ title }}</h2>
    <div class="neon-page-section__content">
      <!-- @slot the content to render in the page section -->
      <slot name="default" />
    </div>
    <hr />
  </section>
</template>

<script lang="ts" src="./NeonPageSection.ts"></script>
