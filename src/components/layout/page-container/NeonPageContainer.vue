<template>
  <div
    :class="{
      'neon-page-container--hide-nav': hideNav,
      'neon-page-container--with-sticky-buttons': stickyButtons,
    }"
    class="neon-page-container"
  >
    <div class="neon-page-container__header">
      <!-- @slot header - override default title for richer content -->
      <slot name="header">
        <h1 v-if="title" class="neon-page-container__title">{{ title }}</h1>
      </slot>
      <!-- @slot header actions -->
      <slot name="actions"></slot>
    </div>
    <!-- @slot the page contents -->
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts" src="./NeonPageContainer.ts" />
