<template>
  <neon-inline class="neon-filter-bar" gap="m">
    <neon-swiper v-if="slots.filters" class="neon-filter-bar__swiper">
      <neon-inline class="neon-filter-bar__filters">
        <!-- @slot container for filters, e.g. search-filter & filter components -->
        <slot name="filters"></slot>
      </neon-inline>
    </neon-swiper>
    <div v-if="slots.sort" class="neon-filter-bar__sort">
      <!-- @slot sort component, e.g. select component -->
      <slot name="sort"></slot>
    </div>
  </neon-inline>
</template>

<script lang="ts" src="./NeonFilterBar.ts"></script>
