<template>
  <neon-stack :class="`neon-empty-state--${type}`" class="neon-empty-state" gap="l">
    <neon-icon v-if="image" :color="imageColor" :name="image" class="neon-empty-state__illustration" />
    <h1 class="neon-empty-state__title">{{ title }}</h1>
    <h2 v-if="subtitle" class="neon-h3 neon-empty-state__subtitle">{{ subtitle }}</h2>
    <div class="neon-empty-state__description">
      <!-- @slot description rendered between the empty state title & any CTAs -->
      <slot name="description"></slot>
    </div>
    <neon-inline v-if="ctas.length > 0" class="neon-empty-state__ctas" gap="m">
      <neon-button
        v-for="(cta, index) in ctas"
        :key="cta.label || cta.icon"
        :button-style="cta.style || (index === ctas.length - 1 ? NeonButtonStyle.Solid : NeonButtonStyle.Outline)"
        :color="
          cta.color || (index === ctas.length - 1 ? NeonFunctionalColor.Primary : NeonFunctionalColor.HighContrast)
        "
        :disabled="!!cta.disabled"
        :href="cta.href"
        :icon="cta.icon"
        :label="cta.label"
        class="neon-empty-state__cta"
        @click="!cta.href && emit('cta-click', index)"
      />
    </neon-inline>
  </neon-stack>
</template>

<script lang="ts" src="./NeonEmptyState.ts" />
