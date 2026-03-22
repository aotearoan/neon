<template>
  <neon-swiper
    v-if="breadcrumbs.length !== 0 || backButton"
    :class="[{ 'neon-breadcrumbs--breadcrumbs-only': !backButton }, `neon-breadcrumbs--responsive-${responsiveStyle}`]"
    class="neon-breadcrumbs"
  >
    <div class="neon-breadcrumbs__container">
      <neon-link v-if="backButton" class="neon-breadcrumbs__back" no-style @click="back()">
        <neon-icon class="neon-breadcrumbs__back-icon" name="arrow-left" />
        <span class="neon-breadcrumbs__back-label">{{ backLabel }}</span>
      </neon-link>
      <div v-if="breadcrumbs.length !== 0" ref="linksRef" class="neon-breadcrumbs__links">
        <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
          <neon-icon v-if="index !== 0" class="neon-breadcrumbs__separator" name="chevron-right" />
          <neon-link v-if="breadcrumb.url" :href="breadcrumb.url" class="neon-breadcrumbs__link" no-style>
            {{ breadcrumb.label }}
          </neon-link>
          <span v-else class="neon-breadcrumbs__link-text">{{ breadcrumb.label }}</span>
        </template>
      </div>
    </div>
  </neon-swiper>
</template>

<script lang="ts" src="./NeonBreadcrumbs.ts" />
