<template>
  <transition mode="in-out" name="neon-fade-transition">
    <neon-inline breakpoint="mobile-large" class="neon-loading-state-card" gap="m">
      <neon-inline class="neon-loading-state-card__main-content" gap="s">
        <neon-skeleton-loader :count="1" class="neon-loading-state-card__thumbnail" />
        <neon-skeleton-loader :count="2" class="neon-loading-state-card__main-content-item" />
      </neon-inline>
      <neon-skeleton-loader :count="1" class="neon-loading-state-card__additional-content" />
    </neon-inline>
  </transition>
</template>

<script lang="ts" src="./NeonLoadingStateCard.ts" />
