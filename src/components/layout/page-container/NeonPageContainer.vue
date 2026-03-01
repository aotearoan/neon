<template>
  <div
    :class="{
      'neon-page-container--hide-nav': hideNav,
      'neon-page-container--with-sticky-buttons': stickyButtons,
    }"
    class="neon-page-container"
  >
    <h1 v-if="title" class="neon-page-container__title">{{ title }}</h1>
    <!-- @slot the page contents -->
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts" src="./NeonPageContainer.ts" />
